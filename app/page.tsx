import TrustedFacilitiesSection from "./components/TrustedFacilitiesSection"
import Herosection from "./pages/Herosection"
import DiscoverHelpdeskSection from "./pages/DiscoverHelpdeskSection"
import HelpdeskWorksBanner from "./components/HelpdeskWorksBanner"
import WhyFusionEdgeHelpdeskSection from "./pages/ WhyFusionEdgeHelpdeskSection"
import FusionEdgeVsManualSection from "./pages/FusionEdgeVsManualSection"
import StoriesFromUsersBanner from "./components/StoriesFromUsersBanner"
import HelpdeskFAQSection from "./pages/HelpdeskFAQSection"
import HelpdeskCTAAndBlogsSection from "./components/HelpdeskCTAAndBlogsSection"
import ContactSection from "./components/ContactSection"


const page = () => {
  return (
    <div>
      <Herosection />
      <TrustedFacilitiesSection />
      <DiscoverHelpdeskSection />
      <HelpdeskWorksBanner />
      <WhyFusionEdgeHelpdeskSection />
      <FusionEdgeVsManualSection />
      <StoriesFromUsersBanner />
      <HelpdeskFAQSection />
      <HelpdeskCTAAndBlogsSection />
      <ContactSection />
    </div>
  )
}

export default page