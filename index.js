import React from 'react';
import ReactDOM from 'react-dom';


 
class App extends React.Component {
  //state
  constructor(props){
  super (props)
  this.state = {latitude : null}

  }


  render(){
  window.navigator.geolocation.getCurrentPosition(
(position) => {this.setState({latitude :position.coords.latitude })},
(error) => console.log(error)

  );
  
  return(
    <div><h1>My latitude is {this.state.latitude} </h1>
  

     <button> Click me!</button>
    
    </div>
  

  )
}
  }


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

