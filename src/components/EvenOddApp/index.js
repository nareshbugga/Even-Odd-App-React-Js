/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const value = Math.random() * 100
    const fullValue = Math.ceil(value)
    this.setState(prevState => ({count: prevState.count + fullValue}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0
    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1>Count {count}</h1>
          {text ? <p>Count is Even</p> : <p>Count is Odd</p>}
          <div>
            <button type="button" className="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>

          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
