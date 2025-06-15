import type { CSSProperties } from "react";
import type { DecreasePoint } from "../types/types";

type Props = {
  /**
   * 車線減少地点のデータ
   */
  data: DecreasePoint;
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
export function PinDecrease({ data, size = 40 }: Props) {
  return (
    <svg height={size} viewBox="0 0 100 100" style={SVG_STYLE}>
      <title>{data.label}</title>
      <g transform={`rotate(${data.angle}, 50, 50)`}>
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
          {data.merge === "right" ? (
            <path d="M35,75 L35,55 L50,40 L50,25" />
          ) : (
            <path d="M35,75 L35,25" />
          )}
          {data.merge === "left" ? (
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
