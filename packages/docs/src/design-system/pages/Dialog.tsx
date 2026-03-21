import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button, RADIUS, SPACING, STATIC, useTheme } from "@tai-design/components";
import { DialogComponent, DialogType, DialogSize } from "../DialogComponent";
import { DocPageHeader, DocTokenTable } from "../DocComponents";

type ContentType = "title-only" | "title-content";

export function Dialog() {
  const { tokens } = useTheme();

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
              <span style={{ color: tokens.textColor.link }}>《用户服务协议》</span>，
              <span style={{ color: tokens.textColor.link }}>《隐私保护指引》</span>，请您审慎阅读并选择接受或不接受本协议。
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
    border: `1px solid ${tokens.borderColor.level2}`,
    backgroundColor: tokens.bgColor.page,
  };

  const previewSurfaceStyle: React.CSSProperties = {
    minHeight: 500,
    borderRadius: 24,
    border: `1px dashed ${tokens.borderColor.level2}`,
    backgroundColor: tokens.bgColor.secondaryContainer,
  };

  const getOptionButtonStyle = (selected: boolean, strong = false): React.CSSProperties => ({
    borderRadius: 18,
    border: `2px solid ${selected ? (strong ? tokens.borderColor.focus : tokens.borderColor.brand) : STATIC.transparent}`,
    backgroundColor: selected ? (strong ? tokens.bgColor.code : tokens.bgColor.brandLight) : tokens.bgColor.secondaryContainer,
    color: selected ? (strong ? tokens.textColor.primary : tokens.textColor.link) : tokens.textColor.secondary,
  });

  return (
    <div>
      <DocPageHeader category="Components / 组件" title="弹窗组件 (Dialog)" description="属于模态弹窗的一种，当需要告知用户关键或者警示性信息并强制用户必须回应时，可以使用 Dialog。这是一种强阻断模态组件。" />

      <div className="mb-8 flex flex-col gap-8">
        <div className="flex flex-col p-8" style={panelStyle}>
          <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>实时预览</h2>

          <div
            className="relative mb-8 flex flex-1 flex-col items-center justify-center overflow-hidden p-4"
            style={previewSurfaceStyle}
          >
            {isOpen ? (
              <div
                className="absolute inset-0 z-10 flex items-center justify-center overflow-y-auto p-4 backdrop-blur-sm"
                style={{ backgroundColor: tokens.bgColor.overlay }}
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
              <div className="mt-6 text-sm" style={{ color: tokens.textColor.tertiary }}>
                点击上方按钮预览强阻断弹窗效果
              </div>
            ) : null}
          </div>

          <div className="rounded-[18px] border p-4" style={{ backgroundColor: tokens.bgColor.secondaryContainer, borderColor: tokens.borderColor.level2 }}>
            <div className="space-y-2 text-xs" style={{ color: tokens.textColor.secondary }}>
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
          <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>属性配置</h2>

          <div className="mb-8">
            <h3 className="mb-3 text-sm font-medium" style={{ color: tokens.textColor.secondary }}>
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
            <h3 className="mb-3 text-sm font-medium" style={{ color: tokens.textColor.secondary }}>
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
              <h3 className="mb-3 text-sm font-medium" style={{ color: tokens.textColor.secondary }}>
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
              backgroundColor: tokens.bgColor.brandLight,
              borderColor: tokens.borderColor.brand,
            }}
          >
            <h4 className="mb-2 flex items-center gap-2 font-bold" style={{ color: tokens.textColor.link }}>
              <MessageSquare size={16} />
              设计规范
            </h4>
            <ul className="list-disc space-y-2 pl-4 text-sm" style={{ color: tokens.textColor.secondary }}>
              <li><strong>主标题：</strong>最大支持2行，不允许超长文本。</li>
              <li><strong>内容：</strong>支持长文本，最多显示3行；作为副标题时最多1行。</li>
              <li><strong>主要操作：</strong>延续主标题动词，采用主按钮语义 token。</li>
              <li><strong>次要操作：</strong>不会产生实质改变结果，默认“取消”，采用次按钮语义 token。</li>
              <li>蒙层颜色通常使用系统 overlay token，保证不同主题下一致对比度。</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>🎨 Token 使用清单</h2>
        <DocTokenTable
          rows={[
            { part: "弹窗背景", compToken: "tokens.dialog.bg", pubToken: "bgColor.elevated", desc: "弹窗面板背景色", color: tokens.dialog.bg },
            { part: "标题文字", compToken: "tokens.dialog.title", pubToken: "textColor.primary", desc: "弹窗主标题颜色", color: tokens.dialog.title },
            { part: "正文文字", compToken: "tokens.dialog.content", pubToken: "textColor.secondary", desc: "弹窗描述/内容文字", color: tokens.dialog.content },
            { part: "遮罩层", compToken: "tokens.dialog.overlay", pubToken: "bgColor.overlay", desc: "模态遮罩背景", color: tokens.dialog.overlay },
          ]}
          note={
            <p style={{ fontSize: 13, color: tokens.textColor.secondary, lineHeight: 1.6, margin: 0 }}>
              <strong>排版 Token：</strong>标题使用 <code>tokens.typography.title.section</code> (36px/600/1.3)，正文使用 <code>tokens.typography.body.primary</code> (28px/400/1.4)。
              <br />
              <strong>布局常量：</strong>圆角 <code>RADIUS["4xl"]</code> (42px)，阴影 <code>SHADOW.xl</code>。
            </p>
          }
        />
      </div>

      <div>
        <h2 style={{ margin: 0, ...tokens.typography.title.section, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>颜色规范</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: SPACING["4"] }}>
          <div style={panelStyle} className="p-6">
            <h3 className="text-lg font-semibold mb-4">弹窗背景</h3>
            <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.dialog.bg, marginBottom: SPACING["2"] }} />
              <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.dialog.bg}</div>
              <div>弹窗面板背景（<code>bgColor.elevated</code>）</div>
            </div>
          </div>
          <div style={panelStyle} className="p-6">
            <h3 className="text-lg font-semibold mb-4">标题文字</h3>
            <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.dialog.title, marginBottom: SPACING["2"] }} />
              <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.dialog.title}</div>
              <div>弹窗标题色（<code>textColor.primary</code>）</div>
            </div>
          </div>
          <div style={panelStyle} className="p-6">
            <h3 className="text-lg font-semibold mb-4">内容文字</h3>
            <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.dialog.content, marginBottom: SPACING["2"] }} />
              <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.dialog.content}</div>
              <div>弹窗正文色（<code>textColor.secondary</code>）</div>
            </div>
          </div>
          <div style={panelStyle} className="p-6">
            <h3 className="text-lg font-semibold mb-4">遮罩层</h3>
            <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
              <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.dialog.overlay, marginBottom: SPACING["2"], border: `1px solid ${tokens.borderColor.level2}` }} />
              <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.dialog.overlay}</div>
              <div>蒙层背景色（<code>bgColor.overlay</code>）</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
