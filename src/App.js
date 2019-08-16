import React from 'react';
import Form from './components/Form';
import { Game } from './components/Game';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


export default class App extends React.Component {

  state = {
    lang: 'en_GB',
    data: {},
    loading: false
  }

  startLoading = (e) => {
    e.preventDefault();
    console.log(this.state.lang);

    this.setState({
      loading: true
    });

    fetch('https://eu-offering.kambicdn.org/offering/api/v2/paf/event/live/open.json?lang=' + this.state.lang + '&market=FI')
      .then(data => data.json())
      .then(formattedData => {
        this.setState({
          data: formattedData,
          loading: false
        });
      })
  }

  getLanguage = e => {
    this.setState({
      lang: e.target.value
    })
  }

  render() {
    const logic = () => {

      if (this.state.loading) {
        return <div>LOADING CONTENT ...... </div>
      } else if (this.state.data.liveEvents) {
        return this.state.data.liveEvents.map((event) =>
          <Game key={event.event.id}
            eventName={event.event.name}
            eventSport={event.event.sport}
            eventGroup={event.event.group}
          />)
      }

    }
    return (
      <div className="card-list" >
        <h1>View Live Games</h1>
        <br />
        <Form
          onChange={this.getLanguage}
          onSubmit={this.startLoading}
        />
        {logic()}
      </div >
    )
  }
}