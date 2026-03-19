import { useOutletContext, Link } from "react-router-dom";
import { Map as MapIcon, Square, ToggleRight } from "lucide-react";

export function Components() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  
  const components = [
    {
      name: "底图组件",
      path: "/map",
      icon: MapIcon,
      description: "基于腾讯地图的车机端底图展示",
      status: "已完成"
    },
    {
      name: "按钮",
      path: "/button",
      icon: Square,
      description: "4种尺寸、5种样式变体的按钮组件",
      status: "已完成"
    },
    {
      name: "开关",
      path: "/switch",
      icon: ToggleRight,
      description: "功能开关组件，支持多种尺寸",
      status: "已完成"
    },
  ];
  
  return (
    <div>
      <div className="mb-8">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-4xl font-bold mb-4">组件库</h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          车机端UI组件集合，包括底图、按钮、开关等基础和业务组件
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {components.map((component) => {
          const Icon = component.icon;
          return (
            <Link
              key={component.path}
              to={component.path}
              className={`group p-6 border rounded-xl transition-all hover:shadow-lg ${
                isDark 
                  ? 'bg-[#141414] border-[#2a2a2a] hover:border-[#3a3a3a]' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl transition-colors ${
                  isDark 
                    ? 'bg-gray-800 group-hover:bg-gray-700' 
                    : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <Icon className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{component.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      isDark 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {component.status}
                    </span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {component.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
