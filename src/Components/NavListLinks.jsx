import React from 'react';
import {Link} from 'react-router-dom';

export default function NavListLinks(props) {

    ///props
    const routeName = props.routeName;
    const routePath = props.routePath;

    return (
        <li>
            <Link to={routePath}>{routeName}</Link>
        </li>
    )
}