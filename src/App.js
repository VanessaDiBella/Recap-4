import useLocalStorageState from "use-local-storage-state";
import Form from "./components/Form";
import List from "./components/List";

import { useEffect, useState } from "react";

export default function App() {
  const [weather, setWeather] = useState({});
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const isGoodWeather = weather.isGoodWeather;
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
    console.log(activities);
  }
  const filterActivities = activities.filter((activity) => {
    return isGoodWeather
      ? activity.isForGoodWeather
      : !activity.isForGoodWeather;
  });

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/europe"
      );
      const weather = await response.json();
      setWeather(weather);
    }
    startFetching();
    const intervalId = setInterval(startFetching, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  function handleDeleteActivity(idToRemove) {
    setActivities(activities.filter((activity) => activity.id !== idToRemove));
  }

  return (
    <>
      <h1>
        {weather.condition} {weather.temperature} °C
      </h1>
      <List
        activities={filterActivities}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
