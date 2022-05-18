import React from 'react';
import { Group, CopyButton, ActionIcon, Tooltip } from '@mantine/core';
import { Copy, Check } from 'tabler-icons-react';

const code = `
import { CopyButton, ActionIcon, Tooltip } from '@mantine/core';
import { Copy, Check } from 'tabler-icons-react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <CopyButton value="https://mantine.dev" timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
            <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>
    </Group>
  );
}

export const tooltip: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
