import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-slate-100'>
      <Main />
      <Footer name='RatedYK' />
    </div>
  )
}

export default App