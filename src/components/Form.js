import { uid } from "uid";
export default function Form({ onAddActivity }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    const newActivity = {
      id: uid(),
      name: event.target.name.value,
      isForGoodWeather: event.target.isForGoodWeather.checked,
    };
    onAddActivity(newActivity);
    event.target.reset();
    event.target.elements.name.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity:</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required></input>
      <label htmlFor="isForGoodWeather">Good-weather activity</label>
      <input
        name="isForGoodWeather"
        id="isForGoodWeather"
        type="checkbox"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
