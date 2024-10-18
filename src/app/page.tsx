import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import CategoryList from "@/components/CategoryList";

const HomePage = () => {
  return (
    <div>
      {/* Slider Section */}
      <Slider />

      {/* Featured Products Section */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-semibold">Featured Products</h1>
        <ProductList />
      </div>

      {/* Categories Section */}
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList />
      </div>

      {/* New Products Section */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-semibold">New Products</h1>
        {/* Add your new product component here */}
      </div>
    </div>
  );
};

export default HomePage;
