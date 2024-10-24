import { useEffect, useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Backdrop from './components/Backdrop'
import { useMode } from './assets/ContextProvider';

function App() {
  const [editShown, setEditShown] = useState(false)
  const [editorShown, setEditorShown] = useState(false)
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [del, setDel] = useState(JSON.parse(localStorage.getItem('delete')) || [])
  const [done, setDone] = useState(JSON.parse(localStorage.getItem('done')) || [])
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


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(arr))
  }, [arr])
  useEffect(() => {
    localStorage.setItem('delete', JSON.stringify(del))
  }, [del])
  useEffect(() => {
    localStorage.setItem('done', JSON.stringify(done))
  }, [done])

  function ArrayMakeHandler(formTitle, formContent, month, day, year, hour, minute) {
    const newNote = {
      id: crypto.randomUUID(),
      title: formTitle,
      content: formContent,
      month: month,
      day: day,
      year: year,
      hour: hour,
      minute: minute
    }
    setArr(prevArr => [newNote, ...prevArr])
    setEditShown(false)
  }


  function ArrayUpdateHandler(formTitle, formContent, month, day, year, hour, minute, id) {
    setArr(oldNotes => {
      const newArr = []
      oldNotes.map((note) => {
        if (note.id === id) {
          console.log(oldNotes)
          newArr.unshift({
            id: id,
            title: formTitle,
            content: formContent,
            month: month,
            day: day,
            year: year,
            hour: hour,
            minute: minute
          })
          console.log(formTitle)

        } else {
          newArr.push(note)
        }
      })
      return newArr
    })
    setEditorShown(false)
    console.log(arr)

  }


  function deleteNoteHandler(event, noteId) {
    event.stopPropagation()
    setDel(prevDel => {
      let delItem = arr.find(note => note.id === noteId)
      return [delItem, ...prevDel]
    }
    )
    setArr(oldNotes =>
      oldNotes.filter(note => note.id !== noteId)
    )

  }

  function deleteDoneHandler(event, noteId) {
    event.stopPropagation()
    setDel(prevDel => {
      let delItem = done.find(note => note.id === noteId)
      return [delItem, ...prevDel]
    }
    )
    setDone(oldNotes =>
      oldNotes.filter(note => note.id !== noteId)
    )

  }
  function deleteTrashHandler(event, noteId) {
    event.stopPropagation()
    setDel(oldNotes =>
      oldNotes.filter(note => note.id !== noteId)
    )

  }
  function doneNoteHandler(event, noteId) {
    event.stopPropagation()
    setDone(prevDone => {
      let doneItem = arr.find(note => note.id === noteId)
      return [doneItem, ...prevDone]
    }
    )
    setArr(oldNotes =>
      oldNotes.filter(note => note.id !== noteId)
    )

  }
  return (
    <div className={mode ? 'app' : 'app dark'}>
      {editShown && <Backdrop onClose={editorHandler} />}
      {editorShown && <Backdrop onClose={itemEditHandler} />}
      <Header onArrayMake={ArrayMakeHandler} arr={arr} auth={auth} onEdit={editorHandler}
        mode={mode}
        onDelete={deleteNoteHandler}
        onDone={doneNoteHandler}
        onDelDone={deleteDoneHandler}
        onDelTrash={deleteTrashHandler}
        del={del}
        done={done}
      />
      <Body onItemEdit={itemEditHandler}
        editingItem={editingItem}
        onArrayMake={ArrayMakeHandler}
        onArrayUpdate={ArrayUpdateHandler}
        arr={arr} onEdit={itemEditHandler} editorShown={editorShown}
        mode={mode} auth={auth} editShown={editShown} />
    </div>
  )
}

export default App
