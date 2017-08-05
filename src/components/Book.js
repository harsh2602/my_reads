import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
	  onShelfChange: PropTypes.func.isRequired,
	};

	render() {
		const { book, onShelfChange } = this.props;

		return (
			<div className='book'>
				<div className='book-top'>
					<img
						className='book-cover'
						style={{
							width: 128,
							height: 193,
						}}
						src={book.imageLinks.thumbnail}
						alt={book.title}
					></img>
					<BookShelfChanger
						onShelfChange={onShelfChange}
						book={book}
					/>
				</div>

				<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors ? book.authors.join(", ") : "" }</div>
			</div>
		)
	}
}

export default Book;
