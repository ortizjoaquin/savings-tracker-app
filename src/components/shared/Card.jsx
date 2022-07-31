import PropTypes from 'prop-types'

function Card({children, first, income, expense}) {
  return (
    <div className={`card ${first && 'first'} ${income && 'income'} ${expense && 'expense'}`}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  first: PropTypes.bool,
}

export default Card