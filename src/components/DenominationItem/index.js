import './index.css'

const DenominationItem = props => {
  const {value, amountChange} = props

  const onDecreaseCash = () => {
    amountChange(value)
  }

  return (
    <li className="item-container">
      <button type="button" className="button" onClick={onDecreaseCash}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
