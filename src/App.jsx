import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Project from "./components/Projects";
import Heading from "./components/Heading";
import MyJourney from "./components/Journey";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <ProfileCard />
      <Heading id="projects">My Projects</Heading>
      <Project />
      <Heading>Journey</Heading>
      <MyJourney />
      <Heading>Contact Us</Heading>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
