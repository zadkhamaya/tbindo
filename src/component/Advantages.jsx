import React from "react";

export const Advantages = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-8 flex justify-around items-center">
        <div className="text-center p-4">
          <i className="fas fa-shipping-fast fa-3x mb-4"></i>
          <p className="font-bold">Free Shipping</p>
          <p>On all orders over $50</p>
        </div>
        <div className="text-center p-4">
          <i className="fas fa-sync fa-3x mb-4"></i>
          <p className="font-bold">30 Days Return</p>
          <p>If goods have problems</p>
        </div>
        <div className="text-center p-4">
          <i className="fas fa-headset fa-3x mb-4"></i>
          <p className="font-bold">24/7 Support</p>
          <p>Customer support</p>
        </div>
      </div>
    </section>
  );
};
