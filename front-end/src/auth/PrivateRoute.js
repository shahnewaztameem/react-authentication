import { Redirect, Route } from 'react-router-dom'
import { useUser } from './useUser'

export const PrivateRoute = (props) => {
  const user = useUser()
  console.log(user)
  if (!user) return <Redirect to='/login' />

  return <Route {...props} />
}
