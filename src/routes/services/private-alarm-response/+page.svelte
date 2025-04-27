<script lang="ts">
  import { animateOnScroll } from '$lib/actions/animateOnScroll';
</script>

<svelte:head>
  <title>Private Alarm Response | Shield of Steel LLC</title>
  <meta name="description" content="Rapid, reliable 24/7 private alarm response service by trained SOS officers for immediate assessment and action.">
</svelte:head>

<section class="page-header">
  <div class="container">
    <h1>ALARM RESPONSE</h1>
    <p class="subtitle">Immediate Verification & Coordinated Action, 24/7</p>
  </div>
</section>

<section class="capability-intro">
  <div class="container">
     <div class="intro-content text-center narrow">
        <p class="lead-text">
           Eliminate costly false alarm fees and ensure genuine emergencies receive the fastest possible verified response with Shield of Steel's exclusive 24/7 private alarm monitoring and response service.
        </p>
      </div>
  </div>
</section>

<section class="response-process alt-bg">
    <div class="container">
        <h2 class="section-title" use:animateOnScroll={{ animationType: 'slideUp' }}>OUR RESPONSE PROTOCOL</h2>
        <div class="process-steps grid" use:animateOnScroll={{ animationType: 'fade', stagger: 0.15 }}>
            <div class="step">
                <div class="step-number">01</div>
                <div class="step-content">
                    <h4>ALARM TRIGGERED</h4>
                    <p>Your monitored alarm system signals an event at your facility.</p>
                </div>
            </div>
             <div class="step">
                <div class="step-number">02</div>
                <div class="step-content">
                    <h4>IMMEDIATE DISPATCH</h4>
                    <p>SOS dispatch instantly directs the nearest available patrol officer to your location.</p>
                </div>
            </div>
             <div class="step">
                <div class="step-number">03</div>
                 <div class="step-content">
                    <h4>ON-SITE ASSESSMENT</h4>
                    <p>Officer arrives within minutes, assesses the situation (exterior/interior checks as per protocol), and verifies the alarm cause.</p>
                 </div>
            </div>
             <div class="step">
                <div class="step-number">04</div>
                 <div class="step-content">
                    <h4>COORDINATED ACTION</h4>
                    <p>Appropriate authorities (police, fire) contacted immediately if a genuine emergency is verified. False alarms are reset.</p>
                 </div>
            </div>
             <div class="step">
                <div class="step-number">05</div>
                 <div class="step-content">
                    <h4>CLIENT NOTIFICATION</h4>
                    <p>You are promptly notified and advised of the situation and actions taken via your preferred contact method.</p>
                </div>
            </div>
             <div class="step">
                <div class="step-number">06</div>
                 <div class="step-content">
                    <h4>DETAILED REPORTING</h4>
                    <p>Comprehensive incident reports are filed for your records and insurance purposes.</p>
                </div>
            </div>
        </div>
         <!-- Placeholder for a simple flowchart graphic -->
         <div class="placeholder-img aspect-21-9" style="margin-top: 4rem;" use:animateOnScroll={{ animationType: 'fade', delay: 0.3 }}></div> 
    </div>
</section>

<section class="key-advantages">
    <div class="container">
        <h2 class="section-title text-center" use:animateOnScroll={{ animationType: 'slideUp' }}>KEY ADVANTAGES</h2>
        <div class="grid advantages-grid" use:animateOnScroll={{ animationType: 'fade', stagger: 0.1 }}>
            <div class="advantage-item">
                <span class="advantage-icon">&rarr;</span>
                <h3>Faster Response Times</h3>
                <p>Dedicated SOS officers often arrive faster than overburdened public services, especially for non-priority calls.</p>
            </div>
            <div class="advantage-item">
                <span class="advantage-icon">&rarr;</span>
                <h3>Reduced False Alarm Fees</h3>
                <p>Avoid hundreds or thousands in municipal fines by having alarms professionally verified before authorities are dispatched.</p>
            </div>
            <div class="advantage-item">
                <span class="advantage-icon">&rarr;</span>
                <h3>Trained Assessment</h3>
                <p>Security professionals assess the situation accurately, minimizing unnecessary escalation or disruption.</p>
            </div>
            <div class="advantage-item">
                <span class="advantage-icon">&rarr;</span>
                <h3>Peace of Mind</h3>
                <p>Know that any alarm event is being handled swiftly and professionally, 24 hours a day.</p>
            </div>
        </div>
    </div>
</section>


