import React, { Component } from 'react';
import styles from './debug.css';

class MnuDebug extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return <div className={styles['mnu-debug-con']}>mdebug</div>;
	}
}

export default MnuDebug;
