import React, { useRef, MutableRefObject } from "react";
import ReactDOM from "react-dom";
import { Grid, GridProps } from "@progress/kendo-react-grid";

interface Props extends GridProps {
  showLoadmore?: boolean;
  backTotop?: boolean;
}
const LoadMore: React.FC = () => {
  // let p = document.getElementById("portal");
  const p = document.getElementsByClassName("k-height-container")[0];

  if (p) {
    return ReactDOM.createPortal(
      <div style={{ background: "red" }}>vvvv</div>,
      p
    );
  }
  return null;
};
interface BackToTopProp {
  handleBack: () => void;
}
const BackToTop: React.FC<BackToTopProp> = ({ handleBack }) => {
  // let p = document.getElementById("portal");
  const p = document.getElementsByClassName("k-height-container")[0];

  if (p) {
    return ReactDOM.createPortal(
      <div style={{ background: "red" }} onClick={handleBack}>
        back
      </div>,
      p
    );
  }
  return null;
};
const CustomGrid: React.FC<Props> = ({ showLoadmore, backTotop, ...rest }) => {
  const gridRef = useRef<any>(null);
  const handleBack = () => {
    const body = document.querySelector(
      `.k-grid-content > [role="presentation"]`
    );
    console.log(body);
    if (body) {
      console.log(body.scrollTop);
      body.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <React.Fragment>
      <div>
        <Grid {...rest} ref={gridRef} />
        {showLoadmore && <LoadMore />}
        {backTotop && <BackToTop handleBack={handleBack} />}
      </div>
    </React.Fragment>
  );
};
export default CustomGrid;
