import { h, Component } from 'preact';
import style from './style';
import mdl from 'material-design-lite/material';
import { List, ListItem, ListItemContent } from 'preact-mdl';
import MenuItem from '../../components/menu-item';

export default class Menu extends Component {
	render() {
		return (
			<div class={style.menu}>
				<List>
					{ ["coffee1", "coffee2", "coffee3"].map((val) => {
						return <MenuItem name={val}></MenuItem>
					}) }
				</List>
			</div>
		);
	}
}
