import React, { useRef, useState } from "react";
import { Container, Button, Form, Content } from "./styles";
import InputDefault from "~/components/Inputs/InputDefault";
import history from "~/service/history";
import service from "~/service/service";

export default function FormLogin({
  schema,
  fields = [],
  children,
  initialValues,
}) {
  const formikRef = useRef(null);

  const [files, setFiles] = useState([]);
  async function handleSubmit(values) {

    if (initialValues.id) {
      await service.put('atualizarTarefa', values);
    } else {
      await service.post('adicionarTarefa', values);
    }
    formikRef.current.setSubmitting(false);

    history.replace('/');
  }

  return (
    <Container
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialValues}
      innerRef={formikRef}
    >
      {({ values, isValid, handleChange, isSubmitting }) => (
        <Form>
          {fields.map((input, index) => {
            return (
              <InputDefault
                key={index}
                handleChange={handleChange}
                value={values[input.name]}
                {...input}
              />
            );
          })}

          <Content>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              {initialValues.name ? "Editar" : "Enviar"}
            </Button>
          </Content>
        </Form>
      )}
    </Container>
  );
}
