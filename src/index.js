import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
	<BrowserRouter>
	  <App />
	</BrowserRouter>,
	document.getElementById('root')
);
