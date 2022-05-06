
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import ContactsView from 'views/ContactsView/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';
import { authOperations } from './redux/auth';


export default function App() {

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </Container>
  );
}