import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserInfoPage } from './pages/UserInfoPage'
import { LogInPage } from './pages/LogInPage'
import { SignUpPage } from './pages/SignUpPage'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <UserInfoPage />
        </Route>
        <Route path='/login'>
          <LogInPage />
        </Route>
        <Route path='/signup'>
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  )
}
