import { connect } from 'react-redux';
import ColourList from '../components/ColourList';

const mapStateToProps = state => ({
  colours: state.colours.colours,
});

const mapDispatchToProps = () => ({});

const ColourListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColourList);

export default ColourListContainer;
