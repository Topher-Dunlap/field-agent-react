import React from 'react';
import {Link} from 'react-router-dom';

export default function NavListLinks(props) {

    ///props
    const routeName = props.routeName;
    const routePath = props.routePath;

    function isExact() {
        if (routePath !== "/") {
            return <Link to={routePath}>{routeName}</Link>
        }
        return <Link exact to={routePath}>{routeName}</Link>
    }

    return (
        <li>
            {isExact()}
            <hr/>
        </li>
    )
}