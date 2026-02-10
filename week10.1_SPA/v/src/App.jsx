// we will be creating diffrent route with help of reactr roter dom libeary
// single page application
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  redirect,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* this is the end point , and element iss the coneten of that endpoint */}
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Prg />}
          />
          <Route
            path="/n"
            element={<Class12Prg/>}
          />
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Class11Prg() {
  return <div>neet program for class 11th</div>;
}

function Class12Prg() {
  // const navigate = useNavigate();

  // function redirectUSer() {
  //   navigate("/");
  // }

  return (
    <div>
      {/* <Button onClick={redirectUSer}> click to return back </Button> */}
      neet program for class1th
    </div>
  );
  
}


function Landing() {
  return <div>Welcome to Allen </div>;
}

function NoPage() {
  return <div>404 page not found</div>;
}

function Layout() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* // mymain content like headers and footreers  */}
      <Header />
      <div style={{ height: "90vh" }}>
        <Outlet />
        {/* this is the place where all the content will be changing  , this is called nested route */}
      </div>
      
    Fotter
    </div>
  );
}

function Header() {
  return (
    <div>
      {/* // mymain content like headers and footreers  */}
      <Link to="/"> Allen</Link>
      <Link to="/neet/online-coaching-class-11"> Class 11</Link>

      <Link to="/n">  Class 12</Link>
    </div>
  );
} 


export default App;

// layout menas , always a top bar and a forter , then coneten chnage only of midddle ,
// chnage ing the content ogf the middle is called nested route  , we will see in next class

// wrapp the route inisde another route , and that route will be our layout , and inside that we will have other route which will be our content  , and that content will be changing  but the layout will be same  , this is called nested route
// e,g
// <Route path = "/" element = {<Layout/>}>


