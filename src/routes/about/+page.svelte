<script lang="ts">
  // Keep import only if used later
  import { animateOnScroll } from '$lib/actions/animateOnScroll';
</script>

<svelte:head>
  <title>About | Shield of Steel LLC</title>
  <meta name="description" content="Shield of Steel LLC (SOS) is a professional security services provider based in Knoxville, TN. Learn about our team, values, and commitment to safety.">
</svelte:head>

<section class="page-header">
  <div class="container">
    <h1>ABOUT SOS</h1>
    <p class="subtitle">Professional Security Services in Tennessee</p>
  </div>
</section>

<section class="about-intro">
  <div class="container">
    <div class="grid intro-grid">
      <div class="intro-content">
        <p class="lead-text">
          Shield of Steel LLC delivers professional security services that protect people, property, and peace of mind. We're committed to providing highly trained personnel and customized security solutions that meet your specific needs.
        </p>
      </div>
      <div class="intro-image">
        <div class="placeholder-img tall"></div>
      </div>
    </div>
  </div>
</section>

<section class="mission" use:animateOnScroll={{ animationType: 'slideUp' }}>
  <div class="container">
    <div class="grid mission-grid">
      <div class="mission-content">
        <h2 class="section-title">OUR MISSION</h2>
        <p class="large-text">
          To provide reliable, professional security services that protect what matters most to our clients. We are committed to ensuring the safety of your business, employees, and property through excellence in service, ongoing training, and proactive security solutions.
        </p>
      </div>
       <div class="mission-visual">
          <div class="placeholder-img wide"></div>
       </div>
    </div>
  </div>
</section>

<section class="values" use:animateOnScroll={{ animationType: 'fade', stagger: 0.15 }}>
  <div class="container">
    <h2 class="section-title">CORE VALUES</h2>
    <div class="values-grid">
      <div class="value">
        <div class="value-number">01</div>
        <h3>PROFESSIONALISM</h3>
        <div class="value-line"></div>
        <p>
          Our security officers maintain the highest standards of conduct, appearance, and service at all times, representing your business with dignity and respect.
        </p>
      </div>
      
      <div class="value">
        <div class="value-number">02</div>
        <h3>VIGILANCE</h3>
        <div class="value-line"></div>
        <p>
          We maintain consistent awareness and attention to detail, identifying and addressing potential security issues before they become problems.
        </p>
      </div>
      
      <div class="value">
        <div class="value-number">03</div>
        <h3>INTEGRITY</h3>
        <div class="value-line"></div>
        <p>
          We conduct our business with honesty and transparency, building lasting relationships with our clients based on trust and accountability.
        </p>
      </div>
      
      <div class="value">
        <div class="value-number">04</div>
        <h3>ADAPTABILITY</h3>
        <div class="value-line"></div>
        <p>
          We remain flexible and responsive to changing security needs, developing customized solutions that address your specific concerns and requirements.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="history">
    <div class="container">
        <h2 class="section-title" use:animateOnScroll={{ animationType: 'slideUp' }}>OUR LAUNCH</h2>
        <div class="timeline single-entry" use:animateOnScroll={{ animationType: 'fade' }}>
            <div class="timeline-item">
                <div class="timeline-year">2025</div>
                <div class="timeline-content">
                    <h3>FOUNDED WITH A VISION</h3>
                    <p>Shield of Steel was established in Knoxville, Tennessee in 2025. We launched with a clear mission: to redefine security services by integrating cutting-edge technology with highly trained personnel, offering modern solutions built on a foundation of trust and expertise.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="leadership" use:animateOnScroll={{ animationType: 'fade', stagger: 0.15 }}>
  <div class="container">
    <h2 class="section-title">LEADERSHIP TEAM</h2>
    <div class="leadership-grid">
      <div class="leader">
        <div class="leader-photo"><div class="placeholder-img square"></div></div>
        <h3>ALEXANDRA WINTERS</h3>
        <p class="leader-title">CHIEF EXECUTIVE OFFICER</p>
        <div class="leader-line"></div>
        <p>Brings over 20 years of law enforcement and security operations leadership to Shield of Steel. Her extensive experience shapes SOS's strategic direction and unwavering commitment to excellence.</p>
      </div>
      
      <div class="leader">
        <div class="leader-photo"><div class="placeholder-img square"></div></div>
        <h3>MARCUS RAMIREZ</h3>
        <p class="leader-title">OPERATIONS DIRECTOR</p>
        <div class="leader-line"></div>
        <p>Leverages significant security management experience to oversee personnel deployment, training programs, and protocol implementation, ensuring seamless daily operations for our clients.</p>
      </div>
      
      <div class="leader">
        <div class="leader-photo"><div class="placeholder-img square"></div></div>
        <h3>ELEANOR ZHANG</h3>
        <p class="leader-title">CLIENT RELATIONS DIRECTOR</p>
        <div class="leader-line"></div>
        <p>Customer service expert focused on understanding client needs and developing tailored security solutions. Oversees account management and client satisfaction.</p>
      </div>
    </div>
  </div>
