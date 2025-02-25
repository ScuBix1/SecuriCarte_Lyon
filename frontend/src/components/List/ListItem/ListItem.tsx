import { ReactNode } from "react";

interface ListItemProps{
    className?: string;
    content?: ReactNode | string;
}

const ListItem = (props: ListItemProps)=>{
    const {className, content} = props;

    return(<li className={className}>{content}</li>)
}

export default ListItem;