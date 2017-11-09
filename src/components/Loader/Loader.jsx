import React from 'react';

import './Loader.sass';

const Loader = () => (
  <div className="logo__container">
    <div className="logo__matrix">
      <div className="logo__matrix__row">
        <div className="logo__matrix__dot color-anim1" />
        <div className="logo__matrix__dot color-anim2" />
        <div className="logo__matrix__dot color-anim3" />
        <div className="logo__matrix__dot color-anim4" />
        <div className="logo__matrix__dot color-anim5" />
      </div>
      <div className="logo__matrix__row">
        <div className="logo__matrix__dot color-anim2" />
        <div className="logo__matrix__dot color-anim3" />
        <div className="logo__matrix__dot color-anim4" />
        <div className="logo__matrix__dot color-anim5" />
        <div className="logo__matrix__dot color-anim6" />
      </div>
      <div className="logo__matrix__row">
        <div className="logo__matrix__dot color-anim3" />
        <div className="logo__matrix__dot color-anim4" />
        <div className="logo__matrix__dot color-anim5" />
        <div className="logo__matrix__dot color-anim6" />
        <div className="logo__matrix__dot color-anim7" />
      </div>
      <div className="logo__matrix__row">
        <div className="logo__matrix__dot color-anim4" />
        <div className="logo__matrix__dot color-anim5" />
        <div className="logo__matrix__dot color-anim6" />
        <div className="logo__matrix__dot color-anim7" />
        <div className="logo__matrix__dot color-anim8" />
      </div>
      <div className="logo__matrix__row">
        <div className="logo__matrix__dot color-anim5" />
        <div className="logo__matrix__dot color-anim6" />
        <div className="logo__matrix__dot color-anim7" />
        <div className="logo__matrix__dot color-anim8" />
        <div className="logo__matrix__dot color-anim9" />
      </div>
    </div>
    <h1 className="logo__heading">Project Palette</h1>
  </div>
);

export default Loader;
