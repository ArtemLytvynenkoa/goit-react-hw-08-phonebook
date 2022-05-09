import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from 'components/AppBar';
import ContactsView from 'views/ContactsView/ContactsView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import Container from './components/Container';
import PrivateRoute from 'components/PrivateRoute';
import { authOperations, authSelectors } from './redux/auth';
import PublicRoute from 'components/PublicRoute';
import Loader from 'components/Loader';


export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    isFetchingCurrentUser ? <Loader/> : (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<Loader/>}>
            <PublicRoute exact path="/register" restricted>
              <RegisterView/>
            </PublicRoute>

            <PublicRoute exact path="/login" restricted>
              <LoginView/>
            </PublicRoute>
          
            <PrivateRoute path="/contacts">
              <ContactsView/>
            </PrivateRoute>
          </Suspense>  
        </Switch>
      </Container>
    )
  );
}
