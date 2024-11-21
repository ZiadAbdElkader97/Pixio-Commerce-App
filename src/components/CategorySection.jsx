import { categorySection } from "../assets/assets";

export default function CategorySection() {
  return (
    <div
      id="category-card"
      className="container mx-auto grid grid-cols-3 gap-6"
    >
      {categorySection.map((cat, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 cursor-pointer hover:scale-105"
        >
          <img
            src={cat.imageUrl}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div
            id="category-content"
            className="absolute top-20 left-12 flex flex-col items-center"
          >
            <p id="category-content-p" className="text-xl font-bold">
              {cat.title}
            </p>
            <p id="category-content-p2" className="">
              View All
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
