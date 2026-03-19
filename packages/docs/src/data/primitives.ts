/**
 * 🎨 TAI Design System - Primitive Color Tokens
 * 
 * 基础色板层（Primitive Layer）
 * 这一层只存放"原始颜色值"，不包含任何 UI 语义。
 * 
 * 结构说明：
 * 1. alpha - 透明度色板（白/黑），数字代表透明度百分比
 * 2. blueGray - 蓝灰色板，数字代表明度等级（0最浅，100最深）
 * 3. status - 功能色板，用于状态表达（红橙黄绿蓝）
 * 4. theme - 主题色板，品牌可选色池
 * 5. static - 固定颜色（纯白、纯黑、透明）
 */

// ============================================================================
// 1. Alpha 透明度色板
// ============================================================================

/**
 * 黑色透明度色板（浅色模式使用）
 * 数字表示透明度百分比：10 = 10% 不透明度
 */
export const alpha = {
  black: {
    4: 'rgba(0, 0, 0, 0.04)',
    5: 'rgba(0, 0, 0, 0.05)',
    6: 'rgba(0, 0, 0, 0.06)',
    8: 'rgba(0, 0, 0, 0.08)',
    10: 'rgba(0, 0, 0, 0.10)',
    12: 'rgba(0, 0, 0, 0.12)',
    16: 'rgba(0, 0, 0, 0.16)',
    20: 'rgba(0, 0, 0, 0.20)',
    24: 'rgba(0, 0, 0, 0.24)',
    30: 'rgba(0, 0, 0, 0.30)',
    40: 'rgba(0, 0, 0, 0.40)',
    42: 'rgba(0, 0, 0, 0.42)',
    50: 'rgba(0, 0, 0, 0.50)',
    54: 'rgba(0, 0, 0, 0.54)',
    60: 'rgba(0, 0, 0, 0.60)',
    70: 'rgba(0, 0, 0, 0.70)',
    72: 'rgba(0, 0, 0, 0.72)',
    80: 'rgba(0, 0, 0, 0.80)',
    84: 'rgba(0, 0, 0, 0.84)',
    90: 'rgba(0, 0, 0, 0.90)',
    92: 'rgba(0, 0, 0, 0.92)',
    100: 'rgba(0, 0, 0, 1)',
  },
  /**
   * 白色透明度色板（深色模式使用）
   * 数字表示透明度百分比：10 = 10% 不透明度
   */
  white: {
    4: 'rgba(255, 255, 255, 0.04)',
    5: 'rgba(255, 255, 255, 0.05)',
    6: 'rgba(255, 255, 255, 0.06)',
    8: 'rgba(255, 255, 255, 0.08)',
    10: 'rgba(255, 255, 255, 0.10)',
    12: 'rgba(255, 255, 255, 0.12)',
    16: 'rgba(255, 255, 255, 0.16)',
    20: 'rgba(255, 255, 255, 0.20)',
    24: 'rgba(255, 255, 255, 0.24)',
    30: 'rgba(255, 255, 255, 0.30)',
    40: 'rgba(255, 255, 255, 0.40)',
    42: 'rgba(255, 255, 255, 0.42)',
    50: 'rgba(255, 255, 255, 0.50)',
    54: 'rgba(255, 255, 255, 0.54)',
    60: 'rgba(255, 255, 255, 0.60)',
    70: 'rgba(255, 255, 255, 0.70)',
    72: 'rgba(255, 255, 255, 0.72)',
    80: 'rgba(255, 255, 255, 0.80)',
    84: 'rgba(255, 255, 255, 0.84)',
    90: 'rgba(255, 255, 255, 0.90)',
    92: 'rgba(255, 255, 255, 0.92)',
    100: 'rgba(255, 255, 255, 1)',
  },
} as const;

// ============================================================================
// 2. Blue Gray 蓝灰色板
// ============================================================================

/**
 * 蓝灰色板（中性底盘色）
 * 用于页面背景、卡片背景、分层容器、中性描边等
 * 数字表示明度等级：0 最浅，100 最深
 */
export const blueGray = {
  0: '#F7F8FA',
  10: '#F3F4F7',
  20: '#DEE2E8',
  30: '#D0D5DC',
  40: '#B4BAC5',
  50: '#969EAB',
  60: '#828997',
  70: '#697181',
  80: '#444C5C',
  90: '#32394A',
  100: '#1A1D28',
} as const;

// ============================================================================
// 3. Status 功能色板
// ============================================================================

