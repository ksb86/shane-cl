import React from 'react';

export default function Button({ onClick, children }) {
    return (
        <button style={{color: 'blue'}}onClick={onClick}>{children}</button>
    );
}