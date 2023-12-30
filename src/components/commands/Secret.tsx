import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Secret: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "secret" && currentCommand.length <= 1) {
    window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
  }

  return (
    <Wrapper>
      <span>&gt;:D</span>
    </Wrapper>
  );
};

export default Secret;
