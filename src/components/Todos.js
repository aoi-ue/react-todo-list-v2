import React from 'react';

const todos = props => {
    return (
    <div>
        <li className={props.item.isCompleted ? "done" : ""}>{props.item.name}</li>
    </div>
    );
}; 

export default todos;
