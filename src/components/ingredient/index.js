import { h, Component } from 'preact';

export default class Ingredient extends Component {
    constructor(props) {
        super(props);
    }

    map_ingredient = (thname) => {
        switch(thname) {
            case 'กาแฟ':
                return <Coffee/>;
            case 'นม':
                return <Milk/>;
            case 'วนิลา':
                return <Vanilla/>;
            case 'มอคค่า':
                return <Mocha/>;
            case 'วิปครีม':
                return <WhippedCream/>;
            case 'คาราเมล':
                return <Caramel/>;
            default:
                return null;
        }
    }

	render() {
        let ingredient = this.map_ingredient(this.props.value);
		return (
			ingredient
		);
	}
}

class BaseIngredient extends Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<div style={{ width: '20vh', flex: '1',display: 'flex', backgroundColor: `${this.props.bgcolor}` }}>
                <strong style={{ alignSelf: 'center', flex: '1', textAlign: 'center', fontSize: '1rem',     letterSpacing: '1.5px', color: `${this.props.fgcolor}` }}>
                    {this.props.name}
                </strong>
            </div>
		);
	}
}

class Coffee extends BaseIngredient {
    constructor(props) {
        super(props);
    }

    render() {
		return (
			<BaseIngredient bgcolor='#4d2c11' fgcolor='lightgray' name='กาแฟ'></BaseIngredient>
		);
	}
}

class Milk extends BaseIngredient {
    constructor(props) {
        super(props);
    }

    render() {
		return (
			<BaseIngredient bgcolor='#f8edd8' fgcolor='darkgray' name='นมสด'></BaseIngredient>
		);
	}
}

class Vanilla extends BaseIngredient {
    constructor(props) {
        super(props);
    }

    render() {
		return (
			<BaseIngredient bgcolor='wheat' fgcolor='darkgray' name='วนิลา'></BaseIngredient>
		);
	}
}

class Mocha extends BaseIngredient {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BaseIngredient bgcolor='#362314' fgcolor='lightgray' name='มอคค่า'></BaseIngredient>
        );
    }
}

class WhippedCream extends BaseIngredient {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BaseIngredient bgcolor='white' fgcolor='darkgray' name='วิปครีม'></BaseIngredient>
        );
    }
}

class Caramel extends BaseIngredient {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BaseIngredient bgcolor='#d87f2b' fgcolor='black' name='คาราเมล'></BaseIngredient>
        );
    }
}