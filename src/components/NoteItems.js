import React, { useContext } from "react";
import { Link } from "react-router-dom";
import noteContext from "../context/noteContext";

const NoteItems = (props) => {
  const contex = useContext(noteContext)
  const{deletenote}=contex
  const { note ,updateNote } = props;
  return (
    <div className="col-md-4 my-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>
          <Link to ="">
          <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
          </Link>
          <Link to ="">
          <i className="fa-solid fa-trash mx-2" onClick={()=>{deletenote(note._id)}}></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteItems;
