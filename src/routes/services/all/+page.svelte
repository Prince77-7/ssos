<script lang="ts">
  import { slide } from 'svelte/transition'; // Import transition

  // State to track the currently expanded service ID
  let expandedServiceId: string | null = null;

  // Function to toggle the expanded state (only one open at a time)
  function toggleService(serviceId: string) {
    if (expandedServiceId === serviceId) {
      expandedServiceId = null; // Close if already open
    } else {
      expandedServiceId = serviceId; // Open the clicked one
    }
  }

  // --- SEO-Optimized Service Data ---
  // (Descriptions incorporate keywords like 'security services Knoxville', 'Tennessee security', etc.)

  const serviceCategories = [
    {
      category: 'Guard & Patrol Services',
      idPrefix: 'guard',
      services: [
        { id: 'guard1', name: 'Uniformed Security Officers (Unarmed)', description: 'Highly visible, professional unarmed security officers providing effective deterrence, access control, and rapid response for businesses and properties in Knoxville and throughout Tennessee. Ideal for corporate offices, retail, and residential communities requiring reliable on-site security.' },
        { id: 'guard2', name: 'Armed Security Officers', description: 'Specially trained and licensed armed security personnel for high-risk environments in Tennessee. Our armed guards provide superior protection for financial institutions, high-value assets, and situations demanding an elevated security presence.' },
        { id: 'guard3', name: 'Mobile Patrol Services', description: 'Cost-effective security patrols for properties across Tennessee. Our marked vehicles perform regular, randomized checks, providing visible deterrence and quick response for construction sites, parking lots, and business parks, especially during off-hours.' },
        { id: 'guard4', name: 'Reception & Concierge Security', description: 'Professional front-desk security combining vigilant protection with excellent customer service. Our concierge officers manage visitor access, monitor activity, and enhance the safety and image of your Knoxville building.' },
        { id: 'guard5', name: 'Loss Prevention Specialists', description: 'Reduce shrinkage and protect assets with our expert loss prevention services for Tennessee retailers. We employ discreet tactics and surveillance to identify and mitigate internal and external theft.' },
        { id: 'guard6', name: 'Fire Watch Services', description: 'Ensure safety and compliance during fire system impairments with our dedicated fire watch personnel. Available 24/7 throughout Tennessee to monitor premises and alert emergency services if needed.' },
        { id: 'guard7', name: 'Plainclothes / Undercover Officers', description: 'Discreet security solutions using plainclothes officers for surveillance, internal investigations, or situations where a low-profile presence is preferred in Tennessee.' },
        { id: 'guard8', name: 'Gatehouse Security', description: 'Professional management of entry and exit points for industrial facilities, gated communities, and distribution centers in the Knoxville area, ensuring authorized access only.' },
      ]
    },
    {
        category: 'Technology & Monitoring',
        idPrefix: 'tech',
        services: [
            { id: 'tech1', name: 'CCTV & Video Surveillance Systems', description: 'State-of-the-art HD video surveillance camera installation and maintenance in Knoxville. Custom-designed systems for optimal coverage, remote viewing capabilities, and clear evidence capture.' },
            { id: 'tech2', name: '24/7 Alarm Monitoring Center', description: 'Our Tennessee-based monitoring center provides round-the-clock vigilance, responding immediately to alarm signals from intrusion, fire, or panic systems by verifying threats and dispatching authorities.' },
            { id: 'tech3', name: 'Remote Video Monitoring / Virtual Guarding', description: 'Affordable, proactive security using live video monitoring combined with audio warnings. Our virtual guards watch your Knoxville property remotely, deterring crime before it happens.' },
            { id: 'tech4', name: 'Access Control Systems (Keycard, Biometric)', description: 'Secure your premises with advanced access control solutions. We install and manage keycard, fob, and biometric systems to restrict entry and track access throughout your Tennessee facility.' },
            { id: 'tech5', name: 'Intrusion Detection & Alarm Systems', description: 'Protect your property with professionally installed burglar alarm and intrusion detection systems, including door/window sensors, motion detectors, and glass break sensors, monitored 24/7.' },
            { id: 'tech6', name: 'Alarm Response Verification', description: 'Reduce false alarm fees with our patrol officers who respond to alarm triggers at your Tennessee property to verify the situation before contacting emergency services.' },
            { id: 'tech7', name: 'Drone Surveillance Services', description: 'Utilize advanced aerial surveillance with drone technology for large properties, construction sites, or special events in the Knoxville region, offering unique oversight capabilities.' },
            { id: 'tech8', name: 'GPS Tracking (Assets/Vehicles)', description: 'Monitor valuable assets and vehicle fleets with reliable GPS tracking solutions, enhancing security and logistics management for Tennessee businesses.' },
        ]
    },
     {
        category: 'Consulting & Assessment',
        idPrefix: 'consult',
        services: [
            { id: 'consult1', name: 'Security Risk Assessment', description: 'Identify potential threats and weaknesses with our comprehensive security risk assessments for Tennessee businesses. We evaluate physical security, procedures, and provide actionable recommendations.' },
            { id: 'consult2', name: 'Custom Security Plan Development', description: 'Receive a tailored security strategy based on a thorough assessment of your Knoxville property\'s specific needs, risks, and budget, ensuring optimal protection.' },
            { id: 'consult3', name: 'Threat & Vulnerability Analysis', description: 'Expert analysis of potential threats, from internal risks to external factors, specific to your industry and location in Tennessee, helping you prioritize security measures.' },
            { id: 'consult4', name: 'Emergency Preparedness Planning', description: 'Develop robust emergency action plans for various scenarios including fire, medical emergencies, active threats, and natural disasters, ensuring your Knoxville team is prepared.' },
            { id: 'consult5', name: 'Security Policy Development', description: 'Strengthen your internal security framework by letting our Tennessee experts assist in creating or refining clear, effective security policies and procedures.' },
            { id: 'consult6', name: 'Compliance Audits (Physical Security)', description: 'Ensure your physical security measures meet industry-specific regulations and compliance standards (e.g., HIPAA, CTPAT) through detailed audits.' },
            { id: 'consult7', name: 'Security Awareness Training', description: 'Educate your Tennessee employees on security best practices, threat recognition, and proper response procedures to create a more security-conscious workforce.' },
            { id: 'consult8', name: 'Workplace Violence Prevention Consulting', description: 'Proactive strategies and training designed to identify warning signs, de-escalate conflicts, and prevent workplace violence incidents in Knoxville businesses.' },
        ]
    },
    {
        category: 'Event Security',
        idPrefix: 'event',
        services: [
            { id: 'event1', name: 'Crowd Management & Control', description: 'Professional, courteous crowd management for concerts, festivals, and large gatherings in Tennessee, ensuring safety, order, and a positive guest experience.' },
            { id: 'event2', name: 'Access Control & Screening (Events)', description: 'Secure event entry points with thorough but efficient screening, ticket verification, and credential checks conducted by our trained Knoxville event staff.' },
            { id: 'event3', name: 'VIP & Talent Protection (Events)', description: 'Discreet, professional security details for speakers, performers, athletes, and other VIPs attending events in the Tennessee area, ensuring their safety and privacy.' },
            { id: 'event4', name: 'Event Security Planning & Coordination', description: 'Comprehensive pre-event planning, risk assessment, and coordination with venue staff and local authorities for seamless event security execution in Knoxville.' },
            { id: 'event5', name: 'Parking Lot Security (Events)', description: 'Dedicated patrols and monitoring for event parking areas to deter vehicle break-ins, manage traffic flow, and ensure guest safety upon arrival and departure.' },
            { id: 'event6', name: 'Emergency Coordination (Events)', description: 'Establish clear communication channels and response protocols, liaising directly with Knoxville emergency services for rapid coordination during event incidents.' },
            { id: 'event7', name: 'Festival & Concert Security', description: 'Specialized security teams experienced in handling the unique challenges of large-scale music festivals and concerts across Tennessee.' },
            { id: 'event8', name: 'Corporate Event Security', description: 'Professional, low-profile security for corporate meetings, conferences, and private functions in Knoxville, ensuring safety without disrupting the event atmosphere.' },
        ]
    },
     {
        category: 'Specialized Industry Services',
        idPrefix: 'special',
        services: [
            { id: 'special1', name: 'Construction Site Security', description: 'Protect valuable tools, equipment, and materials from theft and vandalism on Tennessee construction sites with patrols, monitoring, and access control.' },
            { id: 'special2', name: 'Retail Security Solutions', description: 'Comprehensive security for Knoxville retail stores, including uniformed guards, loss prevention specialists, and CCTV systems to reduce shrinkage and enhance safety.' },
            { id: 'special3', name: 'Healthcare Facility Security', description: 'Specialized security services ensuring patient safety, staff security, and controlled access within hospitals, clinics, and medical facilities in Tennessee.' },
            { id: 'special4', name: 'Educational Campus Security', description: 'Creating safe learning environments for schools, colleges, and universities in the Knoxville area through visible patrols, access control, and emergency response planning.' },
            { id: 'special5', name: 'Warehouse & Logistics Security', description: 'Secure Tennessee distribution centers, warehouses, and supply chain operations against internal/external theft, manage access, and monitor shipments.' },
            { id: 'special6', name: 'Hospitality Security (Hotels/Resorts)', description: 'Ensure guest safety, manage access, patrol premises, and protect assets for hotels, resorts, and hospitality venues in Knoxville and surrounding areas.' },
            { id: 'special7', name: 'Financial Institution Security', description: 'Highly trained armed and unarmed officers providing superior protection for banks, credit unions, and financial facilities throughout Tennessee.' },
            { id: 'special8', name: 'Executive & VIP Protection Details', description: 'Discreet, personalized security services for executives, celebrities, and high-net-worth individuals in Tennessee, ensuring safety during travel, work, and public appearances.' },
            { id: 'special9', name: 'High-Value Asset Transport', description: 'Secure, monitored transportation services for cash, jewelry, art, pharmaceuticals, and other high-value goods across Tennessee.' },
            { id: 'special10', name: 'Government Facility Security', description: 'Providing cleared security personnel and implementing stringent protocols for local, state, and federal government buildings in the Knoxville region.' },
            { id: 'special11', name: 'Data Center Security', description: 'Multi-layered physical security solutions, including access control, surveillance, and personnel screening, to protect critical data infrastructure in Tennessee.' },
            { id: 'special12', name: 'Manufacturing Plant Security', description: 'Protecting industrial sites in Knoxville from theft, sabotage, and unauthorized access with robust security measures including patrols and monitoring.' },
        ]
    }
  ];