/**
 * 功能色板 - 红色系
 * 用途：错误、危险、删除、停止
 */
export const statusRed = {
  0: '#FFF5F6',
  10: '#FFD1D5',
  20: '#FFA8B0',
  30: '#FF858F',
  40: '#FF5765',
  50: '#FF293B',  // 标准色
  60: '#CC1827',
  70: '#A1101C',
  80: '#7A0711',
  90: '#5C0209',
  100: '#3D0005',
} as const;

/**
 * 功能色板 - 橙色系
 * 用途：警告、提醒、需要注意
 */
export const statusOrange = {
  0: '#FFF6F0',
  10: '#FFDBC2',
  20: '#FFC194',
  30: '#FFA666',
  40: '#FF8E3D',
  50: '#FA6800',  // 标准色
  60: '#E54900',
  70: '#C73F00',
  80: '#A83500',
  90: '#7A2700',
  100: '#5C1D00',
} as const;

/**
 * 功能色板 - 黄色系
 * 用途：警示、提示、正在进行
 */
export const statusYellow = {
  0: '#FFF9E0',
  10: '#FFF1B3',
  20: '#FFEB94',
  30: '#FFE366',
  40: '#FFC640',
  50: '#FFD000',  // 标准色
  60: '#D0A400',
  70: '#A97B00',
  80: '#8A6000',
  90: '#7A5200',
  100: '#5D3F00',
} as const;

/**
 * 功能色板 - 绿色系
 * 用途：成功、完成、在线、安全
 */
export const statusGreen = {
  0: '#F0FFF6',
  10: '#BAF5D3',
  20: '#8BF0B4',
  30: '#5AE099',
  40: '#21CC79',
  50: '#00B85F',  // 标准色
  60: '#00A85D',
  70: '#0E8A54',
  80: '#166644',
  90: '#125239',
  100: '#134230',
} as const;

/**
 * 功能色板 - 蓝色系
 * 用途：信息、链接、选中、帮助
 */
export const statusBlue = {
  0: '#F0F7FF',
  10: '#C2DFFF',
  20: '#94CBFF',
  30: '#66BDFF',
  40: '#3898FF',
  50: '#007BFF',  // 标准色
  60: '#0066D6',
  70: '#0052AD',
  80: '#003F8F',
  90: '#002B6C',
  100: '#001A42',
} as const;

/**
 * 功能色汇总
 */
export const status = {
  red: statusRed,
  orange: statusOrange,
  yellow: statusYellow,
  green: statusGreen,
  blue: statusBlue,
} as const;

// ============================================================================
// 4. Theme 主题色板
// ============================================================================

/**
 * 主题色板 - 黄绿
 */
export const themeYellowGreen = {
  0: '#FCFCDE',
  10: '#FCFCAF',
  20: '#F8F881',
  30: '#EDED50',
  40: '#E1E12B',
  50: '#D6D609',
  60: '#B7B706',
  70: '#989804',
  80: '#797902',
  90: '#5A5A01',
  100: '#3B3B00',
} as const;

/**
 * 主题色板 - 草绿
 */
export const themeGrassGreen = {
  0: '#F9FFE6',
  10: '#E6F8B0',
  20: '#D6F086',
  30: '#BFE356',
  40: '#ACD533',
  50: '#9AC714',
  60: '#82A90E',
  70: '#6B8C08',
  80: '#546E04',
  90: '#3D5102',
  100: '#263300',
} as const;

/**
 * 主题色板 - 苔绿
 */
export const themeMossGreen = {
  0: '#EFFBE2',
  10: '#DFF8C6',
  20: '#BEED8E',
  30: '#9CE356',
  40: '#84D533',
  50: '#6DC714',
  60: '#60A918',
  70: '#538C1A',
  80: '#3F6E11',
  90: '#2E510C',
  100: '#1D3307',
} as const;

/**
 * 主题色板 - 蓝绿（Teal）
 */
export const themeTeal = {
  0: '#E1FAF3',
  10: '#BBF5E4',
  20: '#8FEED1',
  30: '#5FE7BE',
  40: '#36DFB0',
  50: '#13D8A2',
  60: '#0EB88C',
  70: '#0A9876',
  80: '#057860',
  90: '#02594A',
  100: '#003A33',
} as const;

/**
 * 主题色板 - 青（Cyan）
 */
