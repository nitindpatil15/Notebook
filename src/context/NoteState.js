import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesinitial = [];
  const [notes, setNotes] = useState(notesinitial);

  // Get all Notes
  const getnotes = async () => {
    // API call
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "auth-token":localStorage.getItem('token'),
        },
      });
      const json = await response.json();
      setNotes(json);
      // props.showAlert( json.length===0?'No Notes to Display':'All Notes Fetched','success')
    } catch (error) {
      props.showAlert("Error in Fetchung Notes","danger");
      console.log(error, ": Failed to Fetch API");
    }
  };

  // Add Note
  const addnote = async (title, description, tag) => {
    // API call
    try {
      const response = await fetch(`${host}/api/notes/addnotes/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "auth-token":localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const note =await response.json();
      //  Logic for Adding Notes
      setNotes(notes.concat(note));
      props.showAlert("Added New Note","success")
    } catch (error) {
      alert("Error in Adding Note");
      console.log(error, ": Failed to Fetch API");
    }
    
  };

  // delete Note
  const deletenote = async (id) => {
    // API call
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "auth-token":localStorage.getItem('token'),
        },
      });
      const json =await response.json();
      console.log(json);
      props.showAlert("Deleted Note from Notes" ,"success")
    } catch (error) {
      alert("Error in Adding Note");
      console.log(error, ": Failed to Fetch API");
    }
    // logic for Deleting Notes 
    console.log("Deleting the note with id: " + id);
    const newnotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    setNotes(newnotes);
  };


  // Update Note
  const updatenote = async (id, title, description, tag) => {
    // API call
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "auth-token":localStorage.getItem('token'),
        },
        body: JSON.stringify({ id, title, description, tag }),
      });
      const json = await response.json();
      console.log(json);
      props.showAlert("Updated Existing Note","success")
    } catch (error) {
      alert("Error in updating the Note");
      console.log(error, ": Failed to Fetch API");
    }
    // Logic for Updating Notes
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    console.log(newNotes)
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addnote, deletenote, updatenote, getnotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
