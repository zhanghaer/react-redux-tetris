import React from 'react';
import { useSelector } from 'react-redux';
import { shapes } from '../../../../utils';

import style from './index.module.less';

export default function Next() {
  const nextShape = useSelector((state) => state.game.nextShape);
  const block = shapes[nextShape][0];

  const blockToDisplay = block.map((rowArr, row) => {
    return (
      <div key={row}>
        {rowArr.map((square, col) => {
          return <b className={square !== 0 ? 'c' : ''} key={col} />;
        })}
      </div>
    );
  });

  return <div className={style.next}>{blockToDisplay}</div>;
}
