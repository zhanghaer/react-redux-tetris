import { useRef, useEffect } from 'react';
import Button from '../button';
import { i18nData as i18n, lan } from '../../../../utils/const';
import { useSelector, useDispatch } from 'react-redux';
import {
  moveLeft,
  moveRight,
  moveDown,
  rotate,
  pause,
  resume,
  restart,
  start,
} from '../../game-slice';

import style from './index.module.less';

export default function Keyboard() {
  const dom_rotate = useRef(null);
  const dom_down = useRef(null);
  const dom_left = useRef(null);
  const dom_right = useRef(null);
  const dom_space = useRef(null);
  const dom_r = useRef(null);
  const dom_s = useRef(null);
  const dom_p = useRef(null);

  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);

  const handleRotate = () => {
    if (!isRunning || gameOver) return;
    dispatch(rotate());
  };

  const handleRight = () => {
    if (!isRunning || gameOver) return;
    dispatch(moveRight());
  };

  const handleLeft = () => {
    if (!isRunning || gameOver) return;
    dispatch(moveLeft());
  };

  const handleDown = () => {
    if (!isRunning || gameOver) return;
    dispatch(moveDown());
  };

  const handleStart = () => {
    if (isRunning || !gameOver) return;
    dispatch(start());
  };

  const handlePause = () => {
    if (gameOver) return;
    if (isRunning) {
      dispatch(pause());
    } else {
      dispatch(resume());
    }
  };

  const handleReset = () => {
    dispatch(restart());
  };

  const handleSound = () => {};

  return (
    <div
      className={style.keyboard}
      style={{
        marginTop: 20 + 0,
      }}
    >
      <Button
        color="blue"
        size="s1"
        top={0}
        left={374}
        label={i18n.rotation[lan]}
        arrow="translate(0, 63px)"
        position
        // active={isRunning && !gameOver}
        ref={dom_rotate}
        onClick={handleRotate}
      />
      <Button
        color="blue"
        size="s1"
        top={180}
        left={374}
        label={i18n.down[lan]}
        arrow="translate(0,-71px) rotate(180deg)"
        active={false}
        ref={dom_down}
        onClick={handleDown}
      />
      <Button
        color="blue"
        size="s1"
        top={90}
        left={284}
        label={i18n.left[lan]}
        arrow="translate(60px, -12px) rotate(270deg)"
        active={false}
        ref={dom_left}
        onClick={handleLeft}
      />
      <Button
        color="blue"
        size="s1"
        top={90}
        left={464}
        label={i18n.right[lan]}
        arrow="translate(-60px, -12px) rotate(90deg)"
        active={false}
        ref={dom_right}
        onClick={handleRight}
      />
      <Button
        color="blue"
        size="s0"
        top={100}
        left={52}
        label={`${i18n.drop[lan]}`}
        active={false}
        ref={dom_space}
        onClick={handleStart}
      />
      <Button
        color="red"
        size="s2"
        top={0}
        left={196}
        label={`${i18n.reset[lan]}`}
        active={false}
        ref={dom_r}
        onClick={handleReset}
      />
      {/* <Button
        color="green"
        size="s2"
        top={0}
        left={106}
        label={`${i18n.sound[lan]}`}
        active={false}
        ref={dom_s}
        onClick={handleSound}
      /> */}
      <Button
        color="green"
        size="s2"
        top={0}
        left={16}
        label={`${i18n.pause[lan]}`}
        active={false}
        ref={dom_p}
        onClick={handlePause}
      />
    </div>
  );
}
