import { h, Component } from 'preact';
import style from './style';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100px', display: 'flex', margin: '8px' }}>
                <div>
                    <img style={{ width: '100px', height: '100px' }} />
                </div>
                <div>
                    <div style={{ height: '40px', lineHeight: '40px' }} class={style.displayContent}>{ this.props.name }</div>
                    <div style={{ height: '60px', lineHeight: '60px' }} class={style.displayContent}>line 2</div>
                </div>
            </div>  
        );
    }
}