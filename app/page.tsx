import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <header>
        <nav>
          <div className="logo">
            <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/67ae05c2907962c937f87f06.png" alt="Greenvoltt" />
            <span>Greenvoltt</span>
          </div>
          <ul>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#mission">OUR MISSION</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#batteries">BATTERY TYPES</a></li>
            <li><a href="#process">PROCESS</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <img 
          className="logo-large"
          src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/67ae05c2907962c937f87f06.png" 
          alt="Greenvoltt" 
        />
        <h1>Advancing The Circular Economy</h1>
        <p className="subtitle">Greenvoltt</p>
        <p>Scroll Down For More...</p>
      </section>

      <section id="about" className="about">
        <div className="content-grid">
          <div className="content-text">
            <h3>Protect our Region...Protect our Planet.</h3>
            <p>
              Greenvoltt is the Premiere Circular Economy Entity operating out of the Caribbean Region. 
              The Circular Economy extends beyond the realm of traditional Recycling. Headquartered 
              in Trinidad & Tobago, we take our role of thought leaders and innovators seriously as we 
              strive to keep our region and planet safe for future generations. We daily demonstrate how 
              this can be achieved while running a for-profit business. We love to partner with like-minded 
              organizations that share our similar vision.
            </p>
            <h3>Protect our Region...</h3>
            <p>Protect our Planet.</p>
          </div>
          <div className="content-image">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/67ae05c2907962c937f87f06.png"
              alt="Greenvoltt"
              style={{ width: '100%', maxWidth: '500px' }}
            />
          </div>
        </div>
      </section>

      <section className="quote-banner">
        <h2>"Our Customers are our first Priority"</h2>
        <p>Greenvoltt's aim is to provide consistent service and value to our customers beyond anything they might expect. We pledge to constantly reach beyond the highest levels of accomplishment, by having repeatable well tested systems in place. To implement work standards of impeccable order, in order to provide a uniformly predictable level of service to our customers.</p>
        <p>-One Component At A Time</p>
      </section>

      <section id="about" className="about">
        <div className="section-title">
          <h2>ABOUT US</h2>
        </div>
        <div className="content-grid">
          <div className="content-text">
            <p>
              Greenvoltt was started, to address environmental contamination caused by discarded scrap batteries. 
              At Greenvoltt we purchase scrap batteries regionally from landfills, government agencies, commercial, 
              industrial, and other scrap collection operations for resale to basel treaty approved lead 
              smelters. After the scrap lead acid batteries are collected they are delivered to our collection 
              facility, where we then pack these batteries onto pallets, shrink wrap, weigh and record the pallets. After 
              which they are loaded onto containers and shipped.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="section-title">
          <h2>Our Prime Focus</h2>
          <p>We provide compliant guidance, service and support at every stage of our collection process</p>
        </div>
        <div className="cards">
          <div className="service-card">
            <div className="icon">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/67ae55859b4e264220b148aa.png" alt="Compliance" />
            </div>
            <h3>Compliance</h3>
            <p>We are proud to be the only entity in T&T that is in full compliance with standards & policies outlined by the MOT, EMA, OSHA and the Basel Accord.</p>
          </div>
          <div className="service-card">
            <div className="icon">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/67ae562a2ba94e6678a074a0.png" alt="Awareness" />
            </div>
            <h3>Awareness</h3>
            <p>Develop public awareness programs on the dangers and toxicity related to lead exposure and educate communities on prevention methods.</p>
          </div>
          <div className="service-card">
            <div className="icon">
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/67ae567773225538a0146b64.png" alt="Opportunities" />
            </div>
            <h3>Opportunities</h3>
            <p>Explore business opportunities, create meaningful employment while being earnest stewards of the environment.</p>
          </div>
        </div>
      </section>

      <section id="mission" className="mission">
        <div className="section-title">
          <h2>Our Mission</h2>
        </div>
        <div className="content-grid">
          <div>
            <p>
              Greenvoltt was envisioned primarily to address two critical issues facing our region today; 
              contamination from the irresponsible disposal of batteries and to educate and promote a transition 
              to a modern circular economy.
            </p>
            <p>
              Modern society's insatiable demand for power has driven the proliferation of contamination 
              sources including batteries and other components that provide the fuel to support these industries. 
              Automobiles, marine vessels, backup power supplies pervasive throughout our telecommunications 
              infrastructure all contribute towards the crisis.
            </p>
            <p>
              We hope to provide resources, methodologies and education that will help to alleviate our insatiable 
              appetites for the natural resources that support these industries. We want to enhance the lifespan 
              of these resources and then to ethically and economically transform them back into their original components.
            </p>
            <p>
              In doing so we hope to improve the health and living conditions in our region and to protect 
              and maintain the pristine environments with which we are blessed in this area of the planet.
            </p>
          </div>
          <div>
            <img 
              src="https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/681e4eea096f56cb0465305a.jpeg"
              alt="Batteries"
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      <section id="batteries" className="battery-types">
        <div className="section-title">
          <h2>What's The Big Deal About "Batteries"?</h2>
          <p>
            We're surrounded by batteries in nearly every industry — all of which are hazardous due to toxic 
            metals like lead, lithium, and cadmium. Improper disposal contaminates water, soil, and air, 
            harming wildlife and human health, especially children. Greenvoltt addresses this serious 
            issue through ethical recycling and environmental protection.
          </p>
        </div>
        <h3 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '28px', color: '#1a7f37' }}>Battery Types</h3>
        <div className="battery-grid">
          <div className="battery-item">
            <img src="https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/681e63880f2ec702f6f45a97.jpeg" alt="Automobile Batteries" />
            <div className="info">
              <h4>Automobile Batteries</h4>
              <p>Flooded Lead Acid batteries are a cost-effective option widely used in the automotive industry but require regular maintenance and careful handling. Due to their classification as dangerous goods, they must be transported by certified carriers using approved methods.</p>
            </div>
          </div>
          <div className="battery-item">
            <img src="https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/681e6388b4903b2bd4cf68a3.jpeg" alt="Marine Batteries" />
            <div className="info">
              <h4>Marine Batteries</h4>
              <p>Marine batteries are designed to withstand harsh conditions and heavy vibration, unlike standard batteries that wear out quickly. Always ensure the battery is labeled "Marine Grade" and verify with your retailer that it's suitable for marine use.</p>
            </div>
          </div>
          <div className="battery-item">
            <img src="https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/681e638879f5940a0eedaba6.jpeg" alt="Cell Site Batteries" />
            <div className="info">
              <h4>Cell Site Batteries</h4>
              <p>Standby Sealed Lead Acid batteries are designed for low-load, backup applications like UPS, alarms, and telecom systems. Typically AGM type, they provide reliable power in standby mode and are not intended for deep cycling or high-discharge use.</p>
            </div>
          </div>
          <div className="battery-item">
            <img src="https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/681e638879f5945081edaba7.jpeg" alt="Computer UPS" />
            <div className="info">
              <h4>Computer UPS</h4>
              <p>AGM batteries are high-performance sealed lead acid options that recharge quickly, offer high capacity in compact sizes, and can be mounted in various positions. They're used in UPS systems, mobility devices, and many other applications.</p>
            </div>
          </div>
          <div className="battery-item">
            <img src="https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/681e6388b4903bcaf7cf68a4.jpeg" alt="Solar Batteries" />
            <div className="info">
              <h4>Solar Batteries</h4>
              <p>Deep Cycle Sealed Lead Acid batteries provide long-lasting, consistent power using thicker plates, ideal for deep discharge and recharge cycles. Common in solar systems, RVs, and mobility devices, they should be sized at three times the daily amp-hour (AHr) usage.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process">
        <div className="section-title">
          <h2>Battery Collection Process</h2>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h4>Collection</h4>
            <p>Greenvoltt sources batteries through direct solicitation from businesses, sales agents, third-party collectors, and large fleet operators. Payments are made via checks or cash, either on-site, in the field, or by company invoice. Batteries are typically paid by kilogram, but can also be compensated based on size or plate number.</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h4>Processing</h4>
            <p>Once collected, the batteries are weighed, palletized, shrink-wrapped, and loaded into shipping containers. The process includes tagging, sealing, and creating a shipping manifest.</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h4>Shipping</h4>
            <p>After loading, pictures and documentation are sent to external buyers for approval, followed by payment via wire transfer once approved.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-title">
          <h2>What are people saying about Greenvoltt!?</h2>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p className="quote">"Greenvolt delivered a top-quality 12kW system with expert advice and installation. Outstanding service and big savings on our power bill!"</p>
            <div className="author">
              <strong>Dennis</strong>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">"Luke was professional, honest, and easy to work with from day one. Install was smooth, and the team was polite and efficient."</p>
            <div className="author">
              <strong>Louis</strong>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">"Our tricky roof layout wasn't a problem for Greenvolt. They tailored the system perfectly and did a great job installing it."</p>
            <div className="author">
              <strong>Kristie</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="mandate">
        <h2>Our Environmental And Corporate Mandate</h2>
        <ul className="mandate-list">
          <li>Establish Greenvoltt as the premier environmental and Circular Economy</li>
          <li>Effect change in public awareness</li>
          <li>Develop profitable yet ethical business models</li>
          <li>Be a beacon of environmental change across the region</li>
          <li>Promote reuse as a form of recycling</li>
          <li>Leave a sound legacy for coming generations</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p><strong>Location:</strong> # 114 DMR, Diego Martin, Trinidad W.I</p>
            <p><strong>Phone:</strong> +1 868 687 4547</p>
            <p><strong>Email:</strong> info@greenvoltt.com</p>
            <div className="hours">
              <p><strong>Daily:</strong> 8:00 am - 4:00 pm</p>
              <p><strong>Saturday & Sunday:</strong> Closed</p>
            </div>
            <div className="social-links">
              <a href="https://facebook.com">FB</a>
              <a href="https://instagram.com">IG</a>
              <a href="https://linkedin.com">LI</a>
              <a href="https://youtube.com">YT</a>
            </div>
          </div>
          <div className="contact-image">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/lMTgBe8TOAILoXX7nSeF/media/67ae05c2907962c937f87f06.png"
              alt="Greenvoltt"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </section>

      <footer>
        <p>All rights reserved © 2025 Greenvoltt</p>
      </footer>
    </main>
  );
}