import { ReactNode } from 'react';
import cn from 'classnames';

export const textColors = {
    default: 'text-black cursor-pointer',
    hovered: 'text-[#BDEE63] cursor-pointer',
}

interface ListItemProps {
  className?: string;
  content?: ReactNode | string;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
  arrondissementHovered?: string;
}

const ListItem = (props: ListItemProps) => {
  const {
    className,
    content,
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    arrondissementHovered = '',
  } = props;

  return (
    <li
      className={className}
      onMouseEnter={() => onMouseEnter && onMouseEnter(arrondissementHovered)}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
    >
      {content}
    </li>
  );
};

export default ListItem;
