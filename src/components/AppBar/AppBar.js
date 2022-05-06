import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header style={s.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
}