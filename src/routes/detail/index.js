import { h, Component } from 'preact';
import style from './style';
import { Card, CardTitle } from 'preact-mdl';
import Progress from '../../components/progress'

export default class Detail extends Component {
    state = {
        name: "เอสเปรสโซ่",
        image: "https://globalassets.starbucks.com/assets/b0525676a0194652be7f4993210b381a.jpg",
        background: "espresso-blur.jpg",
        ingredients: ["กาแฟ"],
        sizeName: "Solo",
        volume: 1,
        optionName: "",
        calories: 6.3,
        percentCalories: 0,
        fat: 0,
        percentFat: 0,
        sugar: 0,
        percentSugar: 0,
        protein: 0.5,
        percentProtein: 0,
        caffeine: 93.8,
        percentCaffeine: 0
    }

    componentDidMount() {
		this.calculate_percent();
	}

    style = {
        backgroundImage: `url(/assets/images/${this.state.background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
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
		return (
			<div class={style.detail} style={this.style}>
                <Card class={style.nutrition}>
                    <CardTitle class={style.cardtitle}>
                        { this.state.ingredients.map((ingredient) => {
                            return <div style={{ width: '20vh', flex: '1',display: 'flex', backgroundColor: '#4d2c11' }}
                            ><strong style={{ alignSelf: 'center', flex: '1', textAlign: 'center', fontSize: '1rem',     letterSpacing: '1.5px', color: 'lightgray' }}>{ingredient}</strong></div>
                        })}
                        <div style={{ backgroundImage: `url(/assets/images/water-front.png)`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPositionX: 'center', position: 'absolute', width: '100%',height: '100%' }}>
                        </div>
                    </CardTitle>
                    <span class={style.contenttitle}>{this.state.name}</span>
                    <div style={{display: 'flex', flexDirection: 'column', height: '40%'}}>
                        <Progress label="พลังงาน" value={this.state.percentCalories}></Progress>
                        <Progress label="ไขมัน" value={this.state.percentFat}></Progress>
                        <Progress label="น้ำตาล" value={this.state.percentSugar}></Progress>
                        <Progress label="โปรตีน" value={this.state.percentProtein}></Progress>
                        <Progress label="คาเฟอีน" value={this.state.percentCaffeine}></Progress>
                    </div>
                </Card>
			</div>
		);
	}
}
