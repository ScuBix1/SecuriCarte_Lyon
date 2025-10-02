import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import Map from '../../Map/Map';

const physicalIcon = L.icon({
  iconUrl: '/images/physical-marker.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const verbalIcon = L.icon({
  iconUrl: '/images/verbal-marker.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const theftIcon = L.icon({
  iconUrl: '/images/theft-marker.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Home = () => {
  const [activeType, setActiveType] = useState<
    'physical' | 'verbal' | 'theft' | null
  >(null);

  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h1 className="text-3xl">SécuriCarte Lyon</h1>
      <Map />
    </div>
  );
};

export default Home;
