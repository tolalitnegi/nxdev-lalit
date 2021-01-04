
import {Express, response} from 'express';
import {Todo} from '@nxdev-lalit/data'; // import the interface from common location




const todos: Todo[] = [{title: 'Todo 1'}, {title: 'Todo 2'} ];

export function addTodoRoutes(app: Express){
  
  app.get('/api/todos', (req, res) => res.send(todos));

  app.post('/api/addTodo', (req, res) => {
    const newTodo = {
      title : `new todo ${Math.floor(Math.random()*2000)}`
    };
    todos.push(newTodo);
    res.send(newTodo);

  });
}
