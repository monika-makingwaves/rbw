import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../presentionalComponents/link';

const mapStateToProps = (state, ownProps) => {
  return {
      active: ownProps.filter === state.visibilityFilter
  }
};

const mapDispachtToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispachtToProps
)(Link);


export default FilterLink;
