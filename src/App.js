import React from 'react'
import ReactPlayer from 'react-player/youtube'

import './App.css';

function App() {
  return (
    <div className="App">
   <h2>React Player</h2>

<ReactPlayer url='https://youtu.be/x3NocsqPR94' 
controls="true"
/>
    </div>
  );
}

export default App;
