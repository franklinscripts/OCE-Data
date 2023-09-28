import './App.css'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import { createBrowserRouter,  RouterProvider,} from 'react-router-dom';
import Services from './pages/Services';
import Home from './pages/Home';
import History from './pages/History';
import More from './pages/More';
import ErrorPage from './components/404';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Signin />,
  },
  {
    path:"dashboard",
    element: <Dashboard />,
    children: [
      {
        path:'services',
        element: <Services />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path:'history',
        element: <History />,
      },
      {
        path:'more',
        element: <More />,
      },
    ]
  },
  {
    path: '*',
    element: <ErrorPage />,

  }
])
function App() {
  
  return (
    <div className='main' >
      
    
      <RouterProvider router={router} />
   </div>
  )
  
}

export default App















// import { 
//   Switch,
//   Route,
//   Redirect

// } from 'react-router-dom'
// import { useState } from 'react';

// const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
// function handleUserAuth() {
//   setIsUserAuthenticated(true)
// }
{/* <Switch>
<Route 
exact
path='/'
  render={() => {
    return(
      isUserAuthenticated ? <Redirect to='home' /> : <Redirect to='/' />

    )
  }}
  />
</Switch> */}