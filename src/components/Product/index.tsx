import React from 'react';

import { Container, Row, Panel, Column, Gallery, Info, WarrantySection } from './styles';
import tShirtImage from '../../assets/tshirt.png'

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img src={tShirtImage} alt="T-Shirt" />
          </Gallery>
          <Info>

          </Info>
        </Column>
        {/* <ProductAction/> */}
        {/* <SellerInfo/> */}
        <WarrantySection />
        <WarrantySection />
        <WarrantySection />
        <Column>
        </Column>
      </Panel>
    </Container>
  );
};

const Info = () => (
  <Description>
    
  </Description>
)

export default Product;
