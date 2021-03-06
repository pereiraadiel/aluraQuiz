import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and ( max-width: 500px ) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
       
        <Widget>
          <Widget.Content>
            <h1>Alguma subtitulo aqui</h1>
            <p>Necessario uma descrição satisfatoria</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/pereiraadiel/aluraQuiz"/>
    </QuizBackground>
  );
}
