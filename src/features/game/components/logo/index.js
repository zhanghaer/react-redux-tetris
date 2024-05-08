import React from 'react';
import cn from 'classnames';
import { i18nData as i18n, lan } from '../../../../utils/const';

import style from './index.module.less';

export default function Logo() {
  return (
    <div className={style.logo} style={{ display: 'block' }}>
      <div
        className={cn({
          bg: true,
          [style.dragon]: true,
          [style.r1]: true,
        })}
      />
      <p dangerouslySetInnerHTML={{ __html: i18n.titleCenter[lan] }} />
    </div>
  );
}
