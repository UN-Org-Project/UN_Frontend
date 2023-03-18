import "./LoginCards.css";

import { Card, SectionHeader, SectionWrapper } from "../../components/index";

import LoginCardsData from "../../Data/LoginCardsData";

const LoginCards = () => {
  const cards = LoginCardsData.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.img}
        title={card.title}
        cetegory={card.cetegory}
        rate={card.rate}
        download={card.download}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader>For Login</SectionHeader>
        <div className="most-popular-items">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default LoginCards;
