import React from "react";
import styled from "styled-components";

const VideoSingle = ({ id, title }) => (
  <Container>
    <Iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${id}`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <Title>{title}</Title>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  background: black;
  margin-bottom: 10px;
  border-bottom: 1px solid #999;
`;

const Title = styled.h2`
  padding: 10px;
`;

export default VideoSingle;
