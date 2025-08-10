"use client";

import SuccessPopup from "./SuccessPopup";
import { useSuccessPopup } from "../contexts/SuccessPopupContext";

export default function SuccessPopupWrapper() {
  const { showSuccessPopup, setShowSuccessPopup } = useSuccessPopup();

  return (
    <SuccessPopup
      isOpen={showSuccessPopup}
      onClose={() => setShowSuccessPopup(false)}
    />
  );
}
