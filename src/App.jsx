import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { calculateTotals } from '../features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
