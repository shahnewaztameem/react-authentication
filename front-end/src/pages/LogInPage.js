import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const LogInPage = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const history = useHistory()

  const onLogInClicked = async () => {
    alert('Login not implemented yet')
  }

  return (
    <div className='content-container'>
      <h1>Log In</h1>
      {errorMessage && <div className='fail'>{errorMessage}</div>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder='example@domain.com'
      />
      <input
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type='password'
        placeholder='password'
      />
      <button disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>
        Log In
      </button>
      <button onClick={() => history.push('/forgot-password')}>
        Forgot Password?
      </button>
      <button onClick={() => history.push('/signup')}>
        Dont Have an account? Sign Up
      </button>
    </div>
  )
}