</section>

<section class="global-presence" use:animateOnScroll={{ animationType: 'slideUp' }}>
  <div class="container">
    <h2 class="section-title">SERVING TENNESSEE</h2>
    <div class="grid presence-grid">
      <div class="presence-content">
        <p class="lead-text">
          Shield of Steel provides professional security services throughout Tennessee, with our headquarters in Knoxville and security personnel available across the state.
        </p>
        <p>
            Our local roots give us an advantage in understanding the specific security challenges facing Tennessee businesses, communities, and events. We're proud to be your neighbors as well as your security provider.
        </p>
      </div>
      <div class="presence-locations">
        <div class="location-group">
          <h4>HEADQUARTERS</h4>
          <p>Knoxville, Tennessee</p>
          <p class="address-details">116 Agnes Rd, Suite 200<br>Knoxville, TN 37919 US</p>
        </div>
        <div class="location-group">
          <h4>SERVICE AREAS</h4>
          <p>Knoxville · Nashville · Memphis · Chattanooga</p>
        </div>
        <div class="location-group">
          <h4>REGIONAL OFFICES</h4>
          <p>Johnson City · Murfreesboro · Clarksville · Franklin</p>
        </div>
        <div class="location-group">
             <h4>AVAILABILITY</h4>
            <p>24/7 security services available throughout Tennessee.</p>
        </div>
      </div>
    </div>
     <!-- Placeholder for Map or Tennessee Graphic -->
     <div class="map-placeholder" use:animateOnScroll={{ animationType: 'fade', delay: 0.3 }}></div>
  </div>
</section>

