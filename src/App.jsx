import { NavLink, Routes, Route } from 'react-router-dom'
import GetPosts from './components/GetPosts'
import CreatePost from './components/CreatePost'
import PutPost from './components/PutPost'
import EditPost from './components/EditPost'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<GetPosts/>}/>
      
      <Route 
        path='/posts/new' 
        element={<CreatePost/>}
      />
      <Route 
        path='/posts/:id'
        element={<PutPost/>}
      />
      <Route
        path='/posts/edit/:id'
        element={<EditPost/>}
      />
    </Routes>
    </>
  )
}

export default App
