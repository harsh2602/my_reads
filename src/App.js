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
    // Suggestion from Udacity review to render the state faster
    // Was initially doing it by calling getAll()
    if (book.shelf !== shelf) {
      update(book, shelf).then(() => {
        book.shelf = shelf

        // Filter out the book and append it to the end of the list
        // so it appears at the end of whatever shelf it was added to.
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
      })
    }
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
            books={books}
            onShelfChange={this.onShelfChange}
        />
        )}
        />
      </div>
    );
  }
}

export default App;
