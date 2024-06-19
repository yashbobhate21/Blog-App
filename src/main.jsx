import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout,Loggin, Signup} from './components/index.js'
import Home from './pages/Home.jsx'
import AllPosts from "./pages/AllPosts.jsx"
import AddPost from "./pages/AddPost.jsx"
import EditPost from "./pages/EditPost.jsx"
import Post from "./pages/Post.jsx"



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children : [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Loggin/>
          </AuthLayout>  
        )
      },
      {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <AllPosts />
            </AuthLayout>
        ),
    },
    {
      path: "/signup",
      element: (
          <AuthLayout authentication={false}>
              <Signup/>
          </AuthLayout>
      ),
  },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost />
            </AuthLayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost />
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post />,
    },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)

