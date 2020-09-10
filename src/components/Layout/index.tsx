import React from 'react';

import { Container, Wrapper } from './styles';
import Header from '../Header';
import Product from '../Product';

const Layout: React.FC = () => {
  return (
    <Container>
      {/* <Header/> */}
     <Wrapper>
       <Product>

       </Product>
     </Wrapper>
     {/* <Footer/> */}
    </Container>
  );
};

export default Layout;
