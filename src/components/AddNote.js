import React, { useContext ,useState} from 'react'
import noteContext from '../context/noteContext'
import './nav.css'

let AddNote = (props) => {
    const context = useContext(noteContext)
    const{addnote}=context

    const [note, setNote] = useState({title:"",description:"",tag:""})

    const handleclick = (e)=>{
        e.preventDefault();
        addnote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
    }
    const onchange = (e)=>{
        setNote({...note,[e.target.name]: e.target.value })
    }
  return (
    <div className="container add">
        <div className='my-3 addnote text-center mx-2'><b>ADD A NOTE</b></div>
        <form className='container center my-3 mx-2'>
          <div className="mb-3">
            <label className="form-label" htmlFor="Title"><h4>Title<span className="text-danger">*</span></h4></label>
            <input
              type="text"
              name='title'
              value={note.title}
              placeholder='Title must be 5 characters long'
              className="form-control"
              id="Title"
              onChange={onchange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="Descripation"><h4>Descripation<span className="text-danger">*</span></h4></label>
            <input
              type="text"
              name='description'
              value={note.description}
              placeholder='Descripation must be 5 characters long'
              className="form-control"
              id="Descripation"
              onChange={onchange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="Tag "><h4>Tag </h4></label>
            <input
              type="text"
              name='tag'
              value={note.tag}
              className="form-control"
              id="Tag"
              onChange={onchange}
            />
          </div>
          
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary my-3" onClick={handleclick}>
            Submit
          </button>
        </form>
      </div>
  )
}

export default AddNote
