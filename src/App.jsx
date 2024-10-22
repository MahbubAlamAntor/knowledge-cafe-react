import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'

function App() {

  return (
    <>
      <Header></Header>
      <main className='flex'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </main>
    </>
  )
}

export default App
