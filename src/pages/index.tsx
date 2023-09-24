import { Suspense } from "react";
import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";

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
