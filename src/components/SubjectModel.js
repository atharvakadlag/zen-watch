import styled from "styled-components";

const Container = styled.div`
  margin: 2em;
`;
const Title = styled.h1`
  text-transform: uppercase;
  color: #42aee9;
  font-size: 2.4em;
  margin-bottom: 0.5em;
`;
const LinkItem = styled.li``;
const Link = styled.ol``;
const Info = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.5em;
`;
const InfoTitle = styled.h2`
  color: #ffffff;
  margin-right: 0.5em;
  font-size: 1.6em;
`;
const InfoData = styled.p`
  color: #e9eaea;
  font-size: 1.2em;
`;

function SubjectModel({ name, facultyname }) {
  return (
    <Container>
      <Title>{name}</Title>
      <Info>
        <InfoTitle>Faculty: </InfoTitle>
        <InfoData>{facultyname} </InfoData>
      </Info>
    </Container>
  );
}

export default SubjectModel;
