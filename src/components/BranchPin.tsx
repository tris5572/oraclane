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
  /**
   * 選択されているかどうかのフラグ
   */
  isSelected?: boolean;
};

// TODO: 道路の種類に応じて色を変える

const LANE_WIDTH = 40;
const X_SCALE = 0.9;

/**
 * 車線の分岐を表すピン
 */
export function BranchPin({ data, size = 40, isSelected }: Props) {
  return (
    <svg
      height={size}
      viewBox="0 0 100 100"
      transform={`rotate(${data.angle})`}
      style={{ filter: isSelected ? "drop-shadow(0 0 5px hsl(300, 100%, 50%))" : undefined }}
    >
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
      {/* 各レーンの情報。数に応じて横方向に縮小する。右下へのずらし量は目分量 */}
      <g
        transform={`translate(14, 60) scale(${2 < data.lanes.length ? (2 * X_SCALE) / data.lanes.length : X_SCALE}, 1)`}
      >
        {lanesPath(data.lanes)}
      </g>
    </svg>
  );
}

/**
 * サイズの縮小や背景の描画を行っていない、素の状態の車線の SVG 画像を返す
 *
 * ピンを生成する `BranchPin` とは以下のような挙動の大きな違いがあり、
 * 同一の関数とすると条件分岐が複雑になることから、別の関数として定義している。
 *
 * 対象 | ピン | この関数
 * :--: | :--: | :--:
 * 横幅 | 固定 | 可変
 * 内容のサイズ | 縮小 | 固定
 * 車線の配置 | 左右中央・少し下 | 上下左右中央
 */
export function BareBranchLanesSvg({ data, size = 40 }: { data: BranchPoint; size?: number }) {
  const svgWidth = LANE_WIDTH * data.lanes.length + 28;
  return (
    <svg height={size} viewBox={`0 0 ${svgWidth} 100`}>
      <title>{data.label}</title>
      <g transform={"translate(14, 50)"}>{lanesPath(data.lanes)}</g>
    </svg>
  );
}

/**
 * 車線部分のパスを生成する
 */
function lanesPath(lanes: BranchPoint["lanes"]) {
  return (
    <>
      <path d="M0,-25 l0,50" stroke="hsl(0, 0%, 100%)" strokeWidth={4} /> {/* 左端の線 */}
      {lanes.map((lane, index) => (
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
            strokeWidth={index === lanes.length - 1 ? 4 : 2}
          />
        </g>
      ))}
    </>
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
    array.push(<path d="M0,-20 L8,-10 L-8,-10 z" key="T1" />);
    array.push(<path d="M0,-10 l0,30" stroke={color} strokeWidth={4} key="T2" />);

    if (lane.includes("←")) {
      array.push(<path d="M-10,0 L-20,8 L-10,16 z" key="L1" />);
      array.push(<path d="M0,8 l-10,0" stroke={color} strokeWidth={4} key="L2" />);
    }
    if (lane.includes("→")) {
      array.push(<path d="M10,0 L20,8 L10,16 z" key="R1" />);
      array.push(<path d="M0,8 l10,0" stroke={color} strokeWidth={4} key="R2" />);
    }
    if (lane.includes("↖")) {
      array.push(<path d="M-15,-15 L-15,0 L-2,-10 z" key="LT1" />);
      array.push(
        <path d="M-8,-5 L0,10 L0,20" fill="none" stroke={color} strokeWidth={4} key="LT2" />,
      );
    }
    if (lane.includes("↗")) {
      array.push(<path d="M15,-15 L15,0 L2,-10 z" key="RT1" />);
      array.push(
        <path d="M8,-5 L0,10 L0,20" fill="none" stroke={color} strokeWidth={4} key="RT2" />,
      );
    }
  } else {
    // 直進が含まれない場合
    // 斜めがない場合（右左折のみの場合）は、先端近くまで右左折を伸ばす
    if (!lane.includes("↖") && !lane.includes("↗")) {
      if (lane.includes("←")) {
        array.push(<path d="M-10,-20 L-20,-10 L-10,0 z" key="L1" />);
        array.push(
          <path d="M-10,-10 l10,0 l0,30" fill="none" stroke={color} strokeWidth={4} key="L2" />,
        );
      }
      if (lane.includes("→")) {
        array.push(<path d="M10,-20 L20,-10 L10,0 z" key="R1" />);
        array.push(
          <path d="M10,-10 l-10,0 l0,30" fill="none" stroke={color} strokeWidth={4} key="R2" />,
        );
      }
    } else {
      // 斜め
      if (lane.includes("↖")) {
        array.push(<path d="M-15,-20 L-15,-5 L-2,-15 z" key="LT1" />);
        array.push(
          <path d="M-8,-10 L0,0 l0,20" fill="none" stroke={color} strokeWidth={4} key="LT2" />,
        );
      }
      if (lane.includes("↗")) {
        array.push(<path d="M15,-20 L15,-5 L2,-15 z" key="RT1" />);
        array.push(
          <path d="M8,-10 L0,0 l0,20" fill="none" stroke={color} strokeWidth={4} key="RT2" />,
        );
      }

      // 斜めがある場合は、左右は下側
      if (lane.includes("←")) {
        array.push(<path d="M-10,0 L-20,8 L-10,16 z" key="L1" />);
        array.push(<path d="M0,8 l-10,0" stroke={color} strokeWidth={4} key="L2" />);
      }
      if (lane.includes("→")) {
        array.push(<path d="M10,0 L20,8 L10,16 z" key="R1" />);
        array.push(<path d="M0,8 l10,0" stroke={color} strokeWidth={4} key="R2" />);
      }
    }
  }

  // 左右両方への分岐がない場合、空いている方に少しずらす
  const xShift =
    (lane.includes("←") || lane.includes("↖")) && !lane.includes("→") && !lane.includes("↗")
      ? 8
      : (lane.includes("→") || lane.includes("↗")) && !lane.includes("←") && !lane.includes("↖")
        ? -8
        : 0;

  return (
    <g fill={color} transform={`translate(${xShift})`}>
      {array}
    </g>
  );
}