<section class="cta-section alt-bg">
    <div class="container text-center">
        <h2 use:animateOnScroll={{ animationType: 'slideUp' }}>IMPLEMENT RAPID ALARM RESPONSE</h2>
        <p class="lead-text narrow" use:animateOnScroll={{ animationType: 'slideUp', delay: 0.1 }}>Protect your property and bottom line. Contact us to integrate SOS private alarm response with your existing security system.</p>
        <div use:animateOnScroll={{ animationType: 'fade', delay: 0.2 }}>
           <a href="/contact?inquiry=alarm-response" class="btn btn-dark">Inquire About Alarm Response</a>
        </div>
    </div>
</section>

<style>
  /* Re-use styles where applicable */
  .page-header, .capability-intro, .cta-section { /* Basic structure like other pages */ }
  .page-header { text-align: center; padding: 8rem 0 6rem; border-bottom: 1px solid black; }
  .capability-intro { padding: 6rem 0; border-bottom: 1px solid black; }
  .intro-content.text-center.narrow { max-width: 700px; margin: 0 auto; }
  .lead-text { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 500; line-height: 1.4; }
  .cta-section { padding: 8rem 0; }
  .cta-section h2 { font-size: clamp(1.8rem, 3vw, 2.5rem); margin-bottom: 1.5rem; }
  .cta-section .lead-text.narrow { max-width: 600px; margin: 0 auto 2.5rem auto; font-size: clamp(1.1rem, 1.8vw, 1.4rem); }

  .alt-bg { background-color: #f9f9f9; }
  
  .placeholder-img { width: 100%; background-color: #f0f0f0; border: 1px solid black; }
  .aspect-21-9 { aspect-ratio: 21 / 9; }

  .response-process { padding: 8rem 0; border-bottom: 1px solid black; }
  .process-steps.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem 2rem;
    margin-top: 4rem;
    position: relative; /* Needed for pseudo-elements */
  }
  /* Add a subtle connecting line animation (can be enhanced with SVG/GSAP later) */
  .process-steps.grid::before {
      content: '';
      position: absolute;
      left: calc(33.33% + 1rem); /* Approx position between cols 1 & 2 */
      top: 1.2rem;
      bottom: calc(100% - 1.2rem - 14px); /* Stop near last dot */
      width: 2px;
      background-color: #ddd;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 1s ease-out 0.5s; /* Delay transition */
  }
  /* Second line for 3-col layout */
   .process-steps.grid::after {
      content: '';
      position: absolute;
      left: calc(66.66% + 1rem); /* Approx position between cols 2 & 3 */
      top: 1.2rem;
      bottom: calc(100% - 1.2rem - 14px);
      width: 2px;
      background-color: #ddd;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 1s ease-out 0.8s; /* Slightly later delay */
  }

  /* Trigger line animation when grid becomes visible */
  .process-steps.grid.gsap-active::before,
  .process-steps.grid.gsap-active::after {
       transform: scaleY(1);
  }

  .step {
    position: relative;
    padding: 1rem 0 1rem 0; /* Reset padding */
    border-left: none; /* Remove individual lines */
    opacity: 0; /* Start hidden for staggered fade */
  }
  .step::before {
      /* Keep dot style, adjust position if needed */
      content: '';
      position: absolute;
      left: -1rem; /* Example position */
      top: 0.2em;
      width: 14px;
      height: 14px;
      background-color: black;
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.4s ease-out;
  }
 
  /* Animate dot scale */
  .step.gsap-active::before {
       transform: scale(1);
  }

  .step-number {
      position: relative; /* Change positioning */
      left: 0;
      top: 0;
      font-size: 1.8rem;
      font-weight: 900;
      color: #ccc;
      display: block; /* Make it block */
      margin-bottom: 0.5rem;
  }

  .step-content h4 {
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
  }
  .step-content p {
      font-size: 0.95rem;
      margin-bottom: 0;
      opacity: 0.9;
  }

 .key-advantages { padding: 8rem 0; border-bottom: 1px solid black; }
 .advantages-grid {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     gap: 3rem 4rem;
     margin-top: 4rem;
 }
 .advantage-item {
     position: relative;
     padding-left: 2.5rem;
 }
 .advantage-icon {
     position: absolute;
     left: 0;
     top: 0.1em;
     font-size: 1.2rem;
     color: black;
     font-weight: bold;
 }
  .advantage-item h3 {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
  }
  .advantage-item p {
      font-size: 0.95rem;
      margin-bottom: 0;
      opacity: 0.9;
  }


  @media (max-width: 1024px) {
      .process-steps.grid::before, .process-steps.grid::after {
          left: 50%; /* Center line for 2-col */
      }
       .process-steps.grid::after { display: none; } /* Hide second line */
  }

  @media (max-width: 768px) {
       /* Remove lines on mobile, rely on fade */
       .process-steps.grid::before, .process-steps.grid::after { display: none; }
       .step { padding-left: 0; }
       .step::before { display: none; }
  }

</style> 