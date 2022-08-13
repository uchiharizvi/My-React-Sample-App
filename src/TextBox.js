import React, {useState} from 'react';
function TextBox(){
    const [data, setData]=useState(null);
    const [print, setPrint]=useState(false);
    function getData(val){
        setData(val.target.value)
        console.warn(val.target)
    }
    return(
        <div className="App" align="center">
          {print?
          <h1>{data}</h1>
          :null
          }
          <label>User Name</label>
          <input type="text" onChange={getData}/>
          <br/>
          <label>Password</label>
          <input type="text" onChange={getData}/>
          <br/>
          <button onClick={()=>setPrint(true)}>Login</button>
          <button>Clear</button>
        </div>
      );
    }
export default TextBox