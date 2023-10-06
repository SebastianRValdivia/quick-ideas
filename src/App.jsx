import { useState } from 'react';
import './App.css';
import NewIdeaButton from './components/NewIdeaButton' ;
import NewIdeaInput from './components/NewIdeaInput';
import IdeasList from './components/IdeasList';
import SaveButton from './components/SaveButton';

function App() {
  const [showInput, setShowInput] = useState(false);
  const [ideasList, setIdeasList] = useState([]);
  const [brainstormName, setBrainstormName] = useState("");
  const [brainstorms, setBrainstorms] = useState([]);

  const handleNewIdeaButtonClick = () => {
    setShowInput(!showInput)
  };
  const handleNewIdea = (text) => {
    setIdeasList([...ideasList, text]);
    setShowInput(!showInput);
  };
  const handleInputChange = (e) => {
    setBrainstormName(e.target.value);
  };
  const handleBrainStormClick = () => {
    function getAllLocalStorageKeys() {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
      }
      return keys;
    };
    setBrainstorms(getAllLocalStorageKeys());
  };

  return (
    <>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-bg" htmlFor="modal-1"></label>
        <div className="modal-body">
          <label className="btn-close" htmlFor="modal-1">X</label>
            {brainstorms.map((bs, index) => (
              <li key={index}>{bs}</li>
            ))}
        </div>
      </div>
      <nav className="row flex-edges">
        <div className="col">
          <label onClick={handleBrainStormClick} className="paper-btn margin" htmlFor="modal-1">Brainstorms</label>
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="Brainstorm name"
            value={brainstormName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <SaveButton ideasList={ideasList} brainstormName={brainstormName} />
        </div>
      </nav>


      <IdeasList ideas={ideasList} />
      {showInput ? (
        <div className="row flex-center">
          <NewIdeaInput onPressEnter={handleNewIdea}/>
        </div>
      ) : (
        <div className="row flex-center">
          <NewIdeaButton newIdeaButtonClick={handleNewIdeaButtonClick}/>
        </div>
      )
      }
    </>
  )
}

export default App
