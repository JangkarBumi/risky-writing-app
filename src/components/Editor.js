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
    if (wordCount < wordGoal) { // if the wordGoal is reached, stop the timer
      const timer = setTimeout(() => setIsFailed(true), 5000);
      return () => {
        clearTimeout(timer); // reset timer to 0 everytime user type a word
      };
    }
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
    setText('');
  };

  if (isFailed) {
    return (
      <div className="pop-up">
        <h2>Your writing has died.</h2>

        <p>
          I wrote {wordCount} words using The Risky Writing App - until it
          killed my writing.
        </p>
        <Link to="/risky-writing-app/write" onClick={handleNew}>
          Try Again
        </Link>
      </div>
    );
  }

  return (
    <div>
      {wordCount >= wordGoal ? <p className="alert">Success</p> : null}
      <div className="editor-container">
        <h2 className="block">Goal : {wordGoal} Words</h2>
        {wordCount >= wordGoal ? (
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
    </div>
  );
};

export default Editor;
