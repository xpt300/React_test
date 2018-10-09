import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Moins</button>
        <button className={classes.More} onClick={props.added}>Plus</button>
    </div>
);

export default buildControl;