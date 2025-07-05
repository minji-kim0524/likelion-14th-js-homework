{ 
  /* global gsap, GSDevTools */
 gsap.registerPlugin(GSDevTools)

function animate() {
  const tl = gsap.timeline({
    repeat: 0
  })
  
  tl
  .from('.shape-01', {x: 565, duration: 1, scale: 0.2,})
  .to('.shape-09', {opacity: 1, duration: 1, ease: 'back-out'}, 0.3)
  .to('.shape-16', {opacity: 1, duration: 1, ease: 'back-out'}, 0.3)
  .from('.shape-10', {x: -190, duration: 1})
  .to('.shape-12', {rotation: 360, duration: 2.5}, 0.3)
  .to('.shape-03', {opacity: 1, duration: 1, ease: 'linear'}, 0.3)
  .set('.shape-05', {x: -200}, 0.7)
  .set('.shape-16', {x: 200}, 0.7)
  .to('.shape-05', {x: 0, duration: 1, ease: 'power2.out'}, 0.7)
  .to('.shape-16', {x: 0, duratino: 1, ease: 'power2.out'}, 0.7)
  .to('.shape-06', {rotation: 360, transformOrigin: '50% 50%', duration: 2, ease: 'none'}, 0.7)
  .to('.shape-07', {rotation: 360, transformOrigin: '50% 50%', duration: 2, ease: 'none'}, 0.7)
}

  setTimeout(animate)
 }