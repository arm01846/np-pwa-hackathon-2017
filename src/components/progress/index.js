import { h, Component } from 'preact';
import style from './style';

export default class Progress extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={style.container}>
                <span style={{display: 'inline-block', width: '100px'}}>{this.props.label}</span>
                <div class={style.bufferbar}>
                    <div class={style.progressbar} style={{width: `${this.props.value}%`, backgroundColor: `${this.props.color}`}}></div>
                </div>
            </div>
        );
    }
}