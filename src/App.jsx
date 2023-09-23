import { useState } from 'react'
import './App.css'
import NewIdeaButton from './components/NewIdeaButton' 

function App() {

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
      <div className="row flex-center">
        <NewIdeaButton />
      </div>
    </>
  )
}

export default App
