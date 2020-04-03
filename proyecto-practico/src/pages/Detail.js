import React, { Component } from 'react';
import { ButtonBackHome } from '../components/ButtonBackHome';
import PropTypes from 'prop-types';

const API_KEY = "28608a21";
export class Detail extends Component{
    state = {
        movie:{}
    };

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    componentDidMount(){
        console.log(this.props);
        const { id } = this.props.match.params;
        this._fetchMovie(id);
    }

    _fetchMovie = (id) =>{
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie =>{
            this.setState({ movie });
        })
    }

    _goBack = () => {
        window.history.back();
    }

    render(){
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
        return(
            <div>
                <ButtonBackHome />
                <h1>{ Title }</h1>
                <img 
                    src={ Poster }
                />
                <h3>{ Actors }</h3>
                <span>{ Metascore }</span>
                <p>{ Plot }</p>
            </div>
        )
    }
}