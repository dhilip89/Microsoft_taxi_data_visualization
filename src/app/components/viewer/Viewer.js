import Info from '../info/Info';
import React, { Component } from 'react';
import './viewer.scss';

export default class Viewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='viewer'>
                <Info />
            </div>
        );
    }
}