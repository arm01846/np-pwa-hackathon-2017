import { h, Component } from 'preact';
import style from './style';
import mdl from 'material-design-lite/material';
import { List, ListItem, Spinner } from 'preact-mdl';
import MenuItem from '../../components/menu-item';

export default class Menu extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			menu: []
		}
	}

	componentDidMount() {
		fetch('https://np-pwa-hackathon-2017.firebaseio.com/menu.json')
			.then((resp) => resp.json())
			.then((menu) => this.setState({ menu }));
	}

	render({}, { menu }) {
		return (
			<div class={style.menu}>
				{ !menu || menu.length === 0 ? (
					<Spinner active={true}
						class={style.spinner}/>
				):(
					<List style={{ margin: '0' }}>	
					{ menu.map((coffee) => {
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
