'use client';

import '@mantine/core/styles.css';
import React from 'react';
import { AppShell } from '@mantine/core';
import { DashBoardHeader } from './_components/Header/Header';

export default function RootLayout({ children }: { children: any }) {
  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      styles={{
        main: {
          position: 'relative',
          background: "url('/oniya.png') no-repeat center center fixed",
          backgroundSize: 'cover',
        },
      }}
    >
      <AppShell.Header>
        <DashBoardHeader />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
