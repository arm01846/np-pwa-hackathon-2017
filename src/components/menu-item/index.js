import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import mdl from 'material-design-lite/material';
import { Chip } from 'preact-mdl';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link href={'/detail/' + this.props.link}>
            <div class={style.menuItem}>
                <div>
                    <img alt={ this.props.name } style={{ width: '100px', height: '100px' }} src={ this.props.image }/>
                </div>
                <div>
                    <div style={{ height: '40px', lineHeight: '40px', 'font-size': '1.25em', color: '#007143' }} class={style.displayContent}>{ this.props.name }</div>
                    
                    <div style={{ height: '60px', lineHeight: '60px' }} class={style.displayContent}>
                        { this.props.size.map((size) => {
                            return <Link href={'/detail/' + this.props.link + '/' + size.name}
                                style={{ padding: '5px 12px', margin: '0px 8px', color: '#fefefe', 'background-color': '#007143' }}
                            ><strong>{size.name}</strong></Link>
                        })}
                    </div>
                    
                </div>
            </div>  
            </Link>
        );
    }
}