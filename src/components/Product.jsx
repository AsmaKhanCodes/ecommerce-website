import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile, tablet, desktop } from "../Responsive"; // Import breakpoints

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  ${mobile({
    minWidth: "240px",
    height: "300px",
  })};

  ${tablet({
    minWidth: "260px",
    height: "320px",
  })};

  ${desktop({
    minWidth: "280px",
    height: "350px",
  })};

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;

  ${mobile({
    width: "150px",
    height: "150px",
  })};

  ${tablet({
    width: "170px",
    height: "170px",
  })};

  ${desktop({
    width: "200px",
    height: "200px",
  })};
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;

  ${mobile({
    height: "60%",
  })};

  ${tablet({
    height: "70%",
  })};

  ${desktop({
    height: "75%",
  })};
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }

  ${mobile({
    width: "30px",
    height: "30px",
    margin: "5px",
  })};

  ${tablet({
    width: "35px",
    height: "35px",
    margin: "8px",
  })};

  ${desktop({
    width: "40px",
    height: "40px",
    margin: "10px",
  })};
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
