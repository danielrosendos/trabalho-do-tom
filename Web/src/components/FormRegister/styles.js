import styled from "styled-components";
import { Formik, Form as MuiForm } from "formik";

import { md } from "~/styles/global";
import {
  Button as MuiButton,
  Typography as MuiTypography,
} from "@material-ui/core";
export const Container = styled(Formik)``;
export const Form = styled(MuiForm)`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin: auto;
  background: #ffffff;
  border-radius: 15px;
  min-height: 300px;
  flex-wrap: wrap;
  margin-top: -5.5rem;
`;
export const Button = styled(MuiButton).attrs({
  variant: "contained",
  color: "primary",
  size: "medium",
})`
  border-radius: 50px;
  min-width: 200px;
  margin: auto;
  transition: 0.3s ease-in-out;
  padding: 10px 0px !important;
  background: #1b0d5d;
  border-radius: 50px !important;
  width: 10rem;
`;
export const Content = styled.div`
  width: 100%;
  text-align: center;
`;
export const Typography = styled(MuiTypography)`
  width: 65%;
`;
export const ContentInfo = styled.div`
  width: 100%;
  margin: 20px 5px;
`;
export const EndInfo = styled(MuiTypography)`
  width: 65%;
  margin-top: 15px;
  margin-bottom: -10px;
  margin-left: auto;
  text-align: end;
`;
