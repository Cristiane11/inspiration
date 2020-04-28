import React from 'react';
import ReactDom from 'react-dom';


function TodoItem(){
    return(
        <div>
            <input type="checkbox"/>
            <p>Update Resume</p>
            <input type="checkbox"/>
            <p>Practice React JS</p>
            <input type="checkbox"/>
            <p>Keep my repo update</p>
            <input type="checkbox"/>
            <p>Update the NPM package</p>
        </div>
        
    )
}
export default TodoItem;