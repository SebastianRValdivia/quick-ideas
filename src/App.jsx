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

  return (
    <>
      <nav className="row flex-edges">
        <div className="col">
          <button className="btn-block btn-primary">Others brainstorms</button>
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
