import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeConfig {
  homeTheme: number;
  listingTheme: number;
  headerVariant: number;
  footerVariant: number;
  propertyCardVariant: number;
}

interface ThemeState {
  config: ThemeConfig;
  isLoading: boolean;
  error: string | null;
}

const initialState: ThemeState = {
  config: {
    homeTheme: 1,
    listingTheme: 1,
    headerVariant: 1,
    footerVariant: 1,
    propertyCardVariant: 1,
  },
  isLoading: false,
  error: null,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeConfig: (state, action: PayloadAction<ThemeConfig>) => {
      state.config = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setThemeConfig, setLoading, setError } = themeSlice.actions;
export const themeReducer = themeSlice.reducer; 