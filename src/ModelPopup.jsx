import { VscChromeClose } from "react-icons/vsc";
import Model from "./Model";

const ModelPopup = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`model-popup ${isOpen ? "open" : ""}`}>
            <VscChromeClose className="x-btn" onClick={() => setIsOpen(false)} />
            <Model />
            <div className="break-line"></div>
            <p style={{margin: "10px"}}>Other Settings</p>
        </div>
    );
}
 
export default ModelPopup;