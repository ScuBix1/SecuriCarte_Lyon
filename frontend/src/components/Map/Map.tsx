import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
import MapActions from './MapActions';
import { icons } from './types/icons';

const Map = () => {
  const mapRef = useRef<L.Map | null>(null);
  const [activeType, setActiveType] = useState<
    'physical' | 'verbal' | 'theft' | null
  >(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map', {
        center: [45.75, 4.85],
        zoom: 13,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      mapRef.current = map;
    }
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !activeType) return;

    const handleClick = (e: L.LeafletMouseEvent) => {
      const icon = icons[activeType];
      const popupText =
        activeType === 'physical'
          ? 'Violence physique signalée ici.'
          : activeType === 'verbal'
          ? 'Violence verbale signalée ici.'
          : 'Vol signalé ici.';

      L.marker(e.latlng, { icon }).addTo(map).bindPopup(popupText).openPopup();

      setActiveType(null);
    };

    map.on('click', handleClick);
    return () => {
      map.off('click', handleClick);
    };
  }, [activeType, setActiveType]);

  return (
    <div className="flex flex-col gap-2">
      <div id="map" className="h-[60dvh] w-[70vw] mx-auto" />
      <MapActions activeType={activeType} setActiveType={setActiveType} />
    </div>
  );
};

export default Map;
