import Home from "@pages/Home";
import PrivateRoute from "@routes/PrivateRoute";


export default function App() {
  return <PrivateRoute component={Home} />
}