// main.js

//header
const header = document.getElementById('header');
const aboutMeSection = document.querySelector('.about_me');

window.addEventListener('scroll', () => {
   const sectionTop = aboutMeSection.getBoundingClientRect().top;

   if (sectionTop <= 0) {
      header.classList.add('fixed');
   } else {
      header.classList.remove('fixed');
   }
});

//main_visual
const imgBox = [
   {src: "images/main_img_1.jpg"},
   {src: "images/main_img_2.jpg"},
   {src: "images/main_img_3.jpg"},
   {src: "images/main_img_4.jpg"},
   {src: "images/main_img_6.jpg"},
   {src: "images/main_img_7.jpg"},
];
let num = 0;

const visualImg = document.getElementById('visual_img');

function changeImg() {
   visualImg.setAttribute("src", imgBox[num].src);
   num++;
   if(num >= imgBox.length) {
      num = 0;
   }
}
setInterval(changeImg, 1000);

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


function animateProgressBar() {
   const progressBars = document.querySelectorAll('.progress');

   progressBars.forEach((bar) => {
      bar.style.transition = 'none';
      bar.style.width = '0%';

      setTimeout(() => {
         bar.style.transition = 'width 3s ease-in-out';
         bar.style.width = '100%';
      }, 50);
   });
}
document.addEventListener('DOMContentLoaded', () => {
   animateProgressBar();
});



const addScrollListeners = () => {
   const scrollElements = document.querySelectorAll('.portfolio_scroll');

   scrollElements.forEach(scrollEl => {
      scrollEl.removeEventListener('mouseenter', handleMouseEnter);
      scrollEl.removeEventListener('mouseleave', handleMouseLeave);

      scrollEl.addEventListener('mouseenter', handleMouseEnter);
      scrollEl.addEventListener('mouseleave', handleMouseLeave);
   });
};

const handleMouseEnter = (e) => {
   const portScroll = e.currentTarget;
   portScroll.style.overflowY = 'scroll';
   const portBg = portScroll.querySelector('.port_img_bg');
   portBg.style.display = 'none';
};

const handleMouseLeave = (e) => {
   const portScroll = e.currentTarget;
   portScroll.scrollTop = 0;
   portScroll.style.overflow = 'hidden';
   const portBg = portScroll.querySelector('.port_img_bg');
   portBg.style.display = 'flex';
};
addScrollListeners();



const designScrollListener = () => {
   const ScrollDesign = document.querySelectorAll('.design_scroll');

   ScrollDesign.forEach(designEl => {
      designEl.removeEventListener('mouseenter', handleDesignEnter);
      designEl.removeEventListener('mouseleave', handleDesignLeave);

      designEl.addEventListener('mouseenter', handleDesignEnter);
      designEl.addEventListener('mouseleave', handleDesignLeave);
   });
}
const handleDesignEnter = (e) => {
   const designScroll = e.currentTarget;
   designScroll.style.overflowY = 'scroll';
   const designBg = designScroll.querySelector('.design_img_bg');
   designBg.style.display = 'none';
};

const handleDesignLeave = (e) => {
   const designScroll = e.currentTarget;
   designScroll.scrollTop = 0;
   designScroll.style.overflow = 'hidden';
   const designBg = designScroll.querySelector('.design_img_bg');
   designBg.style.display = 'flex';
};
designScrollListener();


// cursor_portfolio_마우스 포인터
// const circle = document.querySelector(".drag_circle");
// const circleBox = document.querySelector('.portfolio_content_box')
// const portText = document.querySelector('.portfolio_text')
// circleBox.addEventListener("mousemove", (e) => {
//    const mouseX = e.clientX;
//    const mouseY = e.clientY;
//    circle.style.left = mouseX + "px";
//    circle.style.top = mouseY + "px";
//    circle.style.opacity = 1;

// });
// circleBox.addEventListener('mouseout', () => {
//    circle.style.opacity = 0;
// })

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

// scroll_top
const topBtn = document.querySelector('.contact_bottom button')

topBtn.addEventListener('click', () => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
   return false;
})






//swiper
const skillSwiper = new Swiper('.skills .swiper-container', {
   direction: 'horizontal',
   slidePerView: 1,
   autoplay: {
      delay: 1300
   },
   loop: 'true',
   scrollbar: {
      draagable: 'true',
   },
})

const portSwiper = new Swiper('.portfolio .swiper-pub', {
   direction: 'horizontal',
   slidePerView: 1,
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },
   on: {
      init: function() {
         addScrollListeners();
         animateProgressBar();

      },
      slideChange: function() {
         addScrollListeners();
         animateProgressBar();
      }
   },
   navigation : {
		nextEl : '.button-next',
		prevEl : '.button-prev'
	}
})

const designSwiper = new Swiper('.swiper-design', {
   direction: 'horizontal',
   spaceBetween: '-73px',
   loop: false,
   scrollbar: {
      draggable: true,
   },
   navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
   },
   breakpoints: {
      768: {
         slidesPerView: 1,
      },
      1024: {
         slidesPerView: 2,
      }
   },
   on: {
      init: function() {
         designScrollListener();
      },
      slideChange: function() {
         designScrollListener();
      }
   }
});
const jsReactSwiper = new Swiper('.swiper-js', {
   direction: 'horizontal',
   spaceBetween: '-100px',
   loop: false,
   scrollbar: {
      draggable: true,
   },
   navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
   },
   breakpoints: {
      768: {
         slidesPerView: 1,
      },
      1024: {
         slidesPerView: 2,
      }
   },
   on: {
      init: function() {
         designScrollListener();
      },
      slideChange: function() {
         designScrollListener();
      }
   }
});



// 스크롤 트리거
gsap.registerPlugin(ScrollTrigger);

const visual = gsap.timeline()
visual.to('.main_text_1', {
   top: '50%',
   left: '20%',
   duration: 1,
})
visual.to('.main_text_2', {
   top: '40%',
   left:'80%',
   fontSize: '140px',
   duration: 1,
})
visual.to('.main_text_3', {
   top: '70%',
   left:'75%',
   fontSize: '140px',
   zIndex: 9999,
   duration: 1,
})
visual.to('.visual_img_box', {
   scale: 1.5,
   duration: 1,
})
ScrollTrigger.create({
   animation: visual,
   trigger: ".main_text_1",
   start: 'top top',
   end: "+=120%",
   scrub: true,
   pin: '.main_visual'
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









