import './App.css';
import hole1 from './hole1.png'
import hole2 from './hole2.png'
import hole3 from './hole3.png'
import hole4 from './hole4.png'
import hole5 from './hole5.png'
import hole6 from './hole6.png'
import hole7 from './hole7.png'
import hole8 from './hole8.png'
import hole9 from './hole9.png'
import video from './IMG_7431.MOV'

// import { useState } from 'react/cjs/react.production.min';
import { useCallback, useEffect, useState } from 'react';
function App() {
  const [activeHole, setActiveHole] = useState(1);
  const [activeHoleDescDetails, setActiveHoleDescDetails] = useState(false);
  const [activeLocation, setActiveLocation] = useState(false);
  const [activeVideo, setActiveVideo] = useState(false);
  const [activeScorecard, setActiveScorecard] = useState(false);
  // const [back9, setBack9] = useState(false);
  const [navigbarHoles, setNavigbarHoles] = useState(false);
  const [score, setScore] = useState({1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: ''});
  const [inputScore, setInputScore] = useState('');
  const [scorecard, setScorecard] = useState([])
  const [name, setName] = useState('');
  const [nameSet, setNameSet] = useState(false);
  const [inputName, setInputName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [inputNote, setInputNote] = useState('');
  const [note, setNote] = useState({1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: ''});
  
  const handleName = (value) => {
    setName(value);
    setNameSet(true);
  }
  const front9Arr = [
    {id: 1, txt: '1', black: '519 Yards', gold: '495 Yards', silver: '467 Yards', par: '5', img: hole1},
    {id: 2, txt: '2', black: '421 Yards', gold: '403 Yards', silver: '372 Yards', par: '4', img: hole2},
    {id: 3, txt: '3', black: '181 Yards', gold: '177 Yards', silver: '143 Yards', par: '3', img: hole3},
    {id: 4, txt: '4', black: '403 Yards', gold: '387 Yards', silver: '372 Yards', par: '4', img: hole4},
    {id: 5, txt: '5', black: '172 Yards', gold: '160 Yards', silver: '128 Yards', par: '3', img: hole5},
    {id: 6, txt: '6', black: '286 Yards', gold: '261 Yards', silver: '239 Yards', par: '4', img: hole6},
    {id: 7, txt: '7', black: '202 Yards', gold: '171 Yards', silver: '160 Yards', par: '3', img: hole7},
    {id: 8, txt: '8', black: '292 Yards', gold: '272 Yards', silver: '262 Yards', par: '4', img: hole8},
    {id: 9, txt: '9', black: '471 Yards', gold: '461 Yards', silver: '450 Yards', par: '5', img: hole9},    
  ]
  const back9Arr = [
    {id: 10, txt: '10'},
    {id: 11, txt: '11'},
    {id: 12, txt: '12'},
    {id: 13, txt: '13'},
    {id: 14, txt: '14'},
    {id: 15, txt: '15'},
    {id: 16, txt: '16'},
    {id: 17, txt: '17'},
    {id: 18, txt: '18'},
  ]
  const handleChange = (currentScore, hole) => {            
    setScore(prevState => ({
      ...prevState,
      [hole]: currentScore
    }))
  }
  const handleNoteChange = (currentNote, hole) => {            
    setNote(prevState => ({
      ...prevState,
      [hole]: currentNote
    }))
  } 
    
    // if(hole === 9){
    //   handleScorecard()
    //   // setScorecard([name, score])
    // }
  
  // const handleScorecard = () => {
  //   setScorecard([name, score])
  // }


  var rad = function(x) {
    return x * Math.PI / 180;
  };
  
  var getDistance = function(lat1, lat2, lon1, lon2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
  };
  
// Driver code   

let latLonPinPlacement = {
  1: [37.5828603, -122.3217053],
  2: [37.5831345, -122.3261496],
  3: [37.5847188, -122.3275172],
  4: [37.5826476, -122.3246655],
  5: [37.583497, -122.3245086],
  6: [37.5854141, -122.3268675],
  7: [37.5843865, -122.3243522],
  8: [37.5824263, -122.3223044],
  9: [37.5859935, -122.3241067],
};

let lat1 = latitude;
// let lat1 = 37.5860402
let lat2 = latLonPinPlacement[activeHole][0]

let lon1 = longitude;
// let lon1 = -122.325313
let lon2 = latLonPinPlacement[activeHole][1]
let yardsToPin = (getDistance(lat1, lat2, lon1, lon2) * 1.09361).toFixed(2);


// yardsToPin = yardsToPin;



  useEffect(() => {
    setScorecard([name, score])
  }, [name, score])
  console.log(scorecard, 'scorecard set')
  const activateHole = useCallback(
    (id) => () => {
      console.log('hole activated', id)
      setActiveHole(parseInt(id));
      setNavigbarHoles(false);
    }, [],
  )

  useEffect(() => {
    if("geolocation" in navigator){ 
      console.log('available')
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      })
    } else {
      console.log('not available')
    }
  })

  const back9 = false;
