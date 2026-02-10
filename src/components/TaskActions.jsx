import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export function TaskActions({ todo, deleteTodo, editTodo }) {
    //Monitora o estado do menu
    const [isOpen, setIsOpen] = useState(false);
    //Monitora se o edit foi acionado
    const [isEditOpen, setIsEditOpen] = useState(false);
    //Monitora o input
    const [inputEdit, setInputEdit] = useState(todo.task);
    //Montirora se um item está sendo animado
    const [onAnimation, setOnAnimation] = useState(false);

    return (
        <div className="buttons-li-container">
            <Button
                classList={`menu-mobile-button ${isOpen ? 'open' : 'closed'}`}
                iconClass={isOpen ? 'bi bi-x' : 'bi bi-three-dots-vertical'}
                onClick={() => setIsOpen(!isOpen)}
            />

            {/* Mobile */}
            <div
                className={`menu-mobile-container ${isOpen ? 'open' : 'closed'}`}
                onAnimationStart={(e) => {
                    if (e.target === e.currentTarget) {
                        setOnAnimation(true);
                    }
                }}
                onAnimationEnd={(e) => {
                    if (e.target === e.currentTarget) {
                        setOnAnimation(false);
                    }
                }}
            >
                <Button
                    classList={`button-mobile mobile-edit ${isOpen ? 'open' : 'closed'}`}
                    label="Editar"
                    disbled={onAnimation}
                    onClick={() => {
                        setIsEditOpen(!isEditOpen);
                        setIsOpen(!isOpen);
                    }}
                />
                <Button
                    classList={`button-mobile mobile-delete ${isOpen ? 'open' : 'closed'}`}
                    label="Deletar"
                    disbled={onAnimation}
                    onClick={() => {
                        deleteTodo(todo.id);
                        setIsOpen(!isOpen);
                    }}
                />
            </div>

            {/*Container editar input */}
            <div
                className={`blur-bg ${isEditOpen ? 'open-edit' : 'closed-edit'}`}
            >
                <div
                    className={`editTodo-container ${isEditOpen ? 'open-edit' : 'closed-edit'}`}
                >
                    <Input
                        name={'edit-input'}
                        value={inputEdit}
                        classList="edit-input"
                        onChange={(e) => setInputEdit(e.target.value)}
                    />
                    <Button
                        label="Confirmar"
                        classList="button-edit edit-confirm"
                        onClick={() => {
                            if (inputEdit.trim() === '') {
                                setInputEdit(todo.task);
                            } else {
                                editTodo(todo.id, inputEdit);
                            }
                            return setIsEditOpen(!isEditOpen);
                        }}
                    />
                    <Button
                        label="Cancelar"
                        classList="button-edit edit-cancel"
                        onClick={() => {
                            setInputEdit(todo.task);
                            setIsEditOpen(!isEditOpen);
                        }}
                    />
                </div>
            </div>

            <Button
                classList="button-li li-edit"
                iconClass="bi bi-pencil-square"
                onClick={() => setIsEditOpen(true)}
            />
            <Button
                classList="button-li li-delete"
                iconClass="bi bi-trash-fill"
                onClick={() => deleteTodo(todo.id)}
            />
        </div>
    );
}
