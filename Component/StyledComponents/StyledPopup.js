import Popup from "reactjs-popup";
import styled from "styled-components";

const StyledPopup = styled(Popup)`
    // use your custom style for ".popup-overlay"
  &-overlay {
    backdrop-filter: blur(3px);
  }
  // use your custom style for ".popup-content"
  &-content {
    background: #88551c;
    color: white;
  }
`
export default StyledPopup