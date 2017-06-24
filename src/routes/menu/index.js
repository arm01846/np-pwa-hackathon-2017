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
					{ [{
						name: 'coffee1',
						link: 'c1'
						}, {
						name: 'coffee2',
						link: 'c2'
						}, {
						name: 'coffee3',
						link: 'c3'
						}
					].map((coffee) => {
						return <MenuItem name={coffee.name} link={coffee.link}></MenuItem>
					}) }
				</List>
			</div>
		);
	}
}
