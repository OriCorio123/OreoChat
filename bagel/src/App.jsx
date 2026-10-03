import Header from './components/navigation/Header'
import Footer from './components/navigation/Footer'
import Body from './components/navigation/Body'


const App = () => {
  return (
    <div className='min-h-dvh w-full flex flex-col place-content-between'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App