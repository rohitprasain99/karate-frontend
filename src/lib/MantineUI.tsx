import { mantineTheme } from "@/config/mantineTheme";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React from "react";

export default function UITheme({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={mantineTheme}>
      {children}
      <Notifications />
    </MantineProvider>
  );
}
