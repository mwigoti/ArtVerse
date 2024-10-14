import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import CategoryList from "@/components/CategoryList";

const HomePage = () => {
  return (
    <div>
      <Slider />
      {/* First featured products section */}
      <div className="mt-24 h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>

      {/* Second featured products section */}
      <div className="mt-24 h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Categories</h1>
        <CategoryList />
      </div>

      {/* Third featured products section */}
      <div className="mt-24 h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        
      </div>
    </div>
  );
};

export default HomePage;
