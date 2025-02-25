import List from '../../List/List';
import ListItem from '../../List/ListItem/ListItem';
import MapLyon from '../../MapLyon/MapLyon';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h1 className="text-3xl">Les Cris de Lyon</h1>
      <div className="flex flex-col justify-center items-center gap-y">
        <MapLyon
          width={500}
          height={500}
          fillColorNumber="fill-[var(--color-number)]"
          fillColorArrondissement="fill-[var(--color-arrondissement)] cursor-pointer"
          fillColorArrondissementHover="hover:fill-[var(--hover-color-arrondissement)] hover:[.number]:fill-blue-500"
          fillColorFleuve="fill-[var(--color-fleuve)]"
        />
        <List
          content={
            <>
              <ListItem content="1er arrondissement" />
              <ListItem content="2eme arrondissement" />
              <ListItem content="3eme arrondissement" />
              <ListItem content="4eme arrondissement" />
              <ListItem content="5eme arrondissement" />
              <ListItem content="6eme arrondissement" />
              <ListItem content="7eme arrondissement" />
              <ListItem content="8eme arrondissement" />
              <ListItem content="9eme arrondissement" />
            </>
          }
        />
      </div>
    </div>
  );
};

export default Home;
