import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import List from '../../List/List';
import ListItem, { textColors } from '../../List/ListItem/ListItem';
import MapLyon from '../../MapLyon/MapLyon';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleMouseEnter = (arrondissement: string) => {
    setArrondissementHovered(arrondissement);
  };

  const handleMouseLeave = () => {
    setArrondissementHovered(undefined);
  };

  const handleClickArrondissement = (arrondissement: string) => {
    navigate(`/${arrondissement}`);
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
          fillColorFleuve="fill-[#3E63DD]"
          onMouseEnterArrondissement={handleMouseEnter}
          onMouseLeaveArrondissement={handleMouseLeave}
          onClickArrondissement={handleClickArrondissement}
          arrondissementHovered={arrondissementHovered}
        />
        <List
          className="flex flex-col justify-center items-center basis-1/2 "
          content={arrondissements.map((arr, index) => (
            <ListItem
              key={`arrondissement${index + 1}`}
              content={<Link to={`/arrondissement${index + 1}`}>{arr}</Link>}
              className={cn(`hover:${[textColors.hovered]}`, {
                [textColors.hovered]:
                  arrondissementHovered === `arrondissement${index + 1}`,
                [textColors.default]: !(arrondissementHovered === `arrondissement${index + 1}`),
              })}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              arrondissementHovered={`arrondissement${index + 1}`}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default Home;
