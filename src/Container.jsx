import React, {useEffect, useState} from "react";
import { Info } from "./Info";
import { Loading } from "./Loading";
import { fetchFromApi } from "./fetchFromApi";

export default function Container() {
  const [loading, setLoading] = useState(true);

  // Make a fake "API" call using fetchFromApi()
  // set loading to 'false' when the "request" is done

  useEffect(async () => {
      await fetchFromApi();
      setLoading(false);
  }, [])

  return (
    <div className="wrapper">
      {loading ? <Loading /> : <Info />}
    </div>
  );
}