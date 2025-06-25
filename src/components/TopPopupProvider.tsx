"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface PopupContextType {
  showPopup: (text: string) => void;
  hidePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) throw new Error("usePopup must be used within PopupProvider");
  return context;
};

export const TopPopupProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState<string | null>(null);

  const showPopup = (t: string) => setText(t);
  const hidePopup = () => setText(null);

  return (
    <PopupContext.Provider value={{ showPopup, hidePopup }}>
      {children}
      {text && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl border border-gray-200 px-6 py-5 w-[90%] max-w-2xl shadow-xl">
      <div className="text-left text-sm text-gray-800 leading-relaxed space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Abstract</h2>
        {text.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
            <div className="flex justify-end">
              <button
                onClick={hidePopup}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      )}
    </PopupContext.Provider>
  );
};
