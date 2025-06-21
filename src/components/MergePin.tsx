import type { MergePoint } from "../types/types";

type Props = {
  /**
   * 車線減少地点のデータ
   */
  data: MergePoint;
  /**
   * 大きさ。省略時は `40`
   */
  size?: number;
  /**
   * 前景だけを描画する（背景を描画しない）フラグ
   */
  onlyFront?: boolean;
};

// TODO: 道路の種類に応じて色を変える

/**
 * 車線減少を表すピン
 */
export function MergePin({ data, size = 40, onlyFront }: Props) {
  return (
    <svg height={size} viewBox="0 0 100 100">
      <title>{data.label}</title>
      <g transform={`rotate(${data.angle}, 50, 50)`}>
        {/* 背景 */}
        {!onlyFront && (
          <>
            <path
              d="M50,2 85,25 L85,80 L75,90 L25,90 L15,80 L15,25 z"
              fill="hsl(58, 100%, 70%)"
              stroke="hsl(58, 50%, 50%)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* 先端表示 */}
            <path d="M50,2 L55,20 L45,20 z" fill="hsl(300, 100%, 70%)" />
          </>
        )}
        {/* 外側線 */}
        <g fill="none" stroke="hsl(0, 0%, 0%)" strokeWidth="4">
          {data.merge === "right" ? (
            <path d="M35,75 L35,55 L48,45 L48,25" />
          ) : (
            <path d="M35,75 L35,25" />
          )}
          {data.merge === "left" ? (
            <path d="M65,75 L65,55 L52,45 L52,25" />
          ) : (
            <path d="M65,75 L65,25" />
          )}
        </g>
        {/* 内側線 */}
        <g fill="none" stroke="hsl(58, 50%, 40%)" strokeWidth="3">
          <path d="M50,75 L50,64" />
          <path d="M50,61 L50,50" />
        </g>
        {/* 複数車線 */}
        {data.multi === true && (
          <g
            fill="none"
            stroke="hsl(58, 50%, 40%)"
            strokeWidth="3"
            transform={`translate(${data.merge === "left" ? -7 : 7})`}
          >
            <path d="M50,75 L50,64" />
            <path d="M50,61 L50,50" />
            <path d="M50,47 L50,36" />
            <path d="M50,33 L50,25" />
          </g>
        )}
        {/* 矢印 */}
        {/* <path
          d="M50,0 L55,10 L52,10 L52,20 L48,20 L48,10 L45,10 z"
          fill="hsl(58, 50%, 50%)"
          stroke="none"
          transform={`translate(${data.merge === "right" ? 6 : -6} 30)`}
        /> */}
      </g>
    </svg>
  );
}
