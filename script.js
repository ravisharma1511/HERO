gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var tl = gsap.timeline();

tl.from("nav",{
    y:100,
    durtiotion: 1,
    opacity: 0,
})
tl.from("#center h3",{
    y: 100,
})

tl.from("#center h1",{
    y:100
})


gsap.from("#page2 #layer",{
  x: 100,
  duration: 1,
  scrollTrigger:{
    trigger:"#page2 #layer",
    scroller: "#main",
    start: "top 80%",
    scrub: "2",
    end:"top 10%",
    // markers:"true"
  }
})
gsap.from("#page2 h1",{
  x: -100,
  duration: 1,
  scrollTrigger:{
    trigger:"#page2 h1",
    scroller: "#main",
    start: "top 50%",
    scrub: "2",
    end:"top 10%",
    // markers:"true"
  }
})

gsap.from("#play1",{
  x: -100,
  duration: 1,
  scrollTrigger:{
    trigger:"#play1",
    scroller: "#main",
    start: "top 50%",
    scrub: "3",
    end:"top 10%",
    // markers:"true"
  }
})

gsap.from("#play2",{
  opacity:"0",
  x: 100,
  scrollTrigger:{
    trigger:"#play2",
    scroller: "#main",
    start: "top 50%",
    scrub: "2",
    end:"top 10%",
    // markers:"true"
  }
})



gsap.from("#page5 .frame",{
  opacity:"0",
  x: 100,
  scrollTrigger:{
    trigger:"#page5 .frame",
    scroller: "#main",
    start: "top 50%",
    scrub: "2",
    end:"top 10%",
    // markers:"true"
  }
})

gsap.from("#page5 video",{
  opacity:"0",
  x: 100,
  scrollTrigger:{
    trigger:"#page5 video",
    scroller: "#main",
    start: "top 50%",
    scrub: "2",
    end:"top 10%",
    // markers:"true"
  }
})
gsap.to("#page6 .frame2",{
  y:-100,
  scrollTrigger:{
    trigger:"#page6 .frame2",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    // markers:"true"
  }
})

gsap.to("#page6 video",{
  y: -100,
  
  scrollTrigger:{
    trigger:"#page6 video",
    scroller: "#main",
    start: "top 70%",
    scrub: "2",
    end:"top 10%",
    // markers:"true"
    
  }
})

gsap.to("#page7 .frame3",{
  y:-100,
  scrollTrigger:{
    trigger:"#page7 .frame3",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    // markers:"true"
  }
})

gsap.to("#page7 video",{
  y: -100,
  
  scrollTrigger:{
    trigger:"#page7 video",
    scroller: "#main",
    start: "top 70%",
    scrub: "2",
    end:"top 10%",
    // markers:"true"
    
  }
})

gsap.to("#page8 .frame4",{
  y:-80,
  scrollTrigger:{
    trigger:"#page8 .frame4",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    // markers:"true"
  }
})

gsap.to("#page8 video",{
  y: -80,
  
  scrollTrigger:{
    trigger:"#page8 video",
    scroller: "#main",
    start: "top 70%",
    scrub: "2",
    end:"top 10%",
    // markers:"true"
    
  }
})

gsap.from("#img-11",{
  x:-100,
  smooth: 2,

  
  scrollTrigger:{
    trigger:"#img-11",
    scroller: "#main",
    start: "top 70%",
    scrub: "2",
    end:"top 10%",
    // markers:"true"
    
  }
})
gsap.from("#img-10",{
  y:100,
  
  scrollTrigger:{
    trigger:"#img-10",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    // markers:"true"
    
  }
})
gsap.from("#img-9",{
  x:-100,
  smooth: 2,
  
  scrollTrigger:{
    trigger:"#img-9",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    // markers:"true"
    
  }
})

gsap.from("#page10 h1",{
  y: -100,
  opacity: 0,
  scrollTrigger:{
    trigger:"#page10 h1",
    scroller: "#main",
    start: "top 40%",
    scrub: "true",
    end:"top -10%",
    // markers:"true"
  }
})
gsap.from("#img11",{
  y:100,
  
  scrollTrigger:{
    trigger:"#img11",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    // markers:"true"
    
  }
})

gsap.from("#img12",{
  y:100,
  
  scrollTrigger:{
    trigger:"#img12",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    // markers:"true"
    
  }
})

gsap.from("#img13",{
  y:100,
  
  scrollTrigger:{
    trigger:"#img13",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    // markers:"true"
    
  }
})

gsap.to("#videone",{
  x:100,
  
  scrollTrigger:{
    trigger:"#videone",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    // markers:"true"
    
  }
})
gsap.from("#page2 h1",{
  y:100,
  opacity: 0,
  
  scrollTrigger:{
    trigger:"#page2 h1",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    
  }
})

gsap.from("#page4 h1",{
  y:100,
  opacity: 0,
  
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    
  }
})
gsap.from("#page4 h4",{
  y:100,
  opacity: 0,
  
  scrollTrigger:{
    trigger:"#page4 h4",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    
  }
})

gsap.from("#page5 h1",{
  y:100,
  opacity: 0,
  
  scrollTrigger:{
    trigger:"#page5 h1",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    
  }
})
gsap.from("#page5 p",{
  y:100,
  opacity: 0,
  
  scrollTrigger:{
    trigger:"#page5 p",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    
  }
})

gsap.from("#page6 h1",{
  y:100,
  opacity: 0,
  
  scrollTrigger:{
    trigger:"#page6 h1",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    
  }
})

gsap.from("#page6 h6",{
  y:100,
  opacity: 0,
  
  scrollTrigger:{
    trigger:"#page6 h6",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    
  }
})

gsap.from("#page7 h1",{
  y:100,
  opacity: 0,
  
  scrollTrigger:{
    trigger:"#page7 h1",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    
  }
})

gsap.from("#page7 h6",{
  y:100,
  opacity: 0,
  
  scrollTrigger:{
    trigger:"#page7 h6",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    
  }
})


gsap.from("#page8 h1",{
  y:100,
  opacity: 0,
  
  scrollTrigger:{
    trigger:"#page8 h1",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    
  }
})

gsap.from("#page8 h6",{
  y:100,
  opacity: 0,
  
  scrollTrigger:{
    trigger:"#page8 h6",
    scroller: "#main",
    start: "top 70%",
    scrub: "true",
    end:"top 10%",
    
  }
})