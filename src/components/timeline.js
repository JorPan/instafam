import React from "react";
import usePhotos from "../hooks/use-photos";

export default function Timeline() {
  const { photos } = usePhotos();

  console.log(photos);

  return (
    <div className="container col-span-2">
      <p>I am the timeline</p>
    </div>
  );
}
