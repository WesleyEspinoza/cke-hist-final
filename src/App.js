import React from 'react';
import logo from './logo.svg';
import './css/App.css'
import NavBar from "./components/navbar";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

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
  state = {
    items: Array.from({ length: 6 }),
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 6) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 6);
  };

  render() {
    return (
      <div>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              <div className="left-side ">
                div - #{index}
              </div>
              
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
export default App;

