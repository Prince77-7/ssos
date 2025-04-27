<script lang="ts">
  import { onMount } from 'svelte'; // Keep onMount if form logic needs it later
  import { animateOnScroll } from '$lib/actions/animateOnScroll';

  // Restore form state variables and handler
  let formSubmitted = false;
  let name = '';
  let email = '';
  let organization = '';
  let message = '';
  let inquiryType = 'general';
  
  function handleSubmit() {
    console.log('Form submitted:', { name, email, organization, inquiryType, message });
    formSubmitted = true;
    setTimeout(() => { 
      name = '';
      email = '';
      organization = '';
      message = '';
      inquiryType = 'general';
    }, 500); 
  }
</script>

<svelte:head>
  <title>Contact | Shield of Steel LLC</title>
  <meta name="description" content="Contact Shield of Steel LLC to discuss your defense requirements and discover how our advanced security solutions can protect your operations.">
</svelte:head>

<!-- Page Header - NO ANIMATIONS HERE -->
<section class="page-header">
    <div class="container">
      <h1>CONTACT SOS</h1>
       <p class="subtitle">Connect with Our Global Defense Experts</p>
    </div>
</section>

<!-- Contact Intro - NO ANIMATIONS HERE -->
<section class="contact-intro">
    <div class="container">
      <div class="grid intro-grid">
        <div class="intro-content">
          <p class="lead-text">
            Ready to discuss how Shield of Steel can enhance your security posture? Our dedicated teams are prepared to address your most challenging defense requirements, from initial consultation to ongoing operational support.
          </p>
        </div>
      </div>
    </div>
</section>

