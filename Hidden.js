import React, { Component } from 'react';
import './pp.css';

class Hidden extends Component {
   
        state = {
            food : [
            
          {name:"persi",lastname:"tongra"},
          {name:"rashant", lastname:"tongr"},
         
        ],
    
            suggest: [],
        }
    



onSearch = (e) => {
    const value = e.target.value;
    let suggest = [];
    if (value.length > 0) {
        const regex = new RegExp(`^${value}`, 'i');
        suggest=this.state.food.map(food => food.name)
             suggest.sort().filter (v => regex.test(v));
    }
     //   suggest = this.state.food.sort().filter (v => regex.test(v));
    //}
    this.setState(() => ({ suggest }));
}
suggestionsSelected (value) {
    this.setState(()=>({
        text:value,
        suggest: []
    }
    ))
}
toggel=(a)=>{
    const value=a.target.value;
    if (value==='ss'){
        return(
            <div>
                <h1>Patato</h1>
            </div>
        );
    }

}
renderSuggest() {
    const { suggest } = this.state;
    if (suggest.length === 0) {
        return null;
    }
   
    return (
        <ul>
            {suggest.map((food) => <li>{()=>this.suggestionsSelected()} <div className="acb" onClick={this.toggel}>{food}</div></li>)}
        </ul>
    );
}
render(){
return (
    <div>
       <input type="text" placeholder="search" onChange={this.onSearch} />
        <div >
        <div>
        {this.renderSuggest()}
        </div>
        </div>
    </div>
    
)
}

}

export default Hidden;
