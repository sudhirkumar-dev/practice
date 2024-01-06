// import { useState } from "react";
// import Product from "./components/Product";
// import Review from "./components/Review";
// import data from "./data.json";
import "../src/App.css";
// import Grid from "./components/Grid";
import Battery from "./components/Battery";
import LocationComponent from "./components/Location";

const App3 = () => {
  // const [products, setProduct] = useState(data);
  return (
    <div>
      <header>
        <LocationComponent />
        <Battery />
      </header>
      {/* <section>
        {products?.map((product) => (
          <Product key={product.id} product={product} setProduct={setProduct} />
        ))}
      </section> */}
      {/* <Review /> */}
      {/* <Grid /> */}
    </div>
  );
};

export default App3;
