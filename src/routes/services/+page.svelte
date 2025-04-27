<script lang="ts">
  // Keep import only if used later
  import { animateOnScroll } from '$lib/actions/animateOnScroll';
</script>

<svelte:head>
  <title>Security Services | Shield of Steel LLC</title>
  <meta name="description" content="Explore Shield of Steel LLC's comprehensive professional security services in Tennessee, including security guards, monitoring, risk assessment, event security, and specialized industry solutions.">
</svelte:head>

<!-- Page Header - NO ANIMATIONS HERE -->
<section class="page-header">
  <div class="container">
    <h1>OUR SECURITY SERVICES</h1>
    <p class="subtitle">Comprehensive Protection Tailored to Your Needs</p>
  </div>
</section>

<!-- Capabilities Intro - NO ANIMATIONS HERE -->
<section class="capabilities-intro">
  <div class="container">
    <div class="grid intro-grid">
      <div class="intro-content">
        <p class="lead-text">
          Shield of Steel LLC provides a wide array of professional security services designed to safeguard your business, property, and people throughout Tennessee. Our solutions are adaptable, reliable, and customized to meet your specific requirements and budget.
        </p>
        <div class="view-all-link">
          <a href="/services/all" class="btn btn-outline-dark">View All Services</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Interactive Grid Section - Animations start here -->
<section class="interactive-capabilities">
  <div class="container">
     <h2 class="section-title" use:animateOnScroll={{ animationType: 'slideUp' }}>Explore Our Service Categories</h2>
     <div class="interactive-grid" use:animateOnScroll={{ animationType: 'fade', delay: 0.2, stagger: 0.1 }}>
        <a href="#security-personnel" class="grid-item">
          <div class="item-content">
            <span class="item-number">01</span>
            <h3>Guard & Patrol Services</h3>
            <p>Professional on-site presence</p>
          </div>
          <div class="item-bg"></div>
        </a>
         <a href="#technology-monitoring" class="grid-item">
          <div class="item-content">
            <span class="item-number">02</span>
            <h3>Technology & Monitoring</h3>
            <p>Surveillance & alarm systems</p>
          </div>
          <div class="item-bg"></div>
        </a>
         <a href="#consulting-assessment" class="grid-item">
          <div class="item-content">
            <span class="item-number">03</span>
            <h3>Consulting & Assessment</h3>
            <p>Risk analysis & security planning</p>
          </div>
          <div class="item-bg"></div>
        </a>
         <a href="#specialized-services" class="grid-item">
          <div class="item-content">
             <span class="item-number">04</span>
            <h3>Specialized Services</h3>
            <p>Industry-specific solutions</p>
          </div>
          <div class="item-bg"></div>
        </a>
         <a href="#event-security" class="grid-item"> 
          <div class="item-content">
             <span class="item-number">05</span>
            <h3>Event Security</h3>
            <p>Safe & secure gatherings</p>
          </div>
          <div class="item-bg"></div>
        </a>
         <a href="/services/all" class="grid-item contact-item view-all-item">
           <div class="item-content">
              <h3>View All Services &rarr;</h3>
           </div>
            <div class="item-bg"></div>
        </a>
     </div>
  </div>
</section>


