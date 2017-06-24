import { h, Component } from 'preact';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Menu</h1>
			</header>
		);
	}
}
