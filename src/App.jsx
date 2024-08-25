import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Project from "./components/Projects";
import Heading from "./components/Heading";
import MyJourney from "./components/Journey";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="max-w-screen-lg mx-auto">
        <ProfileCard />
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <Heading>My Projects</Heading>
          <Project />
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <Heading>Journey</Heading>
          <MyJourney />
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <Heading>Contact Us</Heading>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
