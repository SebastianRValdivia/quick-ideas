import { useState } from 'react';
import './App.css';
import NewIdeaButton from './components/NewIdeaButton' ;
import NewIdeaInput from './components/NewIdeaInput';

function App() {
  const [showInput, setShowInput] = useState(false);

  const handleNewIdeaButtonClick = () => {
    setShowInput(!showInput)
  };
  const handleNewIdea = (text) => {
    setShowInput(!showInput)
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-header">
          <div className="row">
            <div className="col-12 col">
              <button className="btn-block btn-primary">Others brainstorms</button>
            </div>
          </div>
        </div>
      </nav>
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
