import React, { useState } from 'react';
import "../css/login.css"
import { Link,  useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (username === 'diti2019' && password === 'diti@123456') {
      // Perform any necessary actions here
      // For now, let's just log a success message
      window.location.href= 'https://ditinstitute.in/detail.html';
     
        } else {
      alert('Invalid Username & Password..!');
    }
  };

  return (
    <div style={{backgroundImage:"url(assets/img/loginbanner.jpg)",backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"100%"}} className=''>
    <div  className="">
      <div style={{padding:"15%"}}className="d-flex justify-content-center h-100">
        <div className="card">
          <h3 style={{ color: 'white', fontSize: '22px', textDecoration: 'underline', textAlign: 'center', paddingTop: '25px' }}>
            Welcome to DIT Institute
          </h3>
          <div className="card-header">
            <h3>Sign In</h3>
            <div style={{ color: 'white', marginBottom: '-22px' }}>username: diti2019 password: diti@123456</div>
            <div className="d-flex justify-content-end social_icon">
              {/* Add any social icons here */}
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <a href='/' className="btn float-left login_btn">
                  <span>Back</span>
                </a>
                <button onClick={handleSubmit}type="submit" className="btn float-right login_btn">
                  <span>Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
