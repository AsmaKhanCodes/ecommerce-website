import styled from 'styled-components';
import { mobile, tablet, desktop } from '../Responsive'; // Import breakpoints

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  ${mobile({
    height: "20vh",
  })};

  ${tablet({
    height: "50vh",
  })};

  ${desktop({
    height: "65vh",
  })};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({
    height: "20vh",
  })};

  ${tablet({
    height: "35vh",
  })};

  ${desktop({
    height: "50vh",
  })};
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 24px;

  ${mobile({
    fontSize: "18px",
  })};

  ${tablet({
    fontSize: "20px",
  })};

  ${desktop({
    fontSize: "24px",
  })};
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  ${mobile({
    fontSize: "12px",
    padding: "8px",
  })};

  ${tablet({
    fontSize: "13px",
    padding: "9px",
  })};

  ${desktop({
    fontSize: "14px",
    padding: "10px",
  })};
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
