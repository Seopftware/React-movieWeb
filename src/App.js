import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


// movies는 arr이다. arr에는 map이라는 기능이있다.
// Array.prototype.map() 참고 (developer.mozilla.org)
const movies = [
    {
        title: "Jaekjeon",
        poster: 'http://newsimg.sedaily.com/2017/09/01/1OKUWGCY4E_1.jpg'
    },
    {
        title: "GongJo",
        poster: 'https://upload.wikimedia.org/wikipedia/ko/thumb/c/c1/%EC%98%81%ED%99%94_%EA%B3%B5%EC%A1%B0.jpg/250px-%EC%98%81%ED%99%94_%EA%B3%B5%EC%A1%B0.jpg'
    },
    {
        title: "Dokjeon",
        poster: 'https://img.pooq.co.kr/movieImg/MV_CT01/4/MV_CT01_MBC000012064_240.jpg'
    }
];

class App extends Component {
  render() {
    return (
        // arr의 element를 토대로 한 컴포넌트
        // index는 현재 제공하는 리스트의 숫자를 의미한다.
      <div className="App">
          {movies.map((movie, index) =>{
              return <Movie title={movie.title} poster={movie.poster} key={index}/>
              })};
      </div>

      // 위의 코드가 작동한다면 아래의 코드와 같음
      // / {[
      //     <Movie title={movies[0].title} poster={movies[0].poster}/>,
      //     <Movie title={movies[1].title} poster={movies[1].poster}/>,
      //     <Movie title={movies[2].title} poster={movies[2].poster}/>
      // ]};
    );
  }
}

export default App;
