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

    //Estado da mensagem caso lista vazia
    const [message, setMessage] = useState(() => {
        if (filteredTodoList.length < 1 && filterSelected === 'all') {
            return 'Lista de tarefas vazia, adicione uma nova tarefa';
        } else if (
            filteredTodoList.length < 1 &&
            filterSelected === 'completed'
        ) {
            return 'Sem tarefas completas';
        } else if (
            filteredTodoList.length < 1 &&
            filterSelected === 'pendent'
        ) {
            return 'Sem tarefas pendentes';
        } else {
            return '';
        }
    });

    //Função para alterar o estado de uma tarefa pelo id
    const toggleTodo = (id) => {
        setTodoList((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo,
            ),
        );
    };

    //Função para adicionar uma tarefa nova
    const addTodo = (task) => {
        const newtodo = { id: Date.now(), task: task, isCompleted: false };
        setTodoList((prev) => [...prev, newtodo]);
    };

    //Função para deletar um item da lista de ToDos.
    const deleteTodo = (id) => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    };

    //Salva a lista no localStorage a cada alteração
    useEffect(() => {
        localStorage.setItem('ToDoList', JSON.stringify(todoList));
    }, [todoList]);

    //Filtra a lista de acordo com o elemento selecionado no filtro
    useEffect(() => {
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

    //Contador de tarefas pendentes, altera quando a todo muda
    useEffect(() => {
        const count = todoList.filter((todo) => !todo.isCompleted).length;
        setTasksNotFinished(count);
    }, [todoList]);

    //Altera o valor da mensagem quando a lista filtrada muda
    useEffect(() => {
        if (filteredTodoList.length < 1 && filterSelected === 'all') {
            return setMessage(
                'Lista de tarefas vazia, adicione uma nova tarefa',
            );
        } else if (
            filteredTodoList.length < 1 &&
            filterSelected === 'completed'
        ) {
            return setMessage('Sem tarefas completas');
        } else if (
            filteredTodoList.length < 1 &&
            filterSelected === 'pendent'
        ) {
            return setMessage('Sem tarefas pendentes');
        } else {
            return setMessage('');
        }
    }, [filteredTodoList]);

    return (
        <div className="container-ul">
            <InputContainer addtodo={addTodo} />
            <ul className="todo-ul">
                {filteredTodoList.length > 0 ? (
                    filteredTodoList.map((todo) => (
                        <LiItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    ))
                ) : (
                    <span className="message-ul">{message}</span>
                )}
            </ul>
            <footer>
                <div className="container-filters">
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
                <p className="counter">
                    {tasksNotFinished > 0
                        ? `Tarefas restantes: ${tasksNotFinished}`
                        : 'Você completou todas as tarefas'}
                </p>
            </footer>
        </div>
    );
}
