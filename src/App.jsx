import { useState } from "react"



function Square({length}){

  let scale = 3;

  let x_1 = 50;
  let y_1 = 50;

  let x_2 = (+length + x_1)*scale;

  return (
    <>
      <p>{length}</p>
       <svg height="500" width="500">
  <line x1={x_1} y1={y_1} x2={x_2} y2={y_1} stroke="black" strokeWidth="3"/>
  <line x1={x_1} y1={y_1} x2={x_1} y2={x_2} stroke="black" strokeWidth="3"/>
  <line x1={x_1} y1={x_2} x2={x_2} y2={x_2} stroke="black" strokeWidth="3"/>
  <line x1={x_2} y1={y_1} x2={x_2} y2={x_2} stroke="black" strokeWidth="3"/>


      </svg> 
    </>
  )
}

function Rectangle({len_one, len_two}){
  let scale = 3;

  let x_1 = 50;
  let y_1 = 50;

  let x_2 = (+len_one + x_1)*scale;
  let x_2_2 = (+len_two + x_1)*scale;

  return (
    <>
      
       <svg height="500" width="500">
  <line x1={x_1} y1={y_1} x2={x_2} y2={y_1} stroke="black" strokeWidth="3"/>
  <line x1={x_1} y1={y_1} x2={x_1} y2={x_2_2} stroke="black" strokeWidth="3"/>
  <line x1={x_1} y1={x_2_2} x2={x_2} y2={x_2_2} stroke="black" strokeWidth="3"/>
  <line x1={x_2} y1={y_1} x2={x_2} y2={x_2_2} stroke="black" strokeWidth="3"/>
      </svg> 
    </>
  )
}

function Triangle({len_one, len_two, len_three}){

  let scale = 1.5;

  let x_1 = 200;
  let y_1 = 100;

  let x_2 = (+len_one + x_1)*scale;
  let x_2_2 = (+len_two + x_1)*scale;

  return (
    <>
      
       <svg height="500" width="500">
       <polygon points={` ${x_1},${y_1} ${x_2},${x_2_2} `}
       stroke="black" strokeWidth="3"
       fill="none"/>
  
      </svg> 
    </>
  )

}

function App() {

  const [lengthOne, setLengthOne] = useState(30)
  const [lengthTwo, setLengthTwo] = useState(30)
  const [lengthThree, setLengthThree] = useState(30)
  const [selectedShape, setSelectedShape] = useState("square")

  return (
    <>
      <div>
          <div className="slide-container">
              <input type="range" min="1" max="100" value={lengthOne}
              onChange={(e) => {setLengthOne(e.target.value)}}
              class="slider" id="myRange"
              />

              <input type="range" min="1" max="100" value={lengthTwo}
              onChange={(e) => {setLengthTwo(e.target.value)}}
              class="slider" id="myRange"
              disabled={selectedShape === 'square'}
              />

              <input type="range" min="1" max="100" value={lengthThree}
              onChange={(e) => {setLengthThree(e.target.value)}}
              class="slider" id="myRange"
              disabled={selectedShape === 'square' || selectedShape === 'rectangle'}
              />
              
          </div>
          <div className="shape-container">
            {selectedShape === 'square' &&
              <Square length={lengthOne}/>
            }
            {selectedShape === 'rectangle' &&
              <Rectangle len_one={lengthOne}
              len_two={lengthTwo}
              />
            }
            {selectedShape === 'triangle' &&
              <Triangle len_one={lengthOne}
              len_two={lengthTwo}
              len_three={lengthThree}
              />
            }
            
          </div>
          
            <select value={selectedShape}
              onChange={(e) => {setSelectedShape(e.target.value)}}
            >

              <option value="square">Square</option>
              <option value="rectangle">Rectangle</option>
              <option value="triangle">Triangle</option>

            </select>
            
          
      </div>
    </>
  )
}

export default App
