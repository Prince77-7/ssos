<script lang="ts">
  import { onMount, getContext } from 'svelte';
  import { browser } from '$app/environment';
  // Keep this import ONLY if animateOnScroll is used further down the page
  import { animateOnScroll } from '$lib/actions/animateOnScroll';
  import { countUp } from '$lib/actions/countUp'; // Import countUp
  import type { Writable } from 'svelte/store'; // Added Writable type

  // Context key (must match the one in layout)
  const HEADER_HEIGHT_KEY = Symbol(); 
  // Get header height store from context
  const headerHeight = getContext<Writable<number>>(HEADER_HEIGHT_KEY);

  let scrollProgress = 0;
  const scrollAnimationStart = 0; // ScrollY position where animation starts
  const scrollAnimationEnd = 150; // ScrollY position where animation ends (adjust as needed)

  function handleScroll() {
    if (browser) {
      const scrollY = window.scrollY;
      const range = scrollAnimationEnd - scrollAnimationStart;
      const progress = Math.max(0, Math.min(1, (scrollY - scrollAnimationStart) / range));
      scrollProgress = progress;
    }
  }

  onMount(() => {
    if (browser) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Initial check in case the page loads already scrolled
      handleScroll(); 
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  });
</script>

<svelte:head>
  <title>Shield of Steel LLC | Professional Security Services in Tennessee</title>
  <meta name="description" content="Shield of Steel LLC (SOS) provides professional security services, surveillance solutions, and risk management for businesses and organizations throughout Tennessee.">
</svelte:head>

<!-- Hero Section - Apply scroll progress & dynamic header height as CSS variables -->
<section class="hero" style="--scroll-progress: {scrollProgress}; --dynamic-header-height: {$headerHeight}px;">
  <div class="container">
    <div class="hero-card">
      <div class="hero-content">
        <h1 class="hero-headline">Comprehensive Security Solutions for Tennessee</h1>
        <p class="hero-subheadline">
          Shield of Steel delivers professional, reliable security services tailored to protect your people, property, and assets across the state.
        </p>
        <div>
          <a href="/contact" class="btn btn-dark">Request a Consultation &rarr;</a>
        </div>
      </div>
      <div class="hero-gradient-overlay"></div>
    </div>
  </div>
</section>

<!-- Introduction Section - Animations can start here -->
<section class="introduction">
  <div class="container">
    <div class="grid">
      <div class="intro-text" use:animateOnScroll={{ animationType: 'slideUp' }}>
        <h2 class="section-title">YOUR SECURITY IS OUR PRIORITY</h2>
        <p class="lead-text">
          Shield of Steel (SOS) delivers professional security solutions that protect your people, property, and assets. Whether you need on-site security personnel or advanced monitoring systems, we've got you covered.
        </p>
        <p>
          You deserve peace of mind knowing your security needs are handled by trusted professionals. Our Tennessee-based team provides tailored protection services for businesses, facilities, and organizations of all sizes.
        </p>
        <a href="/about" class="btn btn-outline-dark">Learn More About SOS</a>
      </div>
      <div class="intro-visual" use:animateOnScroll={{ animationType: 'fade', delay: 0.2 }}>
        <div class="visual-placeholder"></div>
      </div>
    </div>
  </div>
</section>

<!-- About Section Preview - Keep animations -->
<section id="about" class="about">
  <div class="container">
    <h2 class="section-title" use:animateOnScroll={{ animationType: 'slideUp' }}>ABOUT SHIELD OF STEEL</h2>
    <div class="grid about-grid">
      <div class="about-content" use:animateOnScroll={{ animationType: 'slideUp', delay: 0.1 }}>
        <p class="lead-text">Tennessee's Trusted Security Partner</p>
        <p>Founded on principles of professionalism, reliability, and client service, our team of security experts provides comprehensive protection services that keep your people and property safe. We understand the unique security challenges facing Tennessee businesses and deliver solutions that work.</p>
      </div>
      <div class="stats-grid" use:animateOnScroll={{ animationType: 'fade', delay: 0.2 }}>
        <div class="stat">
          <div class="stat-number" use:countUp={{ endValue: 50, delay: 0.3 }}>50+</div>
          <div class="stat-label">CLIENTS PROTECTED</div>
        </div>
        <div class="stat">
          <div class="stat-number" use:countUp={{ endValue: 100, delay: 0.45 }}>100</div>
          <div class="stat-label">MODERN SOLUTIONS</div>
        </div>
        <div class="stat">
          <div class="stat-number" use:countUp={{ endValue: 1000, delay: 0.6 }}>1,000+</div>
          <div class="stat-label">SECURITY SOLUTIONS</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Capabilities Section Preview - Keep animations -->
