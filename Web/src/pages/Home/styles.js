import styled from "styled-components";
import { FaPen, CgClose } from "react-icons/all";
export const Container = styled.div`
  padding: 40px 60px;
`;
export const Card = styled.div`
  width: 18rem;
  height: 20rem;
  margin-right: 15px;
  margin-bottom: 15px;
  background: #ffffff;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.24);
  position: relative;
`;
export const Title = styled.h1``;
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0px;
`;
export const ButtonEdit = styled.button`
  width: 36px;
  padding: 0px;
  height: 36px;
  font-size: 10px;
  border-radius: 100%;
  background: #ffffff;
  box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  font-size: 14px;
  &:hover {
    opacity: 1;
  }
  i {
    color: #565656;
    font-size: 12px;
  }
`;
export const ButtonDelete = styled.button`
  transition: 0.5s ease-in-out;
  position: absolute;
  background: #11111150;
  height: 35px;
  top: 0;
  width: 35px;
  right: 0;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  border-radius: 0;
  i {
    right: 5px;
    position: absolute;
    top: 5px;
    color: white;
    font-size: 10px;
  }
  &:hover {
    background: #fa5858;
  }
`;
export const Footer = styled.footer`
  text-align: start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 5px;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px 8px;
  flex-direction: column;
  align-items: flex-start;
  height: 140px;
`;
export const IconPen = styled(FaPen)``;
export const IconClosed = styled(CgClose)`
  color: white;
  top: 4px;
  right: 4px;
  font-size: 14px;
  position: absolute;
`;
export const NameCard = styled.h3`
  font-size: 18px;
  font-weight: 600;
  padding: 10px 0px 5px;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  text-overflow: ellipsis;
  font-family: "Nunito";
  color: var(--color-primary);
`;
export const Image = styled.div`
  background-color: #565656;
  height: 160px;
  border-radius: 2px 2px 0px 0px;
`;
export const Description = styled.div`
  font-size: 14px;
  color: #565656;
  height: 60px;
  margin-bottom: 15px;
`;
