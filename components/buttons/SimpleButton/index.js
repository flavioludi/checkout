import { Button } from '@material-ui/core';

const SimpleButton = ({
  children,
  color,
  variant,
  type,
  onClick,
}) => (
  <Button
    type={type || 'button'}
    fullWidth
    color={color || 'primary'}
    onClick={onClick}
    variant={variant}
    style={{
      textTransform: 'none',
      borderRadius: '30px',
      padding: '10px',
      backgroundColor: 'dark-blue',
    }}
  >
    {children}
  </Button>
);

export default SimpleButton;
