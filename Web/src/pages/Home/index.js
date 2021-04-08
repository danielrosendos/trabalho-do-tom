import React from "react";
import { useState } from "react";
import history from "~/service/history";
import service from "~/service/service";
import {
  Container,
  Card,
  Title,
  ContainerCards,
  ButtonDelete,
  Footer,
  IconPen,
  IconClosed,
  Information,
  ButtonEdit,
  Description,
  Image,
  NameCard,
} from "./styles";

function Home() {
  const [cards, setCards] = useState([
    {
      email: "asdfsd@asdasd.com",
      projeto: "10",
      type_teste: "Asds",
      responsavel: "asdasd",
      escopo: "asdas",
      link: "sdas",
      versao: "2",
    },
    {
      email: "asdfsd@asdasd.com",
      projeto: "10",
      type_teste: "Asds",
      responsavel: "asdasd",
      escopo: "asdas",
      link: "sdas",
      versao: "2",
    },
    {
      email: "asdfsd@asdasd.com",
      projeto: "10",
      type_teste: "Asds",
      responsavel: "asdasd",
      escopo: "asdas",
      link: "sdas",
      versao: "2",
    },
    {
      email: "asdfsd@asdasd.com",
      projeto: "10",
      type_teste: "Asds",
      responsavel: "asdasd",
      escopo: "asdas",
      link: "sdas",
      versao: "2",
    },
    {
      email: "asdfsd@asdasd.com",
      projeto: "10",
      type_teste: "Asds",
      responsavel: "asdasd",
      escopo: "asdas",
      link: "sdas",
      versao: "2",
    },
  ]);
  const handleEdit = (training) => {
    history.push("register", training);
  };
  const handleDelete = (training) => {
    service.delete()
  };
  return (
    <Container>
      <Title>Tela inicial</Title>
      <ContainerCards>
        {cards.map((card) => {
          return (
            <Card>
              <Image />
              <ButtonDelete
                onClick={() => handleDelete(card)}
                title={"Deletar"}
              >
                <IconClosed />
              </ButtonDelete>
              <Information>
                <NameCard>{card.projeto}</NameCard>
                <Description>{card.type_teste}</Description>
                <Footer>
                  <div>{card.versao}</div>
                  <ButtonEdit title={"Editar"} onClick={() => handleEdit(card)}>
                    <IconPen />
                  </ButtonEdit>
                </Footer>
              </Information>
            </Card>
          );
        })}
      </ContainerCards>
    </Container>
  );
}

export default Home;
