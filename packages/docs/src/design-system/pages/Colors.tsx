import { useOutletContext } from "react-router-dom";
import { 
  alpha, 
  blueGray, 
  status, 
  theme,
  type ThemeName,
} from "../../data/colorTokens";

// ============================================================================
// 颜色展示数据转换
// ============================================================================

// Alpha 色板配置（透明度色）
const alphaColorConfig = {
  light: {
    name: '黑色透明度',
    description: '浅色模式下使用，数字表示不透明度百分比',
    colors: Object.entries(alpha.black).map(([key, value]) => ({
      name: `Black-${key}`,
      value,
      level: parseInt(key),
      usage: getAlphaUsage('black', parseInt(key)),
    })),
  },
  dark: {
    name: '白色透明度',
    description: '深色模式下使用，数字表示不透明度百分比',
    colors: Object.entries(alpha.white).map(([key, value]) => ({
      name: `White-${key}`,
      value,
      level: parseInt(key),
      usage: getAlphaUsage('white', parseInt(key)),
    })),
  },
};

// Alpha 色用途说明
function getAlphaUsage(_type: 'black' | 'white', level: number): string {
  const usageMap: Record<number, string> = {
    5: '代码块背景',
    6: '三级分割线',
    10: '三级分割线',
    12: '二级分割线、描边',
    20: '二级分割线、描边',
    24: '蒙层背景',
    30: '禁用文字',
    40: '',
    42: '注释文本',
    50: '',
    54: '',
    60: '二级文本、辅助文案',
    70: '',
    72: '次要内容',
    80: '',
    84: '',
    90: '',
    92: '一级文本、标题',
    100: '纯色',
  };
  return usageMap[level] || '';
}

// BlueGray 色板配置
const blueGrayConfig = Object.entries(blueGray).map(([key, value]) => ({
  name: `BlueGray-${key}`,
  value,
  level: parseInt(key),
  hex: value.replace('#', ''),
}));

// Status 功能色配置
const statusColorConfig = {
  red: { name: 'Red', label: '红色 · 错误/危险', colors: status.red },
  orange: { name: 'Orange', label: '橙色 · 警告', colors: status.orange },
  yellow: { name: 'Yellow', label: '黄色 · 提示/进行中', colors: status.yellow },
  green: { name: 'Green', label: '绿色 · 成功/安全', colors: status.green },
  blue: { name: 'Blue', label: '蓝色 · 信息/链接', colors: status.blue },
} as const;

// Theme 主题色配置
const themeColorConfig: Record<ThemeName, { name: string; nameCn: string }> = {
  yellowGreen: { name: 'yellow-green', nameCn: '黄绿' },
  grassGreen: { name: 'grass-green', nameCn: '草绿' },
  mossGreen: { name: 'moss-green', nameCn: '苔绿' },
  teal: { name: 'teal', nameCn: '蓝绿' },
  cyan: { name: 'cyan', nameCn: '青' },
  lightBlue: { name: 'light-blue', nameCn: '浅蓝' },
  darkBlue: { name: 'dark-blue', nameCn: '深蓝' },
  indigo: { name: 'indigo', nameCn: '靛蓝' },
  darkPurple: { name: 'dark-purple', nameCn: '深紫' },
  purple: { name: 'purple', nameCn: '紫' },
  copper: { name: 'copper', nameCn: '紫红' },
  fuchsia: { name: 'fuchsia', nameCn: '品红' },
  pink: { name: 'pink', nameCn: '粉' },
};

// ============================================================================
// 组件
// ============================================================================

