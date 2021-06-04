import { TextField } from '@material-ui/core';

const InputText = ({
  formik,
  name,
  label,
  id,
  type,
  placeholder,
}) => {
  return (
    <TextField
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      type={type || 'text'}
      placeholder={placeholder}
      id={id || name}
      name={name}
      label={label}
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
    />
  )
}

export default InputText;