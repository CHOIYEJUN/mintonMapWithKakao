import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeMap from "./routes/Map";
import MyAroundList from "./routes/MyAroundList";



function App() {

    const router = createBrowserRouter([
        {
            path :"/",
            element:<HomeMap />
        },
        {
            path :"/around",
            element:<MyAroundList />

        }
    ]);

    return (
      <div className="App">
          <RouterProvider router={router} />
      </div>
  );
}

export default App;
