import React from 'react';

import { Container, Row, Panel, Column, Gallery,  Section, Description } from './styles';
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

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra gaarntida com a lorem ipsum</p>
        <p className="descrption">
Receba o produto que você está esprando ou devolvemos seu dinheiro de volta</p>
      </span>
      <span>
        <p className="title">Garantia com o vendedor</p>
        <p className="descrption">
Sem Garantia</p>
      </span>
    </div>

  </Section>

)

const Info = () => (
  <Description>
    <h2>Descição</h2>
<p>
  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sed porro est numquam sit deleniti minus omnis, veniam corrupti perferendis aliquam unde voluptatem architecto reiciendis esse harum nihil rem similique.</span>
  <span>Tempora aut necessitatibus deserunt, cupiditate ut consequuntur voluptatum saepe quasi id mollitia atque repellat incidunt dolore a molestias voluptate quia minima expedita ab, repellendus impedit pariatur odit iure? Vitae, explicabo.</span>
  <span>Facilis autem odio unde, libero sapiente neque quos iure perferendis ipsum quam. Aliquid tempora velit quos aperiam enim vero odit iusto quis, autem rem cum labore maiores, corrupti deleniti omnis?</span>
  <span>Ipsa, repudiandae mollitia nemo, eum expedita fugiat at aut, perspiciatis quaerat inventore autem doloremque dignissimos. Corrupti porro ullam enim eligendi asperiores architecto quidem quaerat, assumenda molestias, unde culpa beatae voluptates.</span>
  <br/>
  <br/>
  <br/>

  iten Inclusos: <br/>
  -1x LED <br/>
  -1x LED <br/>
  -1x LED <br/>
  -1x LED <br/>
  <br/>
  <p>
    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quis repellat iusto, veritatis iure ipsa atque enim beatae, quae, officiis rerum unde. Dolorum vero a perferendis ab omnis odit distinctio!</span>
    <span>Dicta, accusantium placeat consectetur ratione consequatur unde eligendi repellat non quae deserunt dolorem. Officia unde debitis quis est cum at aliquid. Sapiente placeat explicabo voluptatem officiis maiores consequuntur recusandae exercitationem?</span>
    <span>Nesciunt repudiandae natus ea corrupti sit omnis nobis repellendus adipisci accusantium, doloribus nemo quasi praesentium ut, laudantium architecto qui, voluptas voluptates labore optio sint libero sed! Nemo exercitationem esse labore.</span>
    <span>Iste temporibus quod quaerat unde a tempore quae officia ab? Sapiente beatae necessitatibus qui a esse maiores alias delectus temporibus quaerat quidem dolore culpa quasi, quo est itaque repudiandae in.</span>
  </p>
</p>
  </Description>
)

export default Product;
