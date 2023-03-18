import "./Home.css";
import { News, Hero, LoginCards, Header, Footer } from "../../sections/index";
// import {} from "../../sections/index";
import { Container } from "./../../components/index";

const Home = (pros) => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <LoginCards />
        <News />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
