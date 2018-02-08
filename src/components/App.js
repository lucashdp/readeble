import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Row, Col } from 'react-materialize';
import { addPost, removePost } from '../actions';
//import ReadebleFooter from './ReadebleFooter';
//import ReadebleAPI from '../utils/ReadebleAPI'

class App extends Component {

  state = {
    posts: [],
    post: { body: '' }
  }

  render() {    
    const { doPost, remove } = this.props
    const { post } = this.state

    return (
      <div>
        <Row></Row>
        <Row>
          <Col s={2}></Col>
          <Col s={8}>
            <textarea placeholder="Escreva seu post aqui" onChange=
            {
              (event) => {post.body = event.target.value}
            } />
          </Col>
          <Col s={2}></Col>
        </Row>
        <Row>
        <Col s={2}></Col>
          <Col s={8}>
          <Button waves='light' onClick={() => {
                        doPost(post)
                      }}>Enviar</Button>
          </Col>
          <Col s={2}></Col>
        </Row>
        <Row>
        <Col s={2}></Col>
          <Col s={8}>
          <Card className='blue-grey darken-1' 
          textClassName='white-text' title='Assunto' actions={[<a href='#'>Votar</a>,<a href='#'>Comentar</a>]}>
          Exemplo de um post.
          </Card>
          </Col>
          <Col s={2}></Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps ({ post }) {
  return {
    post
  }
}

function mapDispatchToProps (dispatch) {
  return {
    doPost: (data) => dispatch(addPost(data)),
    remove: (data) => dispatch(removePost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)