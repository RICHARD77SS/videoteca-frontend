
import GlobalStyles from "./styles/GlobalStyles";

import Videos from "./Components/videoList";

import { VideoContextProvider } from "./contexts/videoContext";

function App() {
  return (
    <>
      <VideoContextProvider>
        <Videos />
      </VideoContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
