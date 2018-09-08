import React, { Component } from 'react';
import './App.css';
import { Button, Debug } from '@/components';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h3 className="App-title">Button</h3>
				<div>
					<Button />
				</div>
				<h3 className="App-title">Debug</h3>
				<div>
					<Debug />
				</div>
			</div>
		);
	}
}

export default App;
