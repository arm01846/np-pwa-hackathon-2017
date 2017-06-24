import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link href={'/detail/' + this.props.link}>
            <div style={{ width: '100%', height: '100px', display: 'flex', margin: '8px' }}>
                <div>
                    <img style={{ width: '100px', height: '100px' }} src={ this.props.image }/>
                </div>
                <div>
                    <div style={{ height: '40px', lineHeight: '40px' }} class={style.displayContent}>{ this.props.name }</div>
                    <Link href={'/detail/' + this.props.link + '/tall'}>
                        <div style={{ height: '60px', lineHeight: '60px' }} class={style.displayContent}>line 2</div>
                    </Link>
                </div>
            </div>  
            </Link>
        );
    }
}