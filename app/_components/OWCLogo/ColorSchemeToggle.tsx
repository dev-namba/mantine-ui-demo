'use client';

import { Text } from '@mantine/core';

export function OWCLogo() {
  return (
    <Text
      variant="gradient"
      size="xl"
      gradient={{ from: 'rgba(110, 182, 255, 1)', to: 'rgba(255, 74, 234, 1)', deg: 90 }}
    >
      owc
    </Text>
  );
}
