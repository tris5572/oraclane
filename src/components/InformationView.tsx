import { useAtomValue } from "jotai";
import { selectedPointDataAtom } from "../atoms/app";
import type { PointDataType } from "../types/types";

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
      {data.comments?.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </>
  );
}
