import React from 'react';

import s from './Loader.sass';

const Loader = () => (
  <div className={s.container}>
    <div className={s.matrix}>
      <div className={s.row}>
        <div className={s.anim1} />
        <div className={s.anim2} />
        <div className={s.anim3} />
        <div className={s.anim4} />
        <div className={s.anim5} />
      </div>
      <div className={s.row}>
        <div className={s.anim2} />
        <div className={s.anim3} />
        <div className={s.anim4} />
        <div className={s.anim5} />
        <div className={s.anim6} />
      </div>
      <div className={s.row}>
        <div className={s.anim3} />
        <div className={s.anim4} />
        <div className={s.anim5} />
        <div className={s.anim6} />
        <div className={s.anim7} />
      </div>
      <div className={s.row}>
        <div className={s.anim4} />
        <div className={s.anim5} />
        <div className={s.anim6} />
        <div className={s.anim7} />
        <div className={s.anim8} />
      </div>
      <div className={s.row}>
        <div className={s.anim5} />
        <div className={s.anim6} />
        <div className={s.anim7} />
        <div className={s.anim8} />
        <div className={s.anim9} />
      </div>
    </div>
    <h1 className={s.heading}>Project Palette</h1>
  </div>
);

export default Loader;
