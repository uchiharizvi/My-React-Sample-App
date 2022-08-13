import * as React from 'react';
import './App.css';
export default class App extends React.Component<{},{}>{
    public render(){
        return(
            <input className="e-input" type="text" placeholder="Enter UserId"/>
        );
    }
};