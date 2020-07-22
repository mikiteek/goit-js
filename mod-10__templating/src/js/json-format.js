const book = {
  name: 'Охота на фазана',
  author: 'Марта Кэтра',
  genre: 'детектив',
  pageCount: 724,
  publisher: 'ООО Астрель',
};

console.log(book);
console.log(typeof book);

const stringifiedBook = JSON.stringify(book);
console.log(stringifiedBook);
console.log(typeof stringifiedBook);

const parsed = JSON.parse(stringifiedBook);
console.log(parsed);
console.log(typeof parsed);
