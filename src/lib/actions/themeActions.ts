'use server';

// import { ThemeConfig } from '@/types';

export async function getThemeConfig(): Promise<any> {
  try {
    // Replace with your actual API endpoint
    // const response = await fetch('https://api.yoursite.com/theme-config', {
    //   cache: 'no-store'
    // });
    
    // if (!response.ok) {
    //   throw new Error('Failed to fetch theme config');
    // }

    // return await response.json();
    return {
        homeTheme: 1,
        listingTheme: 1,
        headerVariant: 1,
        footerVariant: 1,
        propertyCardVariant: 1,
    }
} catch (error) {
    console.error('Error fetching theme config:', error);
    // Return default config if API fails
    return {
      homeTheme: 1,
      listingTheme: 1,
      headerVariant: 1,
      footerVariant: 1,
      propertyCardVariant: 1,
    };
  }
} 