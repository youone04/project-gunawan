import Achivements from "../components/Achivements";
import Calender from "../components/Calender";
import Clienst from "../components/Clients";
import Comunity from "../components/Comunity";
import ComunityUpdate from "../components/ComunityUpdate/ComunityUpdate";
import Cusotomers from "../components/Customers/Customers";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import NavbarComp from "../components/Navbar";
import BurgerMenu from "../components/Navbar/BurgerMenu";
import Unlock from "../components/Unlock";

const NextCent = () => {
  return (
    <>
      <NavbarComp />
      <BurgerMenu/>
      <Jumbotron />
      <Clienst />
      <Comunity/>
      <Unlock/>
      <Achivements/>
      <Calender/>
      <Cusotomers/>
      <ComunityUpdate/>
      <Footer/>
    </>
  )
}

export default NextCent;