import Todo from '../Todo'

export default function view (jsx, props, state) {
  let completed = state.list.filter(todo => todo.completed).length
  let active = state.list.length - completed

  return (
    <div className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <input
          className='new-todo'
          type='text'
          value={state.inputVal}
          placeholder='What needs to be done?'
          name='newTodo' />
      </header>

      <section className='main' style={{ 'display': state.list.length ? '' : 'none' }}>
        <input className='toggle-all' type='checkbox' defaultChecked={active === 0} />
        <ul className='todo-list'>
          {
            state.list
              .filter(todoProps => !(state.filter === 'active' && todoProps.completed))
              .filter(todoProps => !(state.filter === 'completed' && !todoProps.completed))
              .map(props => (
                <Todo
                  id={props.id}
                  title={props.title}
                  completed={props.completed}
                  key={props.id}
                />
              ))
          }
        </ul>
      </section>

      <footer className='footer' style={{ 'display': state.list.length ? '' : 'none' }}>
        <span className='todo-count'>
          <strong>{active}</strong>
          <span>{' item' + (active !== 1 ? 's' : '') + ' left'}</span>
        </span>
        <ul className='filters'>
          <li className='all'><a href='#' className={(state.filter === '') ? 'selected' : ''}>All</a></li>
          <li className='active'><a href='#' className={(state.filter === 'active') ? 'selected' : ''}>Active</a></li>
          <li className='completed'><a href='#' className={(state.filter === 'completed') ? 'selected' : ''}>Completed</a></li>
        </ul>
        {completed > 0 ? (
          <button className='clear-completed'>Clear completed ({completed}) </button>
        ) : ''}
      </footer>
    </div>
  )
}