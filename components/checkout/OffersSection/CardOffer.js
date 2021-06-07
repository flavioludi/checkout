import { React } from 'react';
import {
  Paper,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import {
  Adjust,
  RadioButtonUnchecked,
} from '@material-ui/icons';

import { showCurrency } from '../../../utils/format';

const CardOffer = ({
  formik,
  offer,
  checkOffer,
}) => {
  const minimumMonthPrice = offer.splittable && offer.installments
    ? offer.finalPrice / offer.installments
    : null;
  const currentMonthPrice = offer.splittable && formik.values.installments
    ? offer.finalPrice / formik.values.installments
    : null;
  return (
    <Paper
      onClick={() => checkOffer(offer)}
    >
      <h5>
        {offer.title}
        {' '}
        |
        {' '}
        {offer.description}
      </h5>
      <div>
        {offer.couponApplied ? (
          <>
            <p>{`De ${showCurrency(offer.fullPrice)} | Por ${showCurrency(offer.finalPrice)}`}</p>
            <span>{`-${offer.discountPercentage * 100}%`}</span>
          </>
        ) : (
          <p>{showCurrency(offer.finalPrice)}</p>
        )}
      </div>
      {Boolean(offer.splittable) && (
        <div>
          {formik.values.installments ? (
            `${formik.values.installments}x de ${showCurrency(currentMonthPrice)}/mês`
          ) : (
            `Em até ${offer.installments}x de ${showCurrency(minimumMonthPrice)}/mês`
          )}
        </div>
      )}
      <FormControlLabel
        control={<Checkbox icon={<RadioButtonUnchecked />} checkedIcon={<Adjust />} checked={offer.id === formik.values.offer.id} />}
      />
    </Paper>
  );
};

export default CardOffer;
