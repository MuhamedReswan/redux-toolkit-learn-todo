import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';

function App() {
  return (
   
    <div className='App'>
      <h1>Todo App</h1>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
