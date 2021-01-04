import React, { useState, useEffect } from 'react';
import {Todos} from '../../../../../nxdev-lalit/libs/ui/src';
import {Todo} from '@nxdev-lalit/data'; // import the interface from common location

// // interface / data modal
// interface Todo {
//   title: string;
// }

export const App = () => {

  const [todos, setTodos] = useState<Todo[]>([{
    title: 'Todo 1'
  }, {
    title: 'Todo 2'
  }]);
  // generics useState is a todos array

  // function addTodo(title){
  //   setTodos([
  //     ...todos,
  //     {
  //       title : document.getElementById('todo-text').nodeValue
  //     }
  //   ])
  // };

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Welcome to nxdev-lalit!</h1>
      <h2>Todos</h2>
      <Todos todos={todos} />
      <input type="text" id="todo-text" />
      <button id={"add-todo"} onClick={addTodo}>Add Todo</button>
    </>
  );
}


export default App;




 // ---------------------- default file from the cli ------------------
// import styles from './app.module.scss';

// import { ReactComponent as Logo } from './logo.svg';
// import star from './star.svg';

// export function App() {
//   return (
//     <div className={styles.app}>
//       <header className="flex">
//         <Logo width="75" height="75" />
//         <h1>Welcome to nxdev-lalit!</h1>
//       </header>
//       <main>
//         <h2>Resources &amp; Tools</h2>
//         <p>Thank you for using and showing some ♥ for Nx.</p>
//         <div className="flex github-star-container">
//           <a
//             href="https://github.com/nrwl/nx"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {' '}
//             If you like Nx, please give it a star:
//             <div className="github-star-badge">
//               <img src={star} className="material-icons" alt="" />
//               Star
//             </div>
//           </a>
//         </div>
//         <p>Here are some links to help you get started.</p>
//         <ul className="resources">
//           <li className="col-span-2">
//             <a
//               className="resource flex"
//               href="https://egghead.io/playlists/scale-react-development-with-nx-4038"
//             >
//               Scale React Development with Nx (Course)
//             </a>
//           </li>
//           <li className="col-span-2">
//             <a
//               className="resource flex"
//               href="https://nx.dev/latest/react/tutorial/01-create-application"
//             >
//               Interactive tutorial
//             </a>
//           </li>
//           <li className="col-span-2">
//             <a className="resource flex" href="https://nx.app/">
//               <svg
//                 width="36"
//                 height="36"
//                 viewBox="0 0 120 120"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z"
//                   fill="#0E2039"
//                 />
//                 <path
//                   d="M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z"
//                   fill="white"
//                 />
//               </svg>
//               <span className="gutter-left">Nx Cloud</span>
//             </a>
//           </li>
//         </ul>
//         <h2>Next Steps</h2>
//         <p>Here are some things you can do with Nx.</p>
//         <details open>
//           <summary>Add UI library</summary>
//           <pre>{`# Generate UI lib
// nx g @nrwl/react:lib ui

// # Add a component
// nx g @nrwl/react:component xyz --project ui`}</pre>
//         </details>
//         <details>
//           <summary>View dependency graph</summary>
//           <pre>{`nx dep-graph`}</pre>
//         </details>
//         <details>
//           <summary>Run affected commands</summary>
//           <pre>{`# see what's been affected by changes
// nx affected:dep-graph

// # run tests for current changes
// nx affected:test

// # run e2e tests for current changes
// nx affected:e2e
//   `}</pre>
//         </details>
//       </main>
//     </div>
//   );
// }

// export default App;
