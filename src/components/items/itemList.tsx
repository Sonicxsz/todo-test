import React, { useEffect } from 'react'
import { todo } from '../../App'
import Item from './item'
import './item.scss'


export type itemListProps = {
  todos: todo[],
  changeTodo: (id:string) => void
}

const ItemList = (props: itemListProps ) => {
  const {todos, changeTodo} = props;
  return (
    <div className='list_wrapper'>
       {todos.length > 0 ? todos.map(i =>{
       return <Item changeTodo={changeTodo} key={i.id} id={i.id} text={i.text} completed={i.completed}/>
       }) : (<div className='empty_todos'>there are no tasks</div>)}
    </div>
  )
}

export default ItemList