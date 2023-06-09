import { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate(); // 페이지 이동을 도와준다.

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            코딩에몽 쇼핑몰
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Link to="/">홈</Link>
              <Link to="/detail">상세페이지</Link> */}
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                홈으로
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail");
                }}
              >
                장바구니
              </Nav.Link>
              <Nav.Link href="#movie">극장판</Nav.Link>
              <NavDropdown title="메뉴" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  도라에몽소개
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">의상</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">상담</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">게시판</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {/* <Card shoes={shoes[1]} i={2}></Card>
          <Card shoes={shoes[2]} i={3}></Card> */}
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((결과) => {
                      console.log(결과.data);
                      let copy = [...shoes, ...결과.data];
                      setShoes(copy);
                    })
                    .catch(() => {
                      console.log("실패했습니다.");
                    });
                }}
              >
                더보기
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보페이지</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}
export default App;
