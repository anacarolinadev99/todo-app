import React from 'react';
import { Button } from './Button';
import { Input } from './Input';

export function LiItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li>
            <Input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
            />
            <p>{todo.task}</p>
            <Button label="Deletar" onClick={() => deleteTodo(todo.id)} />
        </li>
    );
}
