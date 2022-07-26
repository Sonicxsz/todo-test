import './item.scss'
import {Checkbox} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import { useEffect } from 'react';

type ItemProps = {
  text: string;
  completed: boolean;
  id: string;
  changeTodo: (id:string) => void
}

function Item(props: ItemProps) {
  const {text, completed, id, changeTodo} = props;
  const clazz = completed ? 'completed' : ''

  return (
    <div className='item_wrapper'>
        <Checkbox
        icon={<DoneIcon/>}
        onClick={() =>{
          changeTodo(id)
        }}
        checkedIcon={<DoneIcon/>}
        />
        <span 
        
        className={clazz}>{text}</span>
    </div>
  )
}

export default Item

function changeTodo(id: string) {
  throw new Error('Function not implemented.');
}
