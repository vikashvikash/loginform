import styled from 'styled-components';
import PropTypes from 'prop-types'

const InputStyle=styled.input`
   width:150px;
`;

const Input=({type,id,className,onChange,...props})=>{
    return(<InputStyle type={type} id={id} className={className} onChange={onChange} {...props}/>);
}

Input.defaultProps = {
    type: "text",
    className: ""
  };

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    type: PropTypes.oneOf(["text", "number", "password"]),
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

export default Input;