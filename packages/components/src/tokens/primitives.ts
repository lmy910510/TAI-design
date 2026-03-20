/**
 * TAI Design - Primitive Tokens
 * 作为整个设计系统的基础色板单一事实源。
 */

// ============================================================================
// Alpha
// ============================================================================

export const alpha = {
  black: {
    4: "rgba(0, 0, 0, 0.04)",
    5: "rgba(0, 0, 0, 0.05)",
    6: "rgba(0, 0, 0, 0.06)",
    8: "rgba(0, 0, 0, 0.08)",
    10: "rgba(0, 0, 0, 0.10)",
    12: "rgba(0, 0, 0, 0.12)",
    16: "rgba(0, 0, 0, 0.16)",
    20: "rgba(0, 0, 0, 0.20)",
    24: "rgba(0, 0, 0, 0.24)",
    30: "rgba(0, 0, 0, 0.30)",
    40: "rgba(0, 0, 0, 0.40)",
    42: "rgba(0, 0, 0, 0.42)",
    50: "rgba(0, 0, 0, 0.50)",
    54: "rgba(0, 0, 0, 0.54)",
    60: "rgba(0, 0, 0, 0.60)",
    70: "rgba(0, 0, 0, 0.70)",
    72: "rgba(0, 0, 0, 0.72)",
    78: "rgba(0, 0, 0, 0.78)",
    80: "rgba(0, 0, 0, 0.80)",
    84: "rgba(0, 0, 0, 0.84)",
    90: "rgba(0, 0, 0, 0.90)",
    92: "rgba(0, 0, 0, 0.92)",
    100: "rgba(0, 0, 0, 1)",
  },
  white: {
    4: "rgba(255, 255, 255, 0.04)",
    5: "rgba(255, 255, 255, 0.05)",
    6: "rgba(255, 255, 255, 0.06)",
    8: "rgba(255, 255, 255, 0.08)",
    10: "rgba(255, 255, 255, 0.10)",
    12: "rgba(255, 255, 255, 0.12)",
    16: "rgba(255, 255, 255, 0.16)",
    20: "rgba(255, 255, 255, 0.20)",
    24: "rgba(255, 255, 255, 0.24)",
    30: "rgba(255, 255, 255, 0.30)",
    40: "rgba(255, 255, 255, 0.40)",
    42: "rgba(255, 255, 255, 0.42)",
    50: "rgba(255, 255, 255, 0.50)",
    54: "rgba(255, 255, 255, 0.54)",
    60: "rgba(255, 255, 255, 0.60)",
    70: "rgba(255, 255, 255, 0.70)",
    72: "rgba(255, 255, 255, 0.72)",
    78: "rgba(255, 255, 255, 0.78)",
    80: "rgba(255, 255, 255, 0.80)",
    84: "rgba(255, 255, 255, 0.84)",
    90: "rgba(255, 255, 255, 0.90)",
    92: "rgba(255, 255, 255, 0.92)",
    100: "rgba(255, 255, 255, 1)",
  },
} as const;

export const BLACK = alpha.black;
export const WHITE = alpha.white;

// ============================================================================
// Neutral
// ============================================================================

export const blueGray = {
  0: "#F8F8F9",
  10: "#F4F4F5",
  20: "#E1E2E5",
  30: "#D3D5D9",
  40: "#B8BCC2",
  50: "#9CA0A8",
  60: "#878B94",
  70: "#6C7078",
  80: "#4A4E56",
  90: "#30343C",
  100: "#1A1D28",
} as const;

export const COLD_GRAY = blueGray;

// ============================================================================
// Status palettes
// ============================================================================

export const statusRed = {
  0: "#FFF5F6",
  10: "#FFD1D5",
  20: "#FFA8B0",
  30: "#FF858F",
  40: "#FF5765",
  50: "#FF293B",
  60: "#CC1827",
  70: "#A1101C",
  80: "#7A0711",
  90: "#5C0209",
  100: "#3D0005",
} as const;

export const statusOrange = {
  0: "#FFF6F0",
  10: "#FFDBC2",
  20: "#FFC194",
  30: "#FFA666",
  40: "#FF8E3D",
  50: "#FA6800",
  60: "#E54900",
  70: "#C73F00",
  80: "#A83500",
  90: "#7A2700",
  100: "#5C1D00",
} as const;

