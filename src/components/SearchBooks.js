import React, { Component } from  'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { search } from '../utils/BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  };

  state = {
		searchResults: []
	}

  searchBooks = (query, maxResults) => {
    query.length > 0 && search(query, maxResults).then(searchResults => {
      searchResults === undefined ?
      this.setState({ searchResults: [] }) :
      searchResults = searchResults.map(book => {
        const bookInShelf = this.props.books.find(b => b.id === book.id);
	bookInShelf ? book.shelf = bookInShelf.shelf : book.shelf = 'none';
        return book;
      })
      if(this.state.searchResults !== searchResults) {
        this.setState({ searchResults });
      }
    })
  };

	render() {
		const { onShelfChange } = this.props;
		const { query, searchResults } = this.state;

		return (
			<div>
				<div className="search-books">
					<div className="search-books-bar">
						<Link className='close-search' to='/'>Close</Link>
						<div className="search-books-input-wrapper">
							<input
								type="text"
								placeholder="Search by title or author"
								value={query}
								onChange={event => this.searchBooks(event.target.value, 20)}
							/>
						</div>
					</div>

					<div className="search-books-results">
            <ol className="books-grid">
              {searchResults && searchResults.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    onShelfChange={onShelfChange}
                  />
                </li>
              ))}
            </ol>
          </div>
				</div>
			</div>
		)
	}
}

export default SearchBooks;