<!-- Guard & Patrol Services -->
<section id="security-personnel" class="capability-section" use:animateOnScroll={{ animationType: 'fade' }}>
  <div class="container">
    <div class="capability-grid">
      <div class="capability-header" use:animateOnScroll={{ animationType: 'slideRight' }}>
        <div class="capability-number">01</div>
        <h2>GUARD & PATROL SERVICES</h2>
        <p class="header-subtitle">Reliable On-Site Security Presence</p>
      </div>
      
      <div class="capability-content" use:animateOnScroll={{ animationType: 'slideLeft', delay: 0.1 }}>
        <p class="capability-description">
          Our licensed security officers are highly trained, professionally attired, and dedicated to protecting your assets and ensuring a safe environment. We provide both armed and unarmed personnel tailored to your specific needs.
        </p>
        
        <div class="features-grid service-list" use:animateOnScroll={{ animationType: 'fade', stagger: 0.1 }}>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>UNIFORMED SECURITY OFFICERS</h3>
            <p>Visible security presence to deter crime, control access, and respond to incidents.</p>
          </div>
           <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>ARMED SECURITY OFFICERS</h3>
            <p>Highly trained officers equipped to handle higher-risk environments requiring an elevated level of protection.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>MOBILE PATROL SERVICES</h3>
            <p>Regular, randomized patrols of your property to ensure comprehensive coverage and quick response.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>RECEPTION & CONCIERGE SECURITY</h3>
            <p>Professional front-desk security combining access control with customer service.</p>
          </div>
           <div class="feature">
             <span class="feature-icon">&rarr;</span>
            <h3>LOSS PREVENTION</h3>
            <p>Specialized officers focused on minimizing theft and protecting assets in retail environments.</p>
          </div>
           <div class="feature">
             <span class="feature-icon">&rarr;</span>
            <h3>FIRE WATCH SERVICES</h3>
            <p>Dedicated personnel to monitor fire safety systems and ensure compliance during system outages.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Technology & Monitoring -->
<section id="technology-monitoring" class="capability-section alt-bg" use:animateOnScroll={{ animationType: 'fade' }}>
  <div class="container">
    <div class="capability-grid">
      <div class="capability-header" use:animateOnScroll={{ animationType: 'slideRight' }}>
         <div class="capability-number">02</div>
        <h2>TECHNOLOGY & MONITORING</h2>
        <p class="header-subtitle">Advanced Surveillance & Response</p>
      </div>
      
      <div class="capability-content" use:animateOnScroll={{ animationType: 'slideLeft', delay: 0.1 }}>
        <p class="capability-description">
          Leverage cutting-edge technology to enhance your security posture. We offer design, installation, and monitoring of integrated electronic security systems for comprehensive protection.
        </p>
        
        <div class="features-grid service-list" use:animateOnScroll={{ animationType: 'fade', stagger: 0.1 }}>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>CCTV & VIDEO SURVEILLANCE</h3>
            <p>High-definition camera systems providing real-time monitoring and recorded evidence.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>24/7 MONITORING CENTER</h3>
            <p>Our Knoxville-based center monitors alarms and video feeds, dispatching response teams immediately.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>REMOTE SECURITY / VIRTUAL GUARDING</h3>
            <p>Cost-effective live video monitoring with interactive audio deterrents and real-time response.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>ACCESS CONTROL SYSTEMS</h3>
            <p>Electronic key card, biometric, and keypad systems to restrict and track entry to sensitive areas.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>ALARM SYSTEMS & RESPONSE</h3>
            <p>Integrated intrusion detection, panic alarms, and environmental sensors with immediate verification and dispatch.</p>
          </div>
          <div class="feature">
             <span class="feature-icon">&rarr;</span>
            <h3>DRONE SURVEILLANCE</h3>
            <p>Aerial monitoring for large properties, construction sites, and special events, providing unique perspectives.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Consulting & Assessment -->
