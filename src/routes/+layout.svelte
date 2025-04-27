<script lang="ts">
  import { navigating, page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { onMount, onDestroy, setContext, tick } from 'svelte';
  import Preloader from '$lib/components/Preloader.svelte';
  import '../app.css';
  import MobileNav from '$lib/components/MobileNav.svelte';
  import { writable } from 'svelte/store';

  // Context key
  const HEADER_HEIGHT_KEY = Symbol();

  let currentPath: string;
  let isLoading = true;
  let isMounted = false; // Track mount state separately
  let showCapabilitiesMenu = false;
  let hideMenuTimeoutId: number | undefined = undefined; // Use undefined for clearer check
  let mobileMenuOpen = false; // State for mobile menu
  let isDarkRoute = false;
  
  let headerElement: HTMLElement;
  const headerHeight = writable(0); // Store for header height
  setContext(HEADER_HEIGHT_KEY, headerHeight); // Provide the store via context

  function handleMenuEnter() {
    // 1. Clear any existing hide timeout immediately
    if (typeof hideMenuTimeoutId === 'number') {
      clearTimeout(hideMenuTimeoutId);
      hideMenuTimeoutId = undefined; // Reset the ID
    }
    // 2. Show the menu
    showCapabilitiesMenu = true;
  }

  function handleMenuLeave() {
    // 1. Clear any *previous* timeout just in case (paranoid check)
     if (typeof hideMenuTimeoutId === 'number') {
      clearTimeout(hideMenuTimeoutId);
    }
    // 2. Set a *new* timeout to hide the menu after a longer delay
    hideMenuTimeoutId = setTimeout(() => {
      showCapabilitiesMenu = false;
      hideMenuTimeoutId = undefined; // Reset ID after timeout runs
    }, 300); // Increased delay to 300ms
  }

  // Keep focusout logic simple for now, rely on mouse leave mostly
  function handleFocusOut(event: FocusEvent) {
     // Basic check: if related target isn't within the nav item, hide after delay
     const navItem = event.currentTarget as HTMLElement;
     if (!navItem.contains(event.relatedTarget as Node)) {
         handleMenuLeave(); // Use the same delayed hide
     }
  }

  function openMobileMenu() {
    mobileMenuOpen = true;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  onMount(() => {
    // Function to update header height
    const updateHeaderHeight = () => {
      if (headerElement) {
        headerHeight.set(headerElement.clientHeight);
      }
    };

    // Initial measurement after mount and potential style changes
    tick().then(updateHeaderHeight);

    // Optional: Re-measure on resize if header height might change
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerElement) {
      resizeObserver.observe(headerElement);
    }
    
    currentPath = $page.url.pathname; // Use $page store directly
    // Increased delay before hiding preloader
    setTimeout(() => {
        isLoading = false;
    }, 500); // Increased from 100ms to 500ms
    isMounted = true; // Mark as mounted for content fade-in logic
    
    const handleNavigation = () => {
      currentPath = window.location.pathname;
    };
    window.addEventListener('popstate', handleNavigation);

    // Initial body class set on mount (needed for direct load/refresh)
    if (isDarkRoute) {
      document.body.classList.add('body-dark-theme');
    } else {
      document.body.classList.remove('body-dark-theme');
    }

    return () => {
      if (headerElement) resizeObserver.unobserve(headerElement);
      window.removeEventListener('popstate', handleNavigation);
      if (typeof hideMenuTimeoutId === 'number') clearTimeout(hideMenuTimeoutId); 
    };
  });

  // Function to close menu if clicked outside
  function handleClickOutside(event: MouseEvent) {
     const navElement = document.querySelector('nav .capabilities-nav-item');
     if (navElement && !navElement.contains(event.target as Node)) {
       showCapabilitiesMenu = false;
       if (typeof hideMenuTimeoutId === 'number') clearTimeout(hideMenuTimeoutId);
       hideMenuTimeoutId = undefined;
     }
  }

  // Reactive statement to close menu on route change
  $: if ($page.url.pathname && isMounted) { 
    showCapabilitiesMenu = false;
    if (typeof hideMenuTimeoutId === 'number') clearTimeout(hideMenuTimeoutId);
    hideMenuTimeoutId = undefined; // Ensure reset on nav
  }

  // Close desktop menu if mobile menu is opened (and vice-versa, though less likely)
  $: if (mobileMenuOpen) {
      showCapabilitiesMenu = false;
  }

  $: isDarkRoute = $page.url.pathname === '/pmc'; // Check if current route is /pmc

  // Apply/remove class to body reactively
  $: {
    if (typeof window !== 'undefined') { // Ensure code runs only in browser
      if (isDarkRoute) {
        document.body.classList.add('body-dark-theme');
      } else {
        document.body.classList.remove('body-dark-theme');
      }
    }
  }

  // Cleanup class on component destroy
  onDestroy(() => {
      if (typeof window !== 'undefined') { 
          document.body.classList.remove('body-dark-theme');
      }
  });
</script>

{#if isLoading}
  <div transition:fade={{ duration: 500 }}>
    <Preloader />
  </div>
{/if}

{#if mobileMenuOpen}
  <MobileNav on:close={closeMobileMenu} />
{/if}

<div class="layout" on:click={handleClickOutside}>
  <!-- Bind headerElement to get height -->
  <header bind:this={headerElement}>
    <div class="header-inner">
      <div class="logo">
        <a href="/">
          <div class="logo-container">
            <img src="/assets/logo.svg" alt="Shield of Steel LLC Logo" class="header-logo-img" />
          </div>
        </a>
      </div>
      <nav class="desktop-nav">
        <ul>
          <li class:active={$page.url.pathname === '/'}>
            <a href="/">HOME</a>
          </li>
          <li class:active={$page.url.pathname === '/about'}>
            <a href="/about">ABOUT</a>
          </li>
          <li 
            class="capabilities-nav-item" 
            class:active={$page.url.pathname.startsWith('/capabilities')} 
            on:mouseenter={handleMenuEnter} 
            on:mouseleave={handleMenuLeave} 
            on:focusin={handleMenuEnter} 
            on:focusout={handleFocusOut}
          >
            <a href="/services" aria-haspopup="true" aria-expanded={showCapabilitiesMenu}>
              SERVICES
              <svg class="chevron" viewBox="0 0 16 16" width="10" height="10" fill="currentColor"><path d="M8 11L3 6h10z"/></svg>
            </a>
            {#if showCapabilitiesMenu}
              <div 
                class="capabilities-menu" 
                transition:fade={{ duration: 200 }}
                on:mouseenter={handleMenuEnter} 
                on:mouseleave={handleMenuLeave}
              >
                <div class="menu-grid">
                  <div class="menu-column overview-link">
                    <a href="/services">
                      <strong>Services Overview</strong>
                      <p>Learn about our main service categories.</p>
                    </a>
                  </div>
                   <div class="menu-column">
                    <a href="/services#security-personnel">
                      <strong>Guard & Patrol</strong>
                      <p>On-site uniformed & mobile officers.</p>
                    </a>
                  </div>
                  <div class="menu-column">
                    <a href="/services#technology-monitoring">
                      <strong>Technology & Monitoring</strong>
                      <p>Surveillance, alarms & access control.</p>
                    </a>
                  </div>
                  <div class="menu-column">
                    <a href="/services#consulting-assessment">
                      <strong>Consulting & Assessment</strong>
                      <p>Risk analysis & security planning.</p>
                    </a>
                  </div>
                  <div class="menu-column">
                    <a href="/services#event-security">
                      <strong>Event Security</strong>
                      <p>Protection for gatherings of all sizes.</p>
                    </a>
                  </div>
                  <div class="menu-column">
                    <a href="/services#specialized-services">
                      <strong>Specialized Services</strong>
                      <p>Industry-specific security solutions.</p>
                    </a>
                  </div>
                  <div class="menu-column all-services-link">
                    <a href="/services/all">
                       <strong>View All Services &rarr;</strong>
                       <p>See our comprehensive list.</p>
                    </a>
                  </div>
                </div>
              </div>
            {/if}
          </li>
          <li class:active={$page.url.pathname === '/pmc'}>
            <a href="/pmc">PMC</a>
          </li>
          <li class:active={$page.url.pathname === '/contact'}>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <button class="mobile-menu-button" on:click={openMobileMenu} aria-label="Open navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
  
  <main>
    {#key $page.url.pathname}
      <div class="page-content">
        <slot />
      </div>
    {/key}
  </main>
  
  <footer>
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-info">
          <div class="footer-logo">
            <img src="/assets/icon.svg" alt="Shield of Steel Icon" width="40" height="40" />
          </div>
          <strong>SHIELD OF STEEL LLC</strong>
          <p>Defending the Future with Unmatched Precision</p>
        </div>
        <div class="footer-nav">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </div>
        <div class="footer-contact">
           <h4>GET IN TOUCH</h4>
           <p>contact@shieldofsteel.com</p>
           <p><a href="/contact" class="btn btn-outline-light btn-small">Contact Form</a></p>
           <p class="copyright">&copy; {new Date().getFullYear()} Shield of Steel LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</div>

<style>
  /* Layout structure */
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    overflow-x: hidden; /* Prevent horizontal scrollbars caused by animations */
  }
  
  main {
    flex: 1;
    position: relative; /* Needed for transition positioning */
  }

  /* Page Content Wrapper for Transitions */
  .page-content {
     width: 100%;
  }
  
  /* Header styling - Permanently Black */
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    /* Glassmorphism Effect - Darker */
    background-color: rgba(0, 0, 0, 0.9); /* Increased opacity to 90% */
    backdrop-filter: blur(8px); /* Slightly reduced blur intensity */
    -webkit-backdrop-filter: blur(8px); 
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Even softer border */
  }
  
  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0.25rem 2rem;
  }
  
  .logo a {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
  }
  
  .logo-container {
    height: 40px;
    display: flex;
    align-items: center;
  }
  
  .header-logo-img {
    height: 100%;
    width: auto;
    /* mix-blend-mode works on black bg, should show white */
    mix-blend-mode: difference; 
    filter: none; 
  }
  
  /* Navigation */
  nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav a {
    text-decoration: none;
    color: white; /* Permanently white */
    font-weight: 500;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    padding: 0.5rem 0;
    border-bottom: 2px solid transparent;
    position: relative;
    display: inline-flex; /* Align chevron */
    align-items: center;
    gap: 0.3em;
  }

  nav a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: white; /* Permanently white underline */
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  nav a:hover::after,
  nav li.active a::after {
     transform: scaleX(1);
     transform-origin: bottom left;
  }
  
  nav li.active a {
    font-weight: 700;
  }
  
  /* Footer styling */
  footer {
    margin-top: 4rem;
    padding: 4rem 0;
    background-color: black; /* Dark footer */
    color: white; /* White text */
  }
  
  .footer-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem; /* Increased gap */
  }

  .footer-grid h4 {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 1.5rem;
      font-weight: 600;
  }
  
  .footer-logo {
    margin-bottom: 1.5rem; /* Increased margin */
  }

  .footer-logo img {
     /* No filter needed on black bg */
  }

  .footer-info strong {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 700;
  }

  .footer-info p {
      font-size: 0.95rem;
      opacity: 0.8;
      margin-bottom: 0;
  }
  
  .footer-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .footer-nav li {
    margin-bottom: 0.75rem; /* Increased spacing */
  }
  
  .footer-nav a {
    text-decoration: none;
    color: white; /* White links */
    font-size: 0.9rem; /* Slightly larger */
    letter-spacing: 0.05em;
     transition: color 0.2s ease;
  }

  .footer-nav a:hover {
      color: #aaa; /* Subtle hover effect */
  }
  
  .footer-contact {
    text-align: left; /* Align left for consistency */
  }

  .footer-contact p {
      margin-bottom: 1rem;
  }

  .footer-contact .btn-small {
      padding: 0.6rem 1.2rem;
      font-size: 0.8rem;
  }

  .copyright {
      margin-top: 2rem;
      font-size: 0.8rem;
      opacity: 0.6;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    main {
        /* Remove padding-top: 80px; here too */
    }
    .header-inner {
      flex-direction: row; /* Keep logo and button side-by-side */
      justify-content: space-between; /* Push button to right */
      padding: 0.25rem 1rem; 
    }
    .logo-container {
        height: 35px; 
        margin-bottom: 0; /* Remove bottom margin */
    }
    nav ul {
      gap: 0;
    }
    nav a {
        font-size: 0.85rem; /* Adjust nav font size */
    }
    /* No need for specific mobile color rules, inherits from desktop */

    nav a::after {
        bottom: 0px;
    }
    
    .footer-grid {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2.5rem;
    }
    .footer-contact, .footer-nav {
      text-align: center;
    }
     .footer-grid h4 {
         margin-bottom: 1rem;
     }
     .footer-logo {
         margin: 0 auto 1.5rem auto; /* Center logo */
         width: fit-content;
     }
    .capabilities-nav-item .chevron {
      display: none; /* Hide chevron on mobile */
    }
    .capabilities-menu {
      display: none; /* Hide mega menu on mobile - needs alternative display */
      /* TODO: Implement mobile dropdown/accordion or link directly */
    }
    .desktop-nav {
        display: none !important; /* Hide desktop nav forcefully */
    }
    .mobile-menu-button {
        display: block !important; /* Show mobile button forcefully */
    }
    /* Adjust header layout for mobile */
    .header-inner {
        flex-direction: row; /* Keep logo and button side-by-side */
        justify-content: space-between; /* Push button to right */
        padding: 0.25rem 1rem; 
    }
    .logo-container {
        height: 35px; 
        margin-bottom: 0; /* Remove bottom margin */
    }
    nav ul { /* Reset desktop nav styles affecting mobile */
      gap: 0;
    }
    /* Ensure mobile menu overlay takes priority */
    header { 
        position: fixed; /* Keep fixed on mobile */
    }
  }

  /* Navigation Enhancements */
  .capabilities-nav-item {
    position: relative; /* For menu positioning */
  }

  .chevron {
    transition: transform 0.2s ease-out;
  }

  .capabilities-nav-item:hover .chevron,
  .capabilities-nav-item:focus-within .chevron {
     transform: rotate(180deg);
  }

  /* Capabilities Mega Menu */
  .capabilities-menu {
    position: absolute;
    top: 100%;
    /* Align right edge of menu with right edge of parent LI */
    right: 0; 
    /* Remove left/transform */
    left: auto; 
    transform: none;
    background-color: white; 
    color: black; 
    border: 1px solid black;
    margin-top: 0; 
    padding: 2rem;
    min-width: 550px; 
    width: max-content; 
    max-width: calc(100vw - 4rem); 
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    z-index: 101; 
    opacity: 1; 
    border-radius: 4px; 
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem 1.5rem;
  }

  .menu-column a {
    display: block;
    padding: 0.5rem;
    text-decoration: none;
    color: black;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }

  .menu-column a:hover {
      background-color: #f0f0f0;
  }

  .menu-column strong {
    display: block;
    font-weight: 600;
    margin-bottom: 0.25rem;
    font-size: 0.9rem;
  }

  .menu-column p {
    font-size: 0.85rem;
    opacity: 0.8;
    margin-bottom: 0;
    line-height: 1.4;
  }

  .menu-column.overview-link {
    grid-column: 1 / -1;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .menu-column.overview-link a {
    background-color: #f9f9f9;
  }
  .menu-column.overview-link a:hover {
     background-color: #eee;
  }

  .menu-column.all-services-link {
    grid-column: 1 / -1; /* Make it full width */
    margin-top: 1rem; /* Add space above */
    padding-top: 1rem; /* Add space above */
    border-top: 1px solid #e0e0e0; /* Separator line */
  }

  .menu-column.all-services-link a {
    background-color: transparent; /* Different background */
    font-weight: 600;
  }
  
  .menu-column.all-services-link a:hover {
     background-color: #f0f0f0;
  }

  .mobile-menu-button {
      display: none;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      z-index: 101;
  }

  .mobile-menu-button span {
      display: block;
      width: 24px;
      height: 2px;
      background-color: white;
      margin: 5px 0;
      transition: background-color 0.3s ease;
  }

  /* Mobile Navigation Adjustments & Menu Responsiveness */
  @media (max-width: 768px) {
    .capabilities-menu {
      display: none; 
    }
    /* ... other mobile styles ... */
  }

  /* Adjust grid layout on medium screens, positioning is handled above */
  @media (max-width: 800px) { 
    .menu-grid {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
        gap: 1rem 1.5rem;
    }
    .menu-column.overview-link {
        grid-column: 1 / -1;
    }
    /* Removed positioning overrides for .capabilities-menu */
  }

  /* Global style to target body when class is present */
  :global(body.body-dark-theme) {
    background-color: black !important; /* Force override */
    color: #ccc; /* Set a base light text color */
  }

  /* Ensure layout itself is transparent when body is dark */
  .layout {
     /* background-color: transparent; */ /* Usually default, but be explicit if needed */
  }
  main {
     /* background-color: transparent; */ /* Ensure main doesn't override body */
  }

  /* Adjust header/footer borders etc. if needed based on body */
  :global(body.body-dark-theme) header {
      border-bottom-color: rgba(255, 255, 255, 0.15);
  }
  :global(body.body-dark-theme) footer {
       border-top: 1px solid rgba(255, 255, 255, 0.1);
       background-color: black; /* Keep footer black */
       color: white;
   }
   :global(body.body-dark-theme) .footer-nav a {
       color: white;
   }
   /* ... potentially other global overrides if base styles interfere ... */
</style>