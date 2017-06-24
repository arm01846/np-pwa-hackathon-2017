import { h, Component } from 'preact';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header} style={{ 'text-align': 'center' }}>
				<h1 >Coffee List</h1>
			</header>
		);
	}
}
