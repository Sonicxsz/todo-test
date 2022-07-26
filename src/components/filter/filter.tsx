import './filter.scss'


type filterProps = {
  count: number
  filter: string
  changeFilter: (filter:string) => void
  clearCompleted: () => void
}

function Filter(props: filterProps) {
  const {count, changeFilter, filter, clearCompleted} = props;  
  const btns = ['All', 'Active', 'Completed']


  return (
   <>
    <div className='filter_wrapper'>
        <div >{count} items left</div>
        <div className='btn_flex'>
            {btns.map(i =>{
             return <button
             className={i === filter ? 'active' : ''}
             onClick={() =>{
              changeFilter(i)
             }}
             >{i}</button>
            })}
        </div>
        <button className='clear'
        onClick={() =>{
          if(window.confirm('do you really want to clear ?')){
            clearCompleted()
          }
        }}
        >Clear completed</button>
    </div>
    <div className='underLine'></div>
    <div className='secondLine'></div>
   </>
  )
}

export default Filter