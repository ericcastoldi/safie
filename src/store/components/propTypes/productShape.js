var PropTypes = require('react')
  .PropTypes;

module.exports = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  measurements: PropTypes.object,
  pictures: PropTypes.shape({
    main: PropTypes.number.isRequired,
    product: PropTypes.number.isRequired,
    paths: PropTypes.arrayOf(PropTypes.object)
  }),
  colors: PropTypes.object.isRequired,
  defaultColor: PropTypes.string.isRequired
};
