import {getAuth, updateProfile} from 'firebase/auth'
import {useEffect, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {updateDoc, doc} from 'firebase/firestore'
import {db} from '../firebase.config'
import Button from '../components/shared/Button'
import { toast } from 'react-toastify'

function Profile() {
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const {name, email} = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/signin')
  }

  const onSubmit = async () => {
    try {
      if(auth.currentUser.displayName !== name){
        await updateProfile(auth.currentUser, {
          displayName: name
        })
        const userRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(userRef, {
          name
        })
      }
    } catch (error) {
      toast.error('Could not update profile')
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return <div className='profile'>
    <header className='profileHeader'>
    <p className='pageHeader'>My Profile</p>
    <Button type='button' isDisabled={false}  version='logOut' text='Log Out' onClick={onLogout}/>
    </header>
    <main>
      <div className='profileDetailsHeader'>
        <p className='profileDetailsText'>
          Personal Details
        </p>
        <p className='changePersonalDetails' onClick={() => {
          changeDetails && onSubmit()
          setChangeDetails((prevState) => !prevState)
        }}>
          {changeDetails ? 'done' : 'change'}
        </p>
      </div>
      <div className='profileCard'>
        <form>
          <input 
            type='text'
            id='name'
            className={!changeDetails ? 'profileName' : 'profileNameActive'}
            disabled={!changeDetails}
            value={name}
            onChange={onChange}
          />
          <input 
            type='text'
            id='email'
            className='profileEmail'
            disabled={true}
            value={email}
            onChange={onChange}
          />
        </form>
      </div>
    </main>
  </div>

  // return user ? <h1>{user.displayName}</h1> : 'Not Logged'

}

export default Profile