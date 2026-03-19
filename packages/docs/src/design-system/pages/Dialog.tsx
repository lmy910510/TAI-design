import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { DialogComponent, DialogType, DialogSize } from "../DialogComponent";

type ContentType = "title-only" | "title-content";

export function Dialog() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();
  
  // States for interactive preview
  const [selectedType, setSelectedType] = useState<DialogType>("confirm");
  const [selectedSize, setSelectedSize] = useState<DialogSize>("small");
  const [contentType, setContentType] = useState<ContentType>("title-content");
  
  const [isOpen, setIsOpen] = useState(false);

  // Content configuration based on selected state
  const getDialogContent = () => {
    if (selectedSize === "large") {
      return {
        title: "用户须知",
        content: (
          <div className="space-y-4 text-left">
            <p>
              您好，为了切实保护用户的隐私及权益，在使用本产品前，请您认真阅读<span className="text-blue-600">《用户服务协议》</span>，<span className="text-blue-600">《隐私保护指引》</span>，请您审慎阅读并选择接受或不接受本协议。
            </p>
            <p>
              隐私保护指引摘要：当您使用的以下功能时，我们需要您主动提供一些信息：
            </p>
            <p>
              1. 我们使用微信作为我们的账号体系，当您使用微信扫码登录时，我们会向您请求微信的唯一标识、头像、昵称，用于保存您的登录信息。
            </p>
          </div>
        ),
        primaryBtn: "同意",
        secondaryBtn: "不同意并退出应用"
      };
    }
    
    return {
      title: "标题",
      content: contentType === "title-content" ? "这里是描述的主要内容，可以作为补充说明向用户解释具体情况。" : null,
      primaryBtn: "主要操作",
      secondaryBtn: "次要操作"
    };
  };

  const { title, content, primaryBtn, secondaryBtn } = getDialogContent();

  return (
    <div>
      <div className="mb-8">
        <div className={`inline-block px-3 py-1 border rounded-full text-sm mb-4 ${
          isDark ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-gray-100 border-gray-300 text-gray-900'
        }`}>
          Components / 组件
        </div>
        <h1 className="text-4xl font-bold mb-4">弹窗组件 (Dialog)</h1>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          属于模态弹窗的一种，当需要告知用户关键或者警示性信息并强制用户必须回应时，可以使用Dialog。这是一种强阻断模态组件。
        </p>
      </div>

      <div className="flex flex-col gap-8 mb-8">
        {/* 左侧：组件状态预览区 */}
        <div className={`p-8 border rounded-xl flex flex-col ${
          isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
        }`}>
          <h2 className="text-2xl font-bold mb-6">实时预览</h2>
          
          <div className="flex-1 flex flex-col items-center justify-center min-h-[500px] mb-8 bg-gray-100 dark:bg-[#1a1a1a] rounded-xl border border-dashed border-gray-300 dark:border-gray-700 relative overflow-hidden">
            
            {isOpen ? (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.24)] backdrop-blur-sm p-4 overflow-y-auto">
                <div className="transform scale-[0.4] sm:scale-[0.5] md:scale-[0.6] lg:scale-75 origin-center transition-transform my-auto">
                  <div className={`relative ${selectedSize === "large" ? "w-[948px] max-w-full" : "w-[660px] max-w-full"} bg-white rounded-[42px] overflow-hidden shadow-2xl`}>
                    <DialogComponent
                      type={selectedType}
                      size={selectedSize}
                      title={title}
                      content={content}
                      primaryButtonText={selectedType === "feedback" ? `${primaryBtn} (5s)` : primaryBtn}
                      secondaryButtonText={secondaryBtn}
                      onPrimaryClick={() => setIsOpen(false)}
                      onSecondaryClick={() => setIsOpen(false)}
                      isOpen={true}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setIsOpen(true)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md transition-colors flex items-center gap-2"
              >
                <MessageSquare size={20} />
                唤起弹窗预览
              </button>
            )}

            {!isOpen && (
              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                点击上方按钮预览强阻断弹窗效果
              </div>
            )}
          </div>

          {/* 当前配置说明 */}
          <div className={`p-4 border rounded-lg ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className={`text-xs space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex justify-between">
                <span>类型:</span>
                <span className="font-mono">{selectedType === 'feedback' ? '反馈类 (单按钮)' : '确认类 (双按钮)'}</span>
              </div>
              <div className="flex justify-between">
                <span>尺寸:</span>
                <span className="font-mono">{selectedSize === 'small' ? '小尺寸 (宽660px)' : '大尺寸 (宽948px)'}</span>
              </div>
              <div className="flex justify-between">
                <span>内容模式:</span>
                <span className="font-mono">
                  {selectedSize === 'large' ? '长文本适配' : contentType === 'title-only' ? '短标题无文本' : '标题+内容文本'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>交互特性:</span>
                <span className="font-mono">强制回应，点击蒙层不可取消</span>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：类型选择区 */}
        <div className={`p-8 border rounded-xl overflow-y-auto ${
          isDark ? 'bg-[#141414] border-[#2a2a2a]' : 'bg-white border-gray-200'
        }`}>
          <h2 className="text-2xl font-bold mb-6">属性配置</h2>

          {/* 弹窗类型 */}
          <div className="mb-8">
            <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              类型 (Type)
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {(["feedback", "confirm"] as DialogType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`py-3 px-4 rounded-xl text-sm transition-all border-2 ${
                    selectedType === type
                      ? isDark ? "border-blue-500 bg-blue-500/10 text-blue-400" : "border-blue-500 bg-blue-50 text-blue-600"
                      : isDark ? "border-transparent bg-white/5 text-gray-400 hover:bg-white/10" : "border-transparent bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <div className="font-medium mb-1">{type === "feedback" ? "反馈类" : "确认类"}</div>
                  <div className={`text-xs ${selectedType === type ? 'opacity-80' : 'opacity-60'}`}>
                    {type === "feedback" ? "单个主要操作按钮" : "主次双按钮操作"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 尺寸选择 */}
          <div className="mb-8">
            <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              尺寸 (Size)
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {(["small", "large"] as DialogSize[]).map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    if (size === "large") {
                      setSelectedType("confirm"); // 通常大尺寸配合确认类多一些
                    }
                  }}
                  className={`py-3 px-4 rounded-xl text-sm transition-all border-2 ${
                    selectedSize === size
                      ? isDark ? "border-white bg-white/10 text-white" : "border-black bg-gray-100 text-black"
                      : isDark ? "border-transparent bg-white/5 text-gray-400 hover:bg-white/10" : "border-transparent bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <div className="font-medium mb-1">{size === "small" ? "小尺寸" : "大尺寸 (跟随屏幕适配)"}</div>
                  <div className={`text-xs ${selectedSize === size ? 'opacity-80' : 'opacity-60'}`}>
                    {size === "small" ? "常规提示交互" : "复杂用户须知等长文本"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 内容组合 */}
          {selectedSize === "small" && (
            <div className="mb-8">
              <h3 className={`text-sm font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                内容模式 (Content)
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {(["title-only", "title-content"] as ContentType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setContentType(type)}
                    className={`py-3 px-4 rounded-xl text-sm transition-all border-2 ${
                      contentType === type
                        ? isDark ? "border-white bg-white/10 text-white" : "border-black bg-gray-100 text-black"
                        : isDark ? "border-transparent bg-white/5 text-gray-400 hover:bg-white/10" : "border-transparent bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <div className="font-medium">{type === "title-only" ? "短标题无文本" : "标题 + 内容文本"}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 设计规范说明 */}
          <div className={`p-5 mt-8 rounded-xl border ${isDark ? 'bg-blue-900/10 border-blue-900/30' : 'bg-blue-50 border-blue-100'}`}>
            <h4 className={`font-bold mb-2 flex items-center gap-2 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
              <MessageSquare size={16} />
              设计规范
            </h4>
            <ul className={`text-sm space-y-2 list-disc pl-4 ${isDark ? 'text-blue-200/70' : 'text-blue-800/70'}`}>
              <li><strong>主标题：</strong>最大支持2行，不允许超长文本。</li>
              <li><strong>内容：</strong>支持长文本，最多显示3行；作为副标题时最多1行。</li>
              <li><strong>主要操作：</strong>延续主标题动词，背景rgba(0,0,0,0.92)。</li>
              <li><strong>次要操作：</strong>不会产生实质改变结果，默认“取消”，背景rgba(0,0,0,0.06)。</li>
              <li>蒙层颜色通常使用黑色的 24%-30% 透明度。</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}