import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote]= useState({
    title: "",
    content: ""
  });


  //Handling a change in the Title
  function handleChange (event) {
    const {name, value} = event.target;

    setNote(prevNote =>{
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote (event){

    //This calls addNote function from APP.jsx
    props.onAdd(note);

    //Clear array after adding notes
    setNote({
      title:"",
      content:""
    });

    event.preventDefault();
  }

  return (
    <div>
      <form >
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
