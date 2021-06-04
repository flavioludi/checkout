import { TextField } from '@material-ui/core';
import InputMask from "react-input-mask";

const InputText = ({
  formik,
  name,
  label,
  id,
  placeholder,
  mask,
}) => {
  return (
    <InputMask 
      mask={mask}
      value={formik.values[name]}
      onChange={formik.handleChange}
      disabled={false}
      maskChar=" "
    >
      {() => (
        <TextField
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          placeholder={placeholder}
          id={id || name}
          name={name}
          label={label}
          value={formik.values[name]}
          onChange={formik.handleChange}
          error={formik.touched[name] && Boolean(formik.errors[name])}
          helperText={formik.touched[name] && formik.errors[name]}
        />
      )}
    </InputMask>
  )
}

export default InputText;