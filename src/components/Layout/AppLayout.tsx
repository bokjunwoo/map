import { Container } from '@mui/material';
import Header from './Header/Header';
import Footer from './Footer/Footer';

type AppLayoutTpye = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutTpye) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </>
  );
};

export default AppLayout;