export const statusYellow = {
  0: "#FFF9E0",
  10: "#FFF1B3",
  20: "#FFEB94",
  30: "#FFE366",
  40: "#FFC640",
  50: "#FFD000",
  60: "#D0A400",
  70: "#A97B00",
  80: "#8A6000",
  90: "#7A5200",
  100: "#5D3F00",
} as const;

export const statusGreen = {
  0: "#F0FFF6",
  10: "#BAF5D3",
  20: "#8BF0B4",
  30: "#5AE099",
  40: "#21CC79",
  50: "#00B578",
  60: "#009A66",
  70: "#0E7F57",
  80: "#125F43",
  90: "#104835",
  100: "#0E3628",
} as const;

export const statusBlue = {
  0: "#F0F7FF",
  10: "#C2DFFF",
  20: "#94CBFF",
  30: "#66BDFF",
  40: "#3898FF",
  50: "#007BFF",
  60: "#0066D6",
  70: "#0052AD",
  80: "#003F8F",
  90: "#002B6C",
  100: "#001A42",
} as const;

export const status = {
  red: statusRed,
  orange: statusOrange,
  yellow: statusYellow,
  green: statusGreen,
  blue: statusBlue,
} as const;

// ============================================================================
// Theme palettes
// ============================================================================

export const themeYellowGreen = {
  0: "#FCFCDE",
  10: "#FCFCAF",
  20: "#F8F881",
  30: "#EDED50",
  40: "#E1E12B",
  50: "#D6D609",
  60: "#B7B706",
  70: "#989804",
  80: "#797902",
  90: "#5A5A01",
  100: "#3B3B00",
} as const;

export const themeGrassGreen = {
  0: "#F9FFE6",
  10: "#E6F8B0",
  20: "#D6F086",
  30: "#BFE356",
  40: "#ACD533",
  50: "#9AC714",
  60: "#82A90E",
  70: "#6B8C08",
  80: "#546E04",
  90: "#3D5102",
  100: "#263300",
} as const;

export const themeMossGreen = {
  0: "#EFFBE2",
  10: "#DFF8C6",
  20: "#BEED8E",
  30: "#9CE356",
  40: "#84D533",
  50: "#6DC714",
  60: "#60A918",
  70: "#538C1A",
  80: "#3F6E11",
  90: "#2E510C",
  100: "#1D3307",
} as const;

export const themeTeal = {
  0: "#E1FAF3",
  10: "#BBF5E4",
  20: "#8FEED1",
  30: "#5FE7BE",
  40: "#36DFB0",
  50: "#13D8A2",
  60: "#0EB88C",
  70: "#0A9876",
  80: "#057860",
  90: "#02594A",
  100: "#003A33",
} as const;

export const themeCyan = {
  0: "#E0F8FC",
  10: "#B5EFF9",
  20: "#7FE6F5",
  30: "#4DDEF1",
  40: "#29D6ED",
  50: "#0CCFE9",
  60: "#09B1CA",
  70: "#0693AB",
  80: "#04758C",
  90: "#01576D",
  100: "#00394E",
} as const;

export const themeLightBlue = {
  0: "#E4F3FF",
  10: "#BEE2FE",
  20: "#8DCFFE",
  30: "#5EBDFE",
  40: "#36ADFD",
  50: "#159EFC",
  60: "#1186DD",
  70: "#0E6EBE",
  80: "#0A569F",
  90: "#063E80",
  100: "#032661",
} as const;

export const themeDarkBlue = {
  0: "#EBEEFE",
  10: "#CEDAFD",
  20: "#A7BCFA",
  30: "#819FF8",
  40: "#6087F6",
  50: "#4472F3",
  60: "#3A60D4",
  70: "#2F4EB5",
  80: "#243C96",
  90: "#1A2B77",
  100: "#0F1958",
} as const;

export const themeIndigo = {
  0: "#EEEFFE",
  10: "#D8DAFD",
  20: "#B6BCFB",
  30: "#959FF9",
  40: "#7887F7",
  50: "#5F72F5",
  60: "#5060D6",
  70: "#414EB7",
  80: "#323C98",
  90: "#242B79",
  100: "#15195A",
} as const;

