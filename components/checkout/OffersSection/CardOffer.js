import styled from 'styled-components';
import {
  FormControlLabel,
  Checkbox,
  Grid,
} from '@material-ui/core';

import {
  Adjust,
  RadioButtonUnchecked,
} from '@material-ui/icons';

import { showCurrency } from '../../../utils/format';

const PaperOffer = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  margin-top: 15px;
  padding: 15px;
  flex-grow: 1;
  cursor: pointer;
`;

const OfferTitle = styled.h4`
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
`;

const DiscountBadge = styled.span`
  background-color: orange;
  color: white;
  border-radius: 10px;
  margin: 10px;
  padding: 0 10px;
`;

const OfferInstallments = styled.div`
  color: orange;
  margin-top: 5px;
`;

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
    <PaperOffer
      onClick={() => checkOffer(offer)}
    >
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <OfferTitle>
            {offer.title}
            {' '}
            |
            {' '}
            {offer.description}
          </OfferTitle>
          <div>
            {offer.couponApplied ? (
              <>
                <span>{`De ${showCurrency(offer.fullPrice)} | Por ${showCurrency(offer.finalPrice)}`}</span>
                <DiscountBadge>{`-${offer.discountPercentage * 100}%`}</DiscountBadge>
              </>
            ) : (
              <span>{showCurrency(offer.finalPrice)}</span>
            )}
          </div>
          {Boolean(offer.splittable) && (
            <OfferInstallments>
              {formik.values.installments ? (
                `${formik.values.installments}x de ${showCurrency(currentMonthPrice)}/mês`
              ) : (
                `Em até ${offer.installments}x de ${showCurrency(minimumMonthPrice)}/mês`
              )}
            </OfferInstallments>
          )}
        </Grid>
        <Grid item>
          <FormControlLabel
            control={(
              <Checkbox
                icon={<RadioButtonUnchecked />}
                checkedIcon={<Adjust />}
                checked={offer.id === formik.values.offer.id}
                style={{
                  color: 'black',
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </PaperOffer>
  );
};

export default CardOffer;
