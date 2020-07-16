
// Variant-1 with Intersection Observer and stop with observer.unobserve(image);
const images = document.querySelectorAll(".feed img");

const options = {
  rootMargin: "100px",
};
const onEntry = (entries, observer) => {
  console.log('!');
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.dataset.lazy;
      image.src = src;
      image.classList.add("appear");
      observer.unobserve(image); // если хотим остановить остслеживание за данным элементом
    }
  });
};
const io = new IntersectionObserver(onEntry, options);
images.forEach(image => io.observe(image));

// ========= тоже просто обернули в функцию lazyload ==========
// const lazyload = targets => {
//   const options = {
//     rootMargin: "100px",
//   }
//
//   const onEntry = (entries, observer) => {
//     console.log('!');
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const image = entry.target;
//         const src = image.dataset.lazy;
//         image.src = src;
//         image.classList.add("appear");
//         observer.unobserve(image); // если хотим остановить остслеживание за данным элементом
//       }
//     });
//   };
//   const io = new IntersectionObserver(onEntry, options);
//
//   targets.forEach(target => io.observe(target));
// }
// lazyload(images);

// Variant-2 with Intersection Observer and stop with observer.disconnect();
// const images = document.querySelectorAll(".feed img");
//
// const lazyload = target => {
//   const options = {
//     rootMargin: "100px",
//   };
//   const io = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const image = entry.target;
//         const src = image.dataset.lazy;
//         image.src = src;
//         image.classList.add("appear");
//         observer.disconnect();
//       }
//     });
//   }, options);
//   io.observe(target); // обсервим токо таргет, для каждого отдельный обсерв
// };
// //для каждого image создается свой Observer
// images.forEach(image => lazyload(image));


// ---------------------------------------------------------- //
// Old school with scroll, --- IT IS VERY BAD, DO NOT DO SO

// const images = document.querySelectorAll('.feed img');
// lazyLoad();
// window.addEventListener('scroll', lazyLoad);
// function lazyLoad() {
//   images.forEach(image => {
//     console.log('💩 Выполянется callback-функция для scroll');
//
//     const top = image.getBoundingClientRect().top;
//
//     if (image.src === '' && top <= window.innerHeight) {
//       const src = image.dataset.lazy;
//       image.src = src;
//       image.classList.add('appear');
//     }
//   });
// }