import {
  Grid,
  Paper
} from '@material-ui/core';

const OffersSection = ({
  formik,
  offers,
}) => {
  return (
    <Grid>
      <Grid item xs={12}>
        <h2>Confira o seu plano</h2>
        <p>flavioludi@gmail.com</p>
      </Grid>
      <Grid item xs={12}>
        {offers.map((offer) => (
          <Paper
            onClick={() => formik.setFieldValue('offer', offer)}
          >
            <h1>{offer.description}</h1>
            {/* acceptsCoupon: true
            caption: "7 Dias Grátis"
            description: "Parcelado"
            discountAmmount: 60
            discountCouponCode: null
            discountPercentage: 0.1
            fullPrice: 600
            gateway: "iugu"
            id: 32
            installments: 12
            order: 1
            period: "annually"
            periodLabel: "mês"
            priority: 1
            splittable: true
            storeId: "anual_parcelado_iugu"
            title: "Premium Anual" */}

            
          </Paper>
        ))}
      </Grid>
    </Grid>
  )
};

export default OffersSection;