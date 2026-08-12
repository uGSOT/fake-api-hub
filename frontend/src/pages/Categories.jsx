import { categories } from '../data/apiData';
import CategoryCard from '../components/CategoryCard';

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 text-navy">Categories</h1>
        <p className="text-ink-muted text-lg max-w-2xl">
          Browse our extensive collection of mock APIs categorized by business domain. 
          Perfect for finding exactly what you need for your next project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
