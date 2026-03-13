import {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Map as ReactMap,
  ScaleControl,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useAtom } from "jotai";
import { useCallback, useMemo, useState } from "react";
import { BRANCH_DATA } from "../assets/branchData";
import { MERGE_DATA } from "../assets/mergeData";
import { selectedPointDataAtom } from "../atoms/app";
import { isEqualPointData } from "../utils/utils";
import { BranchPin } from "./BranchPin";
import { MergePin } from "./MergePin";

/** 地図スタイルのデータのリスト */
const STYLES = [
  { name: "Dark", json: "https://tris5572.github.io/map-style/dark/style.json" },
  { name: "Light", json: "https://tris5572.github.io/map-style/light/style.json" },
];

export function MapView() {
  const [selectedData, setSelectedData] = useAtom(selectedPointDataAtom);
  const [selectedStyleIndex, setSelectedStyleIndex] = useState<number>(0);

  const handleStyleChange = useCallback((index: number) => {
    setSelectedStyleIndex(index);
  }, []);

  const mergeMarkers = useMemo(
    () =>
      MERGE_DATA.map((data) => (
        <Marker
          key={`merge-${data.label}-${data.longitude}-${data.latitude}-${data.angle}-${data.merge}`}
          longitude={data.longitude}
          latitude={data.latitude}
          anchor="center"
          onClick={() => setSelectedData({ type: "merge", ...data })}
          className={selectedData && isEqualPointData(selectedData, data) ? "point-marker selected" : "point-marker"}
          rotation={data.angle}
        >
          <MergePin data={data} />
        </Marker>
      )),
    [setSelectedData, selectedData],
  );

  const branchMarkers = useMemo(
    () =>
      BRANCH_DATA.map((data) => (
        <Marker
          key={`branch-${data.label}-${data.longitude}-${data.latitude}-${data.angle}`}
          longitude={data.longitude}
          latitude={data.latitude}
          anchor="center"
          onClick={() => setSelectedData({ type: "branch", ...data })}
          className={selectedData && isEqualPointData(selectedData, data) ? "point-marker selected" : "point-marker"}
          rotation={data.angle}
        >
          <BranchPin data={data} />
        </Marker>
      )),
    [setSelectedData, selectedData],
  );

  return (
    <ReactMap
      initialViewState={{
        latitude: 35.7010742,
        longitude: 139.6499634,
        zoom: 11,
      }}
      mapStyle={STYLES[selectedStyleIndex].json}
      attributionControl={false}
    >
      {mergeMarkers}
      {branchMarkers}
      <MapStyleSwitcher styleIndex={selectedStyleIndex} handleStyleChange={handleStyleChange} />
      <ScaleControl />
      <NavigationControl />
      <FullscreenControl />
      <GeolocateControl />
    </ReactMap>
  );
}

/**
 * 地図スタイルの切替ボタンを表示するコンポーネント
 */
function MapStyleSwitcher(props: { styleIndex: number; handleStyleChange: (index: number) => void }) {
  const handleClick = useCallback(
    (index: number) => {
      props.handleStyleChange(index);
    },
    [props.handleStyleChange],
  );

  return (
    <div className="style-switcher">
      <div className="button-wrapper">
        {STYLES.map((st, i) => (
          <button
            key={st.name}
            type="submit"
            className={i === props.styleIndex ? "selected" : undefined}
            onClick={() => {
              handleClick(i);
            }}
          >
            {st.name}
          </button>
        ))}
      </div>
    </div>
  );
}
