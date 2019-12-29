import React, { Component } from 'react';
import axios from "axios";
import TopSpot from './topspot';

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        topspots: []
      }
    }

    componentWillMount() {
      axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
    }
  
  render() {
    return (
      <div className='App'>
        <div className='container-fluid'>
          <br />
          <br />
          <div className='card text-center bg-light'>
            <div className='card-header'>
              <h1>San Diego Top Spots</h1>
            </div>
            <div className='card-body'>
              <h5>A list of the top 30 places to see in San Diego, California</h5>
            </div>
          </div>
          <br />
          <hr />
          <br />
          {
            this.state.topspots.map(topspot => (
              <div>
                <div className='card bg-light'>
                  <TopSpot
                    key={topspot.id}
                    name={topspot.name}
                    description={topspot.description}
                    location={topspot.location}
                  />
                </div>
                <br />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
