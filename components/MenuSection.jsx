import React from "react";

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 px-8">
      <h3 className="text-center text-2xl text-jellyBeanBlue mb-4">Our Menu</h3>
      <h1 className="text-center text-3xl text-sunset uppercase mb-8">
        Today's Delights
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Menu Card 1 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/menu-1.png"
              alt="Beef Kebab Platter"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
              <i className="fas fa-heart"></i>
            </button>
          </div>
          <div className="p-4">
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <h3 className="text-center text-xl text-sunset font-bold mb-2">
              Beef Kebab Platter
            </h3>
            <p className="text-center text-sm text-lightColor mb-4">
              A platter of perfection, traditional Turkish kebabs.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$15.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* Menu Card 2 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/menu-2.png"
              alt="Fish & Chips"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
              <i className="fas fa-heart"></i>
            </button>
          </div>
          <div className="p-4">
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <h3 className="text-center text-xl text-sunset font-bold mb-2">
              Fish & Chips
            </h3>
            <p className="text-center text-sm text-lightColor mb-4">
              A British favoured cuisine, deep fried cod fish with crispy chips.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$14.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Menu Card 3 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/menu-3.png"
              alt="Beef Shawarma"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
              <i className="fas fa-heart"></i>
            </button>
          </div>
          <div className="p-4">
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <h3 className="text-center text-xl text-sunset font-bold mb-2">
              Beef Shawarma
            </h3>
            <p className="text-center text-sm text-lightColor mb-4">
              A famous Middle Eastern street food, with perfectly sliced beef.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$6.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Menu Card 4 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/menu-4.png"
              alt="Oreo Cheesecake"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
              <i className="fas fa-heart"></i>
            </button>
          </div>
          <div className="p-4">
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <h3 className="text-center text-xl text-sunset font-bold mb-2">
              Oreo Cheesecake
            </h3>
            <p className="text-center text-sm text-lightColor mb-4">
              A sweet cheesy dessert with black forest oreo creating a perfect
              symphony.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$7.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Menu Card 5 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/menu-5.png"
              alt="The Tandoori Platter"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
              <i className="fas fa-heart"></i>
            </button>
          </div>
          <div className="p-4">
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <h3 className="text-center text-xl text-sunset font-bold mb-2">
              The Tandoori Platter
            </h3>
            <p className="text-center text-sm text-lightColor mb-4">
              A chicken tandoori platter with traditional flavours.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$13.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Menu Card 6 */}
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
          <div className="relative">
            <img
              src="/images/menu-6.png"
              alt="Assorted Fruit Salad"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-sunset hover:text-white transition">
              <i className="fas fa-heart"></i>
            </button>
          </div>
          <div className="p-4">
            <div className="flex justify-center items-center space-x-1 mb-2">
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star text-jellyBeanBlue"></i>
              <i className="fas fa-star-half-alt text-jellyBeanBlue"></i>
            </div>
            <h3 className="text-center text-xl text-sunset font-bold mb-2">
              Assorted Fruit Salad
            </h3>
            <p className="text-center text-sm text-lightColor mb-4">
              An array of fruits combining the fresh and juicy flavors of an
              assorted mix.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-sunset">$5.99</span>
              <button className="bg-sunset text-white px-4 py-2 rounded hover:bg-jellyBeanBlue transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
