"use client";

import ModalContainer from "@/partials/container/ModalContainer";
import CheckOTPForm from "@/ui/organism/CheckOTPForm";
import SendOTPForm from "@/ui/organism/SendOTPForm";
import { useState } from "react";

function Authentication({ modalIsOpen, setModalIsOpen, reference }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  return (
    <div>
      {step === 1 && (
        <ModalContainer modalIsOpen={modalIsOpen}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setModalIsOpen={setModalIsOpen}
            reference={reference}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer modalIsOpen={modalIsOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setModalIsOpen={setModalIsOpen}
            reference={reference}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default Authentication;
