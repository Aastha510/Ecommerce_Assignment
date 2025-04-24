import React, { useState } from 'react';
import './CSS/KidsShirt.css';
import img4 from '../Components/Assets/img4.JPG';
import img5 from '../Components/Assets/img5.JPG';
import img6 from '../Components/Assets/img6.JPG';
const shirtsData = [
  {
    name: "Classic Shirt",
    image: img4,
    productCode: "SH001",
    description: "A timeless classic shirt made with premium cotton.",
    variations: [
      { size: "S", color: "LightPink", price: 999, discount: 10 },
      { size: "M", color: "White", price: 999, discount: 12 },
      { size: "L", color: "Black", price: 999, discount: 15 },
      { size: "XL", color: "LightPink", price: 999, discount: 20 },
      { size: "XXL", color: "White", price: 999, discount: 25 },
    ]
  },
  {
    name: "Denim Shirt",
    image: img5,
    productCode: "SH002",
    description: "Stylish denim shirt perfect for casual outings.",
    variations: [
      { size: "S", color: "LightPink", price: 1299, discount: 15 },
      { size: "M", color: "White", price: 1299, discount: 15 },
      { size: "L", color: "Black", price: 1299, discount: 15 },
      { size: "XL", color: "LightPink", price: 1299, discount: 10 },
      { size: "XXL", color: "Black", price: 1299, discount: 10 },
    ]
  },
  {
    name: "Plaid Shirt",
    image: img6,
    productCode: "SH003",
    description: "A trendy plaid shirt for a relaxed yet stylish look.",
    variations: [
      { size: "S", color: "LightPink", price: 1099, discount: 20 },
      { size: "M", color: "White", price: 1099, discount: 18 },
      { size: "L", color: "Black", price: 1099, discount: 25 },
      { size: "XL", color: "LightPink", price: 1099, discount: 15 },
      { size: "XXL", color: "Black", price: 1099, discount: 15 },
    ]
  },


];

const Shirts = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (shirtIndex, color, size) => {
    setSelectedOptions(prev => ({ ...prev, [shirtIndex]: { color, size } }));
  };

  const isSizeAvailable = (shirt, color, size) => {
    return shirt.variations.some(v => v.color === color && v.size === size);
  };

  return (
    <div className="shirts-page">
      <h1>KIDS SHIRT</h1>
      <div className="shirts-grid">
        {shirtsData.map((shirt, index) => {
          const selectedColor = selectedOptions[index]?.color || shirt.variations[0].color;
          const selectedSize = selectedOptions[index]?.size || shirt.variations[0].size;
          const selectedVariation = shirt.variations.find(v => v.color === selectedColor && v.size === selectedSize);

          return (
            <div className="shirt-card" key={index}>
              <img src={shirt.image} alt={shirt.name} />
              <h2>{shirt.name}</h2>
              <p><strong>Product Code:</strong> {shirt.productCode}</p>
              <p>{shirt.description}</p>

              <div className="variation-section">
                <h4>Choose Color:</h4>
                <div className="color-options">
                  {/* Only display LightPink, White, and Black */}
                  {["LightPink", "White", "Black"].map((color, i) => (
                    <div
                      key={i}
                      className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleOptionChange(index, color, selectedSize)}
                      title={color}
                    ></div>
                  ))}
                </div>

                <h4>Choose Size:</h4>
                <div className="size-options">
                  {shirt.variations.map((variation, i) => (
                    <button
                      key={i}
                      className={`size-button ${selectedSize === variation.size ? 'selected' : ''}`}
                      onClick={() => handleOptionChange(index, selectedColor, variation.size)}
                    >
                      {variation.size}
                    </button>
                  ))}
                </div>

                {selectedVariation ? (
                    <div className="variation-details">
                       <p>Size: {selectedVariation.size}</p>
                       <p>Color: {selectedVariation.color}</p>
                       <p className="original-price">₹{selectedVariation.price}</p>
                       <p>Discount: {selectedVariation.discount}%</p>
                       <p className="payable-price">Payable Price: ₹{(selectedVariation.price * (1 - selectedVariation.discount / 100)).toFixed(2)}</p>
                     </div>) 
                            : (
                    
                                <div className="not-available">
                                    <p><strong>Not Available</strong></p>
                                </div>
                                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shirts;
