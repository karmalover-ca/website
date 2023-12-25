import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Liam Pilson</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a backend developer</HighlightAlt> based in Ontario,
        Canada.
      </p>
      <p>
        I am passionate about working on new things and <br />
        finding new ways to solve my challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
