import Features from "../../../Components/Features/Features";
import Hero from "../../../Components/Hero/Hero";
import Pricing from "../../../Components/Pricing/Pricing";

const LandingPage = () => {
    return (
        <div>
            {/* <!-- Hero Section --> */}
            <Hero />
            <Features />
            <Pricing />
        </div>
    );
};

export default LandingPage;
