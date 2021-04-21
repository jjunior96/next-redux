import { useSelector } from 'react-redux';

import { Container, Content } from './styles';

const Main = ({ title = 'App Name' }) => {
  const catalog = useSelector((state) => state);

  console.log(catalog);

  return (
    <Container>
      <Content>
        <h1>{title}</h1>
      </Content>
    </Container>
  );
};

export default Main;
