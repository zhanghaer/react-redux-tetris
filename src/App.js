import { useEffect, useState } from 'react';
import { transform, i18nData as i18n, lan } from './utils/const';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { setScore } from './features/game/game-slice';

import Decorate from './features/game/components/decorate';
import Martrix from './features/game/components/martrix';
import Logo from './features/game/components/logo';
import Keyboard from './features/game/components/keyboard';
import Point from './features/game/components/point';
import Number from './features/game/components/number';
import Next from './features/game/components/next';
import Pause from './features/game/components/pause';

import style from './index.module.less';

function App() {
  const [size, setSize] = useState({});
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { score, isRunning, gameOver, highestScore, completedRows } = game;

  useEffect(() => {
    const size = (() => {
      const w = document.documentElement.clientWidth;
      const h = document.documentElement.clientHeight;
      const ratio = h / w;
      let scale;
      let css = {};
      let filling = 0;
      if (ratio < 1.5) {
        scale = h / 960;
      } else {
        scale = w / 640;
        filling = (h - 960 * scale) / scale / 3;
        css = {
          paddingTop: Math.floor(filling) + 42,
          paddingBottom: Math.floor(filling),
          marginTop: Math.floor(-480 - filling * 1.5),
        };
      }
      css[transform] = `scale(${scale})`;
      return css;
    })();
    setSize(() => size);
  }, []);

  useEffect(() => {
    if (score > highestScore) {
      dispatch(setScore(score));
    }
  }, [score, highestScore]);

  return (
    <div className={style.app} style={size}>
      <div
        className={classnames({
          [style.rect]: true,
          [style.drop]: true,
        })}
      >
        <Decorate />
        <div className={style.screen}>
          <div className={style.panel}>
            <Martrix />
            {gameOver && <Logo />}
            <div className={style.state}>
              <Point label={i18n.highestScore[lan]} number={highestScore} />
              <Point label={i18n.cleans[lan]} number={completedRows} />
              <Point label={i18n.point[lan]} number={score} />
              <p>{i18n.next[lan]}</p>
              <Next />
              <div className={style.bottom}>
                {/* <Music data={this.props.music} /> */}
                <Pause />
                <Number time />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Keyboard />
    </div>
  );
}

export default App;
