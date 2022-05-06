
import s from './LoginView.module.css';

export default function LoginView() {
  return (
    <div>
      <h1>Login page</h1>

      <form style={s.form} autoComplete="off">
        <label style={s.label}>
          Email
          <input
            type="email"
            name="email"
            value='email'
          />
        </label>

        <label style={s.label}>
          Password
          <input
            type="password"
            name="password"
            value='password'
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}