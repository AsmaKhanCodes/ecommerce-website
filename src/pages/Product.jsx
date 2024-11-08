import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcements';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from "@material-ui/icons";
import { mobile, tablet } from '../Responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${tablet({ padding: "20px", flexDirection: "column" })}
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  
  ${tablet({ height: "50vh" })}
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  ${tablet({ padding: "20px" })}
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  ${mobile({ fontSize: "24px" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ fontSize: "14px" })}
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({ fontSize: "30px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
 
  ${tablet({ width: "70%" })}
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  ${mobile({ fontSize: "16px" })}
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  ${mobile({ padding: "3px" })}
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;

  ${tablet({ width: "70%" })}
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f8f4;
  }
  ${mobile({ padding: "10px" })}
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.pexels.com/photos/17603778/pexels-photo-17603778/free-photo-of-close-up-of-woman-in-jean-jacket-and-jeans.jpeg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>Lorem ipsum dolor sit amet...</Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
