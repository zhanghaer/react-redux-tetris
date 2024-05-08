import React, { forwardRef } from 'react';
import cn from 'classnames';

import style from './index.module.less';
import { transform } from '../../../../utils/const';

const Button = forwardRef(function Button(props, ref) {
  const { active, color, size, top, left, label, position, arrow, onClick } =
    props;
  return (
    <div
      className={cn({
        [style.button]: true,
        [style[color]]: true,
        [style[size]]: true,
      })}
      style={{ top, left }}
    >
      <i
        className={cn({ [style.active]: active })}
        ref={ref}
        onClick={onClick}
      />
      {size === 's1' && (
        <em
          style={{
            [transform]: `${arrow} scale(1,2)`,
          }}
        />
      )}
      <span className={cn({ [style.position]: position })}>{label}</span>
    </div>
  );
});

export default Button;
