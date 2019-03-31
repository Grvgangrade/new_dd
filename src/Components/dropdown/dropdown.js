import React, { Component } from 'react'
import './dropdown.css';

export class dropdown extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      options: [
        {value: 'Aces' , displayValue: 'Aces'},
        {value: 'Double Fault' , displayValue: 'Double Fault'},
        {value: 'First Serve IN' , displayValue: 'First Serve IN'},
        {value: 'Second Serve IN' , displayValue: 'Second Serve IN'},
        {value: 'Points Won' , displayValue: 'Points Won'},
        {value: 'Winners' , displayValue: 'Winners'},
        {value: 'Break Points' , displayValue: 'Break Points'}
      ],
      selectedItem: 'Player 1'
    }
  }

  onClickHandler = (item) => {
    this.setState({selectedItem: item})
  }
  
  render() {
    return (
      <div class="dd">
        <ul >
            <li className="DropDown ">
              <div className="dropdown-container active">
                <a href="#" className="nav-link">Player 1</a>
                <div className="sublink-container slide-up">
                {this.props.options.map(item => {
                  return <div className="dropdown-link" 
                  value={item.value}>{item.displayValue}</div>
                })}
                </div>
              </div>
            </li>
            <li className="DropDown ">
              <div className="dropdown-container active">
                <a href="#" className="nav-link">{this.state.selectedItem}</a>
                <div className="sublink-container slide-up">
                  {this.state.options.map((item,index) => {
                    return <div className="dropdown-link" onClick={() => this.onClickHandler(item.value)}
                      value={item.value}>{item.displayValue}</div>
                  })}
                </div>
              </div>
            </li>
        </ul>
      </div>
    )
  }
}






export default dropdown;
