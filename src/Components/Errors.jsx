import React from 'react';
import '../css/errors.css';

export default function Errors({errors = []}) {
    if (errors.length === 0) {
        return null;
    }

    return (
        <div className="alert">
            <ul>
                {errors.map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
        </div>
    )
}