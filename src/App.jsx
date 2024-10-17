import { useEffect, useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Backdrop from './components/Backdrop'

function App() {
  const [editShown, setEditShown] = useState(false)
  const [appMode, setAppMode] = useState(true)



  const [arr, setArr] = useState([{}])

  function ArrayMakeHandler(formTitle, formContent, currDate) {
    console.log(formTitle, formContent, currDate)
    // useEffect(() => {
    //   localStorage.setItem('note', formTitle)
    // }, [])
    console.log(arr)
    setEditShown(false)
  }
  let auth = true
  function editorHandler() {
    setEditShown(!editShown)
  }





  function modeHandler(isChecked) {
    setAppMode(isChecked)
  }
  return (
    <div className={appMode ? 'app' : 'app dark'}>
      {editShown && <Backdrop onClose={editorHandler} />}
      <Header onArrayMake={ArrayMakeHandler} auth={auth} onEdit={editorHandler}
        appMode={appMode} />
      <Body onArrayMake={ArrayMakeHandler} arr={arr} onEdit={editorHandler} editShown={editShown}
        onMode={modeHandler} appMode={appMode} auth={auth} />
    </div>
  )
}

export default App
