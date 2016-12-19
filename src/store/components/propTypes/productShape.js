var PropTypes = require('react')
  .PropTypes;

module.exports = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  measurements: PropTypes.object,
  pictures: PropTypes.shape({
    main: PropTypes.number,
    product: PropTypes.number,
    paths: PropTypes.object
  }),
  colors: PropTypes.object,
  defaultColor: PropTypes.string
};