console.log(note, 'note being tracked')
  return (
    
    <div className="App">
      <header className="App-header">
        <h3>Poplar Creek Digital Scorecard</h3>
        </header>
        <div className='holeSelection'>
          <div className="front9">            
            { !navigbarHoles ? 
              <>
                <button onClick={() => {setNavigbarHoles(true)}} style={{'width': '55px'}}>
                  <div style={{'float': 'left'}}>#{activeHole ?                   
                    <div style={{'fontSize': '30px', 'float': 'right'}}>{activeHole}</div> :  <div style={{'fontSize': '30px', 'float': 'right'}}>1</div>}
                  </div>
                </button>                
              </>
              :             
            front9Arr.map((item) => (
              <button style={{'fontWeight': 'bold', 'fontSize': '25px'}} onClick={activateHole(item.id)}>{item.txt}</button>
            ))}          
          </div>
          <div className="back9">          
            { !back9 ? null : 
            back9Arr.map((item) => (
                <button onClick={activateHole(item.id)}>{item.txt}</button>
            ))
            }          
          </div>
          
            { nameSet ?               
                  <div className='name'>
                    {name}
                    {latitude}
                    {longitude}
                  </div>              
                :
                <div className='setInputName'>
                  Name: <input className='setName' value={inputName} onChange={(e) => {setInputName(e.target.value)}}></input>
                  <button onClick={() => {handleName(inputName); setInputName('');}}>Submit</button>
                </div>
              }          
        </div>
        {activeHole ?
              (<>
                <div className='activeHole'>            
                    <img className='activeHoleImg' src={front9Arr[activeHole - 1]['img']} alt='hole1'/>                                 
                    <div className='holeDesc'>
                      { activeHoleDescDetails ? 
                        <div className='holeDescDetails'>
                          <div>Black: {front9Arr[activeHole - 1]['black']}</div>
                          <div>Gold: {front9Arr[activeHole - 1]['gold']}</div>
                          <div>Silver: {front9Arr[activeHole - 1]['silver']}</div>
                          <div>Par: {front9Arr[activeHole - 1]['par']}</div>
                          <div>Score: {score[activeHole]}</div>
                          <div>
                            <input className='scoreInput' value={inputScore} onChange={(e) => {setInputScore(e.target.value)}}></input>
                            <button onClick={() => {handleChange(inputScore, activeHole); setInputScore(''); }}>Submit</button>
                          </div>
                          <div>
                            <div>Note: {note[activeHole]}</div>
                            Enter notes: <div><input className='noteInput' value={inputNote} onChange={(e) => {setInputNote(e.target.value)}}></input>
                            <button onClick={() => {handleNoteChange(inputNote, activeHole); setInputNote(''); }}>Submit</button></div>
                          </div>
                          <button className='closeHoleDescDetailsBtn' onClick={() => {setActiveHoleDescDetails(false)}}>X</button>
                        </div>
                        : <button className='holeDetailsBtn' onClick={() => {setActiveHoleDescDetails(true)}}>Hole Details</button>
                      }
                    </div>
                    <div className='holeLocation'>
                      {activeLocation ?
                      <div className="styleLocation">
                        <div style={{paddingBottom: '10px'}}>Yards to Pin</div>
                        {/* <div className='latitudeStyle'>latitude: {latitude}</div> 
                        <div className='longitudeStyle'>Longitude: {longitude}</div>                       */}
                        <div>{yardsToPin} Yards</div>
                          {/* // <div className='styleHoleNotes'>
                          //   <div className='holeNotesInput'>
                          //       <div className='holeTitleNotes'>Notes</div>
                          //       <div>Tee: <input type='text'></input></div>
                          //       <div>Approach:<input type='text'></input></div>
                          //       <div>Pitch: <input type='text'></input></div>
                          //       <div>Chip: <input type='text'></input></div>
                          //       <div>Putt: <input type='text'></input></div> */}
                          <button className='closeHoleLocationBtn' onClick={() => {setActiveLocation(false)}}>X</button>
                          </div>
                        : <button className='holeLocationBtn' onClick={() => {setActiveLocation(true)}}>Location</button>
                      }
                    </div>                    
                      {activeVideo ? 
                          <div className='videoContainer'>
                            <button className='closeVideoBtn' onClick={() => {setActiveVideo(false)}}>X</button>
                            <video className='videoStyle' src={video} width="400" height="400" controls />                          
                          </div>
                        :
                          <button className='videoBtn' onClick={() => {setActiveVideo(true)}}>Shot of the Day</button>
                      }
                      {activeScorecard ? 
                        <div className='scorecardTotal'>
                          <div className='scorecardTitle'>Scorecard</div>
                          <div className='scorecardName'>Name: {scorecard[0]}</div>                      
                          <div>
                            <div style={{display:'inline'}}>Hole 1:<div style={{display:'inline', paddingLeft:'15px'}}>{scorecard[1][1]}</div></div>
                            <div style={{fontSize: '12px'}}>{note[1]}</div>
                          </div>
                          <div>
                            <div style={{display:'inline'}}>Hole 2:<div style={{display:'inline', paddingLeft:'15px'}}>{scorecard[1][2]}</div></div>
                            <div style={{fontSize: '12px'}}>{note[2]}</div>
                          </div>
                          <div>
                            <div style={{display:'inline'}}>Hole 3:<div style={{display:'inline', paddingLeft:'15px'}}>{scorecard[1][3]}</div></div>
                            <div style={{fontSize: '12px'}}>{note[3]}</div>
                          </div>
                          <div>
                            <div style={{display:'inline'}}>Hole 4:<div style={{display:'inline', paddingLeft:'15px'}}>{scorecard[1][4]}</div></div>
                            <div style={{fontSize: '12px'}}>{note[4]}</div>
                          </div>
                          <div>
                            <div style={{display:'inline'}}>Hole 5:<div style={{display:'inline', paddingLeft:'15px'}}>{scorecard[1][5]}</div></div>
                            <div style={{fontSize: '12px'}}>{note[5]}</div>
                          </div>
                          <div>
                            <div style={{display:'inline'}}>Hole 6:<div style={{display:'inline', paddingLeft:'15px'}}>{scorecard[1][6]}</div></div>
                            <div style={{fontSize: '12px'}}>{note[6]}</div>
                          </div>
                          <div>
                            <div style={{display:'inline'}}>Hole 7:<div style={{display:'inline', paddingLeft:'15px'}}>{scorecard[1][7]}</div></div>
                            <div style={{fontSize: '12px'}}>{note[7]}</div>
                          </div>
                          <div>
                            <div style={{display:'inline'}}>Hole 8:<div style={{display:'inline', paddingLeft:'15px'}}>{scorecard[1][8]}</div></div>
                            <div style={{fontSize: '12px'}}>{note[8]}</div>
                          </div>
                          <div>
                            <div style={{display:'inline'}}>Hole 9:<div style={{display:'inline', paddingLeft:'15px'}}>{scorecard[1][9]}</div></div>
                            <div style={{fontSize: '12px'}}>{note[9]}</div>
                          </div>                          
                          <button className='closeScorcardBtn' onClick={() => {setActiveScorecard(false)}}>X</button>
                        </div>
                        :
                        <button className="scorecardBtn" onClick={() => {setActiveScorecard(true)}}>Scorecard</button>
                      }
                    </div>
                </>)                
                : null
              }       
              
    </div>
  );
}

export default App;