<section id="consulting-assessment" class="capability-section" use:animateOnScroll={{ animationType: 'fade' }}>
  <div class="container">
    <div class="capability-grid">
      <div class="capability-header" use:animateOnScroll={{ animationType: 'slideRight' }}>
        <div class="capability-number">03</div>
        <h2>CONSULTING & ASSESSMENT</h2>
        <p class="header-subtitle">Strategic Security Planning</p>
      </div>
      
      <div class="capability-content" use:animateOnScroll={{ animationType: 'slideLeft', delay: 0.1 }}>
        <p class="capability-description">
          Gain valuable insights into your security landscape. Our experts analyze your risks and develop strategic plans to mitigate threats and enhance overall safety.
        </p>
        
        <div class="features-grid service-list" use:animateOnScroll={{ animationType: 'fade', stagger: 0.1 }}>
          <div class="feature">
             <span class="feature-icon">&rarr;</span>
            <h3>SECURITY RISK ASSESSMENT</h3>
            <p>Comprehensive evaluation of your physical security, procedures, and potential vulnerabilities.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>CUSTOM SECURITY PLANNING</h3>
            <p>Development of tailored security strategies and protocols aligned with your specific objectives.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>THREAT & VULNERABILITY ANALYSIS</h3>
            <p>Identification of potential threats and weaknesses unique to your industry and location.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>EMERGENCY PREPAREDNESS PLANNING</h3>
            <p>Creating action plans and training for various emergency scenarios (e.g., fire, active shooter, natural disasters).</p>
          </div>
          <div class="feature">
             <span class="feature-icon">&rarr;</span>
            <h3>SECURITY POLICY DEVELOPMENT</h3>
            <p>Assisting in the creation or refinement of internal security policies and procedures.</p>
          </div>
          <div class="feature">
             <span class="feature-icon">&rarr;</span>
            <h3>COMPLIANCE AUDITS</h3>
            <p>Ensuring your security measures meet relevant industry regulations and standards.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Specialized Industry Services -->
<section id="specialized-services" class="capability-section alt-bg" use:animateOnScroll={{ animationType: 'fade' }}>
  <div class="container">
    <div class="capability-grid">
      <div class="capability-header" use:animateOnScroll={{ animationType: 'slideRight' }}>
        <div class="capability-number">04</div>
        <h2>SPECIALIZED SERVICES</h2>
        <p class="header-subtitle">Industry-Specific Expertise</p>
      </div>
      
      <div class="capability-content" use:animateOnScroll={{ animationType: 'slideLeft', delay: 0.1 }}>
        <p class="capability-description">
          We offer security solutions tailored to the unique needs and challenges of various industries, leveraging our specialized knowledge and experience.
        </p>
        
        <div class="features-grid service-list" use:animateOnScroll={{ animationType: 'fade', stagger: 0.1 }}>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>CONSTRUCTION SITE SECURITY</h3>
            <p>Protecting valuable equipment and materials from theft and vandalism on active job sites.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>RETAIL SECURITY</h3>
            <p>Loss prevention, customer safety, and asset protection for stores and shopping centers.</p>
          </div>
           <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>HEALTHCARE FACILITY SECURITY</h3>
            <p>Ensuring patient and staff safety in hospitals and clinics while managing access control.</p>
          </div>
           <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>EDUCATIONAL CAMPUS SECURITY</h3>
            <p>Providing safe learning environments for schools and universities through patrol and monitoring.</p>
          </div>
           <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>WAREHOUSE & LOGISTICS SECURITY</h3>
            <p>Securing distribution centers and supply chains against theft and unauthorized access.</p>
          </div>
           <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>HOSPITALITY SECURITY</h3>
            <p>Guest safety, access control, and asset protection for hotels and resorts.</p>
          </div>
           <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>FINANCIAL INSTITUTION SECURITY</h3>
            <p>Specialized protection for banks and credit unions, including armed officers and surveillance.</p>
          </div>
           <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>EXECUTIVE & VIP PROTECTION</h3>
            <p>Discreet, personal security details for high-profile individuals and corporate executives.</p>
          </div>
           <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>HIGH-VALUE TRANSPORT</h3>
            <p>Secure transportation services for valuable assets, ensuring safe delivery.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Event Security -->
