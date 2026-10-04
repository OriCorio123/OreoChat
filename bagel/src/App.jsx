import Header from './components/navigation/Header'
import Footer from './components/navigation/Footer'
import Body from './components/Body'


const App = () => {
  return (
    <div className='max-h-screen w-full flex flex-col'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App