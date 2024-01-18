import React from 'react';
import './App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage';


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
