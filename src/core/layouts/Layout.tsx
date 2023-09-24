import Head from "next/head";
import React, { FC, Suspense } from "react";
import { BlitzLayout } from "@blitzjs/next";
import { AppShell, Burger, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Vertical from "../components/layouts/Vertical";
import css from "./Layout.module.css";

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
          header={{ height: 60 }}
          navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
          footer={{ height: 60 }}
          padding="md"
        >
          <AppShell.Header>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Stack>
              <Text fw={"bold"}> {title || "eventio"}</Text>
            </Stack>
          </AppShell.Header>

          {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

          <AppShell.Main>
            <Vertical debug fullWidth fullHeight>
              {children}
            </Vertical>
          </AppShell.Main>
          <AppShell.Footer>Footer</AppShell.Footer>
        </AppShell>
      </Suspense>
    </>
  );
};

export default Layout;
