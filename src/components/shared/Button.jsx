import { FaChevronRight } from 'react-icons/fa'

function Button({text, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn-${version}`}>
        <p>
          {text}
        </p>
        {version === 'signIn' && <FaChevronRight/>}
    </button>
  )
}

export default Button