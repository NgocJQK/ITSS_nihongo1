import React from "react";
import AntDesignOutlined from "@ant-design/icons/AntDesignOutlined";
import "./loginStyle.css";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import * as api from "../../api/index";

const ログイン = (props) => {
  const navigate = useNavigate();
  return (
    <div class="box">
      <div class="login-container">
        <div class="top">
          <span className="logo-container">
            <img src={logo} alt="" />
            <h1 style={{ fontWeight: "bold", fontSize: "32px",color:"rgba(255, 255, 255, 0.8)",marginLeft:"5px" }}> Xiuu</h1>
          </span>
        </div>

        <div class="input-field">
          <input type="text" class="input" placeholder="ユーザーネーム" id="username"/>
          <i class="bx bx-user"></i>
        </div>

        <div class="input-field">
          <input type="Password" class="input" placeholder="パスワード" id="password" />
          <i class="bx bx-lock-alt"></i>
        </div>

        <div class="input-field">
          <input
            type="submit"
            class="submit"
            value="ログイン"
            id=""
            onClick={() => {
              api.handleLogin(
                document.getElementById('username').value, 
                document.getElementById('password').value
              )
              navigate("/");
            }}
          />
        </div>

        <div class="two-col">
          <div class="one"></div>
          <div class="two">
            <label>
              <a href="#">パスワードをお忘れですか?</a>
            </label>
          </div>
        </div>

        <div class="login-signup">
          アカウントがありませんか?{" "}
          <a onClick={(e) => navigate("/register")} style={{cursor:"pointer"}}>登録</a>
        </div>
      </div>
    </div>
  );
};

export default ログイン;
