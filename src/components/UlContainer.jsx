import React, { useState, useEffect } from 'react';
import { LiItem } from './LiItem';
import { InputContainer } from './InputContainer';
import { InputRadio } from './InputRadio';

export function UlContainer() {
    //Pega a lista do localStorage
    const [todoList, setTodoList] = useState(() => {
        const todoList = JSON.parse(localStorage.getItem('ToDoList'));
        return todoList ? todoList : [];
    });

    //Contador de tarefas não feitas
    const [tasksNotFinished, setTasksNotFinished] = useState(
        todoList.filter((todo) => !todo.isCompleted).length,
    );

    //Lista sujeita a filtragem
    const [filteredTodoList, setfilteredTodoList] = useState(todoList);

    //Filtros disponiveis
    const filters = [
        { value: 'all', label: 'Todos' },
        { value: 'completed', label: 'Completas' },
        { value: 'pendent', label: 'Pendentes' },
    ];

    //Filtro selecionado
    const [filterSelected, setFilterSelected] = useState('all');

    const toggleTodo = (id) => {
        //Função para alterar o estado de uma tarefa pelo id
        setTodoList((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo,
            ),
        );
    };

    const addTodo = (task) => {
        //Função para adicionar uma tarefa nova
        const newtodo = { id: Date.now(), task: task, isCompleted: false };
        setTodoList((prev) => [...prev, newtodo]);
    };

    const deleteTodo = (id) => {
        //Função para deletar um item da lista de ToDos.
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    };

    useEffect(() => {
        //Salva a lista no localStorage a cada alteração
        localStorage.setItem('ToDoList', JSON.stringify(todoList));
    }, [todoList]);

    useEffect(() => {
        //Filtra a lista de acordo com o elemento selecionado no filtro
        if (filterSelected === 'completed') {
            const newListFiltered = todoList.filter(
                (todo) => todo.isCompleted === true,
            );
            setfilteredTodoList(newListFiltered);
            return;
        }
        if (filterSelected === 'pendent') {
            const newListFiltered = todoList.filter(
                (todo) => todo.isCompleted === false,
            );
            setfilteredTodoList(newListFiltered);
            return;
        }
        setfilteredTodoList(todoList);
    }, [filterSelected, todoList]);

    useEffect(() => {
        const count = todoList.filter((todo) => !todo.isCompleted).length;
        setTasksNotFinished(count);
    }, [todoList]);

    return (
        <div>
            <InputContainer addtodo={addTodo} />
            <ul>
                {filteredTodoList.map((todo) => (
                    <LiItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
            <div>
                {filters.map((filter) => (
                    <InputRadio
                        key={filter.value}
                        name={'filterTodos'}
                        value={filter.value}
                        checked={filterSelected === filter.value}
                        onChange={() => setFilterSelected(filter.value)}
                        label={filter.label}
                    />
                ))}
            </div>
            <p>
                {tasksNotFinished > 0
                    ? `Tarefas restantes: ${tasksNotFinished}`
                    : 'Você completou todas as tarefas'}
            </p>
        </div>
    );
}
