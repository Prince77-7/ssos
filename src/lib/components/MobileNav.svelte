<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  function closeNav() {
    dispatch('close');
  }

  // Basic accordion for capabilities - could be enhanced
  let capabilitiesOpen = false;
</script>

<div class="mobile-nav-overlay" transition:fade={{ duration: 300 }}>
  <div class="mobile-nav-content">
    <button class="close-btn" on:click={closeNav} aria-label="Close navigation menu">
      &times; <!-- Simple close icon -->
    </button>

    <ul>
      <li><a href="/" on:click={closeNav}>HOME</a></li>
      <li><a href="/about" on:click={closeNav}>ABOUT</a></li>
      <li>
        <button class="capabilities-toggle" on:click={() => capabilitiesOpen = !capabilitiesOpen} aria-expanded={capabilitiesOpen}>
          SERVICES
          <svg class:open={capabilitiesOpen} viewBox="0 0 16 16" width="10" height="10" fill="currentColor"><path d="M8 11L3 6h10z"/></svg>
        </button>
        {#if capabilitiesOpen}
          <ul class="submenu">
             <li><a href="/services" on:click={closeNav}>Overview</a></li>
             <li><a href="/services#security-personnel" on:click={closeNav}>Guard & Patrol</a></li>
             <li><a href="/services#technology-monitoring" on:click={closeNav}>Technology & Monitoring</a></li>
             <li><a href="/services#consulting-assessment" on:click={closeNav}>Consulting & Assessment</a></li>
             <li><a href="/services#event-security" on:click={closeNav}>Event Security</a></li>
             <li><a href="/services#specialized-services" on:click={closeNav}>Specialized Services</a></li>
             <li><a href="/services/all" on:click={closeNav}>View All Services</a></li>
          </ul>
        {/if}
      </li>
      <li><a href="/pmc" on:click={closeNav}>PMC</a></li>
      <li><a href="/contact" on:click={closeNav}>CONTACT</a></li>
    </ul>
  </div>
</div>

<style>
  .mobile-nav-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.95); /* Slightly transparent black */
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    color: white;
  }

  .mobile-nav-content {
    margin: auto;
    width: 100%;
    max-width: 400px; /* Limit width on larger mobile */
    text-align: center;
  }

  .close-btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: white;
    font-size: 2.5rem;
    line-height: 1;
    cursor: pointer;
    padding: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1.5rem; /* Space between main items */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1.5rem;
  }

  li:last-child {
      border-bottom: none;
  }

  a,
  .capabilities-toggle {
    display: block;
    font-size: 1.5rem; /* Large, tappable links */
    font-weight: 700;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: none;
    border: none;
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  .capabilities-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
  }

  .capabilities-toggle svg {
    transition: transform 0.2s ease-out;
  }
  .capabilities-toggle svg.open {
    transform: rotate(180deg);
  }

  .submenu {
      margin-top: 1rem;
      padding-left: 1rem; /* Indent submenu */
      border-left: 1px solid rgba(255, 255, 255, 0.2);
  }

  .submenu li {
      margin-bottom: 0.8rem;
      padding-bottom: 0.8rem;
      border-bottom: none;
  }

  .submenu a {
      font-size: 1.1rem; /* Smaller submenu links */
      font-weight: 500;
      text-transform: none;
      opacity: 0.9;
  }
</style> 