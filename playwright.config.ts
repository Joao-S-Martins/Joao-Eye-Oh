import {devices} from '@playwright/test';
import type {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    port: 3000,
    command: 'yarn docusaurus serve',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
  testDir: './tests/playwright',
  snapshotPathTemplate: '{testDir}/screenshots/{arg}{ext}', // {testDir}/screenshots/{testFilePath}/{arg}{ext}
};

export default config;
