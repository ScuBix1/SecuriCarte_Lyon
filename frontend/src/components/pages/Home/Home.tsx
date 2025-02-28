import { useEffect, useState } from 'react';
import List from '../../List/List';
import ListItem from '../../List/ListItem/ListItem';
import MapLyon from '../../MapLyon/MapLyon';
import cn from 'classnames';

const Home = () => {
  const [arrondissementHovered, setArrondissementHovered] = useState<
    string | undefined
  >(undefined);
  const arrondissements = [
    '1er arrondissement',
    '2eme arrondissement',
    '3eme arrondissement',
    '4eme arrondissement',
    '5eme arrondissement',
    '6eme arrondissement',
    '7eme arrondissement',
    '8eme arrondissement',
    '9eme arrondissement',
  ];

  const handleMouseEnter = (arrondissement: string) => {
    setArrondissementHovered(arrondissement);
  };

  const handleMouseLeave = () => {
    setArrondissementHovered(undefined);
  };

  useEffect(() => {
    setArrondissementHovered(arrondissementHovered);
  }, [arrondissementHovered]);

  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h1 className="text-3xl">Les Cris de Lyon</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-y">
        <MapLyon
          className="basis-1/2"
          width={500}
          height={500}
          fillColorNumber="fill-[#000000]"
          fillColorArrondissement="fill-[#DFCDC5] cursor-pointer"
          fillColorArrondissementHover="hover:fill-[#BDEE63]"
          fillColorFleuve="fill-[#3E63DD]"
          onMouseEnterArrondissement={handleMouseEnter}
          onMouseLeaveArrondissement={handleMouseLeave}
        />
        <List
          className="flex flex-col justify-center items-center basis-1/2 "
          content={arrondissements.map((arr, index) => (
            <ListItem
              key={arr}
              content={arr}
              className={cn({
                'text-[#00ff00]':
                  arrondissementHovered === `arrondissement${index + 1}`,
              })}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default Home;
