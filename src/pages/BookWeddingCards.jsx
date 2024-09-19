import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import card_1 from "../assets/weddingCards/card_1.webp";
import card_2 from "../assets/weddingCards/card_2.webp";
import card_3 from "../assets/weddingCards/card_3.webp";
import card_4 from "../assets/weddingCards/card_4.webp";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function BookWeddingCards() {
  const navigate = useNavigate();

  const cardData = [
    // { id: "card-1", image: pink, label: "Forever Yours" },
    { id: "card-1", image: card_1, label: "Forever Mine" },
    { id: "card-2", image: card_2, label: "First Love" },
    { id: "card-3", image: card_3, label: "Your Invite" },
    { id: "card-4", image: card_4, label: "Nicla Meets" },
    
  ];

  const handleCardClick = (cardId,label, image) => {
    const formattedLabel = label.toLowerCase().replace(/\s+/g, '-'); 
    navigate(`/physical-invitation-card/${formattedLabel}/${cardId}`, { state: { image } });
  };


  return (
    <>
      <Navbar />
      <section className="services">
        <div className="row flex justify-start items-center ">
          <div className="text-2xl px-2 font-semibold flex justify-start items-center ">
            Choose Your Wedding Cards
          </div>
          <div className="grid grid-cols-4 ">
            {cardData.map((card) => (
              <Card
                key={card.id}
                className="w-[250px] m-2"
                onClick={() => handleCardClick(card.id,card.label, card.image)}
              >
                <CardContent className="p-2">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="rounded-md"
                  />
                </CardContent>
                <div className="flex  justify-center items-center">
                  {card.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BookWeddingCards;
