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
import { useCallback, useState } from 'react';
function App() {
  const [activeHole, setActiveHole] = useState(0);
  // const [back9, setBack9] = useState(false);

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

  const activateHole = useCallback(
    (id) => () => {
      console.log('hole activated', id)
      setActiveHole(parseInt(id));
    }, [],
  )

  const back9 = false;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Poplar Creek Digital Scorecard</h1>
        </header>
        <div className='holeSelection'>
          <div className="front9">
            {front9Arr.map((item) => (
              <button onClick={activateHole(item.id)}>{item.txt}</button>
            ))}          
          </div>
          <div className="back9">          
          { !back9 ? null : 
          back9Arr.map((item) => (
              <button onClick={activateHole(item.id)}>{item.txt}</button>
          ))
          }          
          </div>
        </div>
            <div className='activeHole'>
              { activeHole ? 
                (<>
                  <div className='holeTitle' style={{marginTop: '20px'}}>Hole {activeHole}</div>
                  <div className='holeDetails'>
                    <div className='parent'>
                      <div className='child'>
                        <div>Black: {front9Arr[activeHole - 1]['black']}</div>
                        <div>Gold: {front9Arr[activeHole - 1]['gold']}</div>
                        <div>Silver: {front9Arr[activeHole - 1]['silver']}</div>
                        <div>Par: {front9Arr[activeHole - 1]['par']}</div>
                        <div>Score: <input type='text'></input></div>
                      </div>  
                      <div className='child'>
                        <img className='holeImage' src={front9Arr[activeHole - 1]['img']} alt='hole1'/>
                        </div>
                    </div>
                    <div className='holeNotes'>Notes</div>
                    <div>Tee: <input type='text'></input></div>
                    <div>Approach:<input type='text'></input></div>
                    <div>Pitch: <input type='text'></input></div>
                    <div>Chip: <input type='text'></input></div>
                    <div>Putt: <input type='text'></input></div>
                  </div>
                </>
                )
                
                // : activeHole === 2 ? 
                // 'Hole 2'
                : null
              }
            </div>
            <video src={video} width="400" height="400" controls />
    </div>
  );
}

export default App;