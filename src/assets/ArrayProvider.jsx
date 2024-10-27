import { createContext, useContext, useState, useEffect } from "react"

const ArrayContext = createContext()


export function useArray() {
    return useContext(ArrayContext)

}


function ArrayProvider({ children }) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const stringData = localStorage.getItem('notes')
        if (stringData !== null) {
            const storedNotes = JSON.parse(stringData || [])
            setNotes(storedNotes)
            console.log(notes)
        }
    }, [])

    const addNote = (data) => {
        const note = {
            id: crypto.randomUUID(),
            title: data.formTitle,
            content: data.formContent,
            date: data.date,
            time: data.time,
            state: 'pending',
            updatedAt: new Date().valueOf(),
        };

        setNotes((curr) => {
            const newNotes = [note, ...curr];
            console.log(newNotes);
            localStorage.setItem('notes', JSON.stringify(newNotes));
            return newNotes;
        });
    };

    const hideNote = (noteId) => {
        setNotes((curr) => {
            const updatedArr = curr.map((note) =>
                note.id !== noteId
                    ? note
                    : {
                        ...note,
                        state: 'hidden',
                        updatedAt: new Date().valueOf(),
                    }
            );
            localStorage.setItem('notes', JSON.stringify(updatedArr));
            return updatedArr;
        });
    };

    const doneNote = (noteId) => {
        setNotes((curr) => {
            const updatedArr = curr.map((note) =>
                note.id !== noteId
                    ? note
                    : {
                        ...note,
                        state: 'done',
                        updatedAt: new Date().valueOf(),
                    }
            );
            localStorage.setItem('notes', JSON.stringify(updatedArr));
            return updatedArr;
        });
    };

    const deleteNote = (noteId) => {
        setNotes((curr) => {
            const updatedArr = curr.filter((note) => note.id !== noteId);
            localStorage.setItem('notes', JSON.stringify(updatedArr));
            return updatedArr;
        });
    };

    const updateNote = (updatedNote) => {
        setNotes((curr) => {
            const updatedNotes = curr.map((note) =>
                note.id !== updatedNote.id
                    ? note
                    : {
                        ...note,
                        ...updatedNote,
                        updatedAt: new Date().valueOf(),
                    }

            );
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            console.log(updatedNotes)
            return updatedNotes;
        });
    };

    return (
        <ArrayContext.Provider value={{
            notes, addNote, hideNote, doneNote, deleteNote, updateNote
        }}>
            {children}
        </ArrayContext.Provider>
    )
}

export default ArrayProvider