import type { CSSProperties } from "react";
import type { BranchPoint } from "../types/types";

type Props = {
  /**
   * 車線減少地点のデータ
   */
  data: BranchPoint;
  /**
   * 大きさ。省略時は `40`
   */
  size?: number;
};

const SVG_STYLE: CSSProperties = {
  cursor: "pointer",
};

// TODO: 道路の種類に応じて色を変える

const LANE_WIDTH = 46;
const X_SCALE = 0.8;

/**
 * 車線減少を表すピン
 */
export function BranchPin({ data, size = 40 }: Props) {
  return (
    <svg height={size} viewBox="0 0 100 100" style={SVG_STYLE} transform={`rotate(${data.angle})`}>
      <title>{data.label}</title>
      {/* 背景 */}
      <path
        d="M50,2 L96,30 L96,90 L90,96 L10,96 L4,90 L4,30 z"
        fill="hsl(230, 100%, 60%)"
        stroke="hsl(230, 50%, 50%)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M50,2 L55,20 L45,20 z" fill="hsl(300, 100%, 70%)" /> {/* 先端表示 */}
      {/* 各レーンの情報。数に応じて横方向に縮小する */}
      <g
        transform={`translate(${LANE_WIDTH / 4}, 60) scale(${2 < data.lanes.length ? (2 * X_SCALE) / data.lanes.length : X_SCALE}, 1)`}
      >
        <path d="M0,-25 l0,50" stroke="hsl(0, 0%, 100%)" strokeWidth={4} /> {/* 左端の線 */}
        {data.lanes.map((lane, index) => (
          <g
            // biome-ignore lint/suspicious/noArrayIndexKey: 静的データを元にしていてインデックスが変化することはないため問題ない
            key={`${lane}-${index}`}
            transform={`translate(${LANE_WIDTH / 2 + index * LANE_WIDTH})`}
          >
            {arrowPath(lane)}
            {/* 車線間の線。最後は右端なので太くする */}
            <path
              d={`M${LANE_WIDTH / 2},-25 l0,50`}
              stroke="hsl(0, 0%, 100%)"
              strokeWidth={index === data.lanes.length - 1 ? 4 : 2}
            />{" "}
          </g>
        ))}
      </g>
    </svg>
  );
}

/**
 * 1つの車線の矢印のパスを生成する
 *
 * パスは原点を中心に生成されるため、必要に応じて移動させる。
 */
function arrowPath(lane: string, color = "white") {
  const array = [];

  // 直進が含まれる場合は、直進を中心に左右に伸ばす
  if (lane.includes("↑")) {
    array.push(<path d="M0,-20 L8,-10 L-8,-10 z" />);
    array.push(<path d="M0,-10 l0,30" stroke={color} strokeWidth={4} />);

    if (lane.includes("←")) {
      array.push(<path d="M-10,0 L-20,8 L-10,16 z" />);
      array.push(<path d="M0,8 l-10,0" stroke={color} strokeWidth={4} />);
    }
    if (lane.includes("→")) {
      array.push(<path d="M10,0 L20,8 L10,16 z" />);
      array.push(<path d="M0,8 l10,0" stroke={color} strokeWidth={4} />);
    }
    if (lane.includes("↖")) {
      array.push(<path d="M-15,-15 L-15,0 L-2,-10 z" />);
      array.push(<path d="M-8,-5 L0,10 L0,20" fill="none" stroke={color} strokeWidth={4} />);
    }
    if (lane.includes("↗")) {
      array.push(<path d="M15,-15 L15,0 L2,-10 z" />);
      array.push(<path d="M8,-5 L0,10 L0,20" fill="none" stroke={color} strokeWidth={4} />);
    }
  } else {
    // 直進が含まれない場合
    // 斜めがない場合（右左折のみの場合）は、先端近くまで右左折を伸ばす
    if (!lane.includes("↖") && !lane.includes("↗")) {
      if (lane.includes("←")) {
        array.push(<path d="M-10,-20 L-20,-10 L-10,0 z" />);
        array.push(<path d="M-10,-10 l10,0 l0,30" fill="none" stroke={color} strokeWidth={4} />);
      }
      if (lane.includes("→")) {
        array.push(<path d="M10,-20 L20,-10 L10,0 z" />);
        array.push(<path d="M10,-10 l-10,0 l0,30" fill="none" stroke={color} strokeWidth={4} />);
      }
    } else {
      // 斜め
      if (lane.includes("↖")) {
        array.push(<path d="M-15,-20 L-15,-5 L-2,-15 z" />);
        array.push(<path d="M-8,-10 L0,0 l0,20" fill="none" stroke={color} strokeWidth={4} />);
      }
      if (lane.includes("↗")) {
        array.push(<path d="M15,-20 L15,-5 L2,-15 z" />);
        array.push(<path d="M8,-10 L0,0 l0,20" fill="none" stroke={color} strokeWidth={4} />);
      }

      // 斜めがある場合は、左右は下側
      if (lane.includes("←")) {
        array.push(<path d="M-10,0 L-20,8 L-10,16 z" />);
        array.push(<path d="M0,8 l-10,0" stroke={color} strokeWidth={4} />);
      }
      if (lane.includes("→")) {
        array.push(<path d="M10,0 L20,8 L10,16 z" />);
        array.push(<path d="M0,8 l10,0" stroke={color} strokeWidth={4} />);
      }
    }
  }

  return <g fill={color}>{array}</g>;
}
