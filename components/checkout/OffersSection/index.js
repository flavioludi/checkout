import {
  Grid,
} from '@material-ui/core';

import CardOffer from './CardOffer';

const OffersSection = ({
  formik,
  offers,
  currentUser,
  checkCoupon,
}) => {
  const checkOffer = (offer) => {
    formik.setFieldValue('offer', offer)
    checkCoupon(offer);
  }
  return (
    <Grid>
      <Grid item xs={12}>
        <h2>Confira o seu plano</h2>
        <p>{currentUser.email}</p>
      </Grid>
      <Grid item xs={12}>
        {offers.map((offer) => (
          <CardOffer
            formik={formik}
            offer={offer}
            checkOffer={checkOffer}
          />
        ))}
      </Grid>
    </Grid>
  )
};

export default OffersSection;