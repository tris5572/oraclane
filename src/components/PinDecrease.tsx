import type { CSSProperties } from "react";

type Props = {
  /**
   * 回転角度(deg)。時計回りに回転する。省略時は `0`
   */
  angle?: number;
  /**
   * 大きさ。省略時は `40`
   */
  size?: number;
  /**
   * 減少する車線
   * - `left`: 左車線が減少
   * - `right`: 右車線が減少
   */
  decrease: "left" | "right";
  // TODO: 背景色を変更可能にする
};

const SVG_STYLE: CSSProperties = {
  cursor: "pointer",
};

/**
 * 車線減少を表すピン
 */
export function PinDecrease({ angle = 0, size = 40, decrease }: Props) {
  return (
    <svg height={size} viewBox="0 0 100 100" style={SVG_STYLE}>
      <title>車線減少</title>
      <g transform={`rotate(${angle}, 50, 50)`}>
        {/* 背景 */}
        <path
          d="M50,2 L98,50 L50,98 L2,50 z"
          fill="hsl(58, 100%, 70%)"
          stroke="hsl(58, 50%, 50%)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* 外側線 */}
        <g fill="none" stroke="hsl(0, 0%, 0%)" strokeWidth="4">
          {decrease === "left" ? (
            <path d="M35,75 L35,55 L50,40 L50,25" />
          ) : (
            <path d="M35,75 L35,25" />
          )}
          {decrease === "right" ? (
            <path d="M65,75 L65,55 L50,40 L50,25" />
          ) : (
            <path d="M65,75 L65,25" />
          )}
        </g>
        {/* 内側線 */}
        <g fill="none" stroke="hsl(58, 50%, 40%)" strokeWidth="3">
          <path d="M50,75 L50,64" />
          <path d="M50,61 L50,50" />
        </g>
      </g>
    </svg>
  );
}
