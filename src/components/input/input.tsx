import { Button, InputAdornment, TextField } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useState } from 'react'
import { todo } from '../../App'
import {nanoid} from 'nanoid'
import './input.scss'

interface InputProps {
  addTodo: (obj:todo) => void
}

function Input(props: InputProps) {
  const [input, setInput] = useState<string>('')
  const createTodo = () =>{
    const todo = {
      text: input,
      completed: false,
      id: nanoid()
    }
    props.addTodo(todo)
  }
  return (
    <div>
      <TextField value={input}
      required={true}
      fullWidth={true}
      InputProps={{
        endAdornment: <InputAdornment position='end'><ControlPointIcon
        onClick={() =>{
          if(input.length >= 1){
            createTodo()
            setInput('')
          }
        }}
        /></InputAdornment>
      }}
      onChange={(e) =>{
        setInput(e.target.value)}}
        onKeyDown={(e) =>{
          if(e.code === 'Enter' && input.length >= 1){
            createTodo()
            setInput('')
          }
        }}
         id="outlined-basic" label="What needs to be done ?" variant="outlined" />
       
      
    </div>
  )
}

export default Input