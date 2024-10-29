import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Backdrop from './components/Backdrop'
import { useMode } from './assets/ContextProvider';

function App() {
  const [editShown, setEditShown] = useState(false)
  const [editorShown, setEditorShown] = useState(false)
  const [arr, setArr] = useState([])
  const [editingItem, setEditingItem] = useState({})
  let auth = true
  const { mode } = useMode()

  function editorHandler() {
    setEditShown(!editShown)

  }

  function itemEditHandler(a) {
    setEditorShown(!editorShown)
    setEditingItem(a)
  }

  function ArrayMakeHandler() {
    setEditShown(false)
  }


  function ArrayUpdateHandler() {
    setEditorShown(false)
  }


  return (
    <div className={mode ? 'app' : 'app dark'}>
      {editShown && <Backdrop onClose={editorHandler} />}
      {editorShown && <Backdrop onClose={itemEditHandler} />}
      <Header
        auth={auth} onEdit={editorHandler}
        onItemEdit={itemEditHandler}
      />
      <Body onItemEdit={itemEditHandler}
        editingItem={editingItem}
        onArrayMake={ArrayMakeHandler}
        onArrayUpdate={ArrayUpdateHandler}
        editorShown={editorShown}
        auth={auth} editShown={editShown} />
    </div>
  )
}

export default App