<style>
  .page-header {
    margin-top: 2rem;
    padding: 8rem 0 6rem;
    border-bottom: 1px solid black;
    text-align: center;
  }
  
  .page-header h1 {
    font-size: clamp(3.5rem, 8vw, 6rem);
    font-weight: 900;
    line-height: 1;
    margin: 0 0 1rem 0;
    text-transform: uppercase;
  }

  .page-header .subtitle {
      font-size: clamp(1.2rem, 2vw, 1.5rem);
      font-weight: 500;
      max-width: 600px;
      margin: 0 auto;
      opacity: 0.9;
  }
  
  .about-intro {
    padding: 8rem 0;
    border-bottom: 1px solid black;
  }

  .intro-grid {
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  .intro-content {
    max-width: 700px;
  }
  
  .lead-text {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 0;
  }

  .placeholder-img {
     width: 100%;
     background-color: #f0f0f0;
     border: 1px solid black;
  }
  .placeholder-img.tall { aspect-ratio: 3 / 4; }
  .placeholder-img.wide { aspect-ratio: 16 / 9; }
  .placeholder-img.square { aspect-ratio: 1 / 1; }
  
  section {
    padding: 8rem 0;
    border-bottom: 1px solid black;
  }

  section:last-child {
      border-bottom: none;
  }

  .mission {
      background-color: #f9f9f9;
  }

  .mission-grid {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 4rem;
  }
  
  .mission-content {
    max-width: 600px;
  }

  .large-text {
      font-size: clamp(1.1rem, 1.8vw, 1.4rem);
      line-height: 1.6;
  }
  
  .values-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 4rem;
  }
  
  .value {
      position: relative;
  }

  .value-number {
      font-size: 1.5rem;
      font-weight: 800;
      position: absolute;
      top: -0.5rem;
      left: -1rem;
      opacity: 0.15;
  }

  .value h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  
  .value-line {
    width: 3rem;
    height: 2px;
    background-color: black;
    margin-bottom: 1.5rem;
  }

  .value p {
      font-size: 0.95rem;
  }

  /* History / Timeline */
  .history {
      padding: 8rem 0;
  }

  .timeline {
      margin-top: 4rem;
      position: relative;
      border-left: 2px solid black;
      padding-left: 3rem;
      margin-left: 6rem;
  }

  .timeline-item {
      position: relative;
      margin-bottom: 4rem;
  }

  .timeline-item:last-child {
      margin-bottom: 0;
  }

  .timeline-item::before {
      content: '';
      position: absolute;
      left: -3rem;
      top: 0.5rem;
      width: 12px;
      height: 12px;
      background-color: black;
      border-radius: 50%;
      margin-left: -7px;
  }

  .timeline-year {
      position: absolute;
      left: -9rem;
      top: 0.25rem;
      font-weight: 700;
      font-size: 1rem;
      width: 5.5rem;
      text-align: right;
  }

  .timeline-content h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
  }

  .timeline-content p {
      margin-bottom: 0;
      font-size: 0.95rem;
  }
  
  /* Leadership */
  .leadership {
      background-color: #f9f9f9;
  }
  .leadership-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-top: 4rem;
  }
  
  .leader-photo {
    margin-bottom: 1.5rem;
  }
  
  .leader h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .leader-title {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .leader-line {
    width: 2rem;
    height: 2px;
    background-color: black;
    margin-bottom: 1rem;
  }

  .leader p:last-of-type {
      font-size: 0.95rem;
      margin-bottom: 0;
  }
  
  /* Global Presence */
  .presence-grid {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
  }

  .presence-content p {
      margin-bottom: 1.5rem;
  }

  .presence-locations {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    /* border-left: 1px solid black; */
    /* padding-left: 2rem; */
  }
  
  .location-group h4 {
    font-size: 1rem;
    margin-bottom: 0.75rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .location-group p {
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
      line-height: 1.4;
  }

  .address-details {
      font-size: 0.85rem;
      opacity: 0.8;
  }

  .map-placeholder {
      width: 100%;
      aspect-ratio: 16 / 7;
      background-color: #e0e0e0;
      border: 1px solid black;
      margin-top: 4rem;
  }
  
  @media (max-width: 1024px) {
    .intro-grid {
        grid-template-columns: 1fr;
    }
    .intro-image {
        order: -1; /* Move image above text */
        max-width: 400px;
        margin: 0 auto 3rem auto;
    }
    .mission-grid {
        grid-template-columns: 1fr;
    }
    .mission-visual {
        order: -1;
        margin-bottom: 3rem;
    }
    .values-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .leadership-grid {
        gap: 2rem;
    }
    .presence-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
  }

   @media (max-width: 768px) {
    .page-header {
        padding: 6rem 0 4rem;
    }
    section {
        padding: 6rem 0;
    }
    .values-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .value-number {
        left: 0;
    }
    .timeline {
        padding-left: 2rem;
        margin-left: 1rem; /* Adjust margin for smaller screens */
    }
    .timeline-item::before {
        left: -2rem;
    }
    .timeline-year {
        position: static;
        width: auto;
        text-align: left;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }
    .leadership-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .presence-locations {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .timeline.single-entry {
    display: flex;
    justify-content: center; /* Center the single item */
  }

  .timeline.single-entry .timeline-item {
      /* Adjust styling if needed for a single centered item */
      margin: 0; /* Remove margins if they cause offset */
      max-width: 600px; /* Optional: constrain width */
  }
</style> 