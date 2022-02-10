import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  handleChange = (event) => {
    let typedCity = event.target.value;
    this.setState({ city: typedCity });
    console.log(typedCity);
  };

  getLocation = async (event) => {
    event.preventDefault();
    const url = 'https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json';
    console.log('URL:', url);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>City Explorer</h1>
            </header>
        <form onSubmit={this.getLocation}>
          Your City:{" "}
          <input type="text" name="yourcity" onChange={this.handleChange} />
          <button>Search</button>
        </form>
        <h2>here is the map for {this.state.city} </h2>
        </div>
    );
  }
}

export default App;