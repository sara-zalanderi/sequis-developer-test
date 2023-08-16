import { useState, useEffect } from "react";

import Homepage from "./pages/homepage";
import Footer from "./pages/footer";

const url =
  "https://bitbucket.org/!api/2.0/repositories/sequisinnovationlab/web-developer-test/src/5752ed7c2ecf1eedd96b9404043a2b9efe8c7c96/resources/api";

function App() {
  const [completeData, setCompleteData] = useState();

  useEffect(() => {
    fetch(url + "/articles.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCompleteData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Homepage completeData={completeData} />
      <Footer completeData={completeData} />
    </div>
  );
}

export default App;
