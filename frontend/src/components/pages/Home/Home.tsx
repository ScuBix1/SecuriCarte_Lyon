import 'leaflet/dist/leaflet.css';
import Map from '../../Map/Map';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h1 className="text-3xl">SécuriCarte Lyon</h1>
      <Map />
    </div>
  );
};

export default Home;
