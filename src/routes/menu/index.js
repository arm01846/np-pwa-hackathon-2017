import { h, Component } from 'preact';
import style from './style';
import mdl from 'material-design-lite/material';
import { List, ListItem, ListItemContent } from 'preact-mdl';
import MenuItem from '../../components/menu-item';

import { menu } from './menu';

export default class Menu extends Component {
	render() {
		return (
			<div class={style.menu}>
				<List>
					{ menu.menu.map((coffee) => {
						return <MenuItem 
							name={coffee.name} 
							link={coffee.link}
							image={coffee.image}></MenuItem>
					}) }
				</List>
			</div>
		);
	}
}
