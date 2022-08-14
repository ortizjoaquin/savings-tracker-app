import Card from './Card'
// import {FaTimes} from 'react-icons/fa'

function Indicator ({title, amount, varAmount, budget, objective}) {
  return (
    <Card first={true}>
      <h2 className='card-name'>{title}</h2>
      <div className='amount-display'>{amount}</div>
      <div className='var-amount-display'>{varAmount}</div>
    </Card>
  )
}

export default Indicator