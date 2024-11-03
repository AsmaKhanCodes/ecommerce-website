import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile, tablet, desktop } from '../Responsive'; // Import breakpoints

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })};

  ${tablet({
    padding: "10px",
  })};

  ${desktop({
    padding: "15px",
  })};
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
