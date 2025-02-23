import './Button.css';
import PropTypes from 'prop-types';

 const Button = ({ buttonStyle, children, ...props }) => { 
     return (
         <button className={ `${buttonStyle}`} {...props}>
{children}
</button>
);
};

Button.propTypes = {
    buttonStyle: PropTypes.object,
    children: PropTypes.node.isRequired,
  };

export default Button;