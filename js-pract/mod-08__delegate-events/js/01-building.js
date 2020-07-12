const refs = {
  parent: document.querySelector("#parent"),
  child: document.querySelector("#child"),
  innerChild: document.querySelector("#inner-child"),
};

const parentClickHandler = event => {
  console.log("Parent click handler");
  console.log("target: ", event.target);
  console.log("currentTarget: ", event.currentTarget);
  console.log("============");
};
const childClickHandler = event => {
  console.log("Child click handler");
  console.log("target: ", event.target);
  console.log("currentTarget: ", event.currentTarget);
  console.log("============");
};
const innerClickHandler = event => {
  console.log("INNEr CHILD click handler");
  console.log("target: ", event.target);
  console.log("currentTarget: ", event.currentTarget);
  console.log("============");
};

refs.parent.addEventListener("click", parentClickHandler);
refs.child.addEventListener("click", childClickHandler);
refs.innerChild.addEventListener("click", innerClickHandler);
