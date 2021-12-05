import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import { db } from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => {
            return doc.data().todo;
          })
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(''); // for clear input after clicking add todo button
  };

  return (
    <div className='App'>
      <h1>Hello React</h1>
      <form action=''>
        <FormControl>
          <InputLabel> ✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          type='submit'
          onClick={addTodo}
          variant='contained'
          color='secondary'
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo, i) => (
          <Todo todo={todo} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default App;
