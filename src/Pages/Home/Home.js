import "./Home.css";
import { News, Hero, LoginCards, Footer } from "../../sections/index";
import { Container } from "./../../components/index";
import Header from "../../components/HeaderDash/Header";

const Home = (pros) => {
  return (
    <>
      <div className=" box-border">
        <div className="flex flex-col">
          <Hero />

          {/* <LoginCards /> */}
          <Container>
            <News />
          </Container>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
