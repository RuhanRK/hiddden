import React, { Component } from "react";

class Hidden extends Component {
    state = {
        text: "",
        food: [
            { name: "persi", lastname: "tongra" },
            { name: "rashant", lastname: "tongr" }
        ],

        suggest: []
    };

    onSearch = e => {
        const value = e.target.value;
        let suggest = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, "i");
            suggest = this.state.food
                .map(food => food.name)
                .sort()
                .filter(v => regex.test(v));
        }
        //   suggest = this.state.food.sort().filter (v => regex.test(v));
        //}
        console.log(suggest);
        this.setState(() => ({ suggest }));
    };
    suggestionsSelected(value) {
        this.setState({ text: value, suggest: [] });
    }

    renderSuggest() {
        const { suggest } = this.state;
        if (suggest.length === 0) {
            return null;
        }

        return (
            <ul>
                {suggest.map(food => (
                    <li
                        key={food}
                        onClick={() => this.suggestionsSelected(food)}
                    >
                        {food}
                    </li>
                ))}
            </ul>
        );
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="search"
                    onChange={this.onSearch}
                    value={this.state.text}
                />
                <div>
                    <div>{this.renderSuggest()}</div>
                </div>
            </div>
        );
    }
}

export default Hidden;
