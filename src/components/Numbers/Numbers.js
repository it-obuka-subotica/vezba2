import React,{Component} from 'react';

import './Numbers.css';
class Numbers extends Component{
    state={
        numbers:[],
		 num:null 
    }
    componentDidMount(){
        let newNumbers=this.state.numbers
        for(let i=0;i<10;i++){
            let randomNumbers=Math.floor(Math.random() * 100 + 1)
            newNumbers.push(randomNumbers)
            this.setState({numbers:newNumbers})
        }

    }
	 average = () => {
		let total=0;
		let i=0;
		for (i = 0; i < this.state.numbers.length; i++) { 
			total=total+this.state.numbers[i];
		}
		let average=total/this.state.numbers.length;
		alert ("prosek:"+average);
	}

	handleChange =(event) => {
		let maxNumber=Math.max(...this.state.numbers); // OVAKO TREBA
		let n=event.target.value;
		let d =Math.abs(maxNumber-n);
		alert (d);
	}

    removeItem=(index)=>{
          let newNumbers=this.state.numbers
          newNumbers.splice(index,1)
          this.setState({numbers:newNumbers})
    }

    replaceItem=(index)=>{
        let newNumbers=this.state.numbers
        newNumbers.splice(index,1)
        this.setState({numbers:newNumbers})
        let newNumber=this.state.numbers
        newNumber.push(Math.floor(Math.random() * 100 + 1))
        this.setState({numbers:newNumber})
    }


    render(){
        let showNumbers1=this.state.numbers.map((number,index)=>(
            <li onClick={()=>this.removeItem(index)} className="rundomNumbersItems" key={index}>
                {number}
            </li>
        ))

        let showNumbers2=this.state.numbers.map((number,index)=>(
            <li className="rundomNumbersItems" key={index}>
             <span className="number">{number}</span><i className="fas fa-trash-alt" onClick={()=>this.replaceItem(index)}></i>
            </li>
        ))
        return(
            <div>
                <h1>Brojni nizovi</h1>
                <button onClick={this.average}>Prosečna vrednos</button>
			  <div>
					<label> Zadajte broj: <input type="text" name="num"  value={this.state.num} onChange={this.handleChange} /></label>
			  </div>
			  <div className="rundomNumbersContainer">
                <ul className="rundomNumbers">
                    {showNumbers1}
                </ul>
			  </div>
                <ul>
                    {showNumbers2}
                </ul>
            </div>
        )
    }
}

export default Numbers
