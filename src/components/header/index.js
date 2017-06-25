import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(location);
		return (
			<header class={style.header} style={{ 'text-align': 'center' }}>
				<Link href="/">
					<h1>Coffee List</h1>
				</Link>
				
			</header>
		);
	}
}
