import { ReactNode } from 'react';

interface ListProps {
  className?: string;
  content?: ReactNode;
}

const List = (props: ListProps) => {
  const { className, content } = props;

  return <ul className={className}>{content}</ul>;
};

export default List;
