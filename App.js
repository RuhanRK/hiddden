import React, { Component } from 'react';
import Hidden from './Hidden';
import './App.css';
import Radium from 'radium';
import Penut from './Penut';
import './pp.css';


class App extends Component {
    constructor(props) {
        super(props);
    

    }
   
        //showdata: false,
        //show: false

    

 /*   toggleperson = () => {
        const doesShow = this.state.showdata;
        this.setState({ showdata: !doesShow });
    }
    toggle = () => {
        const doesShow = this.state.show;
        this.setState({ show: !doesShow });
    }
      onSearch=(e)=>{
            const value=e.target.value;
            let suggest=[];
            if(value.length>0){
                const regex=new RegExp(`^${value}`,'i');
        suggest=this.food.short().fittler(v=>regex.test(v));
            }    
            this.setState(()=>({suggest}));
        }
        renderSuggest() {
            const {suggest}=this.state;
            if (suggest.length===0) {
                return null;
            }
            return(
                <div>
                    {suggest.map((food) => <li>{food}</li>)}
                </div>
            );
        }
   
        const style = {
            background: 'green',
            border: '2px solid',
            ':hover': {
                background: 'white',
                text: 'bold',
                bordersStyle: 'dotted',
            }
        };
        let person = null;
        if (this.state.showdata) {
            person = (
                <div class="bb">
                    <img src="data:image/jpeg;base64,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" />
                    <div> <ul>
                        <li> Name={this.state.food[0].patato.name}</li>
                        <li> Protein={this.state.food[0].patato.protein}</li>
                        <li>carb={this.state.food[0].patato.Carb}</li>
                    </ul>
                    </div>
                </div>

            );
            style.background = 'red';

            style[':hover'] = {
                background: 'blue'
            };
        };

       let penut = null;
        if (this.state.show) {
            penut = (
                <div class="bb">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqFIoV9f08SfQqa5eE8trrQyKOej_2sedvVrQ2fE2Lwl2IRzteA" />
                    <div> <ul>
                        <li>Name={this.state.food[1].Penut.name}</li>
                        <li> Protein={this.state.food[1].Penut.protein}</li>
                        <li>carb={this.state.food[1].Penut.Carb}</li>
                    </ul>
                    </div>
                </div>
            );
        };*/
        render() {
        return (
            <div>
            <li><Hidden/></li>
            </div>
            
        );
    }

}
export default Radium(App);
    //export default Radium(person);
 