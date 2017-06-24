import { h, Component } from 'preact';
import style from './style';

export default class Detail extends Component {
    state = {
        name: "เอสเปรสโซ่",
        image: "https://globalassets.starbucks.com/assets/b0525676a0194652be7f4993210b381a.jpg",
        ingredients: ["กาแฟ"],
        size: [
            {
                name: "Solo",
                volume: 1,
                variations: [
                    {
                        name: "",
                        nutrition: {
                            calories: 6.3,
                            fat: 0,
                            sugar: 0,
                            protein: 0.5,
                            caffeine: 93.8
                        }
                    }
                ]
            },
            {
                name: "Doppio",
                volume: 2,
                variations: [
                    {
                        name: "",
                        nutrition: {
                            calories: 13.3,
                            fat: 0,
                            sugar: 0,
                            protein: 1.4,
                            caffeine: 200
                        }
                    }
                ]
            },
            {
                name: "Triple",
                volume: 3,
                variations: [
                    {
                        name: "",
                        nutrition: {
                            calories: 19.6,
                            fat: 0,
                            sugar: 0,
                            protein: 2.3,
                            caffeine: 293.5
                        }
                    }
                ]
            },
            {
                name: "Quad",
                volume: 4,
                variations: [
                    {
                        name: "",
                        nutrition: {
                            calories: 26.7,
                            fat: 0,
                            sugar: 0,
                            protein: 3.2,
                            caffeine: 400
                        }
                    }
                ]
            }
    
        ]
    }

    render() {
		return (
			<div class={style.detail}>
				<h1>Detail: {this.state.name}</h1>
                <img src={this.state.image} />
			</div>
		);
	}
}
