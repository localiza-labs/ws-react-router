import styled from "styled-components";

export const AdditionalCardStyled = styled.div`
  .additional-card{
    cursor: pointer;
    align-items: center;
    background-color: #fff;
    border-radius: .6rem;
    box-shadow: 0.1rem 0.1rem 1.1rem rgb(0 0 0 / 11%);
    display: flex;
    height: 10rem;
    justify-content: flex-start;
    margin: 1.6rem 0 0;
    padding: 0 1rem 0 2rem;
    
    &--selected{
      background-color: var(--bs-primary);
      color: var(--bs-white);
    }

    &__content{}
    
    &__label{}
    
    &__price{}
  }
`

export const AdditionalGridStyled = styled.div`
    .additional-grid{
      display: grid;
      max-width: 662px;
      grid-column-gap: 1.8rem;
      grid-template-columns: 1fr 1fr;
      margin: 0 auto;
    }
`;
