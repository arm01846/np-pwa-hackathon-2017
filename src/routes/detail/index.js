import { h, Component } from 'preact';
import style from './style';
import mdl from 'material-design-lite/material';
import { Card, CardTitle, Spinner } from 'preact-mdl';
import Progress from '../../components/progress';
import Ingredient from '../../components/ingredient';
import config from '../../config';

export default class Detail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
		this.calculate_percent();
        fetch(config.domain + '/menu/' + this.props.id + '.json')
            .then((data) => data.json())
            .then((data) => this.setState(data));
	}

    calculate_percent = () => {
        this.calculate_fat();
        this.calculate_caffeine();
        this.calculate_protein();
        this.calculate_calories();
        this.calculate_sugar();
    }
    calculate_fat = () => {
        let calcFat = Math.round((this.state.fat / 73) * 100);
        this.setState({ percentFat: calcFat})
    }

    calculate_protein = () => {
        let calcProtein = Math.round((this.state.protein / 50) * 100);
        this.setState({ percentProtein: calcProtein})
    }

    calculate_calories = () => {
        let calcCal = Math.round((this.state.calories / 2000) * 100);
        this.setState({ percentCalories: calcCal})
    }

    calculate_sugar = () => {
        let calcSugar = Math.round((this.state.sugar / 50) * 100);
        this.setState({ percentSugar: calcSugar})
    }

    calculate_caffeine = () => {
        let calcCaf = Math.round((this.state.caffeine / 400) * 100);
        this.setState({ percentCaffeine: calcCaf})
    }

    render() {
        if(this.state.name) {
            return (
                <div class={style.detail} style={{ backgroundImage: `url(/assets/images/${this.state.background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <Card class={style.nutrition}>
                        <CardTitle class={style.cardtitle}>
                            { this.state.ingredients.map((ingredient) => {
                                return <Ingredient value={ingredient}></Ingredient>
                            })}
                            <div class={style.glassmask}></div>
                        </CardTitle>
                        <span class={style.contenttitle}>{this.state.name}</span>
                        <div style={{display: 'flex', flexDirection: 'column', height: '40%'}}>
                            <Progress label='พลังงาน' value={this.state.percentCalories}></Progress>
                            <Progress label='ไขมัน' value={this.state.percentFat}></Progress>
                            <Progress label='น้ำตาล' value={this.state.percentSugar}></Progress>
                            <Progress label='โปรตีน' value={this.state.percentProtein}></Progress>
                            <Progress label='คาเฟอีน' value={this.state.percentCaffeine}></Progress>
                        </div>
                    </Card>
                </div>
            );
        } 
        return (
            <Spinner active
                class={style.spinner} />
        );
	}
}
