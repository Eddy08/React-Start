import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

const rootElement = document.getElementById("root");
// let count = 0;
// use of fontFamily:'in quotes' --> font-family:center;

const styles = {
  fontFamily: "Times New Roman",
  textAlign: "center"
};

// const App2 = (props) => (
//   <div style={styles}>
//   <h2>{props.count}</h2>
//   </div>
// );

// class App3 extends React.Component{
//   render(){
//     return (
//        <div style={styles}>
//   <h2>{this.props.count}</h2>
//   </div>
//     )
//   }
// }

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state is an object count =Key :0: value
      count: 0
    };
  }
  increaseCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
    // this.setState({count:this.state.count+1})
    // this.setState({count:this.state.count+1})
    console.log(this.state.count);
  }

  render() {
    return (
      <div style={styles}>
        <h1>
          State Props{" "}
          <span role="img" aria-label="car">
            🚗
          </span>{" "}
        </h1>
        {/* Cannot bind increaseCount() */}
        {/* one way */}
        {/* <button onClick={this.increaseCount.bind(this)}>Increase</button> */}
        {/* 2nd way */}
        <button onClick={() => this.increaseCount()}>Increase</button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

// setInterval(()=>(ReactDOM.render(
//   <React.StrictMode>
//    {/* <App /> */}
//     {/*
//     props
//     <App2 count={count++} />
//     States
//     */}
//     <App3 count={count++} />
//   </React.StrictMode>,
//   rootElement
// )
// ,1000));

ReactDOM.render(
  <React.StrictMode>
    <App4 />
  </React.StrictMode>,
  rootElement
);
