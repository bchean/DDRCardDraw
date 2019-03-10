import classNames from 'classnames';
import { Component } from 'preact';
import styles from './song-card.css';

export class SongCard extends Component {
  render() {
    const {
      name,
      nameTranslation,
      artist,
      artistTranslation,
      bpm,
      difficulty,
      level,
      hasShock,
      vetoed,
      abbreviation,
        title,
        titleTranslation,
        genreTranslation,
        version,
    } = this.props;

    const rootClassname = classNames(
      styles.chart,
      styles[abbreviation + level],
      {
        [styles.vetoed]: vetoed,
      },
    );

    return (
      <div className={rootClassname} onClick={this.props.onVeto}>
          {/*<div className={styles.cardHeader}>*/}
              {/*<div className={styles.version}>{version}</div>*/}
          {/*</div>*/}
        <div className={styles.cardCenter}>
          <div className={styles.name} title={nameTranslation}>
            {name + (!!nameTranslation && ' (' + nameTranslation + ')' || '')}
          </div>
          <div className={styles.genre} title={genreTranslation}>
            {genreTranslation}
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.bpm}>{bpm} BPM</div>
            <div className={styles.version}>{version}</div>
          {hasShock && <div className={styles.shockBadge} title="Shock Arrows">&#9889;</div>}
          <div className={styles.difficulty}>{abbreviation} {level}</div>
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
