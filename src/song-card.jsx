import classNames from 'classnames';
import { Component } from 'preact';
import styles from './song-card.css';

export class SongCard extends Component {
  constructor(props) {
    super(props);
      let songIdPad = ('000' + this.props.songId).slice(-4);
      let bannerUrl = `./kc_${songIdPad}.png`;

    this.state = {
        bannerElStyle: {
            background: `url("${bannerUrl}")`,
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'background-size': '104% 104%',

            'border-radius': '5px 5px 0 0',
        }
    };
  }

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
        songId,
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
          <div className={styles.bannerPlaceholder + ' ' + styles.name}>
              {!nameTranslation && !genreTranslation && name}
              {nameTranslation}
              {genreTranslation}
          </div>
        <div className={styles.cardCenter} style={this.state.bannerElStyle}>
            <div className={styles.nameAndGenre}>
              <div className={styles.name}>
                  {!nameTranslation && !genreTranslation && name}
                  {nameTranslation}
                  {genreTranslation}
              </div>
              {/*<div className={styles.genre} title={genreTranslation}>*/}
              {/*</div>*/}
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
