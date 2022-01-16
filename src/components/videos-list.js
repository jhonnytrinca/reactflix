import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Play from "./play";
import { selectVideoSingle } from "..//redux-flow/reducers/video-single/action-creators";

const VideosList = ({ videos, handleClick }) => (
  <Container>
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoLink href="#" onClick={handleClick(id)}>
          <VideoThumb>
            <PlayStyled />
          </VideoThumb>
          <VideoTitle>{videos[id].title}</VideoTitle>
        </VideoLink>
      </Video>
    ))}
  </Container>
);

const PlayStyled = styled(Play)`
  & path {
    fill: blue;
  }
  /* quando se quer preencher apenas o desenho e não o icone todo (com espaço de fora) usar esse & para indicar qual é o nome do icone, e para cor dele usar fill ao inves de background */
  width: 50px;
  height: 50px;
  transition: all 0.15s ease-in-out;
`;

const Video = styled.section`
  &:hover ${PlayStyled} {
    transform: scale(1.5);
  }
  /* ao passar o mouse em cima do icone, aumenta a escala dele para 1.5x */
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
  /* Quando queremos que um componente que esteja dentro do outro receba um css específico, usar dessa forma */
`;

const VideoLink = styled.a`
  color: inherit;
`;

const VideoThumb = styled.div`
  border: 1px solid black;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoTitle = styled.h2`
  font-size: 18px;
`;

const mapStateToProps = (state) => ({
  videos: state.videos,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (id) => (e) => {
    e.preventDefault();
    dispatch(selectVideoSingle(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosList);
