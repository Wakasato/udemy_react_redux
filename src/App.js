import React,{ Component } from "react";

const App = () => {
  return <Counter></Counter>
}


class Counter extends Component {
  constructor(props){
    super(props)
    console.log(this.state)
    this.state = {count : 0}
  }

handlePlusBUtton = () => {
 this.setState({count : this.state.count + 1})
}
handleMinusBUtton = () =>{
  this.setState({count :this.state.count - 1})
}

  render(){
    console.log(this.state)
    return(
         <React.Fragment>
          count:{this.state.count}
            <button onClick={this.handlePlusBUtton}>+1</button>
            <button onClick={this.handleMinusBUtton}>-1</button>
       </React.Fragment>
      )
  }
}




export default App;
