import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

/* 變換文字 - banner */
// 創建時間軸
const bannerTl = gsap.timeline({
  repeat: 0
})
// 添加每個元素的動畫
bannerTl.to('.banner-subtitle', {
  duration: 0.8,
  text: {
      value: "獻給新世代的生活風格誌",
      newClass: "class1",
  },
})
.to('.banner-title', {
  duration: 0.8,
  text: {
      value: "一起探索生活的無限可能",
      newClass: "class2",
  },
})
.from('.banner-btn', {
  duration: 1,
  opacity: 0,
  x: -50,
})

/* scroll - plan */
const planTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".plan-content",
    start: "top 80%",
    end: "top 20%",
    toggleActions: "play none none none",
  }
})

planTl.from(".plan-content-subtitle", {
  opacity: 0,
  y: -20,
  duration: 0.5,
})
.from(".plan-content-title", {
  opacity: 0,
  y: -20,
  duration: 0.5,
}, "-=0.3") // 這個比上面提早 0.3s 開始
.from(".plan-content ol li", {
  opacity: 0,
  x: -20,
  duration: 0.3,
  stagger: 0.1  // 每個li之間的動畫延遲
}, "-=0.2")
.from(".plan-btn", {
  opacity: 0,
  duration: 0.5
}, "-=0.3")
