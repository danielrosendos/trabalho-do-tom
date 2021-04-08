import styled from "styled-components";
import { BiPowerOff } from "react-icons/all";
import { Link } from "react-router-dom";
export const Container = styled.div`
  background: #1b0d5d;
  display: flex;
  min-height: 6rem;
  align-items: center;
  justify-content: space-between;
  padding: 0px 60px;
`;
export const ContainerRouter = styled.div``;
export const RouteLink = styled(Link)`
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  padding: 0px !important;
  font-size: 1.3rem;
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.selected ? "#18c78a" : "#ffffff")} !important;
  padding: 15px 10px !important;
  border-bottom: 3px solid
    ${(props) => (props.selected ? "#18c78a" : "transparent")}!important;
  &:hover {
    border-color: #18c78a !important;
    color: #18c78a !important;
  }
  line-height: 1.9;
  margin: 0px 10px;
`;
export const ButtonLogon = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  border: 1px solid #18c78a7a !important;
  align-items: center;
  border-radius: 6px;
  height: 40px;
  width: 40px;
  opacity: 0.7;
  transition: ease-in-out 0.5s;
  margin: 0px 0px 0px auto;
  &:hover {
    opacity: 1;
  }
`;
export const IconLogon = styled(BiPowerOff)`
  font-size: 20px;
  color: #18c78a7a;
`;
