import React, {useState} from "react";

const MyAccordian = ({question, answer, index }) => {
  const [showAcc, setshowAcc] = useState(false);

  return (
    <>
      <div className='acc-box mt-3 '>
        <i
          className={`fa-solid fa-icon ${showAcc ? "fa-minus" : "fa-plus"}`}
          onClick={() => setshowAcc(!showAcc)}
        ></i>
        <h2>{question}</h2>
      </div>

      {showAcc && (
        <div className='acc-box-two'>
          <small>{answer}</small>
        </div>
      )}
    </>
  );
};

export default MyAccordian;
