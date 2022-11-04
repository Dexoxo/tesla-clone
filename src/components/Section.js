import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, bgImg, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage={bgImg}>
      <Fade bottom>
        <SectionText>
          <h1>{title}</h1>
          <p>{description}</p>
        </SectionText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonsGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonsGroup>
        </Fade>
        <Arrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-image: ${(props) => `url('/images/${props.bgImage}');`}
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    algin-items: center;
`;

const SectionText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: 10;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  cursor: pointer;
  height: 38px;
  width: 258px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  opacity: 1;
  font-size: 15px;
  margin: 12px;
  font-weight: bold;
`;

const RightButton = styled(LeftButton)`
  background-color: #e7e7e6;
  opacity: 0.9;
  color: #57595d;
`;

const Arrow = styled.img`
  margin-bottom: 20px;
  height: 35px;
  filter: invert(0.7);
  animation: downAnimation infinite 2s;
  overflow-x: hidden;
`;
