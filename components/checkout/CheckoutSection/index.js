import {
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

import InputText from '../../../components/inputs/InputText'
import MaskInputText from '../../../components/inputs/MaskInputText'

const CheckoutSection = ({
  formik
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h2>Estamos quase lá</h2>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={formik.handleSubmit}>
          <div style={{
            flexGrow: 1
          }}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <MaskInputText
                  formik={formik}
                  name="creditCardNumber"
                  label="Número do Cartão"
                  placeholder="9999 9999 9999 9999"
                  mask="9999 9999 9999 9999"
                />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={12} md={6}>
                <MaskInputText
                  formik={formik}
                  name="creditCardExpirationDate"
                  label="Validade"
                  placeholder="MM/AA"
                  mask="99/99"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MaskInputText
                  formik={formik}
                  name="creditCardCVV"
                  label="CVV"
                  placeholder="000"
                  mask="999"
                />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <InputText
                  formik={formik}
                  name="creditCardHolder"
                  label="Nome impresso no cartão"
                  placeholder="Seu nome"
                />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <MaskInputText
                  formik={formik}
                  name="creditCardCPF"
                  label="CPF"
                  placeholder="000.000.000-00"
                  mask="999.999.999-99"
                />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <InputText
                  formik={formik}
                  name="couponCode"
                  label="Cupom"
                  placeholder="Insira aqui"
                />
              </Grid>
            </Grid>
            {formik.values.offer?.splittable && (
              <Grid container spacing={8}>
                <Grid item xs={12}>
                  <FormControl style={{width: '100%'}}>
                    <InputLabel id="installments-label">Parcelas</InputLabel>
                    <Select
                      fullWidth
                      labelId="installments-label"
                      id="installments"
                      name="installments"
                      value={formik.values.installments}
                      onChange={formik.handleChange}
                    >
                      {Array(formik.values.offer?.installments || 1).fill(null).map((v, i) => (
                        <MenuItem key={i+1} value={i+1}>{i+1}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            )}
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Button color="primary" variant="contained" fullWidth type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      </Grid>
    </Grid>
  )
}

export default CheckoutSection;