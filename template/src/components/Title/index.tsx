import React from "react";
import styled from "styled-components";
import "./index.css";

// const StyledTitle = styled.div`
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// const StyledTitle = styled.div`
//   @apply font-bold py-2 px-4 rounded;
// `;

const StyledTitle = styled.div.attrs((props) => ({
  className: "title",
}))``;

const Title = () => {
  return <StyledTitle>Title</StyledTitle>;
};

export default Title;
