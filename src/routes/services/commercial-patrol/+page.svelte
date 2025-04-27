<script lang="ts">
  import { animateOnScroll } from '$lib/actions/animateOnScroll';
</script>

<svelte:head>
  <title>Commercial Patrol | Shield of Steel LLC</title>
  <meta name="description" content="Cost-effective scheduled and unscheduled commercial patrol services for property inspection, deterrence, and security presence.">
</svelte:head>

<section class="page-header">
  <div class="container">
    <h1>COMMERCIAL PATROL</h1>
    <p class="subtitle">Proactive Deterrence & Vigilant Oversight</p>
  </div>
</section>

<section class="capability-intro">
  <div class="container">
    <div class="grid intro-grid">
      <div class="intro-content">
        <p class="lead-text">
          Shield of Steel's commercial patrol services offer a visible, mobile security presence designed to deter threats, detect anomalies, and provide rapid response capabilities. A flexible and cost-effective solution for diverse commercial properties.
        </p>
      </div>
       <div class="intro-visual">
         <div class="placeholder-img aspect-16-9"></div> <!-- Placeholder visual -->
      </div>
    </div>
  </div>
</section>

<section class="patrol-options">
  <div class="container">
    <h2 class="section-title" use:animateOnScroll={{ animationType: 'slideUp' }}>PATROL SERVICE MODELS</h2>
    <div class="grid options-grid" use:animateOnScroll={{ animationType: 'fade', stagger: 0.1 }}>
      <div class="option-item">
        <span class="item-number">01</span>
        <h3>Scheduled Patrols</h3>
        <div class="item-line"></div>
        <p>Regular, timed patrols ensuring consistent security checks, lock-ups, and property inspections at predefined intervals. Ideal for compliance and routine oversight.</p>
      </div>
      <div class="option-item">
        <span class="item-number">02</span>
        <h3>Unscheduled / Random Patrols</h3>
         <div class="item-line"></div>
        <p>Variable timing patrols designed to maximize deterrence by creating unpredictability. Effective against targeted criminal activity and for demonstrating active security.</p>
      </div>
        <div class="option-item">
        <span class="item-number">03</span>
        <h3>Dedicated Vehicle Patrols</h3>
         <div class="item-line"></div>
        <p>Marked or unmarked vehicles assigned exclusively to your property or zone, providing a highly visible presence and faster internal response times.</p>
      </div>
    </div>
  </div>
</section>

<section class="core-services alt-bg">
  <div class="container">
    <h2 class="section-title" use:animateOnScroll={{ animationType: 'slideUp' }}>CORE PATROL SERVICES</h2>
    <div class="core-list grid" use:animateOnScroll={{ animationType: 'fade', stagger: 0.1 }}>
       <div class="core-item">
           <h4>Standard Patrol & Deterrence</h4>
           <p>Visible presence, perimeter checks, exterior inspections.</p>
       </div>
       <div class="core-item">
           <h4>Property Inspection</h4>
           <p>Detailed checks for damage, vandalism, unauthorized access, safety hazards.</p>
       </div>
        <div class="core-item">
           <h4>Security Escorts</h4>
           <p>Safe escort for employees or clients during vulnerable times (e.g., closing).</p>
       </div>
        <div class="core-item">
           <h4>Alarm/Emergency Response</h4>
           <p>Integration with alarm systems for rapid on-site verification and coordination.</p>
       </div>
       <div class="core-item">
           <h4>Lock-Up / Unlock Services</h4>
           <p>Secure opening and closing of facilities at specified times.</p>
       </div>
        <div class="core-item">
           <h4>Parking Enforcement</h4>
           <p>Monitoring lots, issuing warnings, coordinating towing per client policy.</p>
       </div>
    </div>
  </div>
</section>


<section class="benefits-section">
    <div class="container">
        <h2 class="section-title text-center" use:animateOnScroll={{ animationType: 'slideUp' }}>BENEFITS OF SOS PATROL</h2>
        <div class="grid benefits-grid">
            <div class="benefit-item" use:animateOnScroll={{ animationType: 'slideUp', delay: 0.1 }}>
                <span class="benefit-icon">&check;</span>
                <h3>Cost-Effective Security</h3>
                <p>Provides significant deterrence and oversight without the cost of full-time on-site personnel.</p>
            </div>
             <div class="benefit-item" use:animateOnScroll={{ animationType: 'slideUp', delay: 0.2 }}>
                <span class="benefit-icon">&check;</span>
                <h3>Increased Deterrence</h3>
                <p>Visible patrols, especially random ones, discourage trespassing, vandalism, and theft.</p>
            </div>
             <div class="benefit-item" use:animateOnScroll={{ animationType: 'slideUp', delay: 0.3 }}>
                <span class="benefit-icon">&check;</span>
                <h3>Rapid Anomaly Detection</h3>
                <p>Trained officers identify potential issues (security breaches, maintenance needs) before they escalate.</p>
            </div>
        </div>
    </div>
