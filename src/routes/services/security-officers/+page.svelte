<script lang="ts">
  import { animateOnScroll } from '$lib/actions/animateOnScroll';
</script>

<svelte:head>
  <title>Security Officers | Shield of Steel LLC</title>
  <meta name="description" content="Expertly trained, highly qualified armed and unarmed security officers providing premier protection services for diverse environments.">
</svelte:head>

<section class="page-header">
  <div class="container">
    <h1>SECURITY OFFICERS</h1>
    <p class="subtitle">Vigilance, Professionalism, Presence.</p>
  </div>
</section>

<section class="capability-intro">
  <div class="container">
    <div class="grid intro-grid">
      <div class="intro-content">
        <p class="lead-text">
          Shield of Steel officers represent the pinnacle of professional security. Rigorously selected, expertly trained, and impeccably prepared, they provide a reliable and authoritative presence tailored to your specific environment.
        </p>
      </div>
      <div class="intro-visual">
         <div class="placeholder-img aspect-3-4"></div> <!-- Placeholder visual -->
      </div>
    </div>
  </div>
</section>

<section class="service-areas">
  <div class="container">
    <h2 class="section-title" use:animateOnScroll={{ animationType: 'slideUp' }}>AREAS OF DEPLOYMENT</h2>
    <div class="service-list grid" use:animateOnScroll={{ animationType: 'fade', stagger: 0.1 }}>
      <div class="service-item">
        <span class="item-number">01</span>
        <h3>Corporate & Office Environments</h3>
        <p>Access control, welcoming guests/clients, asset protection, executive suite security.</p>
      </div>
      <div class="service-item">
        <span class="item-number">02</span>
        <h3>Industrial & Warehouse Facilities</h3>
        <p>Perimeter security, loss prevention, supply chain integrity checks, compliance monitoring.</p>
      </div>
      <div class="service-item">
        <span class="item-number">03</span>
        <h3>Parking & Access Control</h3>
        <p>Lot patrols, traffic management, restricted area enforcement, credential verification.</p>
      </div>
      <div class="service-item">
        <span class="item-number">04</span>
        <h3>Event & Conference Security</h3>
        <p>Crowd management, VIP protection, property security, access credentialing.</p>
      </div>
        <div class="service-item">
        <span class="item-number">05</span>
        <h3>Commercial Concierge</h3>
        <p>Combined security presence with high-level customer service and facility support.</p>
      </div>
       <div class="service-item">
        <span class="item-number">06</span>
        <h3>Custom Solutions</h3>
        <p>Tailored deployments based on unique threat assessments and operational needs.</p>
      </div>
    </div>
  </div>
</section>

<section class="training-support alt-bg">
  <div class="container">
    <div class="grid training-grid">
        <div class="training-content" use:animateOnScroll={{ animationType: 'slideUp' }}>
            <h2 class="section-title">QUALIFICATIONS & SUPPORT</h2>
            <p class="large-text">Our officers exceed industry standards through continuous development and robust operational oversight.</p>
            <ul>
                <li><strong>Elite Training:</strong> Comprehensive initial and ongoing training in tactics, de-escalation, emergency response, legal protocols, and client-specific procedures.</li>
                <li><strong>Armed & Unarmed:</strong> Fully qualified and licensed personnel available for both armed and unarmed postings based on threat level and requirements.</li>
                <li><strong>Supervisory Structure:</strong> A dedicated system of field supervisors performing regular assurance checks ensures adherence to protocols and optimal performance.</li>
                <li><strong>24/7 Dispatch Support:</strong> Officers are backed by a central dispatch, providing real-time communication, intelligence updates, and coordination capabilities.</li>
            </ul>
        </div>
        <div class="training-visual" use:animateOnScroll={{ animationType: 'fade', delay: 0.2 }}>
             <div class="placeholder-img aspect-16-9"></div> <!-- Placeholder visual -->
        </div>
    </div>
  </div>
</section>

<section class="cta-section">
    <div class="container text-center">
        <h2 use:animateOnScroll={{ animationType: 'slideUp' }}>SECURE YOUR ASSETS WITH SOS OFFICERS</h2>
        <p class="lead-text narrow" use:animateOnScroll={{ animationType: 'slideUp', delay: 0.1 }}>Discuss your specific security requirements with our specialists and receive a tailored deployment plan.</p>
        <div use:animateOnScroll={{ animationType: 'fade', delay: 0.2 }}>
           <a href="/contact?inquiry=security-officers" class="btn btn-dark">Request Consultation</a>
        </div>
    </div>
</section>

<style>
 /* Inherits most styles from app.css */

  .page-header {
    /* ... similar to other pages ... */
    margin-top: 2rem;
    padding: 8rem 0 6rem;
    border-bottom: 1px solid black;
    text-align: center;
  }
  .page-header h1 { /* Styles from app.css */ }
  .page-header .subtitle { /* Styles from app.css */ }

  .capability-intro {
    padding: 8rem 0;
    border-bottom: 1px solid black;
  }
  .intro-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  .intro-content .lead-text {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 0;
    max-width: 700px;
  }
  .placeholder-img {
     width: 100%;
     background-color: #f0f0f0;
     border: 1px solid black;
  }
  .aspect-3-4 { aspect-ratio: 3 / 4; }
  .aspect-16-9 { aspect-ratio: 16 / 9; }

  .service-areas {
    padding: 8rem 0;
    border-bottom: 1px solid black;
  }

  .service-list.grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem 2rem;
    margin-top: 4rem;
  }

  .service-item {
    position: relative;
    padding-top: 2.5rem; 
  }

  .item-number {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.5rem;
    font-weight: 800;
    color: #ccc;
    line-height: 1;
  }

  .service-item h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .service-item p {
    font-size: 0.95rem;
    margin-bottom: 0;
    opacity: 0.9;
  }

  .training-support {
    padding: 8rem 0;
    border-bottom: 1px solid black;
  }
  .training-support.alt-bg {
      background-color: #f9f9f9;
  }

  .training-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }

  .training-content .section-title {
      margin-bottom: 1.5rem;
  }

  .training-content .large-text {
    font-size: clamp(1.1rem, 1.8vw, 1.4rem);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .training-content ul {
      list-style: none;
      padding: 0;
      margin: 0;
  }
  .training-content li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 1.25rem;
      font-size: 1rem;
      line-height: 1.5;
  }
  .training-content li::before {
      content: '\2713'; /* Checkmark */
      position: absolute;
      left: 0;
      top: 0.1em;
      color: black;
      font-weight: bold;
  }

  .cta-section {
      padding: 8rem 0;
  }
  .cta-section h2 {
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      margin-bottom: 1.5rem;
  }
   .cta-section .lead-text.narrow {
       max-width: 600px;
       margin-left: auto;
       margin-right: auto;
       margin-bottom: 2.5rem;
   }

  @media (max-width: 1024px) {
      .intro-grid {
          grid-template-columns: 1fr;
      }
      .intro-visual {
          order: -1; margin-bottom: 3rem; max-width: 400px; margin-left: auto; margin-right: auto;
      }
      .service-list.grid {
          grid-template-columns: repeat(2, 1fr);
      }
       .training-grid {
          grid-template-columns: 1fr;
      }
       .training-visual {
           order: -1; margin-bottom: 3rem;
       }
  }

  @media (max-width: 768px) {
      section { padding: 6rem 0; }
      .service-list.grid {
           grid-template-columns: 1fr;
       }
  }
</style> 