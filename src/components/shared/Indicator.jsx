import Card from './Card'
import PropTypes from 'prop-types'
// import {FaTimes} from 'react-icons/fa'

function Indicator ({item, budget, objective}) {
  return (
    <Card first={true}>
      <h2 className='card-name'>{'New Car'}</h2>
      <div className='amount-display'>{'10000'}</div>
      <div className='var-amount-display'>{'Total remaining: 10000'}</div>
    </Card>
  )
}

Indicator.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Indicator