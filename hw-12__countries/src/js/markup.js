import refs from "./refs";

function markupTemplate(template, countries) {
  const markup = template(countries);
  refs.ul.innerHTML = markup;
}
export default markupTemplate;
