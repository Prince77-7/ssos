<div class="preloader">
  <div class="icon-container">
    <img src="/assets/icon.svg" alt="Loading Icon" width="120" height="120" />
  </div>
</div>

<style>
  .preloader {
    position: fixed;
    inset: 0;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it's above everything else */
    opacity: 1;
    transition: opacity 0.5s ease-out;
    pointer-events: none; /* Allow interaction with content below once faded */
  }

  .preloader.hidden {
    opacity: 0;
  }

  .icon-container {
    animation: pulse 2.2s infinite ease-in-out;
  }

  .icon-container img {
     /* White SVG on black background, no special filter needed */
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style> 