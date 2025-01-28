import React from 'react';

import { getThemeConfig } from '@/lib/actions/themeActions';

import FooterComponent1 from './FooterComponent1';
import FooterComponent2 from './FooterComponent2';

const Footer = async () => {
  const themeConfig = await getThemeConfig();
  const themes: { [key: number]: React.ComponentType<any> } = {
    1: FooterComponent1,
    2: FooterComponent2,
  };
  const FooterThemeComponent =
    themes[themeConfig.footerVariant] || FooterComponent1;

  return <FooterThemeComponent />;
};

export default Footer;
