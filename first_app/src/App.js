import React from 'react';
import './App.css';

function App() {
    const topic="JSX";
    const subjects=['javascript ','github ','vercel'];
    const age=18;
    const gpu=[
      {
        name:'Nvidia',
        strg:'RTX 4090',
        desciption:'NVIDIA specializes in high-performance GPUs that excel in gaming, AI, and scientific computing, offering efficient parallel processing and real-time ray tracing capabilities. ',
        plu:['adv tech','costlier','strongest'],
        image:'https://imgs.search.brave.com/nP6xEhZnaMETeERfQ8ZALVVMokCeWQbSdDmjlqnBDX8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L2Ntcy5pcHJlc3Ny/b29tLmNvbS8yMTkv/ZmlsZXMvMjAyMjQv/NjI3NTY5NDNiM2Fl/ZDM1NTA1ZDY1MDNm/X05WSURJQS1sb2dv/LUJML05WSURJQS1s/b2dvLUJMX3RobWIu/anBn'
      },
      {
        name:'AMD',
        strg:'RX 7900 XTX',
        desciption:'AMD provides GPUs and CPUs, focusing on delivering strong value and competitive performance.',
        plu:['competitive','cheaper','value for money'],
        image:'https://imgs.search.brave.com/trBwp1YZWdmGk2swWuqdU3zlwX40Mnwy-KVAO2YYx2o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9hbWQtbG9nby5w/bmc'

      }
    ]
    return(
      <div className="App">
        {/*this how you comment in JSX 
        in jsx there is no if conditions(use turnary)
        also there is no looping statements(use mapping)*/}
      <h1 id="header-id">{topic} is Fantastic</h1>
      <h2>{subjects}</h2>
      <h2>{true}</h2>
      {age>17?<h3>Live everyday</h3>:<h3>Play everyday</h3>
      } 
      {subjects.map(looper => <h3>{looper}</h3>)
      }  
      <h1>GRAPHICS CARD</h1> 
      <ul className="container">
        {
          gpu.map((looper,index)=>
           <li>
             <h1>{looper.name}</h1>
             <p>{looper.desciption}</p>
             <img src={looper.image} width="200px"
             height="200px"></img>
             <ul className="plus">
              {looper.plu.map((loope,index)=><h2>{loope}</h2>)}
             </ul>
             </li>
          )
        }
      </ul>
    </div>
    );
    




 

    {/*we dont use createElement
    //const jsx=<h1>JSX is awsome!!</h1>
    //const elem=React.createElement("h1",null,"JSX is awsome!!");
    //console.log(elem);
    */}
  
}

export default App;
