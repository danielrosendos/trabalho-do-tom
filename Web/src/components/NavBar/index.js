import {
  Container,
  ButtonLogon,
  IconLogon,
  ContainerRouter,
  RouteLink,
} from "./styles";

function NavBar() {
  return (
    <Container>
      <ContainerRouter>
        <RouteLink to={"/"}>Home</RouteLink>
        <RouteLink to={"/register"}>Registrar</RouteLink>
      </ContainerRouter>
      {/* <ButtonLogon>
        <IconLogon />
      </ButtonLogon> */}
    </Container>
  );
}

export default NavBar;
