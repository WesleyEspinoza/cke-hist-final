import React from 'react';
import logo from './logo.svg';
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import { render } from "react-dom";
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import {withRouter} from 'react-router-dom';


import citations_txt from './data/citations.txt';
import event_1_txt from './data/events/1.txt';
import event_2_txt from './data/events/2.txt';
import event_3_txt from './data/events/3.txt';
import event_4_txt from './data/events/4.txt';
import event_5_txt from './data/events/5.txt';
import event_6_txt from './data/events/6.txt';
import womens_suffrage_image from './images/banner.png'
import event_1_img from './images/events/1.jpeg';
import event_2_img from './images/events/2.jpeg';
import event_3_img from './images/events/3.png';
import event_4_img from './images/events/4.jpeg';
import event_5_img from './images/events/5.jpg';
import event_6_img from './images/events/6.png';

const style = {
  height: 25,
  border: "1px solid white",
  margin: 15,
  padding: "25%",
  backgroundColor: "black",
  color: "white",
  textAlign: "left",
  
};

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log("props:", props)
    this.state = {
      events: [
        null,
        null,
        null,
        null,
        null,
        null
      ],
      citations: null,
      currentEvent: -1
    };
    for (let i = 0; i < this.state.events.length; i++) {
      this.readTextFile(i)
    }
    this.readCitations()
  }

  getFile = (index) => {
    switch (index) {
      case 0:
        return (event_1_txt)
      case 1:
        return (event_2_txt)
      case 2:
        return (event_3_txt)
      case 3:
        return (event_4_txt)
      case 4:
        return (event_5_txt)
      case 5:
        return (event_6_txt)
    }
  }

  getImage = (index) => {
    switch (index) {
      case 0:
        return (event_1_img)
      case 1:
        return (event_2_img)
      case 2:
        return (event_3_img)
      case 3:
        return (event_4_img)
      case 4:
        return (event_5_img)
      case 5:
        return (event_6_img)
    }
  }

  //Wes or Henry: Feel free to DRY this code
  readCitations = () => {
		const rawFile = new XMLHttpRequest();
		rawFile.open("GET", citations_txt, false);
		rawFile.onreadystatechange = () => {
      console.log("Citations rawFile:", rawFile)
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
          const allText = rawFile.responseText;
        
          //setState is not working inside of this internal function
          this.state['citations'] = allText
				}
			}
		};
		rawFile.send(null);
  }
 
  readTextFile = (event) => {
    const file = this.getFile(event)
    console.log("reading file")
		const rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
      console.log(rawFile)
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
          const allText = rawFile.responseText;
          const textParts = allText.split("{{START}}")
        
          //setState is not working inside of this internal function
          this.state['events'][event] = {
            index: event,
            name: textParts[1],
            body: textParts[2]
          }
          if (event === this.state.events.length) {
            this.state.currentEvent = 1
          }
				}
			}
		};
		rawFile.send(null);
  };

  renderEvents() { 
    return this.state.events.map(event => (
      <Carousel.Item
        style={{padding: 100}}
      >
        <img
          className="d-block"
          src={this.getImage(event['index'])}
          alt={event["name"]}
          style={{
            width: "100%", height: "900px",
            "-webkit-filter": "brightness(50%)"
          }}
        />
        <Carousel.Caption>
          <h3>{event["name"]}</h3>
          <p style={{color: "black", paddingTop: "150px"}}>
            {event["body"].slice(0, 300) + "..."}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  }

  getHomePageContent = () => {
    return (
      <div>
        <Image style={{width: "100%"}} src={womens_suffrage_image} fluid />
        <hr />
        <Carousel style={{width: "100%", height: "900px"}}>
          { this.renderEvents() }
        </Carousel>
        <hr />
      </div>
    )
  }

  getCitationsPageContent = () => {
    return (
      <div>
        <Image style={{width: "100%"}} src={womens_suffrage_image} fluid />
        <hr />
        <div style={{
          paddingTop: '150px',
          textAlign: 'center',
          display: 'block'
        }}>
          <h1>Citations</h1>
          <hr />
          <span style={{color: "white"}}>
            {this.state.citations.split('\n').map(text => <p>{text}</p>)}
            </span>
        </div>
        <hr />
      </div>
    )
  }

  getEventContent = (eventId) => {
    const event = this.state.events[eventId]
    const eventImage = this.getImage(eventId)
    return (
      <div style={{
        paddingTop: '150px',
        textAlign: 'center',
        display: 'block'
      }}>
        
        <Image style={{
          maxWidth: "100%",
          "-webkit-filter": "brightness(50%)"
        }} src={eventImage} fluid />
        <hr />
        <h1>{event["name"]}</h1>
        <hr />
        <Carousel style={{width: "100%", height: "900px"}}>
          <Carousel.Item
            style={{padding: 100}}
          >
            <img
              className="d-block"
              src={this.getImage(event['index'])}
              alt={event["name"]}
              style={{
                width: "100%", height: "900px",
                "-webkit-filter": "brightness(50%)"
              }}
            />
            <Carousel.Caption>
              <h3>{event["name"]}</h3>
            </Carousel.Caption>
            <hr />
            <p style={{color: "black"}}>
              {event["body"].split('\n').map(text => <p>{text}</p>)}
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }

  renderContent = () => {
    if (this.state.currentEvent === -2) {
      return this.getCitationsPageContent()
    } else if (this.state.currentEvent >= 0 && this.state.currentEvent < this.state.events.length) {
      return this.getEventContent(this.state.currentEvent)
    } else {
      return this.getHomePageContent()
    }
  }
  
  getNavBar = () => {
    return ( 
        <NavBar numberOfEvents={this.state.events.length} changeEvent={(event) => {
          console.log("New event:", event)
          this.setState({currentEvent: event})}
        }
        />
    )
  }


  render() {
    console.log('This.state:', this.state)
    console.log('this.props', this.props)
    return (
      <div style={{background: "black"}}>
        {this.getNavBar(this.state.currentEvent !== -1)}
        <div style={{width: "100%", height: "100%"}}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

render(withRouter(props => <App {...props} />), document.getElementById("root"));
export default App;

