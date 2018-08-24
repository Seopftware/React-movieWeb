import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {
  }


  // will mount -> did render -> did mount
  // component가 will mount 작업을 진행할 때, api에 작업을 요청할 것이다
  // (1) will mount를 보면 사이클이 시작되었음을 알게되고
  componentWillMount(){
      console.log("will mount");
  }

  // (3) 성공적으로 리액트 세계에 컴포넌트가 자리 잡았음을 알게 된다.
  componentDidMount(){
      console.log("did mount");
      // API의 못생긴 데이터를 response 체크 => json으로 변환 => 콘솔로 확인
      fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
          .then(response => response.json())
          .then(json => console.log(json))
          .catch(err => console.log(err))

  }

  // _ 를 넣는 이유는 리액트 자체의 기능이 많기 때문에 구분 시켜 주기 위해서이다.
  // 따라서, 내가 만든 함수에는 _ 를 붙이는 게 좋다.
  _renderMovies = () => {
      // movies를 출력할 때 정렬된 array를 보여준다.
      const movies = this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
      });

      return movies;

      // 위의 코드가 작동한다면 아래의 코드와 같음
      // / {[
      //     <Movie title={movies[0].title} poster={movies[0].poster}/>,
      //     <Movie title={movies[1].title} poster={movies[1].poster}/>,
      //     <Movie title={movies[2].title} poster={movies[2].poster}/>
      // ]};
  };

  // (2) render를 보면 이제 컴포넌트가 리액트 세계에 존재하게 되었음을 알게되고
  render() {
      console.log("did render")

      return (
        // arr의 element를 토대로 한 컴포넌트
        // index는 현재 제공하는 리스트의 숫자를 의미한다.
      <div className="App">
          {this.state.movies ? this._renderMovies() : "loading"}
      </div>


    );
  }
}

export default App;
