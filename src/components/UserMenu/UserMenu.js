import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {

  return (
    <div style={s.container}>
      <img src={defaultAvatar} alt="" width="32" style={s.avatar} />
      <span style={s.name}>Welcome, userName!</span>
      <button type="button" >
        Logout
      </button>
    </div>
  );
}