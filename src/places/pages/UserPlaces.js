import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Hello",
    description: "A Very Nice Place to visit in Africas",
    imageUrl: "https://picsum.photos/200/300",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 28.6562,
      lng: 77.2410,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Hello",
    description: "A Very Nice Place to visit in Venice",
    imageUrl: "https://picsum.photos/200/300",
    address: "30 W 57th St, New York, NY 40510",
    location: {
      lat: 27.1751,
      lng: 78.0421,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
