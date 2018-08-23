import React, { Component} from 'react';
import PropTypes from 'prop-types'; // 원래는 React에서 PropTypes를 제공해주었으나, 지금은 제공하지 않기 때문에 yarn을 통해 따로 설치
import './Movie.css';

// App 이라는 대빵 컴포넌트가 있고,
// 또 Movie 라는 컴포넌트 안에 MoviePoster라는 작은 컴포넌트가 있는 것이다.

// Component -> render -> return -> JSX
// 컴포넌트는 항상 render & return 해야한다.
// JSX의 명령을 실행시키기 위해서는 {}를 꼭 쳐야한다.
class Movie extends Component{

    static propTypes = {

        // 만약, App의 컴포넌트에 title 값이 비어있다면, err를 뱉어낸다.
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    };


    render() {

        // console.log(this.props);

        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>

        );
    }
}

// 큰 컴포넌트 안에 작은 컴포넌트를 집어넣는 방식으로 작업 진행
class MoviePoster extends Component{

    static propTypes = {

        // 만약, App의 컴포넌트에 title 값이 비어있다면, err를 뱉어낸다.
        // 이런식으로 부모로 부터 받는 데이터를 체크할 수 있다.
        poster: PropTypes.string.isRequired
    };

    render() {
        console.log(this.props);

        return(
            <img src={this.props.poster}/>
        )
    }
}



// app.js로 해당 컴포넌트를 내보낸다.
export default Movie;