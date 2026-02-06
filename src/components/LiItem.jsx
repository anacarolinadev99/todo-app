import React from 'react';
import { Button } from './Button';
import { Input } from './Input';

export function LiItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li>
            <div className="task-container">
                <Input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                />
                <p>{todo.task}</p>
            </div>
            <div className="buttons-li-container">
                <Button
                    classList="button-li li-delete"
                    iconClass="bi bi-trash-fill"
                    onClick={() => deleteTodo(todo.id)}
                />
            </div>
        </li>
    );
}
