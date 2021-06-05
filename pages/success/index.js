import { useRouter } from 'next/router';
import {
  Container,
  Grid
} from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';

const Success = ({

}) => {
  const router = useRouter();

  return (
    <MainLayout>
      <Container fixed>
        <Grid 
          container 
          spacing={3}
          alignItems="center"
          justify="center"
        >
          <Grid item >
            <h3>Parabéns</h3>
            <h5>Sua assinatura foi realizada com sucesso</h5>
            
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  )
}

export default Success;
