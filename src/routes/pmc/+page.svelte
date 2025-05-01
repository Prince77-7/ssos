<script lang="ts">
  import { animateOnScroll } from '$lib/actions/animateOnScroll';
  import { countUp } from '$lib/actions/countUp'; // Example: if we add stats
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  // Placeholder for potential interactive elements or complex animations
  onMount(() => {
    // Example: GSAP timeline for a specific element if needed
    // gsap.timeline({ scrollTrigger: { trigger: ".some-element", start: "top 80%" } })
    //   .from(...) etc.
  });

</script>

<svelte:head>
  <title>SOS LIMITED // PMC Operations & Technology</title>
  <meta name="description" content="Discreet, bespoke technology and operational support for elite Private Military Contractors. SOS Limited: Precision. Discretion. Advantage.">
</svelte:head>

<!-- Wrapper ensures full dark background -->
<div class="dark-theme-wrapper pmc-page">
    <!-- Subtle Background Grid -->
    <div class="background-grid"></div>

    <section class="page-header pmc-header">
      <div class="container">
        <!-- More dramatic header -->
        <h1 class="glitch" data-text="SOS: PMC OPERATIONS">SOS: PMC OPERATIONS</h1>
        <p class="subtitle tech-font">[ Classified Briefing // Level-5 Access ]</p>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
          <div class="intro-content">
              <p class="lead-text large" use:animateOnScroll={{animationType: 'slideUp'}}>
                In environments where failure is not an option, SOS Limited provides the decisive technological edge. We engineer <strong class="highlight">bespoke, resilient, and confidential solutions</strong> tailored exclusively for the complex demands of modern PMC operational theaters.
              </p>
               <!-- Placeholder: Animated abstract lines/data stream -->
              <div class="visual-divider" use:animateOnScroll={{animationType: 'scale'}}></div>
          </div>
      </div>
    </section>

     <section class="threat-landscape">
        <div class="container">
            <div class="grid threat-grid">
                <div class="threat-text" use:animateOnScroll={{animationType: 'slideRight'}}>
                    <h2 class="section-title">THE EVOLVING BATTLESPACE</h2>
                    <p class="large-text">Asymmetric warfare, sophisticated cyber threats, and contested electronic environments demand next-generation capabilities. Standard issue is insufficient. SOS delivers the overmatch required.</p>
                </div>
                <div class="threat-visual" use:animateOnScroll={{animationType: 'fade'}}>
                    <!-- Placeholder: Dotted Globe/Network SVG - Increased Visibility -->
                    <svg class="visual-placeholder-svg aspect-1-1" viewBox="0 0 100 100" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="0.8">
                        <circle cx="50" cy="50" r="45" />
                        <!-- Simple latitude/longitude lines -->
                        <path d="M5 50 Q 50 70 95 50" />
                        <path d="M5 50 Q 50 30 95 50" />
                        <path d="M50 5 V 95" />
                        <path d="M20 15 Q 50 50 20 85" />
                        <path d="M80 15 Q 50 50 80 85" />
                         <!-- Dots -->
                        <circle cx="30" cy="30" r="1.5" fill="#ccc" stroke="none" />
                        <circle cx="70" cy="60" r="1.5" fill="#ccc" stroke="none" />
                        <circle cx="50" cy="80" r="1.5" fill="#ccc" stroke="none" />
                        <circle cx="65" cy="25" r="1.5" fill="#ccc" stroke="none" />
                    </svg>
                </div>
            </div>
        </div>
    </section>

    <section class="core-offerings alt-bg">
      <div class="container">
        <h2 class="section-title text-center" use:animateOnScroll={{ animationType: 'slideUp' }}>CORE CAPABILITY SUITES [CLASSIFIED]</h2>
        <div class="offerings-grid grid" >
          <!-- Items will animate individually via action -->
          <div class="offering-item" use:animateOnScroll={{ animationType: 'fade', delay: 0.1 }}>
            <span class="offering-icon tech-font">// COMSEC</span>
            <h3>SIGINT-HARDENED COMMS</h3>
            <p>Quantum-resistant encryption, LPI/LPD waveforms, multi-band resilient mesh networks.</p>
            <a href="/contact?inquiry=pmc-comsec" class="learn-more-link">Access Briefing &rarr;</a>
          </div>
           <div class="offering-item" use:animateOnScroll={{ animationType: 'fade', delay: 0.15 }}>
            <span class="offering-icon tech-font">// ISR</span>
            <h3>AUTONOMOUS ISR</h3>
            <p>Covert deployable UAV/UGV swarms, advanced EO/IR sensors, AI-driven target recognition.</p>
             <a href="/contact?inquiry=pmc-isr" class="learn-more-link">Access Briefing &rarr;</a>
          </div>
           <div class="offering-item" use:animateOnScroll={{ animationType: 'fade', delay: 0.2 }}>
            <span class="offering-icon tech-font">// CYBER</span>
            <h3>OFFENSIVE/DEFENSIVE CYBER</h3>
            <p>Zero-day exploit mitigation, secure enclaves, counter-intrusion ops, digital forensics.</p>
             <a href="/contact?inquiry=pmc-cyber" class="learn-more-link">Access Briefing &rarr;</a>
          </div>
           <div class="offering-item" use:animateOnScroll={{ animationType: 'fade', delay: 0.25 }}>
            <span class="offering-icon tech-font">// EW</span>
            <h3>ELECTRONIC WARFARE</h3>
            <p>Spectrum dominance, C-UAS (Kinetic/Non-Kinetic), SIGINT exploitation, GPS-denied navigation.</p>
             <a href="/contact?inquiry=pmc-ew" class="learn-more-link">Access Briefing &rarr;</a>
          </div>
           <div class="offering-item" use:animateOnScroll={{ animationType: 'fade', delay: 0.3 }}>
            <span class="offering-icon tech-font">// SUPPORT</span>
            <h3>INTELLIGENCE & LOGISTICS</h3>
            <p>Secure data fusion platforms, predictive logistics, biometric access control, personnel tracking.</p>
             <a href="/contact?inquiry=pmc-support" class="learn-more-link">Access Briefing &rarr;</a>
          </div>
           <div class="offering-item bespoke" use:animateOnScroll={{ animationType: 'fade', delay: 0.35 }}>
            <span class="offering-icon tech-font">// R&D</span>
            <h3>BESPOKE DEVELOPMENT</h3>
            <p>Rapid prototyping, custom hardware/software, black-box solutions tailored to mission demands.</p>
             <a href="/contact?inquiry=pmc-bespoke" class="learn-more-link">Access Briefing &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <section class="discretion-protocol">
       <div class="container">
          <div class="grid protocol-grid">
              <div class="protocol-visual" use:animateOnScroll={{animationType: 'fade'}}>
                    <!-- Placeholder: Abstract Secure Lock/Shield SVG - Increased Visibility -->
                    <svg class="visual-placeholder-svg aspect-1-1" viewBox="0 0 100 100" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5">
                        <!-- Shield shape -->
                        <path d="M50 10 L90 30 V 60 C 90 80, 50 95, 10 60 V 30 Z" />
                        <!-- Abstract lock/circuit lines -->
                        <circle cx="50" cy="45" r="15" fill="rgba(255,255,255,0.1)" />
                        <path d="M50 60 V 75" />
                        <path d="M40 75 H 60" />
                        <path d="M35 40 L 45 50" />
                        <path d="M65 40 L 55 50" />
                    </svg>
              </div>
              <div class="protocol-text" use:animateOnScroll={{animationType: 'slideLeft'}}>
                   <h2 class="section-title">ABSOLUTE DISCRETION PROTOCOL</h2>
                   <p class="large-text">Operational security is paramount. SOS Limited employs multi-layered physical, digital, and procedural safeguards ensuring complete client confidentiality and mission integrity.</p>
                   <ul class="tech-font">
                       <li>// End-to-End Encrypted Communications</li>
                       <li>// Need-to-Know Access Control</li>
                       <li>// Secure Development Lifecycle (SDL)</li>
                       <li>// Air-Gapped Systems Available</li>
                       <li>// Post-Mission Data Sanitization</li>
                   </ul>
               </div>
          </div>
       </div>
    </section>

    <section class="cta-section final-cta">
        <div class="container text-center">
            <h2 class="glitch" data-text="INITIATE SECURE CONTACT" use:animateOnScroll={{ animationType: 'fade' }}>INITIATE SECURE CONTACT</h2>
            <p class="lead-text narrow tech-font" use:animateOnScroll={{ animationType: 'slideUp', delay: 0.1 }}>[ Verification Required // Secure Channel Protocol ]</p>
            <p class="disclaimer" use:animateOnScroll={{ animationType: 'fade', delay: 0.2 }}>Standard contact methods are insufficient. Utilize provided secure channels or request establishment via preliminary contact form for verification.</p>
            <div use:animateOnScroll={{ animationType: 'fade', delay: 0.3 }}>
               <a href="/contact?inquiry=pmc-secure-request" class="btn btn-light large-btn">Request Secure Channel</a>
            </div>
        </div>
    </section>

</div> <!-- End dark-theme-wrapper -->

<style>
  /* --- Base Overrides & Page Styles --- */
  .dark-theme-wrapper.pmc-page {
    color: #e0e0e0; 
    position: relative;
    overflow: hidden; 
  }

  /* The first section might not need extra padding-top now */
  .pmc-header {
      padding-top: 8rem; /* Reset to original or adjust */
      padding-bottom: 6rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center; 
  }

  /* Background grid needs to be positioned relative to wrapper again */
   .background-grid {
      position: absolute; /* Relative to wrapper */
      inset: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      z-index: -1; 
      opacity: 0.5;
      animation: pulseGrid 15s infinite alternate ease-in-out;
  }
  @keyframes pulseGrid {
      from { opacity: 0.3; }
      to { opacity: 0.6; }
  }

  /* Ensure content sections have correct z-index if needed */
  .dark-theme-wrapper section {
      position: relative;
      z-index: 1;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
   .dark-theme-wrapper section:last-child {
       border-bottom: none;
   }
  .dark-theme-wrapper .alt-bg {
    background-color: rgba(255, 255, 255, 0.03); /* Very subtle contrast */
    /* Or use #111 if preferred */
  }
  .dark-theme-wrapper .placeholder-img {
      background-color: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex; align-items: center; justify-content: center;
      font-family: monospace;
      color: rgba(255, 255, 255, 0.2);
      font-size: 0.8rem;
  }

  /* Typography */
  .dark-theme-wrapper h1,
  .dark-theme-wrapper h2,
  .dark-theme-wrapper h3,
  .dark-theme-wrapper h4 {
      color: #f5f5f5; /* Brighter white for headings */
      letter-spacing: 0.02em;
  }
  .dark-theme-wrapper h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); text-transform: uppercase; }
  .dark-theme-wrapper h2 { font-size: clamp(1.8rem, 4vw, 3rem); }
  .dark-theme-wrapper p { color: #ccc; line-height: 1.6; }
  .dark-theme-wrapper .lead-text { color: #e0e0e0; font-weight: 400; }
  .dark-theme-wrapper .lead-text.large { font-size: clamp(1.4rem, 2.8vw, 2.2rem); line-height: 1.5; }
  .dark-theme-wrapper .subtitle { color: #888; font-family: monospace; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; }
  .tech-font { font-family: 'Courier New', Courier, monospace; /* Or other mono font */ }
  .highlight { color: white; background-color: rgba(255,255,255,0.1); padding: 0.1em 0.3em; }

  /* Dividers & Accents */
  .dark-theme-wrapper .section-title::after {
      background-color: rgba(255, 255, 255, 0.3);
  }
  .visual-divider {
      height: 2px;
      width: 100px;
      background: linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);
      margin: 3rem auto;
  }

  /* Glitch Effect (Example) */
    .glitch {
        position: relative;
        color: #fff;
        /* Add more complex ::before/::after pseudo-elements for glitch effect */
        /* animation: glitchAnim 2s infinite linear alternate-reverse; */
    }
    /* Add keyframes for glitchAnim */

  /* --- Section Specific Styles --- */
  
  .intro-section { padding: 6rem 0; text-align: center; }
  .intro-content { max-width: 900px; margin: 0 auto; }

  .threat-landscape { padding: 8rem 0; }
  .threat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
  .threat-text .large-text { font-size: clamp(1.2rem, 2vw, 1.6rem); line-height: 1.6; }
  
  .threat-visual {
    /* Container for the visualization */
     position: relative;
     min-height: 300px; /* Ensure it has height */
     width: 100%; /* Ensure full width */
     display: block; /* Ensure proper display */
  }
  .abstract-viz-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.1);
      min-height: 300px; /* Ensure minimum height */
  }
  .aspect-1-1 { 
      aspect-ratio: 1 / 1; 
      /* Fallback for browsers that don't support aspect-ratio */
      height: 0;
      padding-bottom: 100%;
  }

  /* Shapes for Animation */
  .shape {
      position: absolute;
      border-radius: 50%; /* Circles */
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
      animation: subtleMove 15s infinite alternate ease-in-out;
  }
  .shape-1 { width: 60%; height: 60%; top: 10%; left: 15%; animation-delay: 0s; animation-duration: 14s; opacity: 0.4; }
  .shape-2 { width: 45%; height: 45%; top: 40%; left: 45%; animation-delay: -3s; animation-duration: 16s; opacity: 0.5; }
  .shape-3 { width: 70%; height: 70%; top: 25%; left: -5%; animation-delay: -6s; animation-duration: 13s; opacity: 0.3; }
  .shape-4 { width: 30%; height: 30%; top: 5%; left: 60%; animation-delay: -9s; animation-duration: 18s; opacity: 0.4; }

  @keyframes subtleMove {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(5px, -8px) scale(1.05); opacity: 0.6; }
      100% { transform: translate(-5px, 5px) scale(1); }
  }

  .core-offerings { padding: 8rem 0; }
  .offerings-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
      gap: 2rem;
      margin-top: 4rem;
  }
  .offering-item {
      background-color: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.1);
      padding: 2rem 1.5rem;
      position: relative;
      transition: background-color 0.3s ease, transform 0.3s ease;
  }
  .offering-item:hover {
      background-color: rgba(255,255,255,0.07);
      transform: translateY(-5px);
  }
  .offering-icon {
      display: block;
      font-size: 0.9rem;
      color: #888;
      margin-bottom: 1rem;
      letter-spacing: 0.1em;
  }
  .offering-item h3 { font-size: 1.1rem; margin-bottom: 0.75rem; font-weight: 600; color: white; }
  .offering-item p { font-size: 0.9rem; margin-bottom: 1.5rem; color: #bbb; }
  .learn-more-link {
      font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: white; 
      font-weight: 500; text-decoration: none; display: inline-block; 
      border-bottom: 1px solid rgba(255,255,255,0.3);
      padding-bottom: 2px;
      transition: border-color 0.2s ease;
   }
  .learn-more-link:hover { border-bottom-color: white; }
  .offering-item.bespoke { background-color: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.2); }

  .discretion-protocol { padding: 8rem 0; }
  .protocol-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: center; }
  .protocol-text ul { list-style: none; padding: 0; margin-top: 1.5rem; }
  .protocol-text li {
      margin-bottom: 0.5rem; color: #aaa; font-size: 0.9rem;
      letter-spacing: 0.03em;
  }
  .secure-graphic { /* Style for security viz */ }

  .final-cta { padding: 10rem 0; border-bottom: none; }
  .final-cta h2 { margin-bottom: 1rem; }
  .final-cta .tech-font { margin-bottom: 2rem; color: #888; }
  .final-cta .disclaimer { font-size: 0.85rem; max-width: 500px; margin: 0 auto 2.5rem auto; color: #777; }
  .large-btn { padding: 1.2rem 2.5rem; font-size: 1rem; }

  /* Responsive Adjustments */
   @media (max-width: 1024px) {
       .threat-grid, .protocol-grid { grid-template-columns: 1fr; }
       .threat-visual, .protocol-visual { 
           order: -1; 
           margin-bottom: 3rem; 
           width: 100%;
           max-width: 100%;
           min-height: 300px;
           margin-left: auto; 
           margin-right: auto; 
       }
       .abstract-viz-container {
           height: 300px;
           width: 100%;
       }
       /* Remove aspect-ratio dependence for mobile */
       .aspect-1-1 {
           height: 300px;
           padding-bottom: 0;
       }
       .advantages-grid { grid-template-columns: 1fr; }
   }

   @media (max-width: 768px) {
       section { padding: 6rem 0; }
       .offerings-grid { grid-template-columns: 1fr; }
   }

  .threat-visual {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(255, 255, 255, 0.02);
    padding: 1rem;
    position: relative;
  }
  .threat-matrix-svg-container {
      width: 100%;
      height: 100%;
  }
  .threat-matrix-svg-container svg {
      display: block;
      width: 100%;
      height: 100%;
  }

  /* Animation for Nodes */
  @keyframes nodePulseAnim {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.2); opacity: 1; }
  }
  .node-pulse {
      animation: nodePulseAnim 3s infinite ease-in-out;
      transform-origin: center center;
  }
  .main-node {
       animation-duration: 2.5s; /* Slightly different speed */
  }

  /* Animation for Scan Line */
  @keyframes scanLineAnim {
    0% { transform: translateY(0); opacity: 0.5; }
    50% { transform: translateY(100px); opacity: 0.8; }
    100% { transform: translateY(0); opacity: 0.5; }
  }
  .scan-line {
      animation: scanLineAnim 4s infinite ease-in-out;
  }

  .complex-graphic { 
      /* Keep placeholder style if needed */ 
      display: flex; align-items: center; justify-content: center;
      font-family: monospace;
      color: rgba(255, 255, 255, 0.2);
      font-size: 0.8rem;
  }

  .visual-placeholder-svg {
      display: block; /* Remove extra space */
      width: 100%;
      height: auto;
  }
  .aspect-1-1 {
    aspect-ratio: 1 / 1;
  }

</style> 