<section id="event-security" class="capability-section" use:animateOnScroll={{ animationType: 'fade' }}>
  <div class="container">
    <div class="capability-grid">
      <div class="capability-header" use:animateOnScroll={{ animationType: 'slideRight' }}>
        <div class="capability-number">05</div>
        <h2>EVENT SECURITY</h2>
        <p class="header-subtitle">Safe & Secure Gatherings</p>
      </div>
      
      <div class="capability-content" use:animateOnScroll={{ animationType: 'slideLeft', delay: 0.1 }}>
        <p class="capability-description">
          Ensure your corporate functions, festivals, concerts, and private events run smoothly and safely with our professional event security teams. We manage everything from planning to execution.
        </p>
        
        <div class="features-grid service-list" use:animateOnScroll={{ animationType: 'fade', stagger: 0.1 }}>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>CROWD MANAGEMENT & CONTROL</h3>
            <p>Maintaining order and ensuring guest safety in large gatherings.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>ACCESS CONTROL & SCREENING</h3>
            <p>Ticket verification, bag checks, and entry point monitoring.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>VIP & TALENT PROTECTION</h3>
            <p>Discreet security for speakers, performers, and special guests.</p>
          </div>
          <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>EVENT SECURITY PLANNING</h3>
            <p>Pre-event consultation and strategy development for comprehensive protection.</p>
          </div>
            <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>PARKING LOT SECURITY</h3>
            <p>Monitoring parking areas to deter theft and ensure vehicle safety.</p>
          </div>
           <div class="feature">
            <span class="feature-icon">&rarr;</span>
            <h3>EMERGENCY COORDINATION</h3>
            <p>Liaising with local law enforcement and emergency services for seamless response.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Contact footer -->
