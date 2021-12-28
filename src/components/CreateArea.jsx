import React, { useState } from "react";

function CreateArea() {
  const [keeper, setKeeper] = useState({
    title: "",
    content: ""
  });

  const [titles, setTitles] = useState([]);
  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setKeeper((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    console.log(value);
    console.log(name);
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
