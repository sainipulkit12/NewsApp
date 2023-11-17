
import Navbar from './components/Navbar'
import NewsBox from './components/NewsBox'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<NewsBox key='general' category='general' />} />
          <Route path='/sports' element={<NewsBox key='sports' category='sports' />} />
          <Route path='/business' element={<NewsBox key='business' category='business' />} />
          <Route path='/science' element={<NewsBox key='science' category='science' />} />
          <Route path='/entertainment' element={<NewsBox key='entertainment' category='entertainment' />} />
          <Route path='/technology' element={<NewsBox key='technology' category='technology' />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
