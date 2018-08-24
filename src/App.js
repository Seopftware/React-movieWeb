import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {
  };

  componentWillMount(){
  }

  componentDidMount(){
      this._getMovies()
  }

  // asynchronous function
  _getMovies = async () => {
      // 함수 앞에 await를 붙이면 작업이 성공적으로 끝나는 것을 기다리는 것이 아니라, 작업 자체가 끝나기를 기다린다.
      const movies = await this._callApi();
      this.setState({
          movies
      })
  }

  // _callApi()는 fetch promise를 return 함. return value는 json 안의 movies가 있는 data라는 이름의 object이다.
  _callApi = () => {
      return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
          .then(response => response.json())
          .then(json => json.data.movies)
          .catch(err => console.log(err))
  };

  _renderMovies = () => {
      // component의 key는 index를 사용하지 않는 것이 좋다. => 느리기 때문이다.
      const movies = this.state.movies.map(movie => {
          console.log(movie)
          return <Movie
              title={movie.title}
              poster={movie.medium_cover_image}
              genre={movie.genres}
              synopsis={movie.synopsis}
              key={movie.id}/>
      });

      return movies;
  };

  render() {

      return (
      <div className="App">
          {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    );
  }
}

export default App;
