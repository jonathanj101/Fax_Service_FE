import "./pricingStyles.css";

const Pricing = () => {
    return (
        // <!-- Pricing Section -->
        <section
            id="pricing"
            class="pricing"
        >
            <h2>Choose Your Plan</h2>
            <div class="pricing-grid">
                <div class="pricing-card">
                    <h3>Basic</h3>
                    <p>$10/month</p>
                    <p>Essential features for small businesses.</p>
                </div>
                <div class="pricing-card highlight">
                    <h3>Pro</h3>
                    <p>$25/month</p>
                    <p>Advanced tools for growing teams.</p>
                </div>
                <div class="pricing-card">
                    <h3>Enterprise</h3>
                    <p>Custom pricing</p>
                    <p>Tailored solutions for large organizations.</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
