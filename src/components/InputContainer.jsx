import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export function InputContainer({ addtodo }) {
    const [task, setTask] = useState('');

    const onClick = () => {
        if (task.trim() === '') {
            return;
        }
        addtodo(task);
        setTask('');
    };

    return (
        <div className="container-input">
            <p>O que você precisa fazer hoje?</p>
            <div className="container-input-button">
                <Input
                    placeholder="Nova tarefa..."
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    classList="main-input"
                />
                <Button
                    label="Adicionar"
                    onClick={onClick}
                    classList="add-button"
                />
            </div>
        </div>
    );
}
