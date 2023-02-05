import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useNavigate } from "react-router-dom";

function Cart({count}) {

  // const navigate = useNavigate();
  return (
    <div>
      <nav>
        <Badge badgeContent={count} color="primary">
          <Button size="large" variant='outlined'><ShoppingCartIcon /> Cart</Button>
        </Badge>
      </nav>
    </div>
  );
}

export {Cart}


