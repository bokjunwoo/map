import { Container } from '@mui/material';
import AppAppBar from '../../component/Layout/Header';
import Footer from './Footer/Footer';

type AppLayoutTpye = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutTpye) => {
  return (
    <>
      <AppAppBar />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </>
  );
};

export default AppLayout;
