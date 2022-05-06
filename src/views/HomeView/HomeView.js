import React from 'react';
import s from './HomeView.module.css';

const HomeView = () => (
  <div style={s.container}>
    <h1 style={s.title}>
      Приветственная страница нашего сервиса{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;