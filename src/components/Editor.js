import React, {  useState } from 'react'

const Editor = () => {

  const [text,setText] = useState('')

  const handleChange =(e) => {
    setText(e.target.value)
  }

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "risky-writing-app.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  return (
    <div className="editor-container">
      <button onClick={handleDownload}>Download</button>
      <input className="editor-input" type="text" name="text" value={text} onChange={handleChange}/>
    </div>
  )
}

export default Editor
