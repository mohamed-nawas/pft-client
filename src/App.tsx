import React from "react";
import Home from "@pages/Home";
import PrivateRoute from "@routes/PrivateRoute";
import { API } from "@services/api";


export default function App() {

  React.useEffect(() => {
    console.log('BACKEND URL => ' + API.defaults.baseURL)
  }, [])

  return <PrivateRoute component={Home} />
}