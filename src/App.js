import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import UserInfo from './UserInfo';
import ProductsComponent from './Products';
import PageNotFound from './PageNotFound';
import ProductDetails from './ProductDetails';
import ProductDescription from './productDescription';
import ProductSpecifications from './productSpecifications';
import ProductRatingReviews from './productRatingReviews';
import FrequentlyBoughtTogether from './FrequentlyBoughtTogether';
import QuestionAnswers from './Question_Answers';
// import Employees from './Employees';
import AddToCart from './AddToCart';
import EmployeeList from './employees/EmployeeList';
import Users from './users/Users';
import { ToastContainer, toast } from 'react-toastify';
// import TrainList from './ListOfTrains/TrainList';
import Register from './Register';
import Todo from './Todo';
import PRC from './prctice';
import Cart from './Cart';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductsComponent />}></Route>
        <Route path='/UserInfo' element={<UserInfo />}></Route>
        <Route path='/product-details/:productId' element={<ProductDetails />}>
          <Route path="description" element={<ProductDescription />}> </Route>
          <Route path="specifications" element={<ProductSpecifications />}> </Route>
          <Route path="rating-reviews" element={<ProductRatingReviews />}> </Route>
          <Route path="frequently-bought-together" element={<FrequentlyBoughtTogether />}> </Route>
          <Route path="questions-answers" element={<QuestionAnswers />}> </Route>
        </Route>
        <Route path="/employees" element={<EmployeeList />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/prc" element={<PRC/>} ></Route>
        <Route path='/cart' element={<Cart/>
      }></Route>
        {/* <Route path="/trains" element = {<TrainList/>}></Route> */}
        <Route path="/add-to-carts" element={< AddToCart />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
