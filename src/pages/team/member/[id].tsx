import { useStringParam } from "@/utils/utils";
import { BlitzPage } from "@blitzjs/next";
import React from "react";

const TeamMember: BlitzPage = () => {
  const id = useStringParam("id");
  return <div> Hello {id}</div>;
};

export default TeamMember;
