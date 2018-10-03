import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import classNames from 'classnames';
import tinycolor from 'tinycolor2';

import {getTextColor} from 'utils/color-manipulation';
import {triggerIfEnterKey} from 'utils/misc';

import s from './ColorList.sass';

const ColorList = ({palette, openColorDetail}) => (
  <Media query="(max-width: 439px)">
    { matches => (
      matches ? (
        <table className={s.container}>
          <thead>
            <tr>
              <th className={classNames(s.headerCell, s.center)}>Colors</th>
            </tr>
          </thead>
          <tbody className={s.body}>
            {Object.keys(palette).map((color, key) => (
              <tr
                className={s.row}
                onClick={() => { openColorDetail(color); }}
                onKeyDown={event => {
                  triggerIfEnterKey(
                    event,
                    () => { openColorDetail(color); },
                  );
                }}
                tabIndex="0"
                role="button"
                style={{backgroundColor: color, color: getTextColor(color)}}
                key={key}
              >
                <td
                  className={classNames(s.cell, s.center)}
                  style={{backgroundColor: color, color: getTextColor(color)}}
                >
                  {color}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className={s.container}>
          <thead>
            <tr>
              <th className={classNames(s.headerCell, s.left)}>Hue</th>
              <th className={classNames(s.headerCell, s.left)}>Contrast</th>
              <th className={classNames(s.headerCell, s.right)}>Locations</th>
            </tr>
          </thead>
          <tbody className={s.body}>
            {Object.keys(palette).map((color, key) => (
              <tr
                className={s.row}
                onClick={() => { openColorDetail(color); }}
                onKeyDown={event => {
                  triggerIfEnterKey(
                    event,
                    () => { openColorDetail(color); },
                  );
                }}
                tabIndex="0"
                role="button"
                key={key}
              >
                <td
                  className={classNames(s.cell, s.left)}
                  style={{backgroundColor: color, color: getTextColor(color)}}
                >
                  {color}
                </td>
                <td
                  className={classNames(s.cell, s.left)}
                  style={{backgroundColor: color, color: getTextColor(color)}}
                >
                  {tinycolor(color).isDark() ? 'Dark' : 'Light'}
                </td>
                <td
                  className={classNames(s.cell, s.right)}
                  style={{backgroundColor: color, color: getTextColor(color)}}
                >
                  {palette[color].locations.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    )}
  </Media>
);

ColorList.propTypes = {
  palette: PropTypes.object.isRequired,
  openColorDetail: PropTypes.func.isRequired,
};

export default ColorList;
