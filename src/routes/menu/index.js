import { h, Component } from 'preact';
import style from './style';

export default class Menu extends Component {
	render() {
		return (
			<div class={style.menu}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
			</div>
		);
	}
}
