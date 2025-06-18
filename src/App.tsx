import "./App.css";
import { InformationView } from "./components/InformationView";
import { MapView } from "./components/MapView";

export function App() {
  return (
    <div className="app-wrapper">
      <div className="map-view">
        <MapView />
      </div>
      <InformationView />
    </div>
  );
}