<!-- Contact Main Section - Animations start here -->
<section class="contact-main" use:animateOnScroll={{ animationType: 'fade' }}>
   <div class="container">
     <div class="contact-grid">
       <div class="contact-info" use:animateOnScroll={{ animationType: 'slideRight', delay: 0.1, stagger: 0.1 }}>
         <div class="info-block">
           <h3>GENERAL INQUIRIES</h3>
           <div class="info-line"></div>
           <p>For general questions about Shield of Steel, our mission, and capabilities.</p>
           <p><a href="mailto:contact@shieldofsteel.com">contact@shieldofsteel.com</a></p>
         </div>
         
         <div class="info-block">
           <h3>SALES & SOLUTIONS</h3>
            <div class="info-line"></div>
           <p>To discuss specific requirements and explore tailored defense solutions.</p>
           <p><a href="mailto:sales@shieldofsteel.com">sales@shieldofsteel.com</a></p>
         </div>

          <div class="info-block">
           <h3>PARTNERSHIPS</h3>
           <div class="info-line"></div>
            <p>For inquiries regarding strategic alliances and technology partnerships.</p>
           <p><a href="mailto:partnerships@shieldofsteel.com">partnerships@shieldofsteel.com</a></p>
         </div>
         
         <div class="info-block">
           <h3>MEDIA RELATIONS</h3>
           <div class="info-line"></div>
           <p>For press inquiries, interviews, and media resources.</p>
           <p><a href="mailto:media@shieldofsteel.com">media@shieldofsteel.com</a></p>
         </div>

          <div class="info-block">
           <h3>CAREERS</h3>
           <div class="info-line"></div>
           <p>Explore opportunities to join our team of experts.</p>
           <p><a href="/careers">View Open Positions</a></p> <!-- Placeholder link -->
         </div>
       </div>
       
       <div class="contact-form-container" use:animateOnScroll={{ animationType: 'slideLeft', delay: 0.2 }}>
         {#if formSubmitted}
           <div class="form-success" use:animateOnScroll={{ animationType: 'fade' }}>
             <h3>MESSAGE RECEIVED</h3>
             <div class="success-line"></div>
             <p>Thank you for your inquiry. A Shield of Steel representative will contact you shortly regarding your {inquiryType} request.</p>
             <button class="btn btn-outline-dark" on:click={() => formSubmitted = false}>SEND ANOTHER MESSAGE</button>
           </div>
         {:else}
           <form on:submit|preventDefault={handleSubmit}>
             <div class="form-group">
                 <label for="inquiryType">INQUIRY TYPE</label>
                 <select id="inquiryType" name="inquiryType" bind:value={inquiryType} required>
                     <option value="general">General Inquiry</option>
                     <option value="sales">Sales & Solutions</option>
                     <option value="partnership">Partnership</option>
                     <option value="media">Media Relations</option>
                     <option value="career">Careers</option>
                     <option value="other">Other</option>
                 </select>
             </div>
             <div class="form-grid">
               <div class="form-group">
                 <label for="name">FULL NAME</label>
                 <input type="text" id="name" name="name" required bind:value={name} placeholder="Your Name">
               </div>
               
               <div class="form-group">
                 <label for="email">EMAIL ADDRESS</label>
                 <input type="email" id="email" name="email" required bind:value={email} placeholder="your.email@example.com">
               </div>
             </div>
             
             <div class="form-group">
               <label for="organization">ORGANIZATION (OPTIONAL)</label>
               <input type="text" id="organization" name="organization" bind:value={organization} placeholder="Your Company or Agency">
             </div>
             
             <div class="form-group">
               <label for="message">MESSAGE</label>
               <textarea id="message" name="message" required bind:value={message} placeholder="Please describe your inquiry..."></textarea>
             </div>
             
             <div class="form-notice">
               <p>All information submitted is handled according to our strict security protocols. We do not share your data with third parties without explicit consent.</p>
             </div>
             
             <button type="submit" class="btn btn-dark">SUBMIT INQUIRY</button>
           </form>
         {/if}
       </div>
     </div>
   </div>
</section>

<section class="global-offices" use:animateOnScroll={{ animationType: 'fade' }}>
   <div class="container">
     <h2 class="section-title" use:animateOnScroll={{ animationType: 'slideUp' }}>GLOBAL HEADQUARTERS & OPERATIONS</h2>
      <div class="grid offices-grid">
         <div class="hq-address" use:animateOnScroll={{ animationType: 'slideUp', delay: 0.1 }}>
             <h3>HEADQUARTERS</h3>
             <div class="office-line"></div>
             <address>
                 Shield of Steel LLC<br>
                 1100 Defense Boulevard<br>
                 Washington, D.C. 20001<br>
                 United States
             </address>
             <p>Secure facility. Visits by appointment only.</p>
         </div>
         <div class="regional-offices" use:animateOnScroll={{ animationType: 'fade', delay: 0.2, stagger: 0.1 }}>
              <h3>REGIONAL CENTERS</h3>
              <div class="office-line"></div>
             <div class="office-list">
               <div><span>NORTH AMERICA:</span> Silicon Valley</div>
               <div><span>EUROPE:</span> London, Brussels</div>
               <div><span>ASIA PACIFIC:</span> Tokyo, Singapore, Seoul, Sydney</div>
               <div><span>MIDDLE EAST & AFRICA:</span> Tel Aviv, Dubai, Nairobi</div>
               <div><span>LATIN AMERICA:</span> São Paulo</div>
             </div>
         </div>
      </div>
      <!-- Placeholder for a simplified global map or graphic -->
      <div class="map-placeholder" use:animateOnScroll={{ animationType: 'fade', delay: 0.3 }}></div>
   </div>
</section>

<style>
   /* Styles remain the same */
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
   
   .contact-intro {
     padding: 8rem 0;
     border-bottom: 1px solid black;
     text-align: center;
   }
 
   .intro-grid {
       display: block;
   }
   
   .intro-content {
     max-width: 800px;
     margin: 0 auto;
   }
   
   .lead-text {
     font-size: clamp(1.5rem, 2.5vw, 2rem);
     font-weight: 500;
     line-height: 1.4;
     margin-bottom: 0;
   }
   
   .contact-main {
     padding: 8rem 0;
     border-bottom: 1px solid black;
   }
   
   .contact-grid {
     display: grid;
     grid-template-columns: 1fr 1.5fr; /* Adjust ratio */
     gap: 5rem;
     align-items: flex-start;
   }
   
   .contact-info {
     display: grid;
     grid-template-columns: 1fr;
     gap: 2.5rem;
   }
   
   .info-block h3 {
     font-size: 1rem;
     letter-spacing: 0.05em;
     margin-bottom: 0.75rem;
     text-transform: uppercase;
   }
   
   .info-line {
     width: 2rem;
     height: 2px;
     background-color: black;
     margin-bottom: 1rem;
   }
   
   .info-block p,
   .info-block address {
     font-style: normal;
     line-height: 1.6;
     font-size: 0.95rem;
     margin-bottom: 0.5rem;
   }
 
   .info-block p:last-child {
       margin-bottom: 0;
   }
 
   .info-block a {
       font-weight: 500;
       text-decoration: underline;
       text-decoration-thickness: 1px;
       text-underline-offset: 3px;
       transition: color 0.2s ease;
   }
   .info-block a:hover {
       color: #555;
   }
   
   .form-grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 2rem;
   }
 
   select {
       width: 100%;
       padding: 1rem;
       border: 1px solid black;
       font-family: inherit;
       font-size: 1rem;
       background-color: white;
       appearance: none; /* Remove default arrow */
       background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E"); /* Custom arrow */
       background-repeat: no-repeat;
       background-position: right 1rem center;
       background-size: 1em;
       cursor: pointer;
   }
   
   .form-notice {
     margin: 2rem 0;
     font-size: 0.875rem;
     opacity: 0.7;
   }
   
   .form-success {
     background-color: white;
     border: 1px solid black;
     padding: 4rem 3rem;
     text-align: center;
   }
 
   .form-success h3 {
     font-size: 1.5rem;
     text-transform: uppercase;
   }
   
   .success-line {
     width: 4rem;
     height: 2px;
     background-color: black;
     margin: 1.5rem auto;
   }
   
   .form-success p {
     margin-bottom: 2rem;
     font-size: 1.1rem;
   }
   
   .global-offices {
     padding: 8rem 0;
     background-color: #f9f9f9;
   }
   
   .offices-grid {
     display: grid;
     grid-template-columns: 1fr 1.5fr;
     gap: 5rem;
     margin-top: 4rem;
     align-items: flex-start;
   }
 
   .hq-address h3,
   .regional-offices h3 {
     font-size: 1rem;
     letter-spacing: 0.05em;
     margin-bottom: 0.75rem;
     text-transform: uppercase;
   }
 
   .office-line {
     width: 2rem;
     height: 2px;
     background-color: black;
     margin-bottom: 1rem;
   }
 
   .hq-address address,
   .hq-address p {
       font-size: 0.95rem;
       margin-bottom: 0.5rem;
       font-style: normal;
   }
 
   .hq-address p:last-of-type {
       margin-top: 1rem;
       opacity: 0.7;
       font-size: 0.85rem;
   }
 
   .office-list {
       display: grid;
       grid-template-columns: 1fr;
       gap: 0.75rem;
   }
 
   .office-list div {
       font-size: 0.95rem;
   }
 
   .office-list span {
       font-weight: 600;
       display: inline-block;
       width: 120px; /* Adjust as needed */
   }
 
   .map-placeholder {
       width: 100%;
       aspect-ratio: 16 / 5;
       background-color: #e0e0e0;
       border: 1px solid black;
       margin-top: 4rem;
       animation: subtlePulse 4s infinite alternate ease-in-out;
   }

   @keyframes subtlePulse {
     from { opacity: 1; }
     to { opacity: 0.85; }
   }
   
   @media (max-width: 1024px) {
     .contact-grid {
       grid-template-columns: 1fr;
       gap: 4rem;
     }
     .contact-info {
         order: 1; /* Move info below form on medium screens */
         margin-top: 4rem;
     }
     .offices-grid {
       grid-template-columns: 1fr;
        gap: 3rem;
     }
     .regional-offices {
         margin-top: 2rem;
     }
   }
   
   @media (max-width: 640px) {
     section {
         padding: 6rem 0;
     }
     .form-grid {
       grid-template-columns: 1fr;
       gap: 0; /* Remove gap, rely on form-group margin */
     }
     .form-group {
         margin-bottom: 1.5rem;
     }
     .contact-main, .global-offices {
         padding: 6rem 0;
     }
     .office-list span {
         display: block;
         width: auto;
         margin-bottom: 0.25rem;
     }
   }
 </style>