import { h, Component } from 'preact';
import style from './style';
import mdl from 'material-design-lite/material';
import { List, ListItem } from 'preact-mdl';
import MenuItem from '../../components/menu-item';

import { menu } from './menu';

export default class Menu extends Component {
	render() {
		return (
			<div class={style.menu}>
				<List style={{ margin: '0' }}>	
				{ menu.menu.map((coffee) => {
					return <ListItem three-line class={style.listItem} >
						<MenuItem coffee={coffee}></MenuItem>
					</ListItem>
				}) }
				</List>
			</div>
		);
	}
}
