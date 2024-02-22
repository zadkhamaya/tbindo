import React from "react";

export const Features = () => {
  return (
    <div>
      <section className="container mx-auto p-8">
        <div className="flex flex-wrap -mx-4">
          {/* Feature 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <img
              src="https://placehold.co/300x200"
              alt="Feature image"
              className="w-full h-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-3">Feature Title One</h2>
            <p>
              Short feature description to explain the unique selling point of
              the product.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <img
              src="https://placehold.co/300x200"
              alt="Feature image"
              className="w-full h-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-3">Feature Title Two</h2>
            <p>
              Short feature description to explain the unique selling point of
              the product.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <img
              src="https://placehold.co/300x200"
              alt="Feature image"
              className="w-full h-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-3">Feature Title Three</h2>
            <p>
              Short feature description to explain the unique selling point of
              the product.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
