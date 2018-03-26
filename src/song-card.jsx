import classNames from 'classnames';
import { Component } from 'preact';
import styles from './song-card.css';

const difficultyNames = {
  beginner: "Beg",
  basic: "Bas",
  difficult: "Dif",
  expert: "Ex",
  challenge: "Ch",
};

export class SongCard extends Component {
  render() {
    const {
      name,
      nameTranslation,
      artist,
      artistTranslation,
      bpm,
      difficulty,
      rating,
      hasShock,
      vetoed,
    } = this.props;

    const rootClassname = classNames(
      styles.chart,
      styles[difficulty],
      {
        [styles.vetoed]: vetoed,
      },
    );

    return (
      <div className={rootClassname} onClick={this.props.onVeto}>
        <div className={styles.cardCenter}>
          <div className={styles.name} title={nameTranslation}>
            {name}
          </div>
          <div className={styles.artist} title={artistTranslation}>
            {artist}
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.bpm}>{bpm} BPM</div>
          {hasShock && <div className={styles.shockBadge} title="Shock Arrows">&#9889;</div>}
          <div className={styles.difficulty}>{difficultyNames[difficulty]} {rating}</div>
        </div>
      </div>
    );
  }

  toggleVeto = () => {
    this.setState((prevState) => ({
      vetoed: !prevState.vetoed,
    }));
  }
}
