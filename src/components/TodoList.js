import React, { Component } from 'react'; 
import {todo} from "../seedData"
import Todos from "./Todos"; 

class TodoList extends Component { 
    constructor() {
        super(); 
        this.state = {
            list: todo
        }
    }
    
    render() {
        return (
        <div className="TodoList">
            <h1>Hello!</h1>
            <ul>
            {this.state.list.map((todo,index) => { 
                return (
                    <Todos key={index} item ={todo}  /> 
                )
            })}
            </ul>
        </div>
        )
    }
} 

export default TodoList; 
