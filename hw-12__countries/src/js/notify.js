import AWN from "awesome-notifications";
const options =  {
  position: "top-right",
  durations: {
    global: 15000,
  }
}

const notifier = new AWN(options);
export default notifier;
