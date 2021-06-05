import { useState } from 'react'
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
  Container,
  Grid
} from '@material-ui/core';

import MainLayout from '../layouts/MainLayout';
import CheckoutSection from '../components/checkout/CheckoutSection';
import OffersSection from '../components/checkout/OffersSection';

const Home = ({
  _offers
}) => {
  const router = useRouter();
  const [offers, setOffers] = useState(_offers)

  const checkCoupon = (_offer) => {
    let newOffers = [];
    if (formik.values.couponCode.toUpperCase() === '10OFF') {
      newOffers = offers.map(offer => {
        if (offer.id === _offer.id) {
          return (
            {
              ...offer,
              couponApplied: true
            }
          )
        }
        return (
          {
            ...offer,
            couponApplied: false
          }
        )
      })
    }
    else {
      newOffers = offers.map(offer => (
        {
          ...offer,
          couponApplied: false
        }
      ))
    }
    setOffers(newOffers)
  }

  const currentUser = {
    id: 1,
    email: 'fulano@cicrano.com.br',
  }

  const initialValues = {
    offer: {},
    creditCardNumber: '',
    creditCardExpirationDate: '',
    creditCardCVV: '',
    creditCardHolder: '',
    creditCardCPF: '',
    couponCode: '',
    installments: '',
  };

  const validationSchema = Yup.object().shape({
    // offer: {}p
    //   .number('This must be a number')
    //   .required('This field is required'),
    creditCardNumber: Yup
      .number('This must be a number')
      .required('This field is required'),
    creditCardExpirationDate: Yup
      .string()
      .required('This field is required'),
    creditCardCVV: Yup
      .number('This must be a number')
      .required('This field is required'),
    // creditCardHolder: Yup
    //   .string()
    //   .required('This field is required'),
    // creditCardCPF: Yup
    //   .number('This must be a number')
    //   .required('This field is required'),
    // couponCode: Yup
    //   .string()
    //   .required('This field is required'),
    // installments: Yup
    //   .number('This must be a number')
    //   .required('This field is required'),
  });

  const mountPayload = (values) => {
    return (
      {
        couponCode: values.couponCode,
        creditCardCPF: values.creditCardCPF.replace(/\D/g, ''),
        creditCardCVV: values.creditCardCVV.replace(/\D/g, ''),
        creditCardExpirationDate: values.creditCardExpirationDate,
        creditCardHolder: values.creditCardHolder,
        creditCardNumber: values.creditCardNumber.replace(/\D/g, ''),
        gateway: values.offer.gateway,
        installments: parseInt(values.offer.installments),
        offerId: parseInt(values.offer.id),
        userId: currentUser.id,
        // "id": 1
      }
    )
  }

  const onSubmit = async (values) => {
    const payload = mountPayload(values)
    const resp = await axios.post('https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription', payload);
    if (resp.status === 200) {
      router.push('/success')
    }
  }
  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <MainLayout>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CheckoutSection
              formik={formik}
              checkCoupon={checkCoupon}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <OffersSection
              formik={formik}
              offers={offers}
              currentUser={currentUser}
              checkCoupon={checkCoupon}
            />
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  )
}

export default Home;

export async function getServerSideProps(context) {
  const resp = await axios.get('https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer');
  return {
    props: {
      _offers: resp.data.map(data => (
        {
          ...data,
          couponApplied: false,
        }
      ))
    }
  }
}
