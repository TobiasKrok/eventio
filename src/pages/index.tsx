import { Suspense } from "react";
import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import UserInfo from "src/components/UserInfo";

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div>
        <Suspense fallback="Loading...">
          <UserInfo />
        </Suspense>
      </div>
    </Layout>
  );
};

export default Home;
