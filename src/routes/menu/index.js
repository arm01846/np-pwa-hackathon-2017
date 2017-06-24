import { h, Component } from 'preact';
import style from './style';
import mdl from 'material-design-lite/material';
import { List, ListItem, Spinner } from 'preact-mdl';
import MenuItem from '../../components/menu-item';
import config from './config';

export default class Menu extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			menus: []
		};
	}

	componentDidMount() {
		fetch(config.domain + '/menu.json?shallow=true')
			.then((resp) => resp.json())
			.then((menus) => Object.keys(menus).map((id) => {
				return { id: id };
			}))
			.then((menus) => {
				this.setState({ menus });
				return menus;
			})
			.then((menus) => menus.map((menu) => {
				fetch(config.domain + '/menu/' + menu.id + '.json')
					.then((data) => data.json())
					.then((data) => {
						this.state.menus[menu.id] = data;
						this.setState({ menus });
					});
			}));
	}

	render({}, { menus }) {
		return (
			<div class={style.menu}>
				{ !menus || menus.length === 0 ? (
					<Spinner active
						class={style.spinner} />
				):(
					<List style={{ margin: '0' }}>
					{ menus.map((coffee) => {
						return <ListItem three-line class={style.listItem} >
							<MenuItem coffee={coffee}></MenuItem>
						</ListItem>
					}) }
					</List>
				)}
			</div>
		);
	}
}
