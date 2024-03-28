import React, {ReactElement} from 'react';


interface ISideBarItemComponentProps {
    title: string,
    icon: ReactElement
}

const SideBarItemComponent = ({title, icon}: ISideBarItemComponentProps) => {
    return (
        <li className="flex items-center py-2 px-4 space-x-2 cursor-pointer">
            {icon}
            <span>{title}</span>
        </li>
    )
}

export default SideBarItemComponent;