export function Colors() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  
  return (
    <div>
      {/* 页面头部 */}
      <div className="mb-8">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Foundation / 基础
        </div>
        <h1 className="text-4xl font-bold mb-4">Colors 颜色系统</h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          TAI Design 采用三层颜色架构：基础色板 → 语义化 Token → 组件。
        </p>
      </div>

      {/* Token 架构说明 */}
      <div className={`mb-12 p-6 border rounded-xl ${
        isDark 
          ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-500/20' 
          : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
      }`}>
        <h3 className="text-lg font-semibold mb-4">🏗️ Token 架构</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-white/60'}`}>
            <div className="font-semibold mb-2 text-blue-500">Primitive Layer</div>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              基础色板：alpha、blueGray、status、theme
            </p>
          </div>
          <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-white/60'}`}>
            <div className="font-semibold mb-2 text-purple-500">Semantic Layer</div>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              语义 Token：text、surface、border、action、status
            </p>
          </div>
          <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-white/60'}`}>
            <div className="font-semibold mb-2 text-green-500">Component Layer</div>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              组件仅使用语义 Token，不直接引用基础色板
            </p>
          </div>
        </div>
      </div>

      {/* Alpha 透明度色板 - 浅色模式 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Alpha 透明度色板</h2>
        <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          用于文字、图标、分割线、蒙层等，数字表示不透明度百分比
        </p>
        
        <h3 className="text-lg font-semibold mb-4">{alphaColorConfig.light.name}</h3>
        <p className={`text-sm mb-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          {alphaColorConfig.light.description}
        </p>
        <div className="grid grid-cols-5 gap-4 mb-8">
          {alphaColorConfig.light.colors.filter(c => [6, 12, 24, 42, 60, 72, 92, 100].includes(c.level)).map((color) => (
            <div
              key={color.name}
              className={`border rounded-xl overflow-hidden ${
                isDark ? 'border-[#2a2a2a]' : 'border-gray-200'
              }`}
            >
              <div className="h-24 relative" style={{ backgroundColor: color.value }}>
                <div className={`absolute inset-0 flex items-center justify-center ${
                  color.level >= 60 ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  <span className="font-bold text-lg">{color.level}</span>
                </div>
              </div>
              <div className={`p-3 ${isDark ? 'bg-[#141414]' : 'bg-white'}`}>
                <p className="font-mono text-xs mb-1">{color.name}</p>
                <p className={`text-xs mb-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {color.value}
                </p>
                {color.usage && (
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {color.usage}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-4">{alphaColorConfig.dark.name}</h3>
        <p className={`text-sm mb-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          {alphaColorConfig.dark.description}
        </p>
        <div className="bg-black p-6 rounded-2xl">
          <div className="grid grid-cols-5 gap-4">
            {alphaColorConfig.dark.colors.filter(c => [6, 12, 24, 42, 60, 72, 92, 100].includes(c.level)).map((color) => (
              <div
                key={color.name}
                className="border border-[#2a2a2a] rounded-xl overflow-hidden"
              >
                <div className="h-24 relative bg-black">
                  <div className="absolute inset-0" style={{ backgroundColor: color.value }} />
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <span className="font-bold text-lg">{color.level}</span>
                  </div>
                </div>
                <div className="p-3 bg-black">
                  <p className="font-mono text-xs mb-1 text-white">{color.name}</p>
                  <p className="text-xs mb-2 text-gray-500">
                    {color.value}
                  </p>
                  {color.usage && (
                    <p className="text-xs text-gray-400">
                      {color.usage}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BlueGray 蓝灰色板 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">BlueGray 蓝灰色板</h2>
        <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          中性底盘色，用于页面背景、卡片、容器等，数字表示明度等级（0最浅，100最深）
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {blueGrayConfig.map((color) => {
            const isDarkColor = color.level >= 60;
            return (
              <div
                key={color.name}
                className={`border rounded-xl overflow-hidden flex-shrink-0 ${
                  isDarkColor 
                    ? 'border-[#2a2a2a]' 
                    : isDark ? 'border-[#2a2a2a]' : 'border-gray-200'
                }`}
                style={{ width: color.level === 50 ? '170px' : '120px' }}
              >
                <div 
                  className={`h-20 relative ${isDarkColor ? 'bg-[#292929]' : isDark ? 'bg-[#141414]' : 'bg-white'}`}
                  style={!isDarkColor ? { boxShadow: '0px 12px 24px 0px rgba(0,0,0,0.07)' } : {}}
                >
                  <div className="absolute inset-0" style={{ backgroundColor: color.value }} />
                  <div className={`absolute inset-0 flex items-center justify-center ${
                    isDarkColor ? 'text-white' : 'text-black'
                  }`}>
                    <span className="font-bold text-lg">{color.level}</span>
                  </div>
                </div>
                <div className={`p-3 ${isDarkColor ? 'bg-[#292929]' : isDark ? 'bg-[#141414]' : 'bg-white'}`}>
                  <p className={`font-mono text-xs mb-1 ${isDarkColor ? 'text-white' : ''}`}>
                    {color.name}
                  </p>
                  <p className={`text-xs ${isDarkColor ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    # {color.hex}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Status 功能色 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Status 功能色</h2>
        <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          用于传达状态和功能的语义化颜色，50 为标准色
        </p>
        <div className="space-y-6">
          {Object.entries(statusColorConfig).map(([key, colorGroup]) => {
            const colors = Object.entries(colorGroup.colors).map(([level, value]) => ({
              level: parseInt(level),
              value,
              isStandard: level === '50',
            }));
            
            return (
              <div key={key}>
                <h3 className={`text-base font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                  {colorGroup.name} / {colorGroup.label}
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {colors.map((color) => {
                    const isDarkColor = color.level >= 60;
                    return (
                      <div
                        key={color.level}
                        className={`border rounded-lg overflow-hidden flex-shrink-0 ${
                          isDarkColor 
                            ? 'border-[#2a2a2a]' 
                            : isDark ? 'border-[#2a2a2a]' : 'border-gray-200'
                        }`}
                        style={{ width: color.isStandard ? '110px' : '80px' }}
                      >
                        <div 
                          className={`h-14 relative ${isDarkColor ? 'bg-[#292929]' : isDark ? 'bg-[#141414]' : 'bg-white'}`}
                          style={!isDarkColor ? { boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.05)' } : {}}
                        >
                          <div className="absolute inset-0" style={{ backgroundColor: color.value }} />
                          {color.isStandard && (
                            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 text-white text-xs font-medium">
                              标准色
                            </div>
                          )}
                          <div className={`absolute inset-0 flex items-center justify-center ${
                            isDarkColor || color.level >= 40 ? 'text-white' : 'text-black'
                          } ${color.isStandard ? 'mt-4' : ''}`}>
                            <span className="font-bold text-base">{color.level}</span>
                          </div>
                        </div>
                        <div className={`px-2 py-1.5 ${isDarkColor ? 'bg-[#292929]' : isDark ? 'bg-[#141414]' : 'bg-white'}`}>
                          <p className={`text-[10px] ${isDarkColor ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {color.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Theme 主题色 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Theme 主题色</h2>
        <div className={`p-6 border rounded-xl mb-6 ${
          isDark 
            ? 'bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-purple-500/20' 
            : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'
        }`}>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <strong className={isDark ? 'text-white' : 'text-gray-900'}>⚠️ 重要提示：</strong>
            主题色是品牌可选色池，通过语义 Token 消费。组件不应直接使用主题色板中的颜色，而应使用 <code className="px-1.5 py-0.5 rounded bg-black/10">action.primary</code>、<code className="px-1.5 py-0.5 rounded bg-black/10">border.focus</code> 等语义 Token。
          </p>
        </div>
        
        <div className="space-y-8">
          {(Object.keys(themeColorConfig) as ThemeName[]).map((themeName) => {
            const config = themeColorConfig[themeName];
            const colors = theme[themeName];
            
            return (
              <div key={themeName}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                  {config.nameCn} / {config.name}
                  {themeName === 'darkBlue' && (
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                      默认主题
                    </span>
                  )}
                </h3>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {Object.entries(colors).map(([level, value]) => {
                    const levelNum = parseInt(level);
                    const isDarkColor = levelNum >= 60;
                    const isStandardWidth = level === '50';
                    return (
                      <div
                        key={level}
                        className={`border rounded-xl overflow-hidden flex-shrink-0 ${
                          isDarkColor 
                            ? 'border-[#2a2a2a]' 
                            : isDark ? 'border-[#2a2a2a]' : 'border-gray-200'
                        }`}
                        style={{ width: isStandardWidth ? '170px' : '120px' }}
                      >
                        <div 
                          className={`h-20 relative ${isDarkColor ? 'bg-[#292929]' : isDark ? 'bg-[#141414]' : 'bg-white'}`}
                          style={!isDarkColor ? { boxShadow: '0px 12px 24px 0px rgba(0,0,0,0.07)' } : {}}
                        >
                          <div className="absolute inset-0 rounded-t-xl" style={{ backgroundColor: value }} />
                          <div className={`absolute inset-0 flex items-center justify-center ${
                            isDarkColor || levelNum >= 40 ? 'text-white' : 'text-black'
                          }`}>
                            <span className="font-bold text-xl">{level}</span>
                          </div>
                        </div>
                        <div className={`p-3 ${isDarkColor ? 'bg-[#292929]' : isDark ? 'bg-[#141414]' : 'bg-white'}`}>
                          <p className={`font-mono text-xs ${isDarkColor ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-900'}`}>
                            {value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 使用说明 */}
      <div className={`mt-8 p-6 border rounded-xl ${
        isDark 
          ? 'bg-gradient-to-r from-green-600/10 to-teal-600/10 border-green-500/20' 
          : 'bg-gradient-to-r from-green-50 to-teal-50 border-green-200'
      }`}>
        <h3 className="text-lg font-semibold mb-4">💡 使用指南</h3>
        <div className={`text-sm space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <div>
            <strong>推荐用法：</strong>
            <pre className={`mt-2 p-3 rounded-lg text-xs overflow-x-auto ${isDark ? 'bg-black/30' : 'bg-white'}`}>
{`import { getTokens } from '@/data/colorTokens';

const tokens = getTokens(isDark);

// 使用语义 Token
<div style={{ 
  color: tokens.text.primary,
  backgroundColor: tokens.surface.card,
  border: \`1px solid \${tokens.border.default}\`
}}>
  Hello World
</div>`}
            </pre>
          </div>
          <div>
            <strong>需要原始色板时：</strong>
            <pre className={`mt-2 p-3 rounded-lg text-xs overflow-x-auto ${isDark ? 'bg-black/30' : 'bg-white'}`}>
{`import { primitives } from '@/data/colorTokens';

// 访问透明度色
const overlay = primitives.alpha.black[60];

// 访问蓝灰色
const cardBg = primitives.blueGray[0];

// 访问主题色
const brandColor = primitives.theme.darkBlue[50];`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