<section id="capabilities" class="capabilities">
  <div class="container">
    <h2 class="section-title" use:animateOnScroll={{ animationType: 'slideUp' }}>OUR SERVICES</h2>
    
    <div class="capabilities-grid" use:animateOnScroll={{ animationType: 'fade', delay: 0.2, stagger: 0.15 }}>
      <div class="capability">
        <div class="capability-icon">
          <!-- Placeholder Icon -->
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
        </div>
        <h3 class="capability-title">SECURITY PERSONNEL</h3>
        <div class="capability-line"></div>
        <p>Professional, licensed security officers who protect your property, monitor access, and respond to incidents quickly and effectively.</p>
        <a href="/services#security-personnel" class="read-more">Explore &rarr;</a>
      </div>
      
      <div class="capability">
         <div class="capability-icon">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
        </div>
        <h3 class="capability-title">MONITORING & SURVEILLANCE</h3>
        <div class="capability-line"></div>
        <p>Complete surveillance solutions with 24/7 monitoring, advanced camera systems, and immediate response to security breaches.</p>
         <a href="/services#technology-monitoring" class="read-more">Explore &rarr;</a>
      </div>
      
      <div class="capability">
        <div class="capability-icon">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 11h-1.59l3.08-4.92L18.09 5l-3.09 4.92V4h-2v5.92L10 4l-1.39 1.39L11.59 11H3v2h8.59l-2.98 4.61L10 19l3-4.61V20h2v-5.61l3.09 4.92L19.5 18.08 16.41 13H21z"/></svg>
        </div>
        <h3 class="capability-title">RISK ASSESSMENT</h3>
        <div class="capability-line"></div>
        <p>Comprehensive security evaluations that identify vulnerabilities and provide actionable solutions to strengthen your security posture.</p>
        <a href="/services#consulting-assessment" class="read-more">Explore &rarr;</a>
      </div>
      
      <div class="capability">
         <div class="capability-icon">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        </div>
        <h3 class="capability-title">EVENT SECURITY</h3>
        <div class="capability-line"></div>
        <p>Professional security teams that ensure your events run smoothly and safely, with crowd management and VIP protection capabilities.</p>
         <a href="/services#event-security" class="read-more">Explore &rarr;</a>
      </div>
    </div>
  </div>
</section>

<!-- Why Choose Us Section - Keep animations -->
<section class="why-choose-us">
  <div class="container">
    <h2 class="section-title text-center" use:animateOnScroll={{ animationType: 'slideUp' }}>WHY CLIENTS CHOOSE US</h2>
    <div class="reasons-grid" use:animateOnScroll={{ animationType: 'fade', delay: 0.2, stagger: 0.15 }}>
      <div class="reason">
        <div class="reason-number">01</div>
        <h3>EXPERIENCED PROFESSIONALS</h3>
        <p>Our team includes former law enforcement and military personnel who bring real-world experience to protect your business.</p>
      </div>
      <div class="reason">
        <div class="reason-number">02</div>
        <h3>CUSTOMIZED SOLUTIONS</h3>
        <p>We tailor our security services to your specific needs rather than offering one-size-fits-all packages.</p>
      </div>
      <div class="reason">
        <div class="reason-number">03</div>
        <h3>LOCAL KNOWLEDGE</h3>
        <p>As a Tennessee-based company, we understand the unique security challenges of our region and communities.</p>
      </div>
      <div class="reason">
        <div class="reason-number">04</div>
        <h3>IMMEDIATE RESPONSE</h3>
        <p>When security issues arise, our team responds quickly and effectively to protect your people and property.</p>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section Preview - Keep animations -->
