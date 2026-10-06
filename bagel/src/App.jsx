import Header from './components/navigation/Header'
import Footer from './components/navigation/Footer'
import Body from './components/Body'
import { Routes, Route } from 'react-router-dom'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import CreatorHub from './pages/CreatorHub'
import Upload from './pages/Upload'

const App = () => {
  return (
    <div className='max-h-dvh h-dvh w-full flex flex-col bg-[url("/background-mobile.png")] md:bg-[url("/background.png")] bg-cover'>
      <Header />
      <flex-1-container className='flex-1 overflow-auto'>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/creatorhub' element={<CreatorHub />} />
          <Route path='/upload' element={<Upload />} />
        </Routes>
      </flex-1-container>
      <Footer />
    </div>
  )
}

export default App