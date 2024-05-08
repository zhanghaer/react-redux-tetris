import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { shapes } from '../../../../utils';
import { moveDown } from '../../game-slice';
import { useTimer } from '../../../../utils/useTimer';

import style from './index.module.less';

export default function Martrix() {
  const game = useSelector((state) => state.game);
  const { board, shape, rotation, x, y, isRunning, speed } = game;

  const block = shapes[shape][rotation];

  const blockColor = shape;

  useTimer(isRunning, speed, moveDown);

  const boardSquare = board.map((rowArray, row) => {
    return (
      <p key={row}>
        {rowArray.map((square, col) => {
          //col（0-9）row（0-19)
          const blockX = col - x;
          const blockY = row - y;

          let color = square;
          //生成移动的block的颜色
          if (
            blockX >= 0 &&
            blockX < block.length &&
            blockY >= 0 &&
            blockY < block.length
          ) {
            color = block[blockY][blockX] === 0 ? color : blockColor;
          }
          const k = row * board[0].length + col;
          return (
            <b
              className={classnames({
                c: color === 1,
                d: color > 1,
              })}
              key={k}
            />
          );
        })}
      </p>
    );
  });

  return <div className={style.matrix}>{boardSquare}</div>;
}
