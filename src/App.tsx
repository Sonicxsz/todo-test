import React, { useState } from 'react';
import ItemList from './components/items/itemList';
import Header from './components/header/header';
import './app.scss';
import Input from './components/input/input';
import Filter from './components/filter/filter';

export type todo = {
  text: string;
  completed: boolean;
  id: string;
}

function App() {
  const [todos, setTodos] = useState<todo[]>([])
  const [filter, setFilter] = useState<string>('Active')
  const addTodo = (todo: todo):void =>{
    setTodos(state => [...state, todo])
  }
  const filterTodos = todos.filter(i =>{
    switch (filter){
      case 'All':
        return i
      case 'Active':
        return i.completed === false && i
      case 'Completed':
        return i.completed === true && i  
    }
    
  })

  const changeFilter = (filter: string ) =>{
    setFilter(filter)
  }

  const clearCompleted = () =>{
    const newTodos = todos.filter(i =>{
      if(i.completed === false)
      return i
    })
    setTodos(newTodos)
  }
  
  
  const changeTodo = (id:string) =>{
    const newTodos = todos.filter(i =>{
      if(i.id === id){
        i.completed = !i.completed
        return i
      }else{
        return i
      }
    })
    setTodos(newTodos)
  }
  let count:number = 0;
  
  todos.map(i =>{
    if(i.completed === false){
      count += 1
    }
  })

  return (
    <div className='wrapper'>
      <Header />
      <Input addTodo={addTodo}/>
      <ItemList changeTodo={changeTodo} todos={filterTodos}/>
      <Filter clearCompleted={clearCompleted} changeFilter={changeFilter} filter={filter} count={count} />
    </div>
  );
}

export default App;
