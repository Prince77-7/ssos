<script lang="ts">
  import { animateOnScroll } from '$lib/actions/animateOnScroll';
</script>

<svelte:head>
  <title>Residential Patrol | Shield of Steel LLC</title>
  <meta name="description" content="Dedicated residential patrol services providing 24-hour community security, emergency response, and peace of mind.">
</svelte:head>

<section class="page-header">
  <div class="container">
    <h1>RESIDENTIAL PATROL</h1>
    <p class="subtitle">Securing Communities, Protecting Families.</p>
  </div>
</section>

<section class="capability-intro">
  <div class="container">
    <div class="grid intro-grid">
      <div class="intro-content">
        <p class="lead-text">
          Residential security is no longer a luxury—it's a fundamental necessity. Shield of Steel pioneers proactive community protection, establishing proven standards that demonstrably reduce crime and enhance neighborhood safety.
        </p>
         <p>Invest in the safety and peace of mind of your community with our dedicated residential patrol solutions.</p>
      </div>
      <div class="intro-visual">
         <div class="placeholder-img aspect-3-4"></div> <!-- Placeholder visual -->
      </div>
    </div>
  </div>
</section>

<section class="core-services alt-bg">
  <div class="container">
    <h2 class="section-title" use:animateOnScroll={{ animationType: 'slideUp' }}>OUR RESIDENTIAL SERVICES</h2>
    <div class="service-list grid" use:animateOnScroll={{ animationType: 'fade', stagger: 0.1 }}>
      <div class="service-item">
        <span class="service-icon">🚨</span>
        <h3>24-Hour Patrol Coverage</h3>
        <p>Continuous, visible patrol presence providing round-the-clock deterrence and immediate availability.</p>
      </div>
      <div class="service-item">
         <span class="service-icon">⏱️</span>
        <h3>Random Patrol Checks</h3>
        <p>Unpredictable property checks and neighborhood sweeps maximize deterrence against opportunistic crime.</p>
      </div>
      <div class="service-item">
         <span class="service-icon">📞</span>
        <h3>Emergency Response</h3>
        <p>Rapid response to resident calls, security incidents, or suspicious activity within the community.</p>
      </div>
      <div class="service-item">
        <span class="service-icon">🔔</span>
        <h3>Alarm Response</h3>
        <p>Coordination with home alarm systems for swift on-site verification and liaison with authorities.</p>
      </div>
       <div class="service-item">
          <span class="service-icon">👶</span>
        <h3>Babysitter Checks</h3>
        <p>Scheduled welfare checks providing reassurance for parents while they are away.</p>
      </div>
       <div class="service-item">
          <span class="service-icon">☀️</span>
        <h3>Vacation Checks</h3>
        <p>Exterior property checks, mail/paper pickup, and maintaining a lived-in appearance while residents travel.</p>
      </div>
        <div class="service-item">
           <span class="service-icon">📦</span>
        <h3>Mail & Package Pickup</h3>
        <p>Secure collection of mail and packages to prevent theft during resident absence.</p>
      </div>
       <div class="service-item">
           <span class="service-icon">🤝</span>
        <h3>Community Partnership</h3>
        <p>Working closely with HOAs and residents to tailor patrol strategies and address specific concerns.</p>
      </div>
    </div>
  </div>
</section>

<section class="pioneer-section">
    <div class="container">
         <div class="grid pioneer-grid">
             <div class="pioneer-content" use:animateOnScroll={{ animationType: 'slideUp' }}>
                 <h2 class="section-title">PIONEERING COMMUNITY SAFETY</h2>
                 <p class="large-text">Shield of Steel is not just a service provider; we are partners in building safer communities. Our pioneering approach involves:</p>
                 <ul>
                    <li>Developing data-driven patrol routes based on local crime trends.</li>
                    <li>Establishing clear communication channels with residents and associations.</li>
                    <li>Implementing verifiable check systems using modern technology.</li>
                    <li>Providing detailed activity reports for transparency and accountability.</li>
                 </ul>
                 <p>Our methods are proven to reduce crime rates and foster a stronger sense of security.</p>
             </div>
              <div class="pioneer-visual" use:animateOnScroll={{ animationType: 'fade', delay: 0.2 }}>
                  <div class="placeholder-img aspect-16-9"></div> 
             </div>
         </div>
    </div>
