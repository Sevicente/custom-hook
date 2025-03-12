import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";



export const useTodos = () => {

    const init = ( ) =>{
        return JSON.parse(localStorage.getItem('todos')) || []; //Primero coge lo que hay en localstorage con el nombre de todos si esta vacio devuelve un array vacio
      }
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(()=>{
          localStorage.setItem('todos', JSON.stringify(todos))
        },[todos])
    
        const handleNewTodo = (todo) => {
            const action ={
              type: '[TODO] Add Todo',
              payload: todo
            }
    
            dispatch(action); //lanzar la acción al reducer
        }
    
        const handleDeleteTodo = (id) => {
          dispatch({
            type:'[TODO] Remove Todo',
            payload:id
          })
        }
    
        const handleToggleTodo = (id) => {
          dispatch({
            type:'[TODO] Toggle Todo',
            payload:id
          })
        }
    

  return {
    todos, 
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=>!todo.done).length,
    handleNewTodo, 
    handleDeleteTodo, 
    handleToggleTodo
  }
    
  
}


