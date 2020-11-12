import { useState, useEffect } from "react";
import FirestoreServcie from "../../../_common/services/FirestoreService";
import HabitatService from "./../services/HabitatService";

const UseHabitats = () => {
  const [habitats, setHabitats] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    HabitatService.getAll().then((habitats) => {
      habitats = FirestoreServcie.docsToArray(habitats);
      console.log(habitats);
      setHabitats(habitats);
      setLoading(false);
    });
  }, []);

  return [habitats, loading];
};

export default UseHabitats;
