import * as ReactMap from "react-map-gl/maplibre";
import {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useSetAtom } from "jotai";
import { useMemo } from "react";
import { BRANCH_DATA } from "../assets/branchData";
import { DECREASE_DATA } from "../assets/mergeData";
import { selectedPointDataAtom } from "../atoms/app";
import { BranchPin } from "./BranchPin";
import { MergePin } from "./MergePin";

export function MapView() {
  const setSelectedData = useSetAtom(selectedPointDataAtom);

  const decreaseMarkers = useMemo(
    () =>
      DECREASE_DATA.map((data) => (
        <ReactMap.Marker
          key={`marker-${data.longitude}-${data.latitude}`}
          longitude={data.longitude}
          latitude={data.latitude}
          anchor="center"
          onClick={() => setSelectedData({ type: "merge", ...data })}
          style={{ cursor: "pointer" }}
        >
          <MergePin data={data} />
        </ReactMap.Marker>
      )),
    [setSelectedData],
  );

  const branchMarkers = useMemo(
    () =>
      BRANCH_DATA.map((data) => (
        <ReactMap.Marker
          key={`marker-${data.longitude}-${data.latitude}`}
          longitude={data.longitude}
          latitude={data.latitude}
          anchor="center"
          onClick={() => setSelectedData({ type: "branch", ...data })}
        >
          <BranchPin data={data} />
        </ReactMap.Marker>
      )),
    [setSelectedData],
  );

  return (
    <ReactMap.Map
      initialViewState={{
        latitude: 35.7010742,
        longitude: 139.6499634,
        zoom: 11,
      }}
      mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
    >
      {decreaseMarkers}
      {branchMarkers}
      <ScaleControl />
      <NavigationControl />
      <FullscreenControl />
      <GeolocateControl />
    </ReactMap.Map>
  );
}
