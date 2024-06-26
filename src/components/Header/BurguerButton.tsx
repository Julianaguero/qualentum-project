import "./BurguerButton.css";

interface Props {
  clicked: boolean;
  toggleClicked: () => void;
}


const BurguerButton : React.FC<Props> = ({ toggleClicked, clicked }) => {
  return (
    <div onClick={toggleClicked} className={`icon nav-icon-5 ${clicked ? "open" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurguerButton;
