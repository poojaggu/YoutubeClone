import Header from "./components/Header";
import Body from "./components/Body";
import store from "./utils/store";
import {Provider} from 'react-redux'
import Maincontainer from './components/Maincontainer'
import Watchpage from "./components/Watchpage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Demo from "./components/Demo";

import "./App.css"

const appRouter = createBrowserRouter([{
  element:<Body/>,
  path:"/",
  children:[{
      element:<Demo/>,
      path:"/"
  },
{
  element:<Watchpage/>,
  path:"/:id" 
}]
}]) 


function App() {
  return (
    <Provider store={store}>
     <div>
      <Header/>
      <RouterProvider router={appRouter}/>
     
    </div>
    
    </Provider>
    
  );
}


/**
 * Head
 * Body
 * Sidebar
 * main container:
 *  -> button list
 *  -> 
 * 
 * 
 */
export default App;
