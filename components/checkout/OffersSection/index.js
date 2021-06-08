import {
  Grid,
  FormHelperText,
} from '@material-ui/core';

import CardOffer from './CardOffer';

const OffersSection = ({
  formik,
  offers,
  currentUser,
  checkCoupon,
}) => {
  const checkOffer = (offer) => {
    formik.setFieldValue('offer', offer);
    if (offer.splittable) {
      formik.setFieldValue('installments', '');
    } else {
      formik.setFieldValue('installments', 1);
    }
    checkCoupon(offer);
  };
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
            key={offer.id}
            checkOffer={checkOffer}
          />
        ))}
      </Grid>
      {Boolean(formik.touched.offer && formik.errors.offer?.id) && (
        <Grid item xs={12}>
          <FormHelperText error>{formik.errors.offer?.id}</FormHelperText>
        </Grid>
      )}
    </Grid>
  );
};

export default OffersSection;
