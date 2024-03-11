import { Container } from '@mui/material';
import Footer from './Footer/Footer';
import Header from './Header/Header';

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