</script>

<svelte:head>
  <title>All Security Services | Shield of Steel LLC</title>
  <meta name="description" content="View a comprehensive list of professional security services offered by Shield of Steel LLC in Tennessee, including guard services, technology, consulting, event security, and specialized solutions.">
</svelte:head>

<section class="page-header">
  <div class="container">
    <h1>ALL SECURITY SERVICES</h1>
    <p class="subtitle">A Comprehensive Overview of Our Protection Capabilities</p>
  </div>
</section>

<section class="all-services-list">
  <div class="container">

    {#each serviceCategories as category (category.category)}
      <div class="service-category">
        <h2>{category.category}</h2>
        <div class="service-grid">
          {#each category.services as service (service.id)}
            <div 
              class="service-item-container" 
              class:expanded={expandedServiceId === service.id}
            >
              <button 
                class="service-item" 
                on:click={() => toggleService(service.id)}
                aria-expanded={expandedServiceId === service.id}
                aria-controls="desc-{service.id}"
              >
                {service.name}
                <span class="plus-minus">{expandedServiceId === service.id ? '−' : '+'}</span>
              </button>
              {#if expandedServiceId === service.id}
                <div 
                  class="service-description" 
                  id="desc-{service.id}"
                  transition:slide={{ duration: 300 }}
                >
                  <p>{service.description}</p>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/each}

  </div>
</section>

<!-- Floating Contact Button -->
<a href="/contact" class="floating-contact-btn" title="Contact Us">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
  <span>Contact Us</span>
</a>

<style>
  .page-header {
    margin-top: 2rem;
    padding: 8rem 0 6rem;
    border-bottom: 1px solid black;
    text-align: center;
  }
  
  .page-header h1 {
    font-size: clamp(3.0rem, 7vw, 5rem); /* Slightly smaller */
    font-weight: 900;
    line-height: 1;
    margin: 0 0 1rem 0;
    text-transform: uppercase;
  }

   .page-header .subtitle {
      font-size: clamp(1.1rem, 1.8vw, 1.4rem); /* Slightly smaller */
      font-weight: 500;
      max-width: 600px;
      margin: 0 auto;
      opacity: 0.9;
  }
  
  .all-services-list {
    padding: 6rem 0;
  }

  .service-category {
    margin-bottom: 4rem;
  }

  .service-category h2 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 2rem;
    border-bottom: 2px solid black;
    padding-bottom: 0.5rem;
    display: inline-block;
  }

  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  /* Container for button + description */
  .service-item-container {
    background-color: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-left: 4px solid black;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
    overflow: hidden; /* Important for transition */
  }

  .service-item {
    /* Resetting styles as it's now a button */
    background: none;
    border: none;
    padding: 1.25rem 1.5rem;
    width: 100%;
    text-align: left;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    display: flex; /* For plus/minus sign alignment */
    justify-content: space-between; /* Push plus/minus to right */
    align-items: center;
    color: inherit; /* Inherit color from container */
  }
  
  .plus-minus {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1;
    margin-left: 1rem;
  }

  .service-item-container:hover {
     border-left-color: #555;
     background-color: #f0f0f0;
  }

  /* Expanded state */
  .service-item-container.expanded {
      background-color: black;
      border-color: black;
      color: white;
  }
  .service-item-container.expanded .service-item {
      font-weight: 600; /* Make title bold when expanded */
  }

  /* Description Styling */
  .service-description {
      padding: 0 1.5rem 1.25rem 1.5rem; /* Padding excluding top */
      margin-top: -0.5rem; /* Pull up slightly */
      font-size: 0.9rem;
      line-height: 1.6;
      color: inherit; /* Inherit color from container (white when expanded) */
      border-top: 1px dashed rgba(255, 255, 255, 0.2); /* Subtle separator */
      padding-top: 1rem;
  }
   .service-item-container:not(.expanded) .service-description {
       border-top: none; /* No border when collapsed */
   }

  @media (max-width: 768px) {
       .page-header {
           padding: 6rem 0 4rem;
       }
       .all-services-list {
           padding: 4rem 0;
       }
       .service-category h2 {
           font-size: 1.6rem;
       }
        .service-grid {
           grid-template-columns: 1fr; /* Stack items */
           gap: 1rem;
       }
       .service-item {
           padding: 1rem 1.25rem;
       }
       .service-description {
           padding: 0 1.25rem 1rem 1.25rem;
       }
   }

  /* Floating Contact Button */
  .floating-contact-btn {
    position: fixed;
    bottom: 2rem;
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Adjust for exact centering */
    /* Glassmorphism Effect */
    background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent dark */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); 
    border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle light border */
    color: white;
    padding: 0.8rem 1.5rem; /* Adjusted padding */
    border-radius: 50px; /* Pill shape */
    text-decoration: none;
    font-weight: 600;
    display: inline-flex; 
    align-items: center; 
    gap: 0.5rem; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.15); /* Slightly softer shadow */
    transition: transform 0.2s ease-out, background-color 0.2s ease-out, box-shadow 0.2s ease-out;
    z-index: 50;
  }

  .floating-contact-btn:hover {
    transform: translateX(-50%) translateY(-3px); /* Keep centering on hover */
    background-color: rgba(0, 0, 0, 0.5); /* Darken slightly on hover */
    box-shadow: 0 6px 16px rgba(0,0,0,0.25);
  }

  .floating-contact-btn svg {
    width: 1.2em;
    height: 1.2em;
  }

  /* Adjust mobile view to keep pill shape centered */
  @media (max-width: 768px) {
     .floating-contact-btn {
        padding: 0.6rem 1.2rem; /* Smaller padding for mobile */
        bottom: 1.5rem;
        /* Centering is inherited */
        border-radius: 50px; /* Keep pill shape */
      }
     .floating-contact-btn span {
        display: inline; /* Keep text on mobile, button wider */
        font-size: 0.9rem; /* Slightly smaller text */
      }
     .floating-contact-btn svg {
        width: 1.1em; 
        height: 1.1em;
      }
  }

</style> 