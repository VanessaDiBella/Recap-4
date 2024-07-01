import useLocalStorageState from "use-local-storage-state";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const isGoodWeather = true;
  // const [activities, setActivities] = useState([])
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
    console.log(activities);
  }
  const filterActivities = activities.filter((activity) => {
    return isGoodWeather
      ? activity.isForGoodWeather
      : !activity.isForGoodWeather;
  });
  return (
    <>
      <List activities={filterActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
