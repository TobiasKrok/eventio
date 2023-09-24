import { useStringParam } from "@/utils/utils";
import { BlitzPage, useParam } from "@blitzjs/next";
import React from "react";

const BlogPostPage: BlitzPage = () => {
  const slug = useStringParam("slug");

  return <div> Post: {slug} </div>;
};

export default BlogPostPage;
