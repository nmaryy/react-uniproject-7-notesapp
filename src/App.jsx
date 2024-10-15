import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Backdrop from './components/Backdrop'
// import ReactMde from "react-mde";
// import * as Showdown from "showdown";
// import 'react-mde-all.css'
function App() {
  const [editShown, setEditShown] = useState(false)

  let arr = [1]
  let auth = true
  function editorHandler() {
    setEditShown(!editShown)
    console.log(editShown)
  }
  return (
    <div className='app'>
      {editShown && <Backdrop onClose={editorHandler} />}
      <Header auth={auth} onEdit={editorHandler} />
      <Body arr={arr} onEdit={editorHandler} editShown={editShown} />
    </div>
  )
}

export default App
