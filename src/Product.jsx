import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CartButton } from './CartButton';

export function Product({product, count, setCount}) {

  return (
    <div className="products">
      <Card sx={{ width: 250 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw"
          title="Sample photo"
        />
        
          <CardContent>
            <div className="product-name">
              <h2>{product.title}</h2>
            </div>

            <div className="product-price">
              <p>{product.price}</p>
            </div>
          </CardContent>
        
        <CardActions className="cart-button">
            <CartButton count={count} setCount={setCount}/>
        </CardActions>
      </Card>
    </div>
  );
}


