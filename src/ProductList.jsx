import { Product } from './Product'

export function ProductList({ count, setCount}) {

  const productDetails = [
    {
      title: "Fancy Product",
      price: "$40.00 - $80.00"
    },
    {
      title: "Special Item",
      price: "$18.00"
    },
    {
      title: "Sale Item",
      price: "$25.00"
    },
    {
      title: "Popular Item",
      price: "$40.00"
    },
    {
      title: "Sale Item",
      price: "$25.00"
    },
    {
      title: "Fancy Product",
      price: "$120.00 - $280.00"
    },
    {
      title: "Special Item",
      price: "$120.00 - $280.00"
    },
    {
      title: "Popular Item",
      price: "$40.00"
    },
  ]

  return (
    <div className='product-list'>
      {productDetails.map((pd, index) => (
        <Product 
          key={index}
          product={pd}
          count={count} 
          setCount={setCount}
        />
      ))}
      
    </div>
  );
}
