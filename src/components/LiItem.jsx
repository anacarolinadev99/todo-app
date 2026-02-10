import React from 'react';
import { Input } from './Input';
import { TaskActions } from './TaskActions';

export function LiItem({
    todo,
    toggleTodo,
    deleteTodo,

    editTodo,
}) {
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
            <TaskActions
                todo={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        </li>
    );
}