</section>


<section class="cta-section">
    <div class="container text-center">
        <h2 use:animateOnScroll={{ animationType: 'slideUp' }}>INVEST IN YOUR COMMUNITY'S SAFETY</h2>
        <p class="lead-text narrow" use:animateOnScroll={{ animationType: 'slideUp', delay: 0.1 }}>Contact Shield of Steel today to learn more about our tailored residential patrol programs and how we can help protect your neighborhood.</p>
        <div use:animateOnScroll={{ animationType: 'fade', delay: 0.2 }}>
           <a href="/contact?inquiry=residential-patrol" class="btn btn-dark">Discuss Residential Patrol</a>
        </div>
    </div>
</section>

<style>
 /* Re-use styles where applicable */
  .page-header, .capability-intro, .cta-section { /* Basic structure */ }
  .page-header { text-align: center; padding: 8rem 0 6rem; border-bottom: 1px solid black; }
  .capability-intro { padding: 8rem 0; border-bottom: 1px solid black; }
  .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .intro-content .lead-text { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 500; line-height: 1.4; max-width: 700px; margin-bottom: 1rem; }
  .intro-content p:not(.lead-text) { font-size: 1.1rem; max-width: 700px; }
  .placeholder-img { width: 100%; background-color: #f0f0f0; border: 1px solid black; }
  .aspect-3-4 { aspect-ratio: 3 / 4; }
  .aspect-16-9 { aspect-ratio: 16 / 9; }
  .alt-bg { background-color: #f9f9f9; }
  .large-text { font-size: clamp(1.1rem, 1.8vw, 1.4rem); line-height: 1.6; }

  .cta-section { padding: 8rem 0; }
  .cta-section h2 { font-size: clamp(1.8rem, 3vw, 2.5rem); margin-bottom: 1.5rem; }
  .cta-section .lead-text.narrow { max-width: 600px; margin: 0 auto 2.5rem auto; font-size: clamp(1.1rem, 1.8vw, 1.4rem); }


  .core-services { padding: 8rem 0; border-bottom: 1px solid black; }
  .service-list.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columns for services */
    gap: 2rem 1.5rem;
    margin-top: 4rem;
  }
  .service-item {
    text-align: center;
  }
  .service-icon {
      display: block;
      font-size: 2.5rem; /* Larger icons */
      margin-bottom: 1rem;
  }
  .service-item h3 {
      font-size: 1rem;
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.05em;
  }
  .service-item p {
      font-size: 0.9rem;
      margin-bottom: 0;
      opacity: 0.8;
      line-height: 1.4;
  }

  .pioneer-section { padding: 8rem 0; border-bottom: 1px solid black; }
  .pioneer-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
  }
  .pioneer-content .section-title { margin-bottom: 1.5rem; }
  .pioneer-content .large-text { margin-bottom: 2rem; }
  .pioneer-content ul {
      list-style: none; padding: 0; margin: 0 0 1.5rem 0;
  }
  .pioneer-content li {
      position: relative; padding-left: 1.5rem; margin-bottom: 0.8rem; font-size: 1rem; line-height: 1.5;
  }
   .pioneer-content li::before {
       content: '\2022'; /* Bullet point */
       position: absolute; left: 0; top: 0.1em; color: black; font-weight: bold;
   }
   .pioneer-content p:last-of-type {
       font-weight: 500;
   }

  @media (max-width: 1024px) {
       .intro-grid { grid-template-columns: 1fr; }
       .intro-visual { order: -1; margin-bottom: 3rem; max-width: 400px; margin-left: auto; margin-right: auto; }
       .service-list.grid { grid-template-columns: repeat(2, 1fr); }
       .pioneer-grid { grid-template-columns: 1fr; }
       .pioneer-visual { order: -1; margin-bottom: 3rem; }
   }

   @media (max-width: 768px) {
       section { padding: 6rem 0; }
       .service-list.grid { grid-template-columns: 1fr; gap: 2.5rem;}
   }

</style> 