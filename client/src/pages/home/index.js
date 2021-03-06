import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Upload from "components/upload";
import Result from "components/result";

function Home() {
  const [inputImage, setInput] = useState(null);
  const [outputImage, setOutput] = useState(null);

  const clearData = () => {
    setInput(null);
    setOutput(null);
  };

  return (
    <Container>
      {inputImage && outputImage ? (
        <Result input={inputImage} output={outputImage} callback={clearData} />
      ) : (
        <Upload
          setInput={(input) => setInput(input)}
          setOutput={(output) => setOutput(output)}
        />
      )}
    </Container>
  );
}

export default Home;
