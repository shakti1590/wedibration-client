import { useLocation, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./EditInvite.css";
import { Button } from "@/components/ui/button";
import { SketchPicker } from "react-color";

function EditInvite() {
  const location = useLocation();
  const { cardId } = useParams();
  const { image } = location.state || {};
  const [selectFont, setSelectedFont] = useState({
    invite: "",
    groom: "",
    bride: "",
    venue: "",
    date: "",
  });

  const [selectedColors, setSelectedColors] = useState({
    invite: "#000000", // Default color
    groom: "#000000",
    bride: "#000000",
    venue: "#000000",
    date: "#000000",
  });

  console.log("first", selectedColors.invite);

  const cardData = {
    "card-1": {
      inviteYou: `mt-36 ml-32 mr-32 flex flex-col justify-center items-center place-content-center text-[20px]`,
      groomName: `${selectFont.groom} font-semibold flex justify-center items-center text-amber-900 mt-6 text-[65px]`,
      brideName: `${selectFont.bride} font-semibold flex justify-center items-center text-amber-900 text-[65px]`,
      venue: `${selectFont.venue} mt-8 ml-28 mr-28 flex flex-col justify-center items-center place-content-center text-amber-900 text-[20px]`,
      date: `flex flex-row justify-center items-center text-amber-900  mt-3 gap-10`,
    },
    "card-2": {
      inviteYou: `mt-36 ml-32 mr-32 flex flex-col justify-center items-center place-content-center text-[20px]`,
      groomName: `${selectFont.groom} font-semibold flex justify-center items-center text-amber-900 mt-6 text-[65px]`,
      brideName: `${selectFont.bride} font-semibold flex justify-center items-center text-amber-900 text-[65px]`,
      venue: `${selectFont.venue} mt-8 ml-28 mr-28 flex flex-col justify-center items-center place-content-center text-amber-900 text-[20px]`,
      date: `flex flex-row justify-center items-center text-amber-900  mt-3 gap-10`,
    },
  };

  const handleChange = (e) => {
    setSelectedFont({ ...selectFont, [e.target.name]: e.target.value });
  };

  const handleColorChange = (field, color) => {
    setSelectedColors({ ...selectedColors, [field]: color.hex });
  };
  // console.log(cardData[cardId]["inviteYou"],'loc1')

  if (!image) {
    return <div>No card selected!</div>;
  }

  const [invitationDetails, setInvitationDetails] = useState({
    groomName: "",
    brideName: "",
    venue: "",
    date: "",
    day: "",
  });

  const cardRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      const selectedDate = new Date(value);
      const dayName = selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
      }); // Full day name (e.g., 'Monday')
      const day = selectedDate.getDate(); // Get the numeric day
      const month = selectedDate.toLocaleDateString("en-US", {
        month: "short", // Abbreviated month name (e.g., "Nov")
      });

      setInvitationDetails((prev) => ({
        ...prev,
        date: day, // Store the day in `date` field
        month: month, // Store the short month name
        day: dayName, // Store the full day name
      }));
    } else {
      setInvitationDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDownload = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "wedding-invitation.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <>
      <Navbar />
      <section className="edit-invite-page  min-h-screen">
        <div className="row">
          {/* <div className={`invite-editor ${layoutClass}`}>
            <img src={image} alt="Selected Card" className="invite-image" />
          </div> */}
          <div className="app-invite ">
            <div className="form-section-invite border border-pink-600  p-4 rounded-lg ">
              <div className="font-poppins text-[25px] p-5 flex justify-center items-center font-semibold">
                Please Fill Wedding Invitation Details
              </div>
              <form>
                <div className="flex flex-row gap-5">
                  <div className="w-full">
                    <select
                      className="w-full p-2.5 mb-2 outline-none border rounded-md shadow-inner"
                      type="text"
                      id="inviteFont"
                      name="invite"
                      required
                      value={selectFont.invite}
                      onChange={handleChange}
                    >
                      <option value="">Select Font for invite</option>
                      <option value="font-times">Times New Roman</option>
                      <option value="font-handwriting">Hand Writing</option>
                      <option value="font-cursive">Cursive</option>
                      <option value="font-poppins">poppins</option>
                      <option value="font-display">Display</option>
                      <option value="font-festive">Festive</option>
                      <option value="font-elegant">Elegant</option>
                      <option value="font-sans">Sans</option>
                      <option value="font-mono">Mono</option>
                    </select>
                  </div>
                </div>
                {/* ---- */}
                <div className="flex flex-row gap-5">
                  <div>
                    <input
                      type="text"
                      name="groomName"
                      className="outline-none"
                      placeholder="Groom's Name"
                      value={invitationDetails.groomName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full">
                    <select
                      className="w-full p-2.5  outline-none border rounded-md shadow-inner"
                      type="text"
                      id="groomFont"
                      name="groom"
                      required
                      value={selectFont.groom}
                      onChange={handleChange}
                    >
                      <option value="">Select Font</option>
                      <option value="font-times">Times New Roman</option>
                      <option value="font-handwriting">Hand Writing</option>
                      <option value="font-cursive">Cursive</option>
                      <option value="font-poppins">poppins</option>
                      <option value="font-display">Display</option>
                      <option value="font-festive">Festive</option>
                      <option value="font-elegant">Elegant</option>
                      <option value="font-sans">Sans</option>
                      <option value="font-mono">Mono</option>
                    </select>
                  </div>
                </div>

                {/* ---- */}

                <div className="flex flex-row gap-5">
                  <input
                    type="text"
                    name="brideName"
                    className="outline-none"
                    placeholder="Bride's Name"
                    value={invitationDetails.brideName}
                    onChange={handleInputChange}
                  />
                  <div className="w-full">
                    <select
                      className="w-full p-2.5  outline-none border rounded-md shadow-inner"
                      type="text"
                      id="brideFont"
                      name="bride"
                      required
                      value={selectFont.bride}
                      onChange={handleChange}
                    >
                      <option value="">Select Font</option>
                      <option value="font-times">Times New Roman</option>
                      <option value="font-handwriting">Hand Writing</option>
                      <option value="font-cursive">Cursive</option>
                      <option value="font-poppins">poppins</option>
                      <option value="font-display">Display</option>
                      <option value="font-festive">Festive</option>
                      <option value="font-elegant">Elegant</option>
                      <option value="font-sans">Sans</option>
                      <option value="font-mono">Mono</option>
                    </select>
                  </div>
                </div>

                {/* ---- */}

                <div className="flex flex-row gap-5">
                  <input
                    type="text"
                    name="venue"
                    className="outline-none"
                    placeholder="Venue"
                    value={invitationDetails.venue}
                    onChange={handleInputChange}
                  />
                  <div className="w-full">
                    <select
                      className="w-full p-2.5  outline-none border rounded-md shadow-inner"
                      type="text"
                      id="venueFont"
                      name="venue"
                      required
                      value={selectFont.venue}
                      onChange={handleChange}
                    >
                      <option value="">Select Font</option>
                      <option value="font-times">Times New Roman</option>
                      <option value="font-handwriting">Hand Writing</option>
                      <option value="font-cursive">Cursive</option>
                      <option value="font-poppins">poppins</option>
                      <option value="font-display">Display</option>
                      <option value="font-festive">Festive</option>
                      <option value="font-elegant">Elegant</option>
                      <option value="font-sans">Sans</option>
                      <option value="font-mono">Mono</option>
                    </select>
                  </div>
                </div>
                {/* <input
                  type="date"
                  name="date"
                  value={invitationDetails.date}
                  onChange={handleInputChange}
                /> */}
                <div className="flex flex-row gap-5">
                  <input
                    type="date"
                    className="outline-none w-[390px]"
                    name="date"
                    value={invitationDetails.date}
                    onChange={handleInputChange}
                    onFocus={(e) => e.target.showPicker()}
                    style={{
                      appearance: "none",
                      fontSize: "16px",
                      color: invitationDetails.date ? "black" : "gray",
                    }}
                  />
                  <div className="w-full">
                    <select
                      className="w-full p-2.5  outline-none border rounded-md shadow-inner"
                      type="text"
                      id="dateFont"
                      name="date"
                      required
                      value={selectFont.date}
                      onChange={handleChange}
                    >
                      <option value="">Select Font</option>
                      <option value="font-times">Times New Roman</option>
                      <option value="font-handwriting">Hand Writing</option>
                      <option value="font-cursive">Cursive</option>
                      <option value="font-poppins">poppins</option>
                      <option value="font-display">Display</option>
                      <option value="font-festive">Festive</option>
                      <option value="font-elegant">Elegant</option>
                      <option value="font-sans">Sans</option>
                      <option value="font-mono">Mono</option>
                    </select>
                  </div>
                </div>
              </form>
              <div className="w-[20%]">
                    <SketchPicker 
                      color={selectedColors.invite}
                      onChangeComplete={(color) => handleColorChange('invite', color)}
                    />
                    {/* <input
                      type="color"
                      id="inviteColor"
                      name="invite"
                      value={selectedColors.invite}
                      onChange={handleColorChange}
                      className="w-full  py-8"
                    /> */}
                  </div>
              <Button
                className="mt-10 w-[220px] flex justify-center items-center"
                onClick={handleDownload}
              >
                Download Invitation
              </Button>
            </div>
            <div className="preview-section-invite">
              <div
                className="card-invite "
                ref={cardRef}
                style={{ backgroundImage: `url(${image})` }}
              >
                {/* {console.log(`${cardData[`${cardId}`]}`)} */}
                <div className={`${cardData[cardId]["inviteYou"]}`}>
                  <div
                    className={`${selectFont.invite} `}
                    style={{ color: selectedColors.invite }}
                  >
                    WE INVITE YOU
                  </div>
                  <div
                    className={`${selectFont.invite} ${selectedColors.invite}`}
                    style={{ color: selectedColors.invite }}
                  >
                    TO CELEBRATE OUR WEDDING
                  </div>
                </div>
                <div
                // className="bg-red-300 "
                >
                  {invitationDetails.groomName &&
                    invitationDetails.brideName && (
                      <div className={`${cardData[cardId]["groomName"]}`} style={{ color: selectedColors.invite }}>
                        {invitationDetails.groomName}
                      </div>
                    )}
                </div>
                <div
                // className="bg-red-400 "
                >
                  {invitationDetails.groomName &&
                    invitationDetails.brideName && (
                      <div className="font-poppins font-semibold flex justify-center items-center text-amber-800 text-4xl" style={{ color: selectedColors.invite }}>
                        &{" "}
                      </div>
                    )}
                </div>

                <div
                //  className="bg-red-500 "
                >
                  {invitationDetails.groomName &&
                    invitationDetails.brideName && (
                      <div className={`${cardData[cardId]["brideName"]}`} style={{ color: selectedColors.invite }}>
                        {invitationDetails.brideName}
                      </div>
                    )}
                </div>

                {/* ---- */}

                <div
                  className={`${cardData[cardId]["date"]}`}
                  style={{ color: selectedColors.invite }}
                >
                  <div>
                    {invitationDetails.day && (
                      <div className={`${selectFont.date} text-[18px]`} style={{ color: selectedColors.invite }}>
                        {invitationDetails.day.toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* --- */}

                  <div className="flex flex-col justify-center items-center ">
                    <div>
                      {invitationDetails.date && (
                        <div className={`${selectFont.date} text-[45px]`} style={{ color: selectedColors.invite }}>
                          {invitationDetails.date}
                        </div>
                      )}
                    </div>
                    <div>
                      {invitationDetails.month && (
                        <div className={`${selectFont.date} text-[25px] `} style={{ color: selectedColors.invite }}>
                          {invitationDetails.month}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* --- */}

                  <div>
                    {invitationDetails.date && (
                      <div className={`${selectFont.date} text-[18px] `} style={{ color: selectedColors.invite }}>
                        8:00 PM
                      </div>
                    )}
                  </div>
                </div>

                {/* ---- */}

                <div>
                  {invitationDetails.venue && (
                    <div className={`${cardData[cardId]["venue"]}`} style={{ color: selectedColors.invite }}>
                      {invitationDetails.venue}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default EditInvite;
