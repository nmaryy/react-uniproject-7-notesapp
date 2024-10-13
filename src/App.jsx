import './App.css'
import Body from './components/Body'
import Header from './components/Header'

function App() {
  let arr = [1]
  let auth = true
  return (
    <div className='app'>
      <Header auth={auth} />
      <Body arr={arr} />
    </div>
  )
}

export default App
