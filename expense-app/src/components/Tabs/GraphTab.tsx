import React, { useState } from 'react'

import './tab.scss';

function GraphTab() {
    const [toggleState, setToggleState] = useState(1);
   
  
    const toggleTab = (index: number) => {
      setToggleState(index);
    };
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
           Income vs. Expenses
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
           Income per category
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
           Expenses per category
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
           Income vs. Expenses Daily
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <div className="header-button"><h2>Income vs. Expenses</h2>
           
             </div>
          </div>
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <div className="header-button">
              <h2>Income per category</h2> 
            
              </div>
          </div>
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <div className="header-button">
              <h2>Expenses per category</h2> 
            
              </div>
          </div>
          <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >
            <div className="header-button">
              <h2>Income vs. Expenses Daily</h2> 
            
              </div>
          </div>
        </div>
      </div>
    )
}

export default GraphTab