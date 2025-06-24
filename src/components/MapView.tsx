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
import { useMemo } from "react";
import { BRANCH_DATA } from "../assets/branchData";
import { MERGE_DATA } from "../assets/mergeData";
import { selectedPointDataAtom } from "../atoms/app";
import { isEqualPointData } from "../utils/utils";
import { BranchPin } from "./BranchPin";
import { MergePin } from "./MergePin";

export function MapView() {
  const [selectedData, setSelectedData] = useAtom(selectedPointDataAtom);

  const mergeMarkers = useMemo(
    () =>
      MERGE_DATA.map((data) => (
        <Marker
          key={`merge-${data.label}-${data.longitude}-${data.latitude}-${data.angle}-${data.merge}`}
          longitude={data.longitude}
          latitude={data.latitude}
          anchor="center"
          onClick={() => setSelectedData({ type: "merge", ...data })}
          className={`point-marker ${selectedData && isEqualPointData(selectedData, data) ? "selected" : ""}`}
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
          className={`point-marker ${selectedData && isEqualPointData(selectedData, data) ? "selected" : ""}`}
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
      mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
      attributionControl={false}
    >
      {mergeMarkers}
      {branchMarkers}
      <ScaleControl />
      <NavigationControl />
      <FullscreenControl />
      <GeolocateControl />
    </ReactMap>
  );
}
