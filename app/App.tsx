import Header from "@/components/Header";
import HomePage from "@/pages/Home";
import WorkPage from "@/pages/Work";
import AboutPage from "@/pages/About";
import BenefitsPage from "@/pages/Benefits";
import FaqPage from "@/pages/Faq";
import ContactPage from "@/pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <WorkPage />
      <AboutPage />
      <BenefitsPage />
      <FaqPage />
      <ContactPage />
    </div>
  )
}

export default App
