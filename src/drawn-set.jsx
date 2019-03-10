import { Component } from 'preact';
import { SongCard } from './song-card';
import styles from './drawn-set.css';

let index = -1;
export class DrawnSet extends Component {
    constructor(props) {
      super(props);
      const getNextColor = function() {
          index = (index + 1) % 5;
          switch (index) {
              case 0:
                  return '#f1b3b3';
              case 1:
                  return '#efecae';
              case 2:
                  return '#cbefc3';
              case 3:
                  return '#c3ccef';
              case 4:
              default:
                  return '#e8ceef';
          }
      };
      this.state = {
        inlineStyle: {
          background: 'linear-gradient(' + getNextColor() + ', white, white)'
          //   backgroundColor: getNextColor()
        }
      };
    }
  render() {
    const { drawing } = this.props;
    return (
      <div key={drawing.id} className={styles.chartList} style={this.state.inlineStyle}>
        {drawing.charts.map(this.renderChart)}
      </div>
    );
  }

  renderChart = (chart, j) => {
    return (
      <SongCard
        key={j}
        onVeto={this.handleVeto.bind(this, j)}
        vetoed={this.props.drawing.vetos.has(j)}
        {...chart}
      />
    );
  }

  handleVeto(j) {
    const drawing = this.props.drawing;
    if (drawing.vetos.has(j)) {
      drawing.vetos.delete(j);
    } else {
      drawing.vetos.add(j);
    }
    this.forceUpdate();
  }
}
