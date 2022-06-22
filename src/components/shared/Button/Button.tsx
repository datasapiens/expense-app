import { MouseEventHandler } from "react";
import './Button.scss';

const Button = ({text, fullWidth=false, buttonStyle='primary', type='button', onClickHandler}: { 
  text: string,
  buttonStyle?: 'primary' | 'outline' | 'secondary' | 'outline-secondary',
  fullWidth?: boolean,
  type?: 'button' | 'submit' | 'reset' | undefined, 
  onClickHandler?: MouseEventHandler
}) => {
  const fullWidthClassName = 'full-width';

  return (
    <button className={`${buttonStyle} ${fullWidth ? fullWidthClassName: ''}`} type={type} onClick={onClickHandler}>
      {text}
    </button>
  )
};
export default Button;