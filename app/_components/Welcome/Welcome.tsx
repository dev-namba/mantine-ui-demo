import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to <br />
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'rgba(110, 182, 255, 1)', to: 'rgba(255, 74, 234, 1)', deg: 90 }}
        >
          Oniya With Chats
        </Text>
      </Title>
      <Text ta="center" fw={700} size="lg" maw={580} mx="auto" mt="xl">
        oniya witch chats は おにやのサポートする技術者集団です。
        高い技術力を持つメンバーが集まり、おにやが世界を平和に変えるため日々活動しています。
      </Text>
    </>
  );
}
