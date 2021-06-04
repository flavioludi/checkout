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
  offers
}) => {
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
    // gateway: Yup
    //   .string()
    //   .required('This field is required'),
    // userId: Yup
    //   .number('This must be a number')
    //   .required('This field is required'),
    // id: Yup
    //   .number('This must be a number')
    //   .required('This field is required'),
  });
  
  const formik = useFormik({
    initialValues: {
      offer: {},
      creditCardNumber: '',
      creditCardExpirationDate: '',
      creditCardCVV: '',
      creditCardHolder: '',
      creditCardCPF: '',
      couponCode: '',
      installments: '',
      gateway: 'iugu',
      userId: 1,
      id: 1
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log({values})
    },
  });

  return (
    <MainLayout>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CheckoutSection
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <OffersSection
              formik={formik}
              offers={offers}
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
      offers: resp.data
    }
  }
}
