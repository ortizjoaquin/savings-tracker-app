import {useEffect, useState} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loadingStatus, setLoadingStatus] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setLoggedIn(true)
      }
      setLoadingStatus(false)
    })
  })
  return { loggedIn, loadingStatus}
}