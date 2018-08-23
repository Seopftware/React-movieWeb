import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movieTitles = [
    "Jaekjeon",
    "GongJo",
    "Dokjeon"
];

const movieImgaes = [
    "http://newsimg.sedaily.com/2017/09/01/1OKUWGCY4E_1.jpg",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/c/c1/%EC%98%81%ED%99%94_%EA%B3%B5%EC%A1%B0.jpg/250px-%EC%98%81%ED%99%94_%EA%B3%B5%EC%A1%B0.jpg",
    "https://img.pooq.co.kr/movieImg/MV_CT01/4/MV_CT01_MBC000012064_240.jpg"
];

class App extends Component {
  render() {
    return (
      <div className="App">
          <Movie title={movieTitles[0]} poster={movieImgaes[0]}/>
          <Movie title={movieTitles[1]} poster={movieImgaes[1]}/>
          <Movie title={movieTitles[2]} poster={movieImgaes[2]}/>
      </div>
    );
  }
}

export default App;
