import React, { useEffect, useRef, useState,useContext } from "react";
import noteContext from "../context/noteContext";
import NoteItems from "./NoteItems";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
import "./nav.css"

const Notes = (props) => {
  const Context = useContext(noteContext);
  const { notes, getnotes,updatenote} = Context;

  const navigate = useNavigate()
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ id:"",etitle: "", edescription: "", etag: "" });
  useEffect(() => {
    if(localStorage.getItem('token')){
      getnotes();
    }
    else{
      props.showAlert("Login to Continue iNotebook" ,"success")
      navigate('/login')
    }
    
    // eslint-disable-next-line
  }, []);

  const handleclick = (e) => {
    refClose.current.click();
    updatenote(note.id,note.etitle, note.edescription, note.etag);
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const updateNote = (currentnote) => {
    ref.current.click();
    setNote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag,});
  };
  return (
    <>
      <AddNote />

      <button
        type="button"
        ref={ref}
        className="d-none btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group my-3">
                  <label htmlFor="eTitle">Title</label>
                  <input
                    type="text"
                    name="etitle"
                    value={note.etitle}
                    className="form-control"
                    id="eTitle"
                    onChange={onchange}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="eDescripation">Descripation</label>
                  <input
                    type="text"
                    name="edescription"
                    value={note.edescription}
                    className="form-control"
                    id="eDescripation"
                    onChange={onchange}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="eTag ">Tag</label>
                  <input
                    type="text"
                    name="etag"
                    value={note.etag}
                    className="form-control"
                    id="eTag"
                    onChange={onchange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleclick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" container row my-2 note">
        <div className="my-2 getnote mx-2 text-center"><b>YOUR NOTES</b></div>
        {notes.length===0 && <h4 className="text-center mt-3">No Notes to Display</h4>}
        {notes.map((notes) => {
          return (
            <NoteItems  key={notes._id} updateNote={updateNote} note={notes} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
