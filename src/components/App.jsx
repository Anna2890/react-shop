import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import '../app.scss';


class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books } = this.props;
    return (
      <Container>
        <Menu/>
        <Filter/>
        <div className="card">
          {!books ? 'Загрузка...' : books.map((book, i) => (
            <BookCard key={i} {...book} />
          ))}
        </div>
      </Container>
    );
  }
};


export default App;