<section id="contact" class="contact-preview">
  <div class="container">
    <div class="contact-content text-center" use:animateOnScroll={{ animationType: 'slideUp' }}>
      <h2 class="section-title">GET IN TOUCH</h2>
      <p class="lead-text">Ready to discuss your security needs? Our team is available for a free consultation to assess your requirements.</p>
      <p>Contact us today to learn how we can create a customized security plan for your business or property.</p>
      <p class="contact-email"><a href="mailto:contact@shieldofsteel.com" class="contact-link">contact@shieldofsteel.com</a></p>
      <p class="contact-phone"><a href="tel:202-222-2225" class="contact-link">202-222-2225</a></p>
      <p class="contact-address">116 Agnes Rd, Suite 200<br>Knoxville, TN 37919 US</p>
      <a href="/contact" class="btn btn-dark">Request a Free Consultation</a>
    </div>
  </div>
</section>

<style>
  /* Define initial values as CSS variables */
  :root {
    /* Animate top padding from 0.25rem down to 0rem */
    --hero-padding-top-start: 0.25rem; 
    --hero-padding-top-end: 0rem; /* Animate to 0 */
    --hero-padding-bottom-start: 6rem; 
    --hero-padding-bottom-end: 0rem;

    /* Card Initial/Final State */
    --card-initial-margin: 2rem; /* Space around the card initially */
    --card-final-margin: 0rem;
    --card-initial-width: calc(100% - (var(--card-initial-margin) * 2));
    --card-initial-min-height: calc(100vh - (var(--card-initial-margin) * 2));
    --card-final-min-height: auto; /* Let content dictate height after scroll */

    --card-padding-top-start: 4rem;
    --card-padding-top-end: 6rem;
    --card-padding-bottom-start: 4rem;
    --card-padding-bottom-end: 6rem;

    --card-border-radius-start: 16px;
    --card-border-radius-end: 0px; /* Let's re-enable flattening the corners on scroll */
  }

  /* Hero Section Adjustments - Remove Flexbox centering */
  .hero {
    display: flex; /* Keep flex for potential future use, but remove centering */
    /* align-items: center; Removed */
    /* justify-content: center; Removed */
    min-height: 100vh; 
    /* Interpolate padding */
    padding-top: calc(var(--hero-padding-top-start) + (var(--hero-padding-top-end) - var(--hero-padding-top-start)) * var(--scroll-progress, 0));
    padding-bottom: calc(var(--hero-padding-bottom-start) + (var(--hero-padding-bottom-end) - var(--hero-padding-bottom-start)) * var(--scroll-progress, 0));
    background-color: black;
    margin-top: 0;
  }

  .hero .container { /* Ensure container doesn't limit card width */
      max-width: none; 
      padding: 0; /* Remove container padding if it interferes */
  }

  /* New Hero Card Styles - Use CSS vars for interpolation */
  .hero-card {
    display: flex; /* Added */
    align-items: center; /* Added */
    justify-content: center; /* Added */
    flex-direction: column; /* Added */
    height: 100%; /* Added for vertical centering */

    position: relative; 
    box-sizing: border-box; 

    /* Interpolate size, margin, transform, z-index */
    width: calc(var(--card-initial-width) + (100% - var(--card-initial-width)) * var(--scroll-progress, 0));
    min-height: calc(var(--card-initial-min-height) + (100vh - var(--card-initial-min-height)) * var(--scroll-progress, 0));
    margin: calc(var(--card-initial-margin) + (var(--card-final-margin) - var(--card-initial-margin)) * var(--scroll-progress, 0));
    /* Use dynamic header height for transform */
    transform: translateY(calc(-1 * var(--dynamic-header-height, 0px) * var(--scroll-progress, 0)));
    z-index: calc(1 + floor(var(--scroll-progress, 0) * 100));

    max-width: 100%; /* Still good practice */

    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/home-intro-visual-photo.jpg');
    background-size: cover;
    background-position: center center;
    overflow: hidden; /* Keep overflow hidden */
    color: white;
    text-align: center; /* Center text in the card */

    /* Interpolate border-radius */
    border-radius: calc(var(--card-border-radius-start) + (var(--card-border-radius-end) - var(--card-border-radius-start)) * var(--scroll-progress, 0));
    
    /* Interpolate padding */
    padding-top: calc(var(--card-padding-top-start) + (var(--card-padding-top-end) - var(--card-padding-top-start)) * var(--scroll-progress, 0));
    padding-bottom: calc(var(--card-padding-bottom-start) + (var(--card-padding-bottom-end) - var(--card-padding-bottom-start)) * var(--scroll-progress, 0));
    padding-left: 2rem; 
    padding-right: 2rem;

    /* Interpolate box-shadow opacity */
    box-shadow: 0 10px 30px rgba(0, 0, 0, calc(0.1 * (1 - var(--scroll-progress, 0))));
  }

  /* New gradient overlay style */
  .hero-gradient-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px; /* Adjust height as needed */
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%);
    pointer-events: none; /* Allows clicks to pass through */
    z-index: 2; /* Ensure it's above the background image but below content if needed */
    /* Match border-radius interpolation if the card flattens */
    border-bottom-left-radius: calc(var(--card-border-radius-start) + (var(--card-border-radius-end) - var(--card-border-radius-start)) * var(--scroll-progress, 0));
    border-bottom-right-radius: calc(var(--card-border-radius-start) + (var(--card-border-radius-end) - var(--card-border-radius-start)) * var(--scroll-progress, 0));
  }

  /* Remove .hero-card.expanded styles */

  /* Ensure hero content is centered within the card */
  .hero-content {
    /* text-align: center; Removed - Handled by hero-card */
    position: relative; /* Ensure content is above the gradient */
    z-index: 3; /* Ensure content is above the gradient */
    max-width: 800px; /* Limit content width */
    margin: 0 auto; /* Center content block */
  }

  /* Style new headline */
  .hero-headline {
    font-size: clamp(2.5rem, 5vw, 4rem); /* Responsive font size */
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.4); /* Subtle text shadow */
  }

  /* Style new subheadline */
  .hero-subheadline {
    font-size: clamp(1rem, 2vw, 1.25rem); /* Responsive font size */
    max-width: 600px; /* Limit width */
    margin: 0 auto 2.5rem; /* Center and add bottom margin */
    opacity: 0.9;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3); /* Subtle text shadow */
  }

  .hero-logo img.logo-icon {
     /* Removed filter, rely on blend mode */
     mix-blend-mode: difference;
     filter: none;
  }

  .hero-logo-full {
    max-width: 400px; /* Adjusted size */
    width: 80%;
    margin: 0 auto 1.5rem;
    filter: brightness(0) invert(1); /* Make logo white */
  }

  .hero-tagline {
    color: white; /* Ensure tagline is white */
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .hero-card .btn-dark {
    background-color: white; /* Button white */
    color: black; /* Button text black */
    border-color: white;
    /* Add specific border-radius for the desired effect */
    border-radius: 8px 8px 25px 8px; /* top-left, top-right, bottom-right, bottom-left */
    /* You might need to adjust the default .btn class padding/border if it interferes */
  }

  .hero-card .btn-dark:hover {
    background-color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.9);
  }

  /* Introduction Section */
  .introduction {
    padding: 8rem 0;
    border-bottom: 1px solid black;
  }

  .introduction .grid {
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
  }

  .intro-text h2 {
    margin-bottom: 2rem;
  }

  .intro-text p {
    max-width: 550px;
  }

  .intro-text .btn {
    margin-top: 2rem;
  }

  .intro-visual {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Style for the new image */
  .intro-image-style {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    display: block; /* Remove extra space below image */
    aspect-ratio: 1 / 1; /* Optional: force aspect ratio if needed */
    object-fit: cover; /* Cover the area, might crop */
    border: 1px solid black; /* Keep border if desired */
  }

  /* About Section Adjustments */
  .about {
    padding: 8rem 0;
    border-bottom: 1px solid black;
  }

  .about-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    align-items: start;
  }

  .about-content p:first-of-type {
    margin-bottom: 1.5rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    border-left: 1px solid black;
    padding-left: 2rem;
  }
  
  .stat {
    text-align: left;
  }
  
  .stat-number {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 800;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  
  /* Capabilities Section Adjustments */
  .capabilities {
    background-color: white;
    border-bottom: 1px solid black;
    padding: 8rem 0;
  }
  
  .capabilities-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 3rem;
  }
  
  .capability {
    border: 1px solid black;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  }

  .capability:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }

  .capability-icon {
    margin-bottom: 1.5rem;
  }

  .capability-icon svg {
    stroke: black;
  }
  
  .capability-title {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: 700;
  }
  
  .capability-line {
    width: 2rem;
    height: 2px;
    background-color: black;
    margin-bottom: 1rem;
  }

  .capability p {
    font-size: 0.95rem;
    margin-bottom: auto; /* Pushes link to bottom */
    padding-bottom: 1rem; /* Space before link */
  }

  .read-more {
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-size: 0.8rem;
    align-self: flex-start; /* Align link to the left */
    margin-top: 1rem;
    transition: transform 0.2s ease-out;
  }

  .read-more:hover {
      transform: translateX(5px);
  }
  
  /* Why Choose Us Section */
  .why-choose-us {
      padding: 8rem 0;
      background-color: #f9f9f9; /* Subtle off-white */
      border-bottom: 1px solid black;
  }

  .reasons-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
      margin-top: 4rem;
  }

  .reason {
    position: relative;
    padding-left: 4rem;
  }

  .reason-number {
      position: absolute;
      left: 0;
      top: -0.25rem;
      font-size: 2rem;
      font-weight: 900;
      color: black;
      opacity: 0.8;
      line-height: 1;
  }

  .reason h3 {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
  }

  .reason p {
      font-size: 0.95rem;
  }

  /* Contact Section Preview */
  .contact-preview {
    padding: 8rem 0;
    background-color: white;
  }

  .contact-preview .contact-content {
    max-width: 700px;
    margin: 0 auto;
  }
  
  .contact-preview .lead-text {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .contact-preview p {
      margin-bottom: 1rem;
  }
  
  .contact-email,
  .contact-phone,
  .contact-address {
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: block;
  }

  .contact-email a.contact-link,
  .contact-phone a.contact-link {
    color: inherit; /* Inherit color from parent */
    text-decoration: none;
  }

  .contact-email a.contact-link:hover,
  .contact-phone a.contact-link:hover {
    text-decoration: underline;
  }
  
  .contact-address {
    font-size: 1rem;
    margin-bottom: 2.5rem;
    display: block;
  }
  
  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .introduction .grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .intro-visual {
      max-width: 400px;
      margin: 0 auto;
    }
    .about-grid {
      grid-template-columns: 1fr;
    }
    .stats-grid {
      border-left: none;
      padding-left: 0;
      border-top: 1px solid black;
      padding-top: 2rem;
      margin-top: 3rem;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;
    }
    .stat {
      text-align: center;
    }
    .capabilities-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .reasons-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    /* Remove Hero Adjustments block */
    
    .hero-logo img.logo-icon {
      width: 100px;
      height: 100px;
    }
    .hero-logo-full {
      max-width: 90%;
    }

    /* Section Padding */
    .introduction, .about, .capabilities, .why-choose-us, .contact-preview {
      padding: 6rem 0;
    }

    .stats-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .capabilities-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .reasons-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .reason {
      padding-left: 0;
      text-align: center;
    }
    .reason-number {
      position: static;
      margin-bottom: 0.5rem;
    }

    .contact-info,
    .contact-form {
      grid-column: 1 / -1;
    }
    
    .contact-info {
      margin-bottom: 3rem;
    }
  }

  /* Add '+' suffix styling if needed, or handle in countUp */
  .stat-number::after {
      content: '+'; /* Add plus sign visually */
      font-size: 0.6em; /* Smaller plus */
      position: relative;
      top: -0.2em; 
      margin-left: 0.1em;
  }
  /* Remove for the exact number */
  .stat:nth-child(2) .stat-number::after {
      content: '+';
  } 
  .stat:nth-child(3) .stat-number::after {
       content: '+';
  }

  /* Restored visual-placeholder styles */
  .visual-placeholder {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: #f0f0f0; 
    border: 1px solid black;
  } 
</style>
