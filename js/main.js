// main.js


// portfolio
const tabBtn = document.querySelectorAll('.tab_btn')
const portContent = document.querySelectorAll('.portfolio_content')

tabBtn.forEach((tab, index) => {
   tab.addEventListener('click', () => {
      tabBtn.forEach(tab => {tab.classList.remove('active')});
      tab.classList.add('active');
      portContent.forEach(content => {content.classList.remove('active')})
      portContent[index].classList.add('active');
   })
})

// cursor_portfolio
const circle = document.querySelector(".circle");
const circleBox = document.querySelector('.portfolio_content_box')
circleBox.addEventListener("mousemove", (e) => {
   const mouseX = e.clientX;
   const mouseY = e.clientY;
   circle.style.left = mouseX + "px";
   circle.style.top = mouseY + "px";
   circle.style.opacity = 1;
});
circleBox.addEventListener('mouseout', () => {
   circle.style.opacity = 0;
})

const contact = document.querySelector('#contact');
const contextText = document.querySelectorAll('.contact_text span');

const handleScroll = () => {
   const viewportHeight = window.innerHeight
   const scrollTop = window.scrollY;
   const contactTop = contact.offsetTop;
   let timer = 0;
      if (contactTop < viewportHeight + scrollTop) {
         contextText.forEach((item) => {
            item.style.animation = `contactText 50ms ${timer += 50}ms forwards`;
         });
         contact.removeEventListener('scroll', handleScroll);
      }
};
window.addEventListener('scroll', handleScroll);



// 스크롤 트리거
gsap.registerPlugin(ScrollTrigger, Draggable);
const main = gsap.timeline()
   main.to('.main_visual_evt', {
      x: '-280vw',
      duration: 1,
      ease: "power3.out",
})
ScrollTrigger.create({
   animation: main,
   tirgger: ".main_visual_evt p",
   start: "top top",
   end: "+=450%",
   scrub: true,
   pin: '.main_visual',
   anticipatePin: 1,
})


const contactPath = gsap.timeline()
contactPath.to(".contact_wrap ", {
   borderRadius : 0,
   scale: 1.1,
   duration: 1,
})
ScrollTrigger.create({
   animation: contactPath,
   trigger: ".contact_wrap",
   start: "top top",
   end: "+=100%",
   scrub: true,
})

const bubble = gsap.timeline()
bubble.to('.bubble', {
   top: "-200px",
   duration: 5,
   overflow: 'hidden'
})
ScrollTrigger.create({
   animation: bubble,
   trigger: ".bubble",
   start: '20% 80%',
   end: "top 10%",
   scrub: true,
   pin: '.about_me',
})

const skill = gsap.timeline()
skill.to(".skills", {
   scale: 1.1,
})
ScrollTrigger.create({
   animation:skill,
   trigger: ".skills",
   start: "top top",
   end: "+=200%",
   scrub: true,
   pin: '.skills'
})

const portHorizon = gsap.timeline()
portHorizon.to('.horizon', {
   left: 0,
   duration: 0.5,
})
ScrollTrigger.create({
   animation: portHorizon,
   trigger: ".horizon_text",
   start: 'top top',
   end: "+=50%",
   scrub: true,
})
const portVerti = gsap.timeline()
portVerti.to('.verti', {
   fontSize: '220px',
   color: '#fff',
   fontWeight: '700',
   duration: 5,
})
ScrollTrigger.create({
   animation: portVerti,
   trigger: ".verti",
   start: 'Top 50%',
   end: "top 10%",
   scrub: true,
   pin: true,
})




//swiper
const portSwiper = new Swiper('.portfolio .swiper-container', {
   direction: 'horizontal',
   slidePerView: 1,
   loop: 'true',
   scrollbar: {
      el: '.swiper-scrollbar',
      draagable: 'true',
   },
})
const skillSwiper = new Swiper('.skills .swiper-container', {
   direction: 'horizontal',
   slidePerView: 1,
   autoplay: {
      delay: 1300
   },
   loop: 'true',
   scrollbar: {
      el: '.swiper-scrollbar',
      draagable: 'true',
   },
})






