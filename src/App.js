import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Context from "./component/Context";

function App() {



  return (
    <>
      <Context>
        <Header />
        <Body />
        <Footer />
      </Context>
    </>
  );
}

export default App;
