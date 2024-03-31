'use client';

import { Text, Title } from '@mantine/core';

export function OWCLogo() {
  return (
    <Title>
      <Text
        inherit
        variant="gradient"
        gradient={{ from: 'rgba(110, 182, 255, 1)', to: 'rgba(255, 74, 234, 1)', deg: 90 }}
        style={{ letterSpacing: '0.2em', fontWeight: 500 }}
      >
        owc
      </Text>
    </Title>
  );
}
