import Button from '@mui/material/Button';
import { useState } from 'react';



export function CartButton({count, setCount}) {

  const [show, setShow] = useState(true);

  const buttonStyles1 = {
    display: show ?  "block" : "none"
  };

  const buttonStyles2 = {
    display: show ?  "none" : "block"
  };


  return (
    <div>
      <Button 
        style={buttonStyles1}
        variant='contained'
        onClick={()=> {
          setCount(count + 1)
          setShow(!show)
          console.log(show)}}
        >Add to Cart
      </Button>

      <Button 
        style={buttonStyles2}
        variant='outlined'
        color="secondary"
        onClick={()=> {
          setCount(count - 1)
          setShow(!show)}}
        >Remove from Cart
      </Button>
    </div>
  );
}
