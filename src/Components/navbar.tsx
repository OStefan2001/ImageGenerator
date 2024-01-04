import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoBlack from '/src/assets/black-logo.png';
import logoWhite from '/src/assets/white-logo.png';
import { MouseEventHandler } from 'react';
import darkSwitch from '/src/assets/darkmode.svg';
import lightSwitch from '/src/assets/lightmode.svg';
import '/src/Styles/navbar.css';
function NavbarH(props: {
  darkMode: boolean;
  toggleDarkMode: MouseEventHandler<HTMLDivElement> | undefined;
  refreshPage:MouseEventHandler<HTMLDivElement> | undefined;
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Navbar sticky='top' expand='bg'
        className="bg-body-tertiary"
        data-bs-theme={props.darkMode ? 'dark' : 'light'}
      >
        <Container>
          <Navbar.Brand > 
            <img  onClick={scrollToTop}
              alt=""
              src={props.darkMode ? logoBlack : logoWhite}
              width="60"
              height="35"
              className="d-inline-block align-top"
            />
            <span onClick={props.refreshPage}>Make easy ads</span> 
          </Navbar.Brand >
          <div className="toggler">
            <div className="toggler img-margin">
              <img
                src={props.darkMode ? darkSwitch : lightSwitch}
                onClick={props.toggleDarkMode}
              />
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarH;
