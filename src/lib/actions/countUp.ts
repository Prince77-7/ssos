import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CountUpOptions {
  endValue: number;
  duration?: number;
  delay?: number;
  once?: boolean;
}

export function countUp(node: HTMLElement, options: CountUpOptions) {
  const { endValue, duration = 2, delay = 0, once = true } = options;

  const target = { val: 0 }; // Start counter at 0

  const trigger = ScrollTrigger.create({
    trigger: node,
    start: 'top 85%',
    once: once,
    onEnter: () => {
      gsap.to(target, {
        val: endValue,
        duration: duration,
        delay: delay,
        ease: 'power1.out',
        onUpdate: () => {
          // Format number with commas and update node text
          node.textContent = Math.round(target.val).toLocaleString();
        },
        onComplete: () => {
           // Ensure final value is exact and formatted
           node.textContent = endValue.toLocaleString();
        }
      });
    },
    // Optional: Reset if `once` is false
    // onLeaveBack: () => {
    //   if (!once) {
    //      target.val = 0;
    //      node.textContent = '0';
    //   }
    // }
  });

  // Initial text before animation starts (optional)
  node.textContent = '0'; 

  return {
    destroy() {
      trigger.kill();
    }
  };
} 