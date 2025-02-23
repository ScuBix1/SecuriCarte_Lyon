import MapLyon from "../../MapLyon/MapLyon";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h1 className="text-3xl">Les Cris de Lyon</h1>
      <div>
        <MapLyon width={500} height={500} />
      </div>
    </div>
  );
};

export default Home;
