import { h, Component } from 'preact';
import style from './style';
import { Card, CardTitle, Progress, ProgressProps } from 'preact-mdl';

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
                    <CardTitle style={{height: '45%', width: '100%', margin: '0 auto', position: 'relative', flexDirection: 'column', backgroundColor: 'rgb(200,200,200)', padding: '0'}}>
                        { this.state.ingredients.map((ingredient) => {
                            return <div style={{ width: '20vh', flex: '1',display: 'flex', backgroundColor: 'brown' }}
                            ><strong style={{ alignSelf: 'center', flex: '1', textAlign: 'center', fontSize: '0.7rem' }}>{ingredient}</strong></div>
                        })}
                        <div style={{ backgroundImage: `url(/assets/images/water-front.png)`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPositionX: 'center', position: 'absolute', width: '100%',height: '100%' }}>
                        </div>
                    </CardTitle>
                    {this.state.name}
                    <div>
                        พลังงาน
                        <div style={{height: '10px', width: '100px', position: 'relative', backgroundColor: 'rgba(100, 100, 100, 0.4)'}}>
                            <div style={{height: '100%', position: 'absolute', width: `${this.state.percentCalories}%`, backgroundColor: 'green'}}></div>
                        </div>
                    </div>
                    <div>
                        ไขมัน
                        <div style={{height: '10px', width: '100px', position: 'relative', backgroundColor: 'rgba(100, 100, 100, 0.4)'}}>
                            <div style={{height: '100%', position: 'absolute', width: `${this.state.percentFat}%`, backgroundColor: 'green'}}></div>
                        </div>
                    </div>
                    <div>
                        น้ำตาล
                        <div style={{height: '10px', width: '100px', position: 'relative', backgroundColor: 'rgba(100, 100, 100, 0.4)'}}>
                            <div style={{height: '100%', position: 'absolute', width: `${this.state.percentSugar}%`, backgroundColor: 'green'}}></div>
                        </div>
                    </div>
                    <div>
                        โปรตีน
                        <div style={{height: '10px', width: '100px', position: 'relative', backgroundColor: 'rgba(100, 100, 100, 0.4)'}}>
                            <div style={{height: '100%', position: 'absolute', width: `${this.state.percentProtein}%`, backgroundColor: 'green'}}></div>
                        </div>
                    </div>
                    <div>
                        คาเฟอีน
                        <div style={{height: '10px', width: '100px', position: 'relative', backgroundColor: 'rgba(100, 100, 100, 0.4)'}}>
                            <div style={{height: '100%', position: 'absolute', width: `${this.state.percentCaffeine}%`, backgroundColor: 'green'}}></div>
                        </div>
                    </div>
                </Card>
			</div>
		);
	}
}
