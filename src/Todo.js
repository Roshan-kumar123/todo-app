import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

const Todo = (props) => {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={props.todo} secondary='No deadline' />
        </ListItem>
      </List>
    </div>
  );
};

export default Todo;