export const themeDarkPurple = {
  0: "#F1EDFD",
  10: "#DDD4FA",
  20: "#C2B0F5",
  30: "#A88DF0",
  40: "#926FEB",
  50: "#8054E7",
  60: "#6C47C8",
  70: "#593AA9",
  80: "#452D8A",
  90: "#32216B",
  100: "#1F144C",
} as const;

export const themePurple = {
  0: "#F5EDFD",
  10: "#E5D4FA",
  20: "#CBAFF6",
  30: "#B18BF1",
  40: "#9C6DED",
  50: "#8A53E9",
  60: "#7445CA",
  70: "#5E38AB",
  80: "#482B8C",
  90: "#331F6D",
  100: "#1E124E",
} as const;

export const themeCopper = {
  0: "#FCE7F3",
  10: "#F8C9E2",
  20: "#F29FCA",
  30: "#EB76B1",
  40: "#E5539E",
  50: "#DF348B",
  60: "#BF2B76",
  70: "#9F2361",
  80: "#7F1A4C",
  90: "#5F1238",
  100: "#3F0923",
} as const;

export const themeFuchsia = {
  0: "#FFEAF7",
  10: "#FFCEEC",
  20: "#FFA5DD",
  30: "#FF7DCF",
  40: "#FF5BC4",
  50: "#FF3DBA",
  60: "#DF339F",
  70: "#BF2985",
  80: "#9F206A",
  90: "#7F1750",
  100: "#5F0D35",
} as const;

export const themePink = {
  0: "#FFE8F0",
  10: "#FFC8DC",
  20: "#FFA0C2",
  30: "#FF78A8",
  40: "#FF5693",
  50: "#FF387F",
  60: "#DF2F6C",
  70: "#BF2659",
  80: "#9F1E46",
  90: "#7F1534",
  100: "#5F0D21",
} as const;

export const theme = {
  yellowGreen: themeYellowGreen,
  grassGreen: themeGrassGreen,
  mossGreen: themeMossGreen,
  teal: themeTeal,
  cyan: themeCyan,
  lightBlue: themeLightBlue,
  darkBlue: themeDarkBlue,
  indigo: themeIndigo,
  darkPurple: themeDarkPurple,
  purple: themePurple,
  copper: themeCopper,
  fuchsia: themeFuchsia,
  pink: themePink,
} as const;

// ============================================================================
// Static / brand / functional
// ============================================================================

export const staticColors = {
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
} as const;

export const STATIC = staticColors;

export const BRAND = {
  primary: blueGray[100],
  blue: themeDarkBlue[50],
  green: statusGreen[50],
  red: statusRed[50],
} as const;

export const FUNCTIONAL = {
  danger: {
    main: statusRed[50],
    6: "rgba(255, 41, 59, 0.06)",
    12: "rgba(255, 41, 59, 0.12)",
    18: "rgba(255, 41, 59, 0.18)",
    24: "rgba(255, 41, 59, 0.24)",
    30: "rgba(255, 41, 59, 0.30)",
  },
  notice: {
    main: statusOrange[50],
    6: "rgba(250, 104, 0, 0.06)",
    12: "rgba(250, 104, 0, 0.12)",
    30: "rgba(250, 104, 0, 0.30)",
  },
  success: {
    main: statusGreen[50],
    6: "rgba(0, 181, 120, 0.06)",
    12: "rgba(0, 181, 120, 0.12)",
    30: "rgba(0, 181, 120, 0.30)",
    84: "rgba(6, 173, 120, 0.84)",
  },
  info: {
    main: blueGray[70],
    6: "rgba(108, 112, 120, 0.06)",
    12: "rgba(108, 112, 120, 0.12)",
    30: "rgba(108, 112, 120, 0.30)",
  },
} as const;

export const BG = {
  lightGray: "#f6f7fa",
  gray: "#f5f5f5",
} as const;

export const primitives = {
  alpha,
  blueGray,
  status,
  theme,
  static: staticColors,
} as const;

export type AlphaScale = keyof typeof alpha.black;
export type BlueGrayScale = keyof typeof blueGray;
export type StatusScale = keyof typeof statusRed;
export type ThemeScale = keyof typeof themeDarkBlue;
export type ThemeName = keyof typeof theme;
export type StatusName = keyof typeof status;
export type Primitives = typeof primitives;
