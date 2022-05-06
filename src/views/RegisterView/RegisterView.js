import s from './RegisterView.module.css';

export default function RegisterView() {

  return (
    <div>
      <h1>Register page</h1>

      <form style={s.form} autoComplete="off">
        <label style={s.label}>
          Name
            <input
                type="text"
                name="name"
                value={name} />
        </label>

        <label style={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
          />
        </label>

        <label style={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}