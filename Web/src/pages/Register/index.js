import React, { useMemo } from "react";

import { Container, ContainerForm, Form } from "./styles";
import { schema, fields } from "./data";
import { useLocation } from "react-router-dom";

function Register() {
  const { state } = useLocation();
  const initialValues = useMemo(() => {
    if (!!state) return { ...state };
    return {
      email: "",
      projeto: "",
      type_teste: "",
      responsavel: "",
      escopo: "",
      link: "",
      versao: "",
    };
  }, [state]);
  return (
    <>
      <Container>
        <ContainerForm />
        <Form schema={schema} fields={fields} initialValues={initialValues} />
      </Container>
    </>
  );
}

export default Register;
