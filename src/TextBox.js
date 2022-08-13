import React, {useState} from 'react';
function TextBox(){
    const [data, setData]=useState(null)
    function getData(val){
        setData(val.target.value)
        console.warn(val.target)
    }
    return(
        <div className="App" align="center">
          <h1>{data}</h1>
          <label>User Name</label>
          <input type="text" onChange={getData}/>
          <br/>
          <label>Password</label>
          <input type="text" onChange={getData}/>
          <br/>
          <button>Login</button>
          <button>Clear</button>
        </div>
      );
    }
export default TextBox