import logo from './logo.svg';
import './App.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Menu from './components/Menu';
import Header from './components/Header';
import Doctors from './components/Doctors';
import Home from './components/Home';

function App() {
  const rout = createBrowserRouter(
    [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path:"/doctors",
        element: <Doctors />
      },
      {
        path: "/patients",
        element: <div>Patients will be added soon...</div>
      }
    ]
  );
  return (
    <div>
      <Header />
      <Container>
          <Row>
            <Col md={4}>
              <BrowserRouter>
                <Menu />
              </BrowserRouter>
            </Col>
            <Col md={8}>
              <RouterProvider router={rout} />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
