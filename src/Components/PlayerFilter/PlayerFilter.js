import React, { Component } from 'react';

import DropDown from '../dropdown/dropdown';

export class PlayerFilter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         options: [
             {value: 'Player 1' , displayValue: 'Player 1'},
             {value: 'Player 2' , displayValue: 'Player 2'},
             {value: 'Player 3' , displayValue: 'Player 3'},
         ]
      }
    }
    
    onChangeHandler = (e) => {
        console.log(e.target.value);
    }
  render() {
    return (
      <div>
          <DropDown options={this.state.options}
                changed={this.onChangeHandler}/>
      </div>
    )
  }
}

export default PlayerFilter
