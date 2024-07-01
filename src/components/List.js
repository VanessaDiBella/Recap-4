export default function List({ activities, isGoodWeather }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here is what you can do now:"}
      </h2>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </>
  );
}
