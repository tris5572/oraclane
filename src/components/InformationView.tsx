import { useAtomValue } from "jotai";
import type { CSSProperties } from "react";
import { selectedPointDataAtom } from "../atoms/app";
import type { MergePoint, PointDataType } from "../types/types";
import { MergePin } from "./MergePin";

/**
 * 選択されている地点の情報を表示するコンポーネント
 */
export function InformationView() {
  const data = useAtomValue(selectedPointDataAtom);

  return (
    <div className="information-view">
      {!data ? "地点を選択すると情報が表示されます" : <DataInner data={data} />}
    </div>
  );
}

function DataInner({ data }: { data: PointDataType }) {
  return (
    <>
      <h2>{data.label}</h2>
      {data.type === "merge" ? <MergeImage data={data} /> : null}
      {data.comments?.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </>
  );
}

/**
 * 合流画像を返す
 *
 * 角度を `0` にして上向きにして前景だけを描画した SVG を取得し、独自の背景の上に重ねたもの。
 */
function MergeImage({ data }: { data: MergePoint }) {
  const icon = <MergePin data={{ ...data, angle: 0 }} onlyFront />;

  const MERGE_WRAPPER_STYLE: CSSProperties = {
    background: "hsl(58, 100%, 70%)",
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    width: "30px",
    height: "26px",
    overflow: "hidden",
    marginTop: "8px",
  };

  return <div style={MERGE_WRAPPER_STYLE}>{icon}</div>;
}
