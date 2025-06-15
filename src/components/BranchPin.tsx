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
      {/* 先端表示 */}
      <path d="M50,2 L55,20 L45,20 z" fill="hsl(300, 100%, 70%)" />
      <g transform="translate(50,50)" fill="red">
        {data.lanes.map((lane, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: 静的データを元にしていてインデックスが変化することはないため問題ない
          <g key={`${lane}-${index}`} transform={`translate(${-10 + index * 20})`}>
            {arrowPath(lane)}
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

  // TODO: 斜めへの分岐を実装する

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
  } else {
    // 直進が含まれない場合
    // 右左折のみの場合（斜めがない場合）は、先端近くまで右左折を伸ばす
    if (!lane.includes("↖") && !lane.includes("↗")) {
      if (lane.includes("←")) {
        array.push(<path d="M-10,-20 L-20,-10 L-10,0 z" />);
        array.push(<path d="M-10,-10 l10,0 l0,30" fill="none" stroke={color} strokeWidth={4} />);
      }
      if (lane.includes("→")) {
        array.push(<path d="M10,-20 L20,-10 L10,0 z" />);
        array.push(<path d="M10,-10 l-10,0 l0,30" fill="none" stroke={color} strokeWidth={4} />);
      }
    }
  }

  return <g fill={color}>{array}</g>;
}
