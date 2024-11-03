import styled from "styled-components";
import { popularProducts } from '../data';
import Product from "./Product";
import { mobile, tablet, desktop } from "../Responsive"; // Import breakpoints

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${mobile({
    padding: "0px",
  })};

  ${tablet({
    padding: "10px",
  })};

  ${desktop({
    padding: "15px",
  })};
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
