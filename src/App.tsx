import "./App.css";
import { MapView } from "./components/MapView";

export function App() {
  return (
    <div className="app-wrapper">
      <div className="map-view">
        <MapView />
      </div>
      <div className="information-view">情報</div>
    </div>
  );
}
