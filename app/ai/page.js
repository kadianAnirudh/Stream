import Hero from "../components/Hero";
import Demo from "../components/Demo";
// import { Provider } from "react-redux";
// import { store } from "../services/store";

const page = () => {
  return (
    <main>
      {/* <Provider store={store}> */}
      <div className="h-screen text-black main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
      {/* </Provider> */}
    </main>
  );
};

export default page;
