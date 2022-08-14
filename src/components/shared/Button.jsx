import { FaChevronRight, FaPlus } from 'react-icons/fa'

function Button({text, version, type, isDisabled, onClick}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn-${version}`} onClick={onClick}>
        <p>
          {text}
        </p>
        {version === 'signIn' && <FaChevronRight/>}
        {version === 'add' && <FaPlus/>}
    </button>
  )
}

export default Button