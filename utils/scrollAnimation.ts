// utils/scrollAnimation.ts
export function setupScrollAnimation(elementId : string, delay : number = 0) {
    const element = document.getElementById(elementId);
    if (!element) return;
   
    const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting && entry.boundingClientRect.bottom > window.innerHeight + 50) {
           setTimeout(() => {
             entry.target.classList.remove('opacity-0');
             entry.target.classList.add('opacity-100');
           }, delay);
         }
       });
    });
   
    observer.observe(element);
  }