import { useState } from "react"



function Square({length, label}){

  let scale = 3;
  let x_2 = (200 - length)

  return (
    <>
      
       <svg height="500" width="500">
      <rect width={length*scale} height={length*scale} x={x_2} y={x_2}
       fill="none"
       stroke="black" 
       strokeWidth="3"/>
       <text x={x_2 + length*1.2} y={x_2-10} font-size="20" stroke="black">{label}</text>

      </svg> 
    </>
  )
}

function Rectangle({len_one, len_two, label_one, label_two}){
  let scale = 3;
  let x_2 = (200 - len_one)
  let y_2 = (200 - len_two)

  return (
    <>
      
       <svg height="500" width="500">
       <rect width={len_one*scale} height={len_two*scale} x={x_2} y={y_2}
       fill="none"
       stroke="black" 
       strokeWidth="3"/>
       <text x={50 + x_2} y={190 - len_two} font-size="20" stroke="black">{label_one}</text>
      </svg> 
    </>
  )
}

function Triangle({len_one, len_two, len_three}){

  let scale = 2;

  let point_one = [250,100]
  // let point_two = [100,200]
  let point_two = [+ (len_two*scale) +point_one[0],+ (len_one*scale) + point_one[1]]
  let point_three = [- (len_three*scale)+point_one[0],+(len_three*scale) +point_one[1]]
  

  return (
    <>
      
       <svg height="500" width="500">
       <line x1={point_one[0]} y1={point_one[1]} x2={point_two[0]} y2={point_two[1]} stroke="black" strokeWidth="3"/>
       <line x1={point_two[0]} y1={point_two[1]} x2={point_three[0]} y2={point_three[1]} stroke="black" strokeWidth="3"/>
       <line x1={point_three[0]} y1={point_three[1]} x2={point_one[0]} y2={point_one[1]} stroke="black" strokeWidth="3"/>
      
      </svg> 
    </>
  )

}

function App() {

  const [lengthOne, setLengthOne] = useState(30)
  const [lengthTwo, setLengthTwo] = useState(30)
  const [lengthThree, setLengthThree] = useState(30)
  const [selectedShape, setSelectedShape] = useState("square")

  const [sideLabelOne, setSideLabelOne] = useState("10")

  return (
    <>
      <div className="flex-container">
          <div className="shape-container">
                {selectedShape === 'square' &&
                  <Square length={lengthOne}
                    label={sideLabelOne}
                  
                  />
                }
                {selectedShape === 'rectangle' &&
                  <Rectangle len_one={lengthOne}
                  len_two={lengthTwo}
                  label_one={sideLabelOne}
                  />
                }
                {selectedShape === 'triangle' &&
                  <Triangle len_one={lengthOne}
                  len_two={lengthTwo}
                  len_three={lengthThree}
                  />
                }
                
          </div>
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

              <select value={selectedShape}
                onChange={(e) => {setSelectedShape(e.target.value)}}
              >

                  <option value="square">Square</option>
                  <option value="rectangle">Rectangle</option>
                  <option value="triangle">Triangle</option>

              </select>

              <input type="text" value={sideLabelOne}
                onChange={(e) => {setSideLabelOne(e.target.value)}}
              ></input>


              
          </div>
          
          
            
            
          
      </div>
    </>
  )
}

export default App