<section class="contact-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-info">
        <h3>READY TO DISCUSS YOUR SECURITY NEEDS?</h3>
        <p>Our Knoxville-based team is available to provide a free security consultation for your business.</p>
        <a href="/contact" class="btn btn-outline-dark">Request a Free Quote</a>
      </div>
      <div class="footer-address">
        <h4>SHIELD OF STEEL LLC</h4>
        <p>116 Agnes Rd, Suite 200<br>Knoxville, TN 37919 US</p>
        <p>contact@shieldofsteel.com</p>
      </div>
    </div>
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
  
  .capabilities-intro {
    padding: 8rem 0;
    border-bottom: 1px solid black;
    text-align: center;
  }
  
  .intro-grid {
      display: block; /* Simple centered text for intro */
  }

  .intro-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .lead-text {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 2rem; /* Add space below lead text */
  }

  .view-all-link {
      margin-top: 2rem; /* Space above the button */
  }

  .large-text {
      font-size: clamp(1.1rem, 1.8vw, 1.4rem);
      line-height: 1.6;
  }

   /* Interactive Grid */
  .interactive-capabilities {
      padding: 8rem 0;
      border-bottom: 1px solid black;
      background-color: #f9f9f9;
  }

  .interactive-grid {
      display: grid;
      /* Changed back to explicit 3 columns */
      grid-template-columns: repeat(3, 1fr); 
      gap: 1px; /* Creates thin grid lines */
      background-color: black; /* Grid line color */
      border: 1px solid black; /* Outer border */
      margin-top: 4rem;
  }

  .grid-item {
      position: relative;
      aspect-ratio: 4 / 2;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-end; /* Align text to bottom */
      padding: 1.5rem;
      overflow: hidden;
      text-decoration: none;
      color: black;
  }

  .grid-item .item-content {
      position: relative;
      z-index: 2;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .item-number {
      display: block;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      opacity: 0.8;
  }

  .grid-item h3 {
      font-size: clamp(1.2rem, 2vw, 1.5rem);
      margin-bottom: 0.5rem;
      line-height: 1.2;
  }

  .grid-item p {
      font-size: 0.9rem;
      margin-bottom: 0;
      opacity: 0.8;
  }

  .item-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black; /* Hover background */
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      z-index: 1;
  }

  .grid-item:hover .item-bg {
      transform: scaleY(1);
      transform-origin: top;
  }

  .grid-item:hover .item-content {
      color: white;
      transform: translateY(-10px);
  }

  .grid-item.contact-item {
      background-color: black;
      color: white;
      justify-content: center; /* Center contact text */
      align-items: center;
      text-align: center;
  }
  .grid-item.contact-item h3 {
       margin-bottom: 0;
  }

  .grid-item.contact-item .item-bg {
      background-color: #333; /* Slightly different hover for contact */
  }

  /* Specific styling for the view-all-item if needed, inherits contact-item for now */
  .view-all-item {
    /* Add specific overrides if desired, e.g., different hover */
  }

  .capability-section {
    padding: 10rem 0;
    border-bottom: 1px solid black;
    position: relative;
  }

  .capability-section:last-of-type { /* Ensure footer section has top border only */
      border-bottom: none; 
  }
  .contact-footer {
      border-top: 1px solid black;
  }


  .capability-section.alt-bg {
      background-color: #f9f9f9;
  }
  
  .capability-grid {
    display: grid;
    grid-template-columns: 1fr 1.8fr; /* Adjust ratio */
    gap: 5rem;
    align-items: start;
  }
  
  .capability-header {
    position: sticky;
    top: 120px; /* Adjust based on header height */
    height: fit-content;
  }
  
  .capability-header h2,
  .header-subtitle {
      position: relative; /* Ensure text is above the absolute positioned number */
      z-index: 1;
  }
  
  .capability-header h2 {
    font-size: clamp(2.2rem, 4vw, 3rem);
    margin-bottom: 1rem;
    font-weight: 800;
    letter-spacing: 0.01em;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .header-subtitle {
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
  }
  
  .capability-number {
    font-size: clamp(8rem, 15vw, 12rem);
    font-weight: 900;
    /* Changed color to grey and slightly increased opacity */
    color: #cccccc; /* Grey color */
    opacity: 0.12; /* Adjusted opacity */
    position: absolute;
    top: -4rem;
    left: -2rem;
    z-index: 0; /* Ensure it's behind the relative positioned text (z-index: 1) */
    line-height: 1;
    user-select: none;
  }
  
  .capability-description {
    font-size: clamp(1.1rem, 1.8vw, 1.4rem);
    line-height: 1.6;
    margin-bottom: 4rem;
    max-width: 700px;
  }
  
  /* Update features-grid for service list */
  .features-grid.service-list {
    display: grid;
    /* Keep 2 columns for wider screens */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
    gap: 2rem 2rem; /* Adjust gap */
  }
  
  .feature {
      position: relative;
      padding-left: 2rem;
       /* Remove bottom border */
      border-bottom: none; 
      padding-bottom: 0;
  }

  .feature-icon {
      position: absolute;
      left: 0;
      top: 0.2em; /* Adjusted alignment */
      font-size: 1rem;
      font-weight: 700;
      color: black;
  }

  .feature h3 {
    font-size: 1.05rem; /* Slightly smaller for lists */
    margin-bottom: 0.5rem; /* Reduced margin */
    letter-spacing: 0.03em; /* Adjusted spacing */
    text-transform: uppercase;
  }
  
  /* No feature line needed for simple lists */
  .feature-line {
    display: none; 
  }

  .feature p {
      font-size: 0.9rem; /* Slightly smaller text */
      margin-bottom: 0;
      line-height: 1.5;
  }
  

  /* Contact Footer (already exists, adjusted styles below if needed) */
  .contact-footer {
    padding: 6rem 0;
    background-color: #f9f9f9;
     /* border-top handled by removing bottom border on last capability-section */
  }
  
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  .footer-info h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  .footer-info p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    max-width: 500px;
  }
  
  .footer-address h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  .footer-address p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
  
  @media (max-width: 1024px) {
     .interactive-grid {
        /* Changed to 2 columns on medium screens */
        grid-template-columns: repeat(2, 1fr);
     }
    .capability-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .capability-header {
        position: static; /* Unstick header */
        margin-bottom: 2rem;
    }
    .capability-number {
        top: -2rem;
        left: -1rem;
        font-size: 10rem;
    }
    .features-grid.service-list {
      /* Can still be 2 columns */
      gap: 1.5rem; /* Reduced gap */
    }
  }

  @media (max-width: 768px) {
     .interactive-grid {
        grid-template-columns: 1fr; /* Stack grid items */
     }
     .features-grid.service-list {
        grid-template-columns: 1fr; /* Stack features */
     }
     .capability-section {
         padding: 6rem 0;
     }
      .footer-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center; /* Center footer content */
    }
    
    .footer-address {
      text-align: center;
    }
  }
</style> 