import Footer from './Footer';
import Header from './Header';
import Message from './Message';

type AppLayoutTpye = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutTpye) => {
  return (
    <>
      <Header />
      <Message />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
