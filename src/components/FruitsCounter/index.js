// Write your code here
/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    this.setState(prevState => {
      console.log(`prev vlaue ${prevState.mango}`)
      return {mango: prevState.mango + 1}
    })
  }

  onBanana = () => {
    this.setState(prevState => {
      console.log(`prev vlaue ${prevState.banana}`)
      return {banana: prevState.banana + 1}
    })
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="page">
        <div className="card">
          <h1>
            Bob ate <span>{mango}</span> mangoes and <span>{banana}</span>{' '}
            bananas
          </h1>
          <div className="flex-items-container">
            <div className="flex-item">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button onClick={this.onMango}>Eat Mango</button>
              </div>
            </div>
            <div className="flex-item">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div>
                <button onClick={this.onBanana}>Eat Banana</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
