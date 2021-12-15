import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button className="button-next" type="button" onClick={onClick}>
      Next
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
