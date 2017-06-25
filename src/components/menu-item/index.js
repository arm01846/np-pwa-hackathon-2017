import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link href={'/detail/' + this.props.id} style={{ display: 'block', width: '100%' }}>
            <div class={style.menuItem}>
                <div style={{ float: 'left' }}>
                    <img alt={ this.props.coffee.brand } style={{ width: '88px', height: '88px', padding: '10px' }} src={ "/assets/logo/" + this.props.coffee.brand + ".webp" }/>
                </div>
                
                <div>
                    <div class={style.mainDisplayContent}>
                        { this.props.coffee.name }
                    </div>
                    
                    <div class={style.subDisplayContent}>
                        { this.props.coffee.description }
                    </div>
                </div>
               
            </div>  
            </Link>
        );
    }
}