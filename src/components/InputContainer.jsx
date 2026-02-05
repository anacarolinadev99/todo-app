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
        <div>
            <p>O que você precisa fazer hoje?</p>
            <Input
                placeholder="Nova tarefa..."
                onChange={(e) => setTask(e.target.value)}
                value={task}
            />
            <Button label="Adicionar" onClick={onClick} />
        </div>
    );
}
