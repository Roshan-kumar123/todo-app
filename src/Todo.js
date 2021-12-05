import {
  Button,
  Input,
  List,
  ListItem,
  ListItemText,
  Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { db } from './firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Todo = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.todo.todo);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Remove = () => {
    db.collection('todos').doc(props.todo.id).delete();
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h1>I am Modal</h1>
          <Input
            // placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>

      <List>
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary='No deadline' />
        </ListItem>
        <button onClick={handleOpen}>Edit</button>
        <DeleteForeverIcon onClick={Remove} />
      </List>
    </div>
  );
};

export default Todo;
