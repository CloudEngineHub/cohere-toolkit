import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

import { Dot } from '@/components/Dot';
import IconButton from '@/components/IconButton';
import { Tabs, Text } from '@/components/Shared';
import { SETTINGS_DRAWER_ID } from '@/constants';
import { useIsGroundingOn } from '@/hooks/grounding';
import { useCitationsStore, useSettingsStore } from '@/stores';
import { cn } from '@/utils';

import { SettingsTab } from './SettingsTab';
import { ToolsTab } from './ToolsTab';

/**
 * @description Renders the settings drawer of the main content.
 * It opens up on top of the citation panel/the main content.
 */
export const SettingsDrawer: React.FC = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const {
    settings: { isConfigDrawerOpen },
    setSettings,
  } = useSettingsStore();
  const {
    citations: { hasCitations },
  } = useCitationsStore();
  const isGroundingOn = useIsGroundingOn();

  return (
    <Transition
      as="section"
      show={isConfigDrawerOpen}
      className={cn(
        'absolute right-0 z-configuration-drawer',
        'flex h-full flex-col',
        'w-full md:max-w-drawer lg:max-w-drawer-lg',
        'rounded-lg md:rounded-l-none',
        'bg-marble-100 md:shadow-drawer',
        'border border-marble-400',
        { 'xl:border-l-0': hasCitations }
      )}
      enter="transition-transform ease-in-out duration-200"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform ease-in-out duration-200"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <header className="flex h-header items-center gap-2 border-b border-marble-400 p-5">
        <IconButton
          iconName="close-drawer"
          tooltipLabel="Close drawer"
          isDefaultOnHover={false}
          onClick={() => setSettings({ isConfigDrawerOpen: false })}
        />
        <span className="flex items-center gap-2">
          <Dot on={isGroundingOn} />
          <Text styleAs="p-lg">Tools</Text>
        </span>
      </header>

      <section id={SETTINGS_DRAWER_ID} className="h-full w-full overflow-y-auto rounded-b-lg">
        <Tabs
          tabs={['Tools', 'Settings']}
          selectedIndex={selectedTabIndex}
          onChange={setSelectedTabIndex}
          tabGroupClassName="h-full"
          tabClassName="pt-2.5"
          panelsClassName="pt-7 lg:pt-7 px-0 flex flex-col rounded-b-lg bg-marble-100 md:rounded-b-none"
          fitTabsContent={true}
        >
          <ToolsTab />
          <SettingsTab />
        </Tabs>
      </section>
    </Transition>
  );
};
