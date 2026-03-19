/**
 * 车机端设计系统 - 主题色板
 * 所有Demo和组件必须从此色板中选择颜色，不得自行定义颜色
 */

export interface ColorScale {
  name: string;
  nameCn: string;
  colors: {
    [key: string]: string;
  };
}

export const themeColors: ColorScale[] = [
  {
    name: "yellow-green",
    nameCn: "黄绿",
    colors: {
      "0": "#FCFCDE",
      "10": "#FCFCAF",
      "20": "#F8F881",
      "30": "#EDED50",
      "40": "#E1E12B",
      "50": "#D6D609",
      "60": "#B7B706",
      "70": "#989804",
      "80": "#797902",
      "90": "#5A5A01",
      "100": "#3B3B00",
    },
  },
  {
    name: "grass-green",
    nameCn: "草绿",
    colors: {
      "0": "#F9FFE6",
      "10": "#E6F8B0",
      "20": "#D6F086",
      "30": "#BFE356",
      "40": "#ACD533",
      "50": "#9AC714",
      "60": "#82A90E",
      "70": "#6B8C08",
      "80": "#546E04",
      "90": "#3D5102",
      "100": "#263300",
    },
  },
  {
    name: "moss-green",
    nameCn: "苔绿",
    colors: {
      "0": "#EFFBE2",
      "10": "#DFF8C6",
      "20": "#BEED8E",
      "30": "#9CE356",
      "40": "#84D533",
      "50": "#6DC714",
      "60": "#60A918",
      "70": "#538C1A",
      "80": "#3F6E11",
      "90": "#2E510C",
      "100": "#1D3307",
    },
  },
  {
    name: "teal",
    nameCn: "蓝绿",
    colors: {
      "0": "#E1FAF3",
      "10": "#BBF5E4",
      "20": "#8FEED1",
      "30": "#5FE7BE",
      "40": "#36DFB0",
      "50": "#13D8A2",
      "60": "#0EB88C",
      "70": "#0A9876",
      "80": "#057860",
      "90": "#02594A",
      "100": "#003A33",
    },
  },
  {
    name: "cyan",
    nameCn: "青",
    colors: {
      "0": "#E0F8FC",
      "10": "#B5EFF9",
      "20": "#7FE6F5",
      "30": "#4DDEF1",
      "40": "#29D6ED",
      "50": "#0CCFE9",
      "60": "#09B1CA",
      "70": "#0693AB",
      "80": "#04758C",
      "90": "#01576D",
      "100": "#00394E",
    },
  },
  {
    name: "light-blue",
    nameCn: "浅蓝",
    colors: {
      "0": "#E4F3FF",
      "10": "#BEE2FE",
      "20": "#8DCFFE",
      "30": "#5EBDFE",
      "40": "#36ADFD",
      "50": "#159EFC",
      "60": "#1186DD",
      "70": "#0E6EBE",
      "80": "#0A569F",
      "90": "#063E80",
      "100": "#032661",
    },
  },
  {
    name: "dark-blue",
    nameCn: "深蓝",
    colors: {
      "0": "#EBEEFE",
      "10": "#CEDAFD",
      "20": "#A7BCFA",
      "30": "#819FF8",
      "40": "#6087F6",
      "50": "#4472F3",
      "60": "#3A60D4",
      "70": "#2F4EB5",
      "80": "#243C96",
      "90": "#1A2B77",
      "100": "#0F1958",
    },
  },
  {
    name: "indigo",
    nameCn: "靛蓝",
    colors: {
      "0": "#EEEFFE",
      "10": "#D8DAFD",
      "20": "#B6BCFB",
      "30": "#959FF9",
      "40": "#7887F7",
      "50": "#5F72F5",
      "60": "#5060D6",
      "70": "#414EB7",
      "80": "#323C98",
      "90": "#242B79",
      "100": "#15195A",
    },
  },
  {
    name: "dark-purple",
    nameCn: "深紫",
    colors: {
      "0": "#F1EDFD",
      "10": "#DDD4FA",
      "20": "#C2B0F5",
      "30": "#A88DF0",
      "40": "#926FEB",
      "50": "#8054E7",
      "60": "#6C47C8",
      "70": "#593AA9",
      "80": "#452D8A",
      "90": "#32216B",
      "100": "#1F144C",
    },
  },
  {
    name: "purple",
    nameCn: "紫",
    colors: {
      "0": "#F5EDFD",
      "10": "#E5D4FA",
      "20": "#CBAFF6",
      "30": "#B18BF1",
      "40": "#9C6DED",
      "50": "#8A53E9",
      "60": "#7445CA",
      "70": "#5E38AB",
      "80": "#482B8C",
      "90": "#331F6D",
      "100": "#1E124E",
    },
  },
  {
    name: "copper",
    nameCn: "紫红",
    colors: {
      "0": "#FCE7F3",
      "10": "#F8C9E2",
      "20": "#F29FCA",
      "30": "#EB76B1",
      "40": "#E5539E",
      "50": "#DF348B",
      "60": "#BF2B76",
      "70": "#9F2361",
      "80": "#7F1A4C",
      "90": "#5F1238",
      "100": "#3F0923",
    },
  },
  {
    name: "fuchsia",
    nameCn: "品红",
    colors: {
      "0": "#FFEAF7",
      "10": "#FFCEEC",
      "20": "#FFA5DD",
      "30": "#FF7DCF",
      "40": "#FF5BC4",
      "50": "#FF3DBA",
      "60": "#DF339F",
      "70": "#BF2985",
      "80": "#9F206A",
      "90": "#7F1750",
      "100": "#5F0D35",
    },
  },
  {
    name: "pink",
    nameCn: "粉",
    colors: {
      "0": "#FFE8F0",
      "10": "#FFC8DC",
      "20": "#FFA0C2",
      "30": "#FF78A8",
      "40": "#FF5693",
      "50": "#FF387F",
      "60": "#DF2F6C",
      "70": "#BF2659",
      "80": "#9F1E46",
      "90": "#7F1534",
      "100": "#5F0D21",
    },
  },
];

/**
 * 根据颜色名称和色阶获取颜色值
 */
export function getThemeColor(colorName: string, shade: string | number): string {
  const colorScale = themeColors.find(c => c.name === colorName);
  if (!colorScale) {
    console.warn(`Theme color "${colorName}" not found`);
    return "#000000";
  }
  
  const shadeKey = shade.toString();
  const color = colorScale.colors[shadeKey];
  
  if (!color) {
    console.warn(`Shade "${shade}" not found for color "${colorName}"`);
    return "#000000";
  }
  
  return color;
}

/**
 * 获取所有可用的主题色名称
 */
export function getThemeColorNames(): string[] {
  return themeColors.map(c => c.name);
}
