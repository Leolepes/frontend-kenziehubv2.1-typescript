import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 320px) {
  }
  @media (min-width: 767px) {
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.grey4};
    display: flex;
    justify-content: center;
    align-items: center;

    & > h1{
      color: ${(props) => props.theme.grey0};
    }
  }
  @media (min-width: 1440px) {
  }
  @media (min-width: 1900px) {
  }
`;
