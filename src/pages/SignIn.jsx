import { useState } from 'react'
import { toast } from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { db } from '../firebase.config'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
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

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential.user) {
        navigate('/')
      }
    }
    catch (error){
      toast.error('Bad user credentials');
    }
  }

  const passwordVisibility = () => setShowPassword((prevState) => !prevState)

  return (
    <>
      <div className='container'>
        <header>
          <p className='pageHeader'>Welcome Back!</p>
        </header>
        <form onSubmit={onSubmit}>
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
        <div className='signInUpLinkContainer'>
          <Link to='/signup' className='signUpLink'>
            Or Sign Up Instead!
          </Link>
        </div>
      </div>
    </>
  )
}

export default SignIn