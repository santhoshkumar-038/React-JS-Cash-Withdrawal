import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  amountChange = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="container">
        <div className="main-container">
          <div className="heading-container">
            <div className="profile-container">
              <p className="profile">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          {/* <ul className="item-container">
              {denominationsList.map(eachValue => (
                  <DenominationItem key={eachValue.id value={eachValue.value} amountChange={this.amountChange}/>
              ))}
          </ul> */}
          <ul className="item-container">
            {denominationsList.map(eachVal => (
              <DenominationItem
                key={eachVal.id}
                value={eachVal.value}
                amountChange={this.amountChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
