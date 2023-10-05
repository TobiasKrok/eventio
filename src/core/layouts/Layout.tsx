import Head from "next/head";
import React, { FC, Suspense } from "react";
import { BlitzLayout } from "@blitzjs/next";
import { AppShell, Burger, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Vertical from "../components/layouts/Vertical";
import css from "./Layout.module.css";
import Horizontal from "../components/layouts/Horizontal";

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <Head>
        <title>{title || "eventio"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback="Loading...">
        <AppShell
          header={{ height: 45 }}
          //navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
          footer={{ height: 30 }}
          padding="md"
        >
          <AppShell.Header pl={"md"}>
            <Horizontal fullHeight debug>
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <Text fw={"bold"}> {title || "eventio"}</Text>
            </Horizontal>
          </AppShell.Header>

          {/*   <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

          <AppShell.Main>
            <Vertical fullHeight>{children}</Vertical>
          </AppShell.Main>
          <AppShell.Footer>
            <Horizontal fullHeight fullWidth center>
              <Text fs={"xs"} c={"dimmed"}>
                {" "}
                {new Date().getFullYear()} © eventio. All rights reserved.
              </Text>
            </Horizontal>
          </AppShell.Footer>
        </AppShell>
      </Suspense>
    </>
  );
};

export default Layout;
