import React from 'react';
import PropTypes from 'prop-types';

import s from './ColorList.sass';

const ColorList = ({palette, openColorDetail}) => (
  <table className={s.container}>
    <thead>
      <tr>
        <th>Hue</th>
        <th>Occurences</th>
      </tr>
    </thead>
    <tbody className={s.body}>
      {Object.keys(palette).map((color, key) => (
        <tr
          className={s.row}
          onClick={() => { openColorDetail(color); }}
          style={{backgroundColor: color}}
          key={key}
        >
          <td>{color}</td>
          <td>{palette[color].locations.length}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

ColorList.propTypes = {
  palette: PropTypes.object.isRequired,
  openColorDetail: PropTypes.func.isRequired,
};

export default ColorList;
