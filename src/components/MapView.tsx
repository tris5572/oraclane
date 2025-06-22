import {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Map as ReactMap,
  ScaleControl,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useSetAtom } from "jotai";
import { useMemo } from "react";
import { BRANCH_DATA } from "../assets/branchData";
import { MERGE_DATA } from "../assets/mergeData";
import { selectedPointDataAtom } from "../atoms/app";
import { BranchPin } from "./BranchPin";
import { MergePin } from "./MergePin";

export function MapView() {
  const setSelectedData = useSetAtom(selectedPointDataAtom);

  const mergeMarkers = useMemo(
    () =>
      MERGE_DATA.map((data) => (
        <Marker
          key={`merge-${data.label}-${data.longitude}-${data.latitude}-${data.angle}-${data.merge}`}
          longitude={data.longitude}
          latitude={data.latitude}
          anchor="center"
          onClick={() => setSelectedData({ type: "merge", ...data })}
          style={{ cursor: "pointer" }}
        >
          <MergePin data={data} />
        </Marker>
      )),
    [setSelectedData],
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
        >
          <BranchPin data={data} />
        </Marker>
      )),
    [setSelectedData],
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
