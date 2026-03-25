import ProductDisplay from "../components/common/ProductDisplay";
import RowOneHomePage from "../components/RowOneHomePage";

export default function Homepage() {
  return (
    <div className="mt-3 md:mt-20">
      <RowOneHomePage />
      <div className="mt-10">
        <ProductDisplay />
      </div>
    </div>
  );
}
