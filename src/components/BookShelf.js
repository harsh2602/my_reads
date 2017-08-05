import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
	static propTypes = {
	 	title: PropTypes.string.isRequired,
		filteredBooks: PropTypes.array.isRequired,
	  onShelfChange: PropTypes.func.isRequired,
	};

	render() {
		const { title, filteredBooks, onShelfChange } = this.props;
		return (
			<div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
							{filteredBooks.map(book => (
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
		)
	}
}

export default BookShelf;
