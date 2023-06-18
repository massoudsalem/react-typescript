import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: React.ReactElement }) => {
  const elRef: React.MutableRefObject<HTMLDivElement | null> =
    React.useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  React.useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
