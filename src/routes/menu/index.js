import { h, Component } from 'preact';
import style from './style';
import mdl from 'material-design-lite/material';
import { List, ListItem, ListItemContent, Card, CardTitle } from 'preact-mdl';
import MenuItem from '../../components/menu-item';

import { menu } from './menu';

export default class Menu extends Component {
	render() {
		return (
			<div class={style.menu}>
				{ menu.menu.map((coffee) => {
					return <Card shadow={4} style={{ width: 'auto', height: '100px', 'min-height': '100px', 'margin-bottom': '16px' }}>
						<CardTitle expand style={{ padding: '0' }}>
						<MenuItem 
						name={coffee.name} 
						link={coffee.link}
						image={coffee.image}
						size={coffee.size}></MenuItem>
						</CardTitle>
						</Card>
				}) }
			</div>
		);
	}
}
