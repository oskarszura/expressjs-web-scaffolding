const React = require('react')
  , FileDropper = require('./fileDropper.jsx')
  , Rx = require('rxjs');

class ListFileDropper extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      zones: [{
        id: 0
      }]
    , nextId: 0
    })
  }

  componentDidMount () {
    const addElement = this.refs.addElement
      , addStream = Rx.Observable.fromEvent(addElement, 'click');

    addStream.subscribe(function(value) {
      this.setState({
        zones: this.state.zones.concat([{
          id: this.state.nextId
        }])
      , nextId: this.state.nextId + 1
      })
    }.bind(this));
  }

  removeZone (zoneIndex) {
    this.setState(state => {
      state.zones.splice(zoneIndex, 1);

      return {
        zones: state.zones
      };
    });
  }

  render () {
    return (<div className="component-list-file-dropper">
      { this.state
        .zones
        .map((zone, zoneIndex) => {
          return <div ref={`zone-${zone.id}`}>
           <FileDropper/>
            <button zoneIndex={zoneIndex}
                    className="component-list-file-dropper__remove"
                    onClick={this.removeZone.bind(this, zoneIndex)} >
              Remove zone
            </button>
          </div>
        })}

      <button ref="addElement"
              className="component-list-file-dropper__add">
        Add Dropzone
      </button>
    </div>);
  }
}

module.exports = ListFileDropper;