import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button, useTheme } from "@tai-design/components";
import { DialogComponent, DialogType, DialogSize } from "../DialogComponent";

type ContentType = "title-only" | "title-content";

export function Dialog() {
  const { colors } = useTheme();

  const [selectedType, setSelectedType] = useState<DialogType>("confirm");
  const [selectedSize, setSelectedSize] = useState<DialogSize>("small");
  const [contentType, setContentType] = useState<ContentType>("title-content");
  const [isOpen, setIsOpen] = useState(false);

  const getDialogContent = () => {
    if (selectedSize === "large") {
      return {
        title: "用户须知",
        content: (
          <div className="space-y-4 text-left">
            <p>
              您好，为了切实保护用户的隐私及权益，在使用本产品前，请您认真阅读
              <span style={{ color: colors.text.link }}>《用户服务协议》</span>，
              <span style={{ color: colors.text.link }}>《隐私保护指引》</span>，请您审慎阅读并选择接受或不接受本协议。
            </p>
            <p>隐私保护指引摘要：当您使用的以下功能时，我们需要您主动提供一些信息：</p>
            <p>
              1. 我们使用微信作为我们的账号体系，当您使用微信扫码登录时，我们会向您请求微信的唯一标识、头像、昵称，用于保存您的登录信息。
            </p>
          </div>
        ),
        primaryBtn: "同意",
        secondaryBtn: "不同意并退出应用",
      };
    }

    return {
      title: "标题",
      content:
        contentType === "title-content"
          ? "这里是描述的主要内容，可以作为补充说明向用户解释具体情况。"
          : null,
      primaryBtn: "主要操作",
      secondaryBtn: "次要操作",
    };
  };

  const { title, content, primaryBtn, secondaryBtn } = getDialogContent();

  const panelStyle: React.CSSProperties = {
    borderRadius: 24,
    border: `1px solid ${colors.border.default}`,
    backgroundColor: colors.bg.primary,
  };

  const previewSurfaceStyle: React.CSSProperties = {
    minHeight: 500,
    borderRadius: 24,
    border: `1px dashed ${colors.border.default}`,
    backgroundColor: colors.bg.subtle,
  };

  const getOptionButtonStyle = (selected: boolean, strong = false): React.CSSProperties => ({
    borderRadius: 18,
    border: `2px solid ${selected ? (strong ? colors.border.focus : colors.border.brand) : colors.static.transparent}`,
    backgroundColor: selected ? (strong ? colors.bg.code : colors.bg.brandSubtle) : colors.bg.subtle,
    color: selected ? (strong ? colors.text.primary : colors.text.link) : colors.text.secondary,
  });

  return (
    <div>
      <div className="mb-8">
        <div
          className="mb-4 inline-block rounded-full border px-3 py-1 text-sm"
          style={{
            backgroundColor: colors.bg.code,
            borderColor: colors.border.default,
            color: colors.text.primary,
          }}
        >
          Components / 组件
        </div>
        <h1 className="mb-4 text-4xl font-bold">弹窗组件 (Dialog)</h1>
        <p className="text-lg" style={{ color: colors.text.tertiary }}>
          属于模态弹窗的一种，当需要告知用户关键或者警示性信息并强制用户必须回应时，可以使用 Dialog。这是一种强阻断模态组件。
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-8">
        <div className="flex flex-col p-8" style={panelStyle}>
          <h2 className="mb-6 text-2xl font-bold">实时预览</h2>

          <div
            className="relative mb-8 flex flex-1 flex-col items-center justify-center overflow-hidden p-4"
            style={previewSurfaceStyle}
          >
            {isOpen ? (
              <div
                className="absolute inset-0 z-10 flex items-center justify-center overflow-y-auto p-4 backdrop-blur-sm"
                style={{ backgroundColor: colors.dialog.overlay }}
              >
                <div className="origin-center transition-transform my-auto transform scale-[0.4] sm:scale-[0.5] md:scale-[0.6] lg:scale-75">
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
            ) : (
              <Button
                variant="primary"
                icon={<MessageSquare size={20} />}
                iconPosition="left"
                onClick={() => setIsOpen(true)}
              >
                唤起弹窗预览
              </Button>
            )}

            {!isOpen ? (
              <div className="mt-6 text-sm" style={{ color: colors.text.tertiary }}>
                点击上方按钮预览强阻断弹窗效果
              </div>
            ) : null}
          </div>

          <div className="rounded-[18px] border p-4" style={{ backgroundColor: colors.bg.subtle, borderColor: colors.border.default }}>
            <div className="space-y-2 text-xs" style={{ color: colors.text.secondary }}>
              <div className="flex justify-between">
                <span>类型:</span>
                <span className="font-mono">{selectedType === "feedback" ? "反馈类 (单按钮)" : "确认类 (双按钮)"}</span>
              </div>
              <div className="flex justify-between">
                <span>尺寸:</span>
                <span className="font-mono">{selectedSize === "small" ? "小尺寸 (宽660px)" : "大尺寸 (宽948px)"}</span>
              </div>
              <div className="flex justify-between">
                <span>内容模式:</span>
                <span className="font-mono">
                  {selectedSize === "large" ? "长文本适配" : contentType === "title-only" ? "短标题无文本" : "标题+内容文本"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>交互特性:</span>
                <span className="font-mono">强制回应，点击蒙层不可取消</span>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto p-8" style={panelStyle}>
          <h2 className="mb-6 text-2xl font-bold">属性配置</h2>

          <div className="mb-8">
            <h3 className="mb-3 text-sm font-medium" style={{ color: colors.text.secondary }}>
              类型 (Type)
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {(["feedback", "confirm"] as DialogType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className="rounded-[18px] border-2 px-4 py-3 text-sm transition-all"
                  style={getOptionButtonStyle(selectedType === type)}
                  type="button"
                >
                  <div className="mb-1 font-medium">{type === "feedback" ? "反馈类" : "确认类"}</div>
                  <div className="text-xs" style={{ opacity: selectedType === type ? 0.8 : 0.6 }}>
                    {type === "feedback" ? "单个主要操作按钮" : "主次双按钮操作"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-3 text-sm font-medium" style={{ color: colors.text.secondary }}>
              尺寸 (Size)
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {(["small", "large"] as DialogSize[]).map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    if (size === "large") {
                      setSelectedType("confirm");
                    }
                  }}
                  className="rounded-[18px] border-2 px-4 py-3 text-sm transition-all"
                  style={getOptionButtonStyle(selectedSize === size, true)}
                  type="button"
                >
                  <div className="mb-1 font-medium">{size === "small" ? "小尺寸" : "大尺寸 (跟随屏幕适配)"}</div>
                  <div className="text-xs" style={{ opacity: selectedSize === size ? 0.8 : 0.6 }}>
                    {size === "small" ? "常规提示交互" : "复杂用户须知等长文本"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {selectedSize === "small" ? (
            <div className="mb-8">
              <h3 className="mb-3 text-sm font-medium" style={{ color: colors.text.secondary }}>
                内容模式 (Content)
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {(["title-only", "title-content"] as ContentType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setContentType(type)}
                    className="rounded-[18px] border-2 px-4 py-3 text-sm transition-all"
                    style={getOptionButtonStyle(contentType === type, true)}
                    type="button"
                  >
                    <div className="font-medium">{type === "title-only" ? "短标题无文本" : "标题 + 内容文本"}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div
            className="mt-8 rounded-[18px] border p-5"
            style={{
              backgroundColor: colors.bg.brandSubtle,
              borderColor: colors.border.brand,
            }}
          >
            <h4 className="mb-2 flex items-center gap-2 font-bold" style={{ color: colors.text.link }}>
              <MessageSquare size={16} />
              设计规范
            </h4>
            <ul className="list-disc space-y-2 pl-4 text-sm" style={{ color: colors.text.secondary }}>
              <li><strong>主标题：</strong>最大支持2行，不允许超长文本。</li>
              <li><strong>内容：</strong>支持长文本，最多显示3行；作为副标题时最多1行。</li>
              <li><strong>主要操作：</strong>延续主标题动词，采用主按钮语义 token。</li>
              <li><strong>次要操作：</strong>不会产生实质改变结果，默认“取消”，采用次按钮语义 token。</li>
              <li>蒙层颜色通常使用系统 overlay token，保证不同主题下一致对比度。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
