import HomeTheme1 from '@/components/Home/HomeTheme1/HomeTheme1';
import HomeTheme2 from '@/components/Home/HomeTheme2';
// import Header1 from '@/components/Header/Header1';
// import Header2 from '@/components/Header/Header2';
// ... import other variants

export const getHomeComponent = (themeNumber: number) => {
  const themes: { [key: number]: React.ComponentType<any> } = {
    1: HomeTheme1,
    2: HomeTheme2,
  };
  return themes[themeNumber] || HomeTheme1;
};

// export const getHeaderComponent = (variantNumber: number) => {
//   const variants : { [key: number]: React.ComponentType<any> } = {
//     1: Header1,
//     2: Header2,
//   };
//   return variants[variantNumber] || Header1;
// };

// Add similar functions for other component types 