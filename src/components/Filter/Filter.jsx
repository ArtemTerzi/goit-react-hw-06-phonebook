import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, handleChange }) => (
  <div>
    <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
    <FilterInput
      type="text"
      name="filter"
      id="filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
