import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWordContext } from '../context/WordContext';

const Editor = () => {
  const { wordGoal } = useWordContext();

  const [text, setText] = useState('');

  const [isFailed, setIsFailed] = useState(false);

  const wordCount = text.length > 0 ? text.split(' ').length : 0;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsFailed(true), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'risky-writing-app.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const handleNew = () => {
    setIsFailed(false);
    setText('')
  };

  if (isFailed) {
    return (
      <div className="pop-up">
        <h2>Your writing has died.</h2>

        <p>
          I wrote {wordCount} words using The Risky Writing App - until it
          killed my writing.
        </p>
        <Link to="/write" onClick={handleNew}>
          Try Again
        </Link>
      </div>
    );
  }

  return (
    <div className="editor-container">
      <h2 className="block">Goal : {wordGoal} Words</h2>
      {text.length >= wordGoal ? (
        <button onClick={handleDownload}>Download</button>
      ) : null}
      <input
        className="editor-input"
        type="text"
        name="text"
        value={text}
        onChange={handleChange}
      />
      <h2 className="block">{wordCount} Words</h2>
    </div>
  );
};

export default Editor;
