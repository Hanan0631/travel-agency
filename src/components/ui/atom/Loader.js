//react-loader-spinner
import { LineWave } from "react-loader-spinner";

function Loader() {
  return (
    <LineWave
      visible={true}
      height="100"
      width="100"
      color="#28A745"
      ariaLabel="line-wave-loading"
      wrapperStyle={{margin: "auto"}}
    />
  );
}

export default Loader;
