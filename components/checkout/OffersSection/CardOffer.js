import {
  Paper,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import {
 Adjust,
 RadioButtonUnchecked
} from '@material-ui/icons';

const CardOffer = ({
  formik,
  offer,
  checkOffer,
}) => {
  const discountPrice = offer.fullPrice - offer.discountAmmount;
  const monthPrice = offer.splittable && offer.installments ? discountPrice/offer.installments : null;
  return (
    <Paper
      onClick={() => checkOffer(offer)}
    >
      <h5>{offer.title} | {offer.description}</h5>
      <div>
        <p>{`De R$ ${offer.fullPrice} | Por R$ ${discountPrice}`}</p>
        {offer.couponApplied && (
          <span>{`-${offer.discountPercentage * 100}%`}</span>
        )}
      </div>
      {Boolean(offer.splittable) && (
        <div>
          {`${offer.installments}x de R$ ${monthPrice}/mês`}
        </div>
      )}
      <FormControlLabel
        control={<Checkbox icon={<RadioButtonUnchecked />} checkedIcon={<Adjust />} checked={offer.id === formik.values.offer.id} />}
      />
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
  )
};

export default CardOffer;