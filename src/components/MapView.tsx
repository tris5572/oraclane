import * as ReactMap from "react-map-gl/maplibre";
import {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { PinDecrease } from "./PinDecrease";
import { useMemo } from "react";
import { DECREASE_DATA } from "../assets/mergeData";

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
          <PinDecrease data={data} />
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
      <ScaleControl />
      <NavigationControl />
      <FullscreenControl />
      <GeolocateControl />
    </ReactMap.Map>
  );
}
