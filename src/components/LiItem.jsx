import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export function LiItem({ todo, toggleTodo, deleteTodo }) {
    //Monitora o estado do menu
    const [isOpen, setIsOpen] = useState(false);

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
                    classList={`menu-mobile-button ${isOpen ? 'open' : 'closed'}`}
                    iconClass={isOpen ? 'bi bi-x-lg' : 'bi bi-list'}
                    onClick={() => setIsOpen(!isOpen)}
                />
                <div
                    className={`menu-mobile-container ${isOpen ? 'open' : 'closed'}`}
                >
                    <Button
                        classList={`button-mobile mobile-delete ${isOpen ? 'open' : 'closed'}`}
                        label="Deletar"
                        onClick={() => deleteTodo(todo.id)}
                    />
                </div>
                <Button
                    classList="button-li li-delete"
                    iconClass="bi bi-trash-fill"
                    onClick={() => deleteTodo(todo.id)}
                />
            </div>
        </li>
    );
}
