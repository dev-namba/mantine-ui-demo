import { ActionIcon, Affix, Flex } from '@mantine/core';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
} from '@tabler/icons-react';
import Link from 'next/link';

export function SocialButton() {
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Flex style={{ gap: 10 }}>
        <ActionIcon variant="filled" aria-label="Settings" size="lg">
          <IconBrandDiscord style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>

        <ActionIcon
          variant="filled"
          aria-label="Settings"
          size="lg"
          component={Link}
          href="https://github.com/oniya-with-chats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="filled" aria-label="Settings" size="lg">
          <IconBrandX style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="filled" aria-label="Settings" size="lg">
          <IconBrandInstagram style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Flex>
    </Affix>
  );
}
