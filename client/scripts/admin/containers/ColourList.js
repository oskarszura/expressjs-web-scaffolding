import { connect } from 'react-redux';
import ColourList from '../components/ColourList';

const mapStateToProps = (state) => {
  return {
    colours: state.colours,
  };
}

const mapDispatchToProps = () => {
  return {
  };
}

const ColourListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColourList);

export default ColourListContainer;
