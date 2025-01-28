import { getThemeConfig } from '@/lib/actions/themeActions';

import HeaderComponent1 from './HeaderComponent1';
import HeaderComponent2 from './HeaderComponent2';

const Header = async () => {
  const themeConfig = await getThemeConfig();
  const themes: { [key: number]: React.ComponentType<any> } = {
    1: HeaderComponent1,
    2: HeaderComponent2,
  };
  const HeaderThemeComponent =
    themes[themeConfig.headerVariant] || HeaderComponent1;

  return <HeaderThemeComponent />;
};

export default Header;
