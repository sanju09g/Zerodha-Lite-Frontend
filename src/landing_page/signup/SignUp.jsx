import React, { useState } from "react";
import { Card } from 'react-bootstrap';
import OpenAccount from "../OpenAccount";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/landing.css";
import { useUser } from "../../dashboard/UserContext"; 

function Signup() {

  const { setLoggedInUsername } = useUser();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true, // ensures cookies are sent and accepted
        }
      );
  
      const data = response.data;
      console.log("Signup response:", data);
  
      if (data.success) {
        const loggedInUsername = data.user.username;
        setLoggedInUsername(loggedInUsername); // ✅ Access username
        alert(`Welcome, ${loggedInUsername}!`);
        navigate("/dashboard");
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        alert(error.response.data.message || "Signup failed.");
      } else {
        alert("Something went wrong: " + error.message);
      }
    }
  };
  

  return (
    <>
      <div className="container p-3">
        <h1 className="mt-5 mb-4 text-center">
          Open a free demat and trading account online
        </h1>
        <p className="text-muted mb-5 fs-5 text-center">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
        <div className="row justify-content-center mb-5">
          <div className="col-6 mt-5">
            <img
              style={{ width: "80%" }}
              src="media/images/signupimg.svg"
              alt="signup_img"
            />
          </div>
          <div className="col-auto mt-5 align-self-center">
            <h2>Signup now</h2>
            <p className="text-muted  mb-4">
              Or track your existing application
            </p>
            <form method="post" className="needs-validation" noValidate onSubmit={handleFormSubmit}>
              {/* <span className="inp-sign"><img src="media/images/india-flag.svg" alt="india-flag" /> +91</span> */}
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "15px",
                  padding: "0 15px 0 15px",
                  border:"1px solid lightgray",
                    borderRadius:"14px"
                }}
                placeholder="Enter your username"
                value={username}
                onChange={(e)=>setUserName(e.target.value)}
              />
              <br /><br />
               <input
                type="email"
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "15px",
                  padding: "0 15px 0 15px",
                  border:"1px solid lightgray",
                    borderRadius:"14px"
                }}
                placeholder="Register your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />   <br /><br />
              <input
                type="password"
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "15px",
                  padding: "0 15px 0 15px",
                  border:"1px solid lightgray",
                  borderRadius:"14px"
                }}
                placeholder="Create a password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <br />

              <button
                className="fs-5 mt-4"
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "#387ed1",
                  color: "#fff",
                  margin: "0 auto",
                  border: "none",
                  borderRadius: "8px",
                }}
              >
               Signup 
              </button>
            </form>
            <p className="mt-4 text-muted " style={{ fontSize: "14px" }}>
              {" "} 
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" className="text-decoration-none">
                terms
              </a>{" "}
              &{" "}
              <a className="text-decoration-none" href="#">
                privacy policy
              </a>
            </p>
          </div>
        </div>
        <div className="row ">
          <h1 className="text-center mt-5 mb-5">
            Investment options with Zerodha demat account
          </h1>
          <div className="col p-5">
            <div className="row ">
              <div className="col text-center">
                <img src="media/images/stocks.svg" alt="stocks" />
                <br />
                <br />
                <img src="media/images/ipo.svg" alt="ipo" />
              </div>
              <div className="col">
                <h2>Stocks</h2>
                <p className="text-muted">
                  Invest in all exchange-listed securities
                </p>
                <br />
                <h2>IPO</h2>
                <p className="text-muted">
                  Apply to the latest IPOs instantly via UPI
                </p>
              </div>
            </div>
          </div>
          <div className="col p-5">
            <div className="row">
              <div className="col text-center">
                <img src="media/images/mfs.svg" alt="mfs" />
                <br />
                <br />
                <br />
                <img src="media/images/f&o.svg" alt="f&o" />
              </div>
              <div className="col">
                <h2>Mutual funds</h2>
                <p className="text-muted">
                  Invest in commission-free direct mutual funds
                </p>
                <br />
                <h2>Futures & options</h2>
                <p className="text-muted">
                  Hedge and mitigate market risk through simplified F&O trading
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <button
              className="p-2 fs-5 mb-5"
              style={{
                width: "20%",
                backgroundColor: "#387ed1",
                color: "#fff",
                margin: "0 auto",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Explore Investments
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-5 p-5 " style={{ backgroundColor: "#fbfbfb" }}>
        <h1 className="text-center fs-2">
          Steps to open a demat account with Zerodha
        </h1>
        <div className="col-6 p-2 mt-4 text-end">
          <img
            src="media/images/demat.svg"
            alt="demat_image"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-6 p-2 mt-5">
          <h4 className="text-muted">
            {" "}
            <i className="fa-regular fa-circle-check"> </i> &nbsp;Enter the
            requested details
          </h4>
          <hr style={{ borderColor: "#ddd", borderWidth: "2px" }} />

          <h4 className="text-muted ">
            {" "}
            <i className="fa-regular fa-circle-check"> </i> &nbsp;Complete
            e-sign & verification
          </h4>
          <hr style={{ borderColor: "#ddd", borderWidth: "2px" }} />

          <h4 className="text-muted">
            <i className="fa-regular fa-circle-check"> </i>&nbsp; Start
            investing!
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="row ">
         
          <div className="col-6 p-5 align-self-center">
            <img
              src="media/images/opendemat.svg"
              alt="opendemat_image"
              style={{ width: "70%" }}
            />
           <h1 className="mt-3 text-muted fs-2">Benefits of opening a Zerodha demat account</h1>
          </div>
          <div className="col-6 p-5">
            <h2 className="mt-5 fs-4 mb-4">Unbeatable pricing</h2>
            <p className="text-muted mb-5">
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </p>

            <h2 className="fs-4 mb-4">Best investing experience</h2>
            <p className="text-muted mb-5">
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>
            <h2 className="fs-4 mb-4">No spam or gimmicks</h2>
            <p className="text-muted mb-5">
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>
            <h2 className="fs-4 mb-4">The Zerodha Universe</h2>
            <p className="text-muted mb-5">
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
        <div className="row text-center ">
       <h1 className="mb-5"> Explore different account types</h1>

        <Card className="p-3 card text-start shadow-sm border rounded-3 me-4 mb-4 ms-5" style={{ width: '18rem', position: 'relative'}}>
    
      <div
        className="d-flex align-items-center justify-content-center bg-white border border-primary rounded-circle"
        style={{
          width: '25px',
          height: '25px',
          position: 'absolute',
          top: '20px',
          left: '-15px',
          zIndex: 1,
        }}
      >
       <i className="fa-solid fa-user-tie"></i>
      </div>
  
   
      <Card.Body>
        <Card.Title className="fw-semibold">Individual Account</Card.Title>
        <Card.Text className="text-muted">
          Invest in equity, mutual funds and derivatives
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="p-3 text-start shadow-sm border rounded-3 me-4 mb-4  ms-5" style={{ width: '18rem', position: 'relative' }}>
    
      <div
        className="d-flex align-items-center justify-content-center bg-white border border-primary rounded-circle"
        style={{
          width: '25px',
          height: '25px',
          position: 'absolute',
          top: '20px',
          left: '-15px',
          zIndex: 1,
        }}
      >
       <i className="fa-solid fa-user-tie"></i>
      </div>
  
      
      <Card.Body>
        <Card.Title className="fw-semibold">HUF Account</Card.Title>
        <Card.Text className="text-muted">
         Make tax-efficient investments for your family
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="p-3 text-start shadow-sm border rounded-3 me-4 mb-4  ms-5" style={{ width: '18rem', position: 'relative' }}>
    
      <div
        className="d-flex align-items-center justify-content-center bg-white border border-primary rounded-circle "
        style={{
          width: '25px',
          height: '25px',
          position: 'absolute',
          top: '20px',
          left: '-15px',
          zIndex: 1,
        }}
      >
       <i className="fa-solid fa-user-tie"></i>
      </div>
  
    
      <Card.Body>
        <Card.Title className="fw-semibold">NRI Account</Card.Title>
        <Card.Text className="text-muted">
          Invest in equity, mutual funds, debentures, and more
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="row">
        <Card className="p-3 text-start shadow-sm border rounded-3 me-4 mb-4  ms-5" style={{ width: '18rem', position: 'relative' }}>
     
      <div
        className="d-flex align-items-center justify-content-center bg-white border border-primary rounded-circle"
        style={{
          width: '25px',
          height: '25px',
          position: 'absolute',
          top: '20px',
          left: '-15px',
          zIndex: 1,
        }}
      >
       <i className="fa-solid fa-user-tie"></i>
      </div>

      <Card.Body>
        <Card.Title className="fw-semibold">Minor Account</Card.Title>
        <Card.Text className="text-muted">
          Teach your little ones about money & invest for their future with them
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="p-3 text-start shadow-sm border rounded-3 me-4 mb-4  ms-5" style={{ width: '18rem', position: 'relative' }}>
      {/* Circular Icon */}
      <div
        className="d-flex align-items-center justify-content-center bg-white border border-primary rounded-circle"
        style={{
          width: '25px',
          height: '25px',
          position: 'absolute',
          top: '20px',
          left: '-15px',
          zIndex: 1,
        }}
      >
       <i className="fa-solid fa-user-tie"></i>
      </div>
  

      <Card.Body>
        <Card.Title className="fw-semibold">Corporate / LLP/ Partership</Card.Title>
        <Card.Text className="text-muted">
        Manage your business surplus and investments easily
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
    <OpenAccount/>
    </div>
       
    
    </>
  );
}

export default Signup;
