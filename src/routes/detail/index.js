import { h, Component } from 'preact';
import style from './style';
import mdl from 'material-design-lite/material';
import { Card, CardTitle, Spinner, Tab, TabBar, Tabs, TabPanel } from 'preact-mdl';
import Progress from '../../components/progress';
import Ingredient from '../../components/ingredient';
import config from '../../config';

export default class Detail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(config.domain + '/menu/' + this.props.id + '.json')
            .then((data) => data.json())
            .then((data) => this.onReceiveData(data));
	}

    onReceiveData = (data) => {
        this.setState(data);
        let e = {};
        e.currentTarget = {};
        e.currentTarget.name = '0';
		this.onChangeTab(e);
    }

    calculate_percent = () => {
        this.calculate_fat();
        this.calculate_caffeine();
        this.calculate_protein();
        this.calculate_calories();
        this.calculate_sugar();
    }
    calculate_fat = () => {
        let calcFat = Math.round((this.state.size[this.state.activeTab].variations[0].nutrition.fat / 73) * 100);
        this.setState({ percentFat: calcFat});
    }

    calculate_protein = () => {
        let calcProtein = Math.round((this.state.size[this.state.activeTab].variations[0].nutrition.protein / 50) * 100);
        this.setState({ percentProtein: calcProtein});
    }

    calculate_calories = () => {
        let calcCal = Math.round((this.state.size[this.state.activeTab].variations[0].nutrition.calories / 2000) * 100);
        this.setState({ percentCalories: calcCal});
    }

    calculate_sugar = () => {
        let calcSugar = Math.round((this.state.size[this.state.activeTab].variations[0].nutrition.sugar / 50) * 100);
        this.setState({ percentSugar: calcSugar});
    }

    calculate_caffeine = () => {
        let calcCaf = Math.round((this.state.size[this.state.activeTab].variations[0].nutrition.caffeine / 400) * 100);
        if (calcCaf > 100) calcCaf = 100;
        this.setState({ percentCaffeine: calcCaf});
    }

    onChangeTab = (e) => {
        let tabId = parseInt(e.currentTarget.name);
        if (isNaN(tabId)) return;
        this.state.activeTab = tabId;
        this.setState({ activeTab: tabId});
        this.calculate_percent();
    }

    render() {
		if(this.state.name) {
            return (
                <div class={style.detail} style={{ backgroundImage: `url(/assets/images/${this.state.background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <Tabs>
                        <TabBar class={style.tabbar}>
                            { this.state.size.map((size, index) => {
                                return <Tab href='#size' name={index} onClick={this.onChangeTab} class={index === this.state.activeTab ? 'is-active':''}>{size.name}</Tab>
                            })}
                        </TabBar>
                        <TabPanel id="size" class='is-active'>
                            <Card class={style.nutrition}>
                                <CardTitle class={style.cardtitle}>
                                    <div style={{display: 'flex', flexDirection: 'column', height: '80%', margin: 'auto'}}>
                                        { this.state.ingredients.map((ingredient) => {
                                            return <Ingredient value={ingredient}></Ingredient>
                                        })}
                                    </div>
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
                        </TabPanel>
                    </Tabs>
                </div>
            );
        } 
        return (
            <Spinner active
                class={style.spinner} />
        );
	}
}
