import { useRouter } from 'next/router';
import { React } from 'react';
import styled from 'styled-components';
import {
  Container,
  Box,
  Grid,
  Paper,
  Button,
  Link,
} from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import DivGrow from '../../components/grids/DivGrow';

import { showCurrency } from '../../utils/format';

const SpanLeft = styled.span`
  text-align: left;
`;

const SpanRight = styled.span`
  text-align: right;
`;

const Success = () => {
  const router = useRouter();
  const data = JSON.parse(router.query.data);
  const monthPrice = data.installments ? data.finalPrice / data.installments : null;
  return (
    <MainLayout>
      <Container fixed maxWidth="xs">
        <Box textAlign="center">
          <div>
            <h3>Parabéns</h3>
            <h5>Sua assinatura foi realizada com sucesso</h5>
          </div>
        </Box>
        <Box textAlign="center">
          <Paper>
            <Box p={4}>
              <DivGrow>
                <Box m={4}>
                  <Grid container>
                    <Grid item xs={3} style={{ textAlign: 'left' }}>
                      estrela
                    </Grid>
                    <Grid item xs={9} style={{ textAlign: 'right' }}>
                      {data.offerTitle}
                      {' '}
                      |
                      {' '}
                      {data.offerDescription}
                      {'\n'}
                      {showCurrency(data.finalPrice)}
                      {' '}
                      |
                      {' '}
                      {data.installments}
                      {'x '}
                      {showCurrency(monthPrice)}
                    </Grid>
                  </Grid>
                </Box>
                <DivGrow>
                  <Grid container spacing={8}>
                    <Grid item xs={4} style={{ textAlign: 'left' }}>
                      <SpanLeft>
                        Email
                      </SpanLeft>
                    </Grid>
                    <Grid item xs={8} style={{ textAlign: 'right' }}>
                      <SpanRight>
                        {data.userEmail}
                      </SpanRight>
                    </Grid>
                  </Grid>
                </DivGrow>
                <DivGrow>
                  <Grid container spacing={8}>
                    <Grid item xs={4} style={{ textAlign: 'left' }}>
                      <SpanLeft>
                        CPF
                      </SpanLeft>
                    </Grid>
                    <Grid item xs={8} style={{ textAlign: 'right' }}>
                      <SpanRight>
                        {data.userCPF}
                      </SpanRight>
                    </Grid>
                  </Grid>
                </DivGrow>
              </DivGrow>
            </Box>
          </Paper>
          <Button color="primary" fullWidth onClick={() => router.push('/')}>
            Gerenciar assinatura
          </Button>
          <Button color="primary" variant="contained" fullWidth onClick={() => router.push('/')}>
            IR PARA A HOME
          </Button>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default Success;
