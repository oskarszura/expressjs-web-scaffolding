const React = require('react')
  , FileDropper = require('./fileDropper.jsx')
  , Rx = require('rxjs');

class ListFileDropper extends React.Component {
  constructor (props) {
    super(props);

    const zones = props.images.map((image, index) => {
      return {
        id: index
        , dropZoneRef: `fileDropper-${index}`
        , image: image
      }
    })

    this.state = {
      zones: zones
      , nextId: zones.length + 1
    }
  }

  componentWillReceiveProps (props) {
    const zones = props.images.map((image, index) => {
      return {
        id: index
        , dropZoneRef: `fileDropper-${index}`
        , image: image
      }
    })

    this.setState({
      zones: zones
      , nextId: zones.length + 1
    })
  }

  componentDidMount () {
    const addElement = this.refs.addElement
      , addStream = Rx.Observable.fromEvent(addElement, 'click');

    addStream.subscribe(function(value) {
      this.setState({
        zones: this.state.zones.concat([{
          id: this.state.nextId
        , dropZoneRef: `fileDropper-${this.state.nextId}`
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

  getAllFiles () {
    return this.state.zones
                     .map(function(zone) {
                       return this.refs[zone.dropZoneRef].state.image;
                     }.bind(this))
  }

  render () {
    return (<div className="component-list-file-dropper">
      { this.state
        .zones
        .map((zone, zoneIndex) => {
          return <div key={`zone-${zone.id}`}>
            <FileDropper ref={zone.dropZoneRef}
                         image={zone.image}/>
            <button className="component-list-file-dropper__remove"
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