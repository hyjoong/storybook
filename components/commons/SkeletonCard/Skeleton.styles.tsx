import { PALETTE } from "../../../constants/pallette";
import styled, { css, keyframes } from "styled-components";

export const defaultShadow = css`
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;

export const Card = styled.div`
  ${defaultShadow};
  border-radius: 0.75rem;
`;

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(460px);
  }
`;

const gradient = css`
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 8rem;
    height: 100%;
    background: ${`linear-gradient(to right, ${PALETTE.GRAY_100}, ${PALETTE.GRAY_200}, ${PALETTE.GRAY_100})`};
    animation: ${loading} 1.5s infinite linear;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const Image = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${PALETTE.GRAY_100};
  ${gradient};
`;

const Nickname = styled.span`
  font-size: 1rem;
  width: 6rem;
  height: 0.9rem;
  border-radius: 4px;
  background-color: ${PALETTE.GRAY_100};
  ${gradient};
`;

const CardContainer = styled(Card)`
  position: relative;
  width: 40rem;
  height: 8rem;
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  overflow: hidden;
`;

const Thumbnail = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: ${PALETTE.GRAY_100};
  ${gradient};
`;

const ContentArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  width: 40%;
  height: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: ${PALETTE.GRAY_100};
  border-radius: 4px;
  ${gradient};
`;

const Content = styled.div`
  width: 100%;
  height: 1rem;
  margin: 0.25rem 0;
  background-color: ${PALETTE.GRAY_100};
  border-radius: 4px;
  ${gradient};
`;

export default {
  AvatarContainer,
  Image,
  Nickname,
  CardContainer,
  Thumbnail,
  ContentArea,
  Title,
  Content,
};
