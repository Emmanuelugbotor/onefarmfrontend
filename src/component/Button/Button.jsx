import "./Button.scss";
import { useRef, useEffect } from "react";
export default function RippleButton({ button }) {
  const rippleRef = useRef();
  // function handleRipple(){

  // }
  useEffect(() => {
    rippleRef.current.addEventListener("click", (e) => {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      let ripple = document.createElement("span");
      ripple.classList.add("ripple");
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      rippleRef.current.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "5rem",
      }}
    >
      <button className="rippleButton" ref={rippleRef}>
        {button}
      </button>
    </div>
  );
}
