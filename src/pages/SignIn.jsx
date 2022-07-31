import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa'
import Button from '../components/shared/Button'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const {email, password} = formData
  const navigate = useNavigate()
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  const passwordVisibility = () => setShowPassword((prevState) => !prevState)

  return (
    <>
      <div className='container'>
        <header>
          <p className='pageHeader'>Welcome Back!</p>
        </header>
        <form>
          <input 
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
              />
            {showPassword === false ? <FaEye className='showPassword'
            onClick={passwordVisibility}/> : <FaEyeSlash
            className='showPassword' onClick={passwordVisibility}/>}
          </div>
          <div className='signInBar'>
            <p className='signInText'>
              Sing In
            </p>
            <Button type='submit' isDisabled={false}  version='signIn' />
          </div>
        </form>
        {/* Google OAuth */}
        <Link to='/signup' className='signUpLink'>
          Or Sign Up Instead!
        </Link>
      </div>
    </>
  )
}

export default SignIn