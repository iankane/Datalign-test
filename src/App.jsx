import React, { useEffect } from "react";

import AdminApp from "./AdminApp";
import ViewButtons from "./components/ViewButtons";
import { startMirage } from "./services/exampleServer";

function App() {
  //startup the mirage server
  startMirage();
  return (
    <div>
      <ViewButtons></ViewButtons>
      <AdminApp />
    </div>
  );
}

export default App;
