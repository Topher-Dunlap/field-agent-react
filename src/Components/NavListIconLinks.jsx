import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function NavListLinks(props) {

    ///props
    const iconClass = props.iconClass;
    const icon = props.icon;
    const routePath = props.routePath;

    return (
        <li>
            <Link to={routePath} className={iconClass}><FontAwesomeIcon icon={icon}/></Link>
        </li>
    )
}