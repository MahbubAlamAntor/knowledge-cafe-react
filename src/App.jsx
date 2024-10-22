import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import { useState } from 'react'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  
  const handleBooksBtn = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookMarks(newBookmarks)
  }

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time)
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <main className='flex'>
        <Blogs handleBooksBtn={handleBooksBtn}  handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </div>
  )
}

export default App