</section>

<section class="cta-section">
    <div class="container text-center">
        <h2 use:animateOnScroll={{ animationType: 'slideUp' }}>ENHANCE YOUR PROPERTY'S SECURITY</h2>
        <p class="lead-text narrow" use:animateOnScroll={{ animationType: 'slideUp', delay: 0.1 }}>Learn how our flexible commercial patrol solutions can be tailored to your property's specific needs and budget.</p>
        <div use:animateOnScroll={{ animationType: 'fade', delay: 0.2 }}>
           <a href="/contact?inquiry=commercial-patrol" class="btn btn-dark">Get a Patrol Quote</a>
        </div>
    </div>
</section>

<style>
  /* Re-use styles from security-officers where applicable */
  /* Page Header */
  .page-header { margin-top: 2rem; padding: 8rem 0 6rem; border-bottom: 1px solid black; text-align: center; }
  .page-header h1 { /* From app.css */ }
  .page-header .subtitle { /* From app.css */ }

  /* Intro */
  .capability-intro { padding: 8rem 0; border-bottom: 1px solid black; }
  .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .intro-content .lead-text { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 500; line-height: 1.4; margin-bottom: 0; max-width: 700px; }
  .placeholder-img { width: 100%; background-color: #f0f0f0; border: 1px solid black; }
  .aspect-16-9 { aspect-ratio: 16 / 9; }

  /* Patrol Options */
  .patrol-options { padding: 8rem 0; border-bottom: 1px solid black; }
  .options-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-top: 4rem; }
  .option-item { position: relative; padding-top: 2.5rem; }
  .option-item .item-number { position: absolute; top: 0; left: 0; font-size: 1.5rem; font-weight: 800; color: #ccc; line-height: 1; }
  .option-item h3 { font-size: 1.2rem; margin-bottom: 0.75rem; }
  .option-item .item-line { width: 3rem; height: 2px; background-color: black; margin-bottom: 1rem; }
  .option-item p { font-size: 0.95rem; margin-bottom: 0; opacity: 0.9; }

  /* Core Services */
  .core-services { padding: 8rem 0; border-bottom: 1px solid black; }
  .core-services.alt-bg { background-color: #f9f9f9; }
  .core-list.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem 2rem; margin-top: 4rem; }
  .core-item { background-color: white; border: 1px solid #eee; padding: 1.5rem; }
  .core-item h4 { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; }
  .core-item p { font-size: 0.9rem; opacity: 0.8; margin-bottom: 0; line-height: 1.4; }

  /* Benefits Section */
  .benefits-section { padding: 8rem 0; border-bottom: 1px solid black; }
  .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-top: 4rem; }
  .benefit-item { text-align: center; }
  .benefit-icon { display: block; font-size: 2rem; margin-bottom: 1rem; color: black; }
  .benefit-item h3 { font-size: 1.1rem; margin-bottom: 0.75rem; text-transform: uppercase; }
  .benefit-item p { font-size: 0.95rem; opacity: 0.9; margin-bottom: 0; }

  /* CTA Section */
  .cta-section { padding: 8rem 0; }
  .cta-section h2 { font-size: clamp(1.8rem, 3vw, 2.5rem); margin-bottom: 1.5rem; }
  .cta-section .lead-text.narrow { max-width: 600px; margin-left: auto; margin-right: auto; margin-bottom: 2.5rem; font-size: clamp(1.1rem, 1.8vw, 1.4rem); }

  /* Responsive */
   @media (max-width: 1024px) {
       .intro-grid { grid-template-columns: 1fr; }
       .intro-visual { order: -1; margin-bottom: 3rem; max-width: 500px; margin-left: auto; margin-right: auto; }
       .options-grid { grid-template-columns: 1fr; }
       .core-list.grid { grid-template-columns: repeat(2, 1fr); }
       .benefits-grid { grid-template-columns: 1fr; }
   }

   @media (max-width: 768px) {
       section { padding: 6rem 0; }
       .core-list.grid { grid-template-columns: 1fr; }
   }

</style> 