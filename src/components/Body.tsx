import { Box } from "./Box";
import { LeftBody } from "./LeftBody";
import { RightBody } from "./RightBody";

type props = {};

export const Body = (props: props) => {
  return (
    <div className="body">
      <div className="flex width-full height-body">
        <LeftBody />
        <RightBody />
      </div>
      <div className="flex justify-content-sb border">
        <Box name="Box 1" />
        <Box name="Box 2" />
        <Box name="Box 3" />
        <Box name="Box 4" />
      </div>
    </div>
  );
};
