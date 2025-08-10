"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SuccessPopupContextType {
  showSuccessPopup: boolean;
  setShowSuccessPopup: (show: boolean) => void;
}

const SuccessPopupContext = createContext<SuccessPopupContextType | undefined>(
  undefined
);

export function SuccessPopupProvider({ children }: { children: ReactNode }) {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  return (
    <SuccessPopupContext.Provider
      value={{ showSuccessPopup, setShowSuccessPopup }}
    >
      {children}
    </SuccessPopupContext.Provider>
  );
}

export function useSuccessPopup() {
  const context = useContext(SuccessPopupContext);
  if (context === undefined) {
    throw new Error(
      "useSuccessPopup must be used within a SuccessPopupProvider"
    );
  }
  return context;
}
