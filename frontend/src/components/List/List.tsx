import { ReactNode } from 'react';
import ListItem from './ListItem/ListItem';

interface ListProps {
  className?: string;
  content?: ReactNode;
}

const List = (props: ListProps) => {
  const { className, content } = props;

  return <ul className={className}>{content}</ul>;
};

export default List;
