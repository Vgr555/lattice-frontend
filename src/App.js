import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Menu from './components/Menu';
import Header from './components/Header';
import Doctors from './components/Doctors';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container>
            <Row>
              <Col md={4}>
                <Menu />
              </Col>
              <Col md={8}>
                <Routes>
                  <Route path='/home' element={<Home />} />
                  <Route path='/doctors' element={<Doctors />} />
                  <Route path='/patients' element={<div>Patients will be added soon...</div>} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;
