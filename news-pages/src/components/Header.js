import React, { useState, useEffect } from "react";
import { Login } from "../pages/Login";
import "./Header.css";
import logo from "../logo.png";
import clearIcon from "../clear.png"
import search_active from "../search_active.png";
import search_inactive from "../search_inactive.png";
import { Link, useLocation } from "react-router-dom";
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../store';
import { login, logout } from '../actions';


const SearchBox = () => {
  const [input, setInput] = useState(""); // 검색창에 입력된 값
  const [searchIcon, setSearchIcon] = useState(search_inactive); // 검색 아이콘

  // 검색아이콘 색상 변경
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    
    setSearchIcon(inputValue === "" ? search_inactive : search_active);
  };

  // 모두 지우기
  const handleClearClick = () => {
    setInput("");
    setSearchIcon(search_inactive);
  };

  return (
    <div className="search-container">
      <input
        id="search-input"
        type="text"
        placeholder="검색어를 입력하세요"
        value={input}
        onChange={handleInputChange}
      />
      {input !== "" && (
        <img src={clearIcon} onClick={handleClearClick} id="clear-icon" />
      )}
      <Link to="/">
        <img src={searchIcon} alt="검색 아이콘" id="search-icon" />
      </Link>
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  // const isLoggedIn = location.state && location.state.isLoggedIn;
  // const defaultIsLoggedIn = false;
  // const actualIsLoggedIn =
  //   isLoggedIn !== undefined ? isLoggedIn : defaultIsLoggedIn;

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("check login : " + isLoggedIn);
  // }, [isLoggedIn]);

  const handleLogin = () => {
    console.log("hi" + isLoggedIn);
    dispatch(login());
  };

  const handleLogout = () => {
    console.log("Bye" + isLoggedIn);
    dispatch(logout());
  };

  return (
    <Provider store={store}>
      <div className="Header">
        <Link to="/" className="title-container">
          <img src={logo} alt="Bad News logo" id="logo" />
          <strong className="header-title">Bad News</strong>
        </Link>

        <div className="search-login-container">
          <SearchBox />

          <div className="header-menu-container">
            <div className="header-menu">
              {isLoggedIn ? (
                <Link to="/" onClick={handleLogout}>
                  로그아웃
                </Link>
              ) : (
                <Link to="/login" onClick={handleLogin}>
                  로그인
                </Link>
              )}
            </div>
            <div className="header-menu-bar" style={{ marginLeft:"10px", marginRight:"10px" }}> | </div>
            <div className="header-menu">
              <Link to="/mypage"> 마이페이지 </Link>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Header;