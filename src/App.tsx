import React, { Suspense } from "react";
import Routes from "./routes/Routes";
import Container from "./components/Container";
import Loading from "./components/Loading";

const App: React.FC = () => {
  return (
    <Container>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </Container>
  );
};

export default App;
