import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { browser } from '$app/environment';

// Only register the plugin in the browser environment
if (browser) {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimateOnScrollOptions {
  animationType?: 'fade' | 'slideUp' | 'scale' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
  stagger?: number; // Delay between staggered items
  once?: boolean;
}

export function animateOnScroll(node: Element, options: AnimateOnScrollOptions = {}) {
  // Ensure this code only runs in the browser
  if (!browser) {
    return {}; // Return an empty object for SSR compatibility
  }

  const { 
    animationType = 'fade', 
    delay = 0, 
    duration = 0.8, 
    stagger = 0.1, 
    once = true 
  } = options;

  let animationProps = {};
  let initialProps = {};

  switch (animationType) {
    case 'slideUp':
      initialProps = { y: 50, opacity: 0 };
      animationProps = { y: 0, opacity: 1 };
      break;
    case 'scale':
      initialProps = { scale: 0.8, opacity: 0 };
      animationProps = { scale: 1, opacity: 1 };
      break;
     case 'slideLeft':
      initialProps = { x: -50, opacity: 0 };
      animationProps = { x: 0, opacity: 1 };
      break;
    case 'slideRight':
      initialProps = { x: 50, opacity: 0 };
      animationProps = { x: 0, opacity: 1 };
      break;
    case 'fade':
    default:
      initialProps = { opacity: 0 };
      animationProps = { opacity: 1 };
      break;
  }

  // Check if the node has children to stagger
  const elementsToAnimate = node.children.length > 0 && stagger > 0 ? Array.from(node.children) : node;

  // Apply initial hidden state after delay
  const setInitialState = () => gsap.set(elementsToAnimate, initialProps);
  const delayedSet = gsap.delayedCall(0.05, setInitialState);

  const trigger = ScrollTrigger.create({
    trigger: node,
    start: 'top 85%', 
    end: 'bottom 15%',
    once: once,
    onEnter: () => {
      // Add active class for CSS transitions
      if (node instanceof HTMLElement) node.classList.add('gsap-active');

      gsap.to(elementsToAnimate, {
        ...animationProps,
        duration: duration,
        delay: delay,
        stagger: stagger > 0 && Array.isArray(elementsToAnimate) ? stagger : 0,
        ease: 'power2.out',
        // Add clearProps to remove inline styles after animation if needed
        // clearProps: "opacity,transform" 
      });
    },
    onLeaveBack: () => {
      if (!once) {
        // Remove active class if resetting
        if (node instanceof HTMLElement) node.classList.remove('gsap-active');
        // Re-apply initial state immediately if leaving back
        setInitialState();
      }
    },
  });

  return {
    destroy() {
      // Ensure cleanup also only happens in browser
       if (browser) {
          delayedSet.kill(); // Kill the delayed call if component is destroyed before it runs
          trigger.kill();
           // Optional: Remove class on destroy if needed
          if (node instanceof HTMLElement) node.classList.remove('gsap-active');
       }
    }
  };
} 