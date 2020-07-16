const options = {
  // rootMargin: "100px", // отступ срабатывания callback, default 0px
  threshold: [0, 0.25, 0.5, 0.75, 1], // при каком проценте пересечения объекта срабатывает callback, default 1.0
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {// если элемент пересекает
      console.log(`Box ${entry.target.textContent} across Root`);
      observer.disconnect(); // если хотим остановить остслеживание после первого срабатывания
    }
  });
} // функция для действий при отслеживании элементов

const io = new IntersectionObserver(onEntry, options);

const boxRef = document.querySelector(".js-box");

io.observe(boxRef);