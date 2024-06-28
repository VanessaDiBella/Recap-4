import useLocalStorageState from "use-local-storage-state"
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities" , {defaultValue:""})
  // const [activities, setActivities] = useState([])
  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
    console.log(activities);
  }
  return (
    <>
     <List activities={activities}/>
     <Form onAddActivity={handleAddActivity} />
    </>
  )
  
}
