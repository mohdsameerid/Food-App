import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const data = useRouteError();
  return (
    <div className="text-center m-3 p-4">
      <h2 className="font-bold text-2xl">{data.data}</h2>
      <h2 className="font-bold text-3xl">Data {data.statusText}</h2>
    </div>
  );
};
export default Error;
