import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';
import MyReadsPage from './components/MyReadsPage';
import { getAll, update } from './utils/BooksAPI';
import './App.css';

class App extends Component {
  state = {
    books : []
  }

  componentDidMount() {
    getAll().then(books => {
      this.setState({
        books
      });
    })
  }

  onShelfChange = (book, shelf) => {
    update(book, shelf).then(res => {
      getAll().then(books => {
        this.setState({
          books
        })
      })
    })
  };

  render() {
    const { books } = this.state;

    return (
      <div className="App">
        <Route exact path='/' render={() => (
            <MyReadsPage
              books={books}
              onShelfChange={this.onShelfChange}
        />
        )}
        />
        <Route path='/search' render={() => (
          <SearchBooks
            onShelfChange={this.onShelfChange}
        />
        )}
        />
      </div>
    );
  }
}

export default App;
