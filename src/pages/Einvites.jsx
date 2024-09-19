import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import pink from "../assets/Pink _Wedding_Invitation.png";
import Blank_pink from "../assets/Pink_blank_Wedding_Invitation.png";
import green from "../assets/Wedding-Invitation.png";
import Blank_green from "../assets/Wedding_Invitation.png";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function Einvites() {
  const navigate = useNavigate();

  const cardData = [
    // { id: "card-1", image: pink, label: "Forever Yours" },
    { id: "card-1", image: Blank_pink, label: "Forever Mine" },
    { id: "card-1", image: Blank_pink, label: "First Love" },
    { id: "card-1", image: Blank_pink, label: "Your Invite" },
    { id: "card-1", image: Blank_pink, label: "Nicla Meets" },
    { id: "card-1", image: Blank_pink, label: "Forever Mine" },
    { id: "card-1", image: Blank_pink, label: "Five Mine" },
    { id: "card-1", image: Blank_pink, label: "Forever Mine" },
    { id: "card-1", image: Blank_pink, label: "Forever Mine" },
    // { id: "card-2", image: green, label: "Forever Ours" },
    // { id: "card-2", image: Blank_green, label: "Forever Us" },
  ];

  const handleCardClick = (cardId, image) => {
    navigate(`/edit-card/${cardId}`, { state: { image } });
  };

  // const handleCardClick = (image) => {
  //   navigate(`/edit-card/card-1`, {
  //     state: { image }
  //   });
  // };

  return (
    <>
      <Navbar />
      <section className="services">
        <div className="row flex justify-start items-center ">
          <div className="text-2xl px-2 font-semibold flex justify-start items-center ">
            Choose Your Wedding Cards Background:
          </div>
          {/* card-1 */}
          {/* <Card className="w-[250px]" onClick={() => handleCardClick(pink)}>
            <CardContent className="p-2">
              <img src={pink} className="rounded-md" />
            </CardContent>
            <CardFooter className="flex justify-between">Forever Yours</CardFooter>
          </Card>
          <Card className="w-[250px]" onClick={() => handleCardClick(Blank_pink)}>
            <CardContent className="p-2">
              <img src={Blank_pink} className="rounded-md" />
            </CardContent>
            <CardFooter className="flex justify-between">Forever My</CardFooter>
          </Card> */}

          {/* card-2 */}
          {/* <Card className="w-[250px]" onClick={() => handleCardClick(green)}>
            <CardContent className="p-2">
              <img src={green} className="rounded-md" />
            </CardContent>
            <CardFooter className="flex justify-between">Forever My</CardFooter>
          </Card>
          <Card className="w-[250px]" onClick={() => handleCardClick(Blank_green)}>
            <CardContent className="p-2">
              <img src={Blank_green} className="rounded-md" />
            </CardContent>
            <CardFooter className="flex justify-between">Forever My</CardFooter>
          </Card> */}

          <div className="grid grid-cols-4 ">
            {cardData.map((card) => (
              <Card
                key={card.id}
                className="w-[250px] m-2"
                onClick={() => handleCardClick(card.id, card.image)}
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

export default Einvites;
