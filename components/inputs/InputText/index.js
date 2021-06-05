import { TextField } from '@material-ui/core';

const InputText = ({
  formik,
  name,
  label,
  id,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
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
      value={value || formik.values[name]}
      onChange={onChange || formik.handleChange}
      onBlur={onBlur || formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
    />
  )
}

export default InputText;