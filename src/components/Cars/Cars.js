import React,{Component} from 'react';

class Cars extends Component{
	state={
		cars: [
			{ "name":"Ford", "model":"Mustang", "power": 124, "price": 12000 },
			{ "name":"BMW", "model":"X5", "power": 187, "price": 13000 },
			{ "name":"Skoda", "model":"SuperB", "power": 67, "price": 11000 },
			{ "name":"Fiat", "model":"Panda", "power": 47, "price": 10000 },
		],
		maxPrice:0,
		maxLengthInfo:"",
		listedCarsByLetters: [],
		listedCarsByPrice: [],
		info:null
	}

	componentDidMount(){
		this.state.cars.map(car=>{
			if(car.price>this.state.maxPrice){
				this.setState({maxPrice:car.price})
				this.setState({info:`Name: ${car.name} Model:${car.model} Power: ${car.power}`})
			}
			return 0;
		})

		let i=0;
		let currentLength=0;
		let maxLength=0;
		let maxLengthIndex=0;

		// Najduže ime i model

		for (i = 0; i < this.state.cars.length; i++) { 
			currentLength=this.state.cars[i].name.length + this.state.cars[i].model.length;
			if(currentLength > maxLength){ maxLength=currentLength; maxLengthIndex=i; }
		}
		console.log("mli: "+maxLengthIndex);
		var maxLengthInfo=`Najduže ime + model: ${maxLength} karaktera,  ${this.state.cars[maxLengthIndex].name} ${this.state.cars[maxLengthIndex].model}`;

		this.setState({maxLengthInfo:maxLengthInfo});

		// Sortiranje po abecedi
		let listedCarsByLetters=this.state.cars.slice(0);
		//this.state.cars.sort(function(a, b) {
		// Prvo prekopiramo niz u novi (NIZ JE REFERENCE TYPE, NIJE PRIMITIVE TYPE!!!!!!)
		listedCarsByLetters.sort(function(a, b) {
			if(a.name.length < b.name.length) return 1;
			if(a.name.length > b.name.length) return -1;
			return 0;
		})
		this.setState({listedCarsByLetters:listedCarsByLetters});

		// Sortiranje po ceni 
		// Prvo prekopiramo niz u novi (NIZ JE REFERENCE TYPE, NIJE PRIMITIVE TYPE!!!!!!)
		let listedCarsByPrice=this.state.cars.slice(0);
		listedCarsByPrice.sort(function(a, b) {
			if(a.price < b.price) return -1;
			if(a.price > b.price) return 1;
			return 0;
		})

		this.setState({listedCarsByPrice:listedCarsByPrice});

	}// end of componentDidMount




	render(){

		let list1=this.state.cars.map((car, index)=>(
			<li key={index}>
			{car.name}
			</li>
		))


		let list2=this.state.listedCarsByLetters.map((car, index)=>(
			<li key={index}>
			{car.name}
			</li>
		))

		let list3=this.state.listedCarsByPrice.map((car, index)=>(
			<li key={index}>
			{car.name}
			</li>
		))

		return(

			<div>
         <h1>Nizovi od stringa</h1>
			<ul> {list1} </ul>
			<div>
			{`Najskuplji autobil ima cenu od ${this.state.maxPrice}  ${this.state.info}`}
			</div>
			<div>
			{this.state.maxLengthInfo}
			</div>
			<div>
			<b>Listanje po broju slova</b>
			<ol> {list2} </ol>
			<b>Listanje po ceni</b>
			<ol> {list3} </ol>
			</div>

			</div>
		)
	}
}

export default Cars;

