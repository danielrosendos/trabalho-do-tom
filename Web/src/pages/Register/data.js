import * as Yup from "yup";

export const schema = Yup.object().shape({
  email: Yup.string().required("Campo Obrigatorio").email("Email invalido"),
  projeto: Yup.string().required("Campo Obrigatorio"),
  type_teste:Yup.string().required("Campo Obrigatorio"),
  responsavel:Yup.string().required("Campo Obrigatorio"),
  escopo:Yup.string().required("Campo Obrigatorio"),
  link:Yup.string().required("Campo Obrigatorio"),
  versao:Yup.string().required("Campo Obrigatorio"),
})

export const fields = [
  {
    placeholder: "Digite o Email",
    label: "Email",
    name: "email",
    width: 48
  },
  {
    placeholder: "Digite o Projeto",
    label: "Projeto",
    name: "projeto",
    width: 48,
  },
  {
    placeholder: "Digite o Tipo de teste",
    label: "Tipo de teste",
    name: "type_teste",
    width: 48
  },
  {
    placeholder: "Digite o nome do Escopo",
    label: "Escopo",
    name: "escopo",
    width: 48,
  },
  {
    placeholder: "Digite o Responsável",
    label: "Tipo de responsável",
    name: "responsavel",
    width: 48
  },
  {
    placeholder: "Digite o Link",
    label: "Link",
    name: "link",
    width: 48,
  },
  {
    placeholder: "Digite a Versao",
    label: "Versao",
    name: "versao",
    width: 48,
  },
];

