import React from "react";
import { FollowersList } from "../followers-list";
import { Header } from "../header";

export default function Followers() {
  return (
    <div className="">
      <Header title="Followers" />
      <FollowersList />
    </div>
  );
}
