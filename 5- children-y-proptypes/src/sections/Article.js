import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Box extends Component {
    render(){
      return(
        <div style={{ border: '1px solid lightgrey', margin:5, padding:5 }}>
          { this.props.children }
        </div>
      )
    }
  }
  
  class Article extends Component{
    static propTypes={
      author: PropTypes.string.isRequired
    }
  
    render(){
      const { title, author, date, children } = this.props;
      return(
        <section>
          <h2>{ title }</h2>
          <p><em>Escrito por { author }</em></p>
          <Box>{ date }</Box>
          <article>
            { children }
          </article>
        </section>
      )
    }
  }
  // Article.propTypes ={
  //   author: PropTypes.string
  // }

  export default Article;