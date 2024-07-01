export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2 className="list__heading">
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here is what you can do now:"}
      </h2>
      <ul className="list">
        {activities.map((activity) => {
          return (
            <li className="list__item" key={activity.id}>
              {activity.name}
              <button
                className="list__button"
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
