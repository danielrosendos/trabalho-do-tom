import React, {useEffect} from "react";
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

  useEffect(() => {
    handleGetData();
  }, []);

  async function handleGetData() {
      await service.get('listarTarefas')
          .then((result) => setCards(result.data.data))
          .catch((error) => {
              console.log(error);
          });
  }

  const [cards, setCards] = useState([]);

  const handleEdit = (training) => {
    history.push("register", training);
  };

  const handleDelete = (card) => {
    service.delete('deletarTarefa', {data: card})
        .catch((error) => {
          console.log(error);
        });

    setCards(cards.filter((cardFilter) => cardFilter !== card));
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
