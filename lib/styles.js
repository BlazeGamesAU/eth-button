export const DEFAULT_STYLES = `
.EthDonateButton {
  box-sizing: border-box;
  display: flex;
  border-radius: 4px;
  width: 256px;
  max-width: 256px;
  padding: 3px;
  font-family: sans-serif;
  overflow:hidden;
}

.EthDonateButton a {
  text-decoration: none;
  color: #0099ff;
}

.EthDonateButton.disabled {
  position: relative;
  height: 66px;
}

.EthDonateButton--DisabledOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.EthDonateButton--DisabledOverlay > div {
  border: 1px solid #c22;
  border-radius: 4px;
  padding: 4px;
  max-width: 75%;
  text-align: center;
}

.EthDonateButton * {
  box-sizing: border-box;
}

.EthDonateButton--Blockie {
  box-shadow: 0 0 5px 0px rgba(34, 34, 34, 0.5);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  flex: 0 0 auto;
}

.EthDonateButton--Content {
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 192px;
}

.EthDonateButton--LabelRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.EthDonateButton--LabelRow--Caption {
  width: 50%;
}

.EthDonateButton--LabelRow--Address {
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: initial;
}

.EthDonateButton--InputRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 170px;
  position: relative;
}

.EthDonateButton--InputRow:before {
  content: '';
  background:url('../lib/ETHIcon.svg');
  background-repeat: no-repeat;
  width: 20px;
  height: 18px;
  position: absolute;
  left: 6px;
}

.EthDonateButton--InputRow--Input {
  text-align: end;
  border-radius: 10px;
  background-color: #ffffff;
  height: 30px;
  max-width: 65px;
  width: 40%;
  color: #2e1482;
}



.EthDonateButton--InputRow--Button {
  display: inline-block;
  background-color: #FCB81F;
  padding: 3px 6px;
  border-radius: 10px;
  border: 1px solid #2e1482;
  color: #2e1482;
  cursor: pointer;
  width: 75px;
  text-align: center;
  height: 30px;
  transition: color 0.5s ease, border-color 0.5s ease;
  line-height: 22px;
  max-width: 90px;
  width: 60%;
}

.EthDonateButton--InputRow--Button.disabled {
  background-color: #4a3d9b;
  color: #2e1482;
  cursor: default;
  border: 1px solid #2e1482;
  opacity: 0.5;
}

.EthDonateButton--InputRow--Button.done {
  color: #2c2;
  border-color: #2c2;
  cursor: default;
}

.EthDonateButton--InputRow--Button.error {
  color: #c22;
  border-color: #c22;
  cursor: default;
}

.EthDonateButton--InputRow--Button.loading div {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px rgba(00, 153, 255, 0.25) solid;
	border-top: 2px rgba(00, 153, 255, 1) solid;
	border-radius: 50%;
	-webkit-animation: loading .6s infinite linear;
	animation: loading .6s infinite linear;
}
@-webkit-keyframes loading {
	from { -webkit-transform: rotate(0deg); }
	to { -webkit-transform: rotate(359deg); }
}
@keyframes loading {
	from { transform: rotate(0deg); }
	to { transform: rotate(359deg); }
}
`;

const STYLES_ROOT_ID = "EthButtonStyles";

export default function loadStyles(document) {
  if (document.getElementById(STYLES_ROOT_ID)) {
    return;
  }
  const styles = document.createElement("style");
  styles.type = "text/css";
  styles.innerHTML = DEFAULT_STYLES;
  styles.id = STYLES_ROOT_ID;
  document.head.appendChild(styles);
}
