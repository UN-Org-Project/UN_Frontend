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
        <div className=" small grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards}
        </div>
      </SectionWrapper>
    </>
  );
};

export default LoginCards;
