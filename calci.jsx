import React from 'react';
import ReactDOM from 'react-dom';
import './calci.css';

class NumberUpdater extends React.Component{
constructor(props){
    super(props);
    this.Incrementer = this.Incrementer.bind(this);
    this.Decrementer = this.Decrementer.bind(this);
    this.state={
      Operand: 100000000,
    }
}


Incrementer(e){
    this.setState({Operand:this.state.Operand+1});
}

Decrementer(e){
    this.setState({Operand:this.state.Operand-1});
}


render(){
return(
<div>
  <h3>Number Updater.</h3>
  <h2 className="result" >{this.state.Operand}</h2>
  <div className="buttons">
  <UpdaterButton value="+" action={this.Incrementer}/>


  <UpdaterButton value="-" action={this.Decrementer}/>
  </div>
</div>
);

}

}

function UpdaterButton(props){
    const v = props.action;
    const a = props.value;
return(

<button  className="Actualbutton" onClick={v} >{a}</button>

);
}

ReactDOM.render(<NumberUpdater/>, document.getElementById("root"));
export default NumberUpdater;