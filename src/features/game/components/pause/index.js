import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';

import style from './index.module.less';

export default function Pause() {
  const isRunning = useSelector((state) => state.game.isRunning);

  return (
    <div
      className={cn({
        bg: true,
        [style.pause]: true,
        [style.c]: !isRunning,
      })}
    />
  );
}
