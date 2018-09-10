import { Component } from 'react';
// https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
class Protector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ready: true
		};
	}
	componentDidCatch(err, info) {
		const { name } = this.props;
		this.setState(
			{
				ready: false
			},
			() => {
        // 错误上报
				console.error(`${name} happen error`, err, info);
			}
		);
	}
	render() {
		const { ready } = this.state;
		const { children } = this.props;
		return ready ? children : null;
	}
}
export default Protector;
