import { getThemeConfig } from "@/lib/actions/themeActions";
import HomeTheme1 from "./HomeTheme1";
import HomeTheme2 from "./HomeTheme2";

const Home = async () => {
    const themeConfig = await getThemeConfig();
    const themes: { [key: number]: React.ComponentType<any> } = {
        1: HomeTheme1,
        2: HomeTheme2,
      };
    const HomeThemeComponent = themes[themeConfig.homeTheme] || HomeTheme1;
    
    return <HomeThemeComponent />;
}

export default Home;