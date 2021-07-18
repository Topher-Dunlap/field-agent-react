import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function NavListLinks(props) {

    ///props
    const iconClass = props.iconClass;
    const icon = props.icon;
    const routePath = props.routePath;

    function isExact() {
        if (routePath !== "/") {
            return <Link to={routePath} className={iconClass}><FontAwesomeIcon icon={icon}/></Link>
        }
        return <Link exact to={routePath} className={iconClass}><FontAwesomeIcon icon={icon}/></Link>
    }

    return (
        <li>
            {isExact()}
        </li>
    )
}