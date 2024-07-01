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
    <form onSubmit={handleSubmit} className="form">
      <h2 className="form__headline">Add new Activity:</h2>
      <section>
        <label htmlFor="name" className="form__label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="form__input"
        ></input>
      </section>
      <section className="form__section">
        <label htmlFor="isForGoodWeather" className="form__label">
          Good-weather activity:
        </label>
        <input
          name="isForGoodWeather"
          id="isForGoodWeather"
          type="checkbox"
          className="form__checkbox"
        ></input>
      </section>
      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
}
