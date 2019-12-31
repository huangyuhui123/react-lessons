import React, { Component } from 'react';

export default function TodoHeader(props) {
        return (
            <div>
                <h1>{props.children}</h1>
                <h2>{props.title}</h2>
            </div>
        );
}

