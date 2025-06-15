import * as ReactMap from "react-map-gl/maplibre";
import {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { MergePointPin } from "./MergePointPin";
import { useMemo } from "react";
import { DECREASE_DATA } from "../assets/mergeData";
import { BRANCH_DATA } from "../assets/branchData";
import { BranchPin } from "./BranchPin";

export function MapView() {
  const decreaseMarkers = useMemo(
    () =>
      DECREASE_DATA.map((data) => (
        <ReactMap.Marker
          key={`marker-${data.longitude}-${data.latitude}`}
          longitude={data.longitude}
          latitude={data.latitude}
          anchor="center"
          onClick={() => {
            console.log("clicked");
          }}
        >
          <MergePointPin data={data} />
        </ReactMap.Marker>
      )),
    [],
  );

  const branchMarkers = useMemo(
    () =>
      BRANCH_DATA.map((data) => (
        <ReactMap.Marker
          key={`marker-${data.longitude}-${data.latitude}`}
          longitude={data.longitude}
          latitude={data.latitude}
          anchor="center"
          onClick={() => {
            console.log("clicked");
          }}
        >
          <BranchPin data={data} />
        </ReactMap.Marker>
      )),
    [],
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
