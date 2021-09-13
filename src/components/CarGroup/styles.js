import styled from "styled-components";

export const CarGroupCardStyled = styled.div`
  background-color: var(--color-white);
  border-radius: 6px;
  box-shadow: var(--shadow-card);
  padding: 22px 16px;
  display: flex;
  flex-direction: column;

  .disclaimer {
    font-size: 12px;
    text-align: center;
    color: var(--color-dark-gray);
    padding: 6px 0 20px;
  }

  > button {
    margin-top: auto;
  }
`;

export const CarGroupCarouselStyled = styled.div`
  .swiper-container {
    padding-bottom: 32px;
  }

  .swiper-pagination-bullet {
    background-color: var(--color-gray);
    opacity: 1;

    &:only-child {
      opacity: 0;
    }

    &.swiper-pagination-bullet-active {
      background-color: var(--color-secondary);
    }
  }

  .vehicle-image {
    width: 100%;
    height: 167px;
    object-fit: contain;
  }

  .vehicle-name {
    text-align: center;
  }
`;

export const CarGroupsGridStyled = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fit,340px);
  grid-gap: 40px;
  justify-content: center;
`;

export const CarGroupTitleStyled = styled.h3`
  color: var(--color-dark-green);
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.01em;
`
