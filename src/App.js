import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import bookimage from './bookimage.PNG'

class App extends Component
{
  constructor(props)
  {
    super(props)

  }
render()
{     
  return(    
    <div className="top_div">
    <div className="top_div1">
    <div className="brand">
    <img src={bookimage} />
    <input type="text" placeholder="Search for Movies,Events,Play,Sports and Activities" id="search_box"/>
    </div> </div>
    <div className="top_div2"></div>
    </div>

  )
}

}
export default App;
