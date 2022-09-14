import React, { useState } from 'react'
import TodoList from './TodoList';

const App = () => {
  //Create a Variable to store the User Input Data
  const [task, setTask] = useState("");

  //Create a List to store the all the ToDo's whatever we are submitting the data from the Form
  const [todos, setTodos] = useState([]);

  //By using SetTask Variable we can set the user input data
  const changeHandler = e => {
    setTask(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault();
    //what we have previous toDo's that will be not missing , for that we have used ...todo's
    //next we have to add new todo's also, for that we have used user input storing variable task
    const newTodos = [...todos, task];
    //assign the newtodos to the list variable
    setTodos(newTodos);
    //After Submit the data to the list, Reset the form (input data)
    setTask("");
  }
  const deleteHandler = (indexValue) => {
    //Except the index value what we are passed in delete button, remaining all items shouls be filtered and set to todos list
    const newTodos = todos.filter((todo, index) => index !== indexValue); // todos is a list to hold all the todos values 
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className='d-flex flex-col justify-content-center p-5'>
          <div className="card shadow ">
            <div className="card-body">
              <h5 className="card-title">Todo Management Application</h5>
              <form onSubmit={submitHandler}>
                <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
                <input type="submit" value="Add" name="Add" />
              </form>
              {/* send the todos data to another component */}
              <TodoList todolist={todos} deleteHandler={deleteHandler} />
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
