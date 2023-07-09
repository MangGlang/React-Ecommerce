import React from 'react'

const Price = ( { originalPrice, salePrice }) => {
  return (
    <div className="book__price">
        {/* Does book sale price exist? */}
        {/* If sale exists, print original and sale price */}
        {/* If no sale, then print only original price. */}
        {salePrice ? (
          <>
            <span className="book__price--normal">
              ${originalPrice.toFixed(2)}
            </span>
            ${salePrice.toFixed(2)}
          </>
        ) : (
          <>${originalPrice}</>
        )}
      </div>
  )
}

export default Price