export const themeCyan = {
  0: '#E0F8FC',
  10: '#B5EFF9',
  20: '#7FE6F5',
  30: '#4DDEF1',
  40: '#29D6ED',
  50: '#0CCFE9',
  60: '#09B1CA',
  70: '#0693AB',
  80: '#04758C',
  90: '#01576D',
  100: '#00394E',
} as const;

/**
 * 主题色板 - 浅蓝
 */
export const themeLightBlue = {
  0: '#E4F3FF',
  10: '#BEE2FE',
  20: '#8DCFFE',
  30: '#5EBDFE',
  40: '#36ADFD',
  50: '#159EFC',
  60: '#1186DD',
  70: '#0E6EBE',
  80: '#0A569F',
  90: '#063E80',
  100: '#032661',
} as const;

/**
 * 主题色板 - 深蓝（默认主题色）
 */
export const themeDarkBlue = {
  0: '#EBEEFE',
  10: '#CEDAFD',
  20: '#A7BCFA',
  30: '#819FF8',
  40: '#6087F6',
  50: '#4472F3',
  60: '#3A60D4',
  70: '#2F4EB5',
  80: '#243C96',
  90: '#1A2B77',
  100: '#0F1958',
} as const;

/**
 * 主题色板 - 靛蓝
 */
export const themeIndigo = {
  0: '#EEEFFE',
  10: '#D8DAFD',
  20: '#B6BCFB',
  30: '#959FF9',
  40: '#7887F7',
  50: '#5F72F5',
  60: '#5060D6',
  70: '#414EB7',
  80: '#323C98',
  90: '#242B79',
  100: '#15195A',
} as const;

/**
 * 主题色板 - 深紫
 */
export const themeDarkPurple = {
  0: '#F1EDFD',
  10: '#DDD4FA',
  20: '#C2B0F5',
  30: '#A88DF0',
  40: '#926FEB',
  50: '#8054E7',
  60: '#6C47C8',
  70: '#593AA9',
  80: '#452D8A',
  90: '#32216B',
  100: '#1F144C',
} as const;

/**
 * 主题色板 - 紫
 */
export const themePurple = {
  0: '#F5EDFD',
  10: '#E5D4FA',
  20: '#CBAFF6',
  30: '#B18BF1',
  40: '#9C6DED',
  50: '#8A53E9',
  60: '#7445CA',
  70: '#5E38AB',
  80: '#482B8C',
  90: '#331F6D',
  100: '#1E124E',
} as const;

/**
 * 主题色板 - 紫红
 */
export const themeCopper = {
  0: '#FCE7F3',
  10: '#F8C9E2',
  20: '#F29FCA',
  30: '#EB76B1',
  40: '#E5539E',
  50: '#DF348B',
  60: '#BF2B76',
  70: '#9F2361',
  80: '#7F1A4C',
  90: '#5F1238',
  100: '#3F0923',
} as const;

/**
 * 主题色板 - 品红
 */
export const themeFuchsia = {
  0: '#FFEAF7',
  10: '#FFCEEC',
  20: '#FFA5DD',
  30: '#FF7DCF',
  40: '#FF5BC4',
  50: '#FF3DBA',
  60: '#DF339F',
  70: '#BF2985',
  80: '#9F206A',
  90: '#7F1750',
  100: '#5F0D35',
} as const;

/**
 * 主题色板 - 粉
 */
export const themePink = {
  0: '#FFE8F0',
  10: '#FFC8DC',
  20: '#FFA0C2',
  30: '#FF78A8',
  40: '#FF5693',
  50: '#FF387F',
  60: '#DF2F6C',
  70: '#BF2659',
  80: '#9F1E46',
  90: '#7F1534',
  100: '#5F0D21',
} as const;

/**
 * 主题色汇总
 */
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
// 5. Static 固定颜色
// ============================================================================

/**
 * 固定颜色（不随主题/模式变化）
 */
export const staticColors = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

// ============================================================================
// 类型导出
// ============================================================================

export type AlphaScale = keyof typeof alpha.black;
export type BlueGrayScale = keyof typeof blueGray;
export type StatusScale = keyof typeof statusRed;
export type ThemeScale = keyof typeof themeDarkBlue;
export type ThemeName = keyof typeof theme;
export type StatusName = keyof typeof status;

// ============================================================================
// 完整基础色板对象
// ============================================================================

/**
 * 完整的 Primitive 基础色板
 * 推荐使用这个对象作为唯一颜色源
 */
export const primitives = {
  alpha,
  blueGray,
  status,
  theme,
  static: staticColors,
} as const;

export type Primitives = typeof primitives;

export default primitives;
