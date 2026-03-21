import { useState } from "react";
import { UserCircleIcon, SoundIcon, LocationIcon, SecuredIcon } from "tdesign-icons-react";
import { Button, List, ListItem, RADIUS, SPACING, Switch, useTheme } from "@tai-design/components";
import { CardComponent } from "..";
import { DocPageHeader } from "../DocComponents";

export function ListPage() {
  const { tokens, isDark } = useTheme();
  const [switches, setSwitches] = useState({
    autoBrightness: true,
    mute: false,
    navigationSound: true,
  });

  const toggleSwitch = (key: keyof typeof switches) => {
    setSwitches((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderPrefixIcon = (icon: React.ReactNode) => (
    <div
      style={{
        width: 72,
        height: 72,
        borderRadius: RADIUS.xl,
        backgroundColor: tokens.bgColor.secondaryContainer,
        color: tokens.textColor.secondary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon}
    </div>
  );

  const sectionPanelStyle: React.CSSProperties = {
    padding: SPACING["6"],
    borderRadius: RADIUS["4xl"],
    backgroundColor: tokens.bgColor.glass,
    border: `1px solid ${tokens.borderColor.level2}`,
  };

  return (
    <div className="max-w-5xl pb-24">
      <DocPageHeader
        category="A. 布局类 (Layout)"
        title="List 列表"
        description="用于展示多条结构化的信息，垂直排列。车机端列表规范：主标题字号 32px，副标题字号 28px；基于 6px 基准栅格，单行最小高度 96px，双行 120px，水平内边距 24px。"
      />

      <div className="space-y-12">
        <section>
          <div className="mb-4">
            <h2 style={{ margin: 0, display: "flex", alignItems: "center", gap: SPACING["2"], fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary }}>1. 基础单行列表 (Single-line List)</h2>
            <p className="mt-2" style={{ color: tokens.textColor.tertiary }}>
              <strong style={{ color: tokens.textColor.link }}>使用场景：</strong>
              仅包含主标题，高度最小为
              <code
                className="mx-1 rounded px-1 py-0.5 text-sm"
                style={{ backgroundColor: tokens.bgColor.code, color: tokens.textColor.primary }}
              >
                96px
              </code>
              (16 × 6px)。常用于基础菜单导航。
            </p>
          </div>

          <div style={sectionPanelStyle}>
            <CardComponent variant="white" className="w-full max-w-xl !p-0 overflow-hidden" isDark={isDark}>
              <List isDark={isDark}>
                <ListItem title="车辆设置" showArrow onClick={() => console.log("clicked")} />
                <ListItem title="显示与亮度" showArrow onClick={() => console.log("clicked")} />
                <ListItem title="声音与通知" showArrow onClick={() => console.log("clicked")} />
                <ListItem
                  title="系统升级"
                  showArrow
                  suffixContent={<span style={{ color: tokens.functionalColor.error.main }}>有新版本</span>}
                  onClick={() => console.log("clicked")}
                />
              </List>
            </CardComponent>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 style={{ margin: 0, display: "flex", alignItems: "center", gap: SPACING["2"], fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary }}>
              2. 双行图文列表 (Two-line List with Icons)
            </h2>
            <p className="mt-2" style={{ color: tokens.textColor.tertiary }}>
              <strong style={{ color: tokens.textColor.link }}>使用场景：</strong>
              包含主副标题与前缀图标，高度最小为
              <code
                className="mx-1 rounded px-1 py-0.5 text-sm"
                style={{ backgroundColor: tokens.bgColor.code, color: tokens.textColor.primary }}
              >
                120px
              </code>
              (20 × 6px)。常用于展示详情内容，如个人中心、音乐列表。
            </p>
          </div>

          <div style={sectionPanelStyle}>
            <CardComponent variant="white" className="w-full max-w-xl !p-0 overflow-hidden" isDark={isDark}>
              <List isDark={isDark}>
                <ListItem
                  title="张三"
                  description="主驾驶员 (188****8888)"
                  prefixIcon={renderPrefixIcon(<UserCircleIcon style={{ fontSize: 42 }} />)}
                  showArrow
                  onClick={() => console.log("clicked")}
                />
                <ListItem
                  title="家庭住址"
                  description="广东省深圳市南山区科技园"
                  prefixIcon={renderPrefixIcon(<LocationIcon style={{ fontSize: 42 }} />)}
                  showArrow
                  onClick={() => console.log("clicked")}
                />
                <ListItem
                  title="账号安全"
                  description="已绑定手机、微信，实名认证已完成"
                  prefixIcon={renderPrefixIcon(<SecuredIcon style={{ fontSize: 42 }} />)}
                  showArrow
                  onClick={() => console.log("clicked")}
                />
              </List>
            </CardComponent>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 style={{ margin: 0, display: "flex", alignItems: "center", gap: SPACING["2"], fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary }}>3. 交互控制列表 (Control List)</h2>
            <p className="mt-2" style={{ color: tokens.textColor.tertiary }}>
              <strong style={{ color: tokens.textColor.link }}>使用场景：</strong>
              右侧为 Switch 开关、Button 等控件，可以直接进行功能调整。
            </p>
          </div>

          <div style={sectionPanelStyle}>
            <CardComponent variant="white" className="w-full max-w-xl !p-0 overflow-hidden" isDark={isDark}>
              <List isDark={isDark}>
                <ListItem title="车辆设置" showArrow onClick={() => console.log("clicked")} />
                <ListItem
                  title="自动亮度调节"
                  description="根据环境光线自动调整屏幕亮度"
                  suffixContent={
                    <Switch
                      checked={switches.autoBrightness}
                      onChange={() => toggleSwitch("autoBrightness")}
                      isDark={isDark}
                    />
                  }
                />
                <ListItem
                  title="媒体静音"
                  prefixIcon={<SoundIcon style={{ fontSize: 48, color: tokens.textColor.tertiary }} />}
                  suffixContent={
                    <Switch checked={switches.mute} onChange={() => toggleSwitch("mute")} isDark={isDark} />
                  }
                />
                <ListItem
                  title="导航播报声音"
                  description="在听音乐时压低音乐音量播报导航"
                  suffixContent={
                    <Switch
                      checked={switches.navigationSound}
                      onChange={() => toggleSwitch("navigationSound")}
                      isDark={isDark}
                    />
                  }
                />
                <ListItem
                  title="恢复默认设置"
                  suffixContent={
                    <Button variant="secondary" size="small" isDark={isDark}>
                      重置
                    </Button>
                  }
                />
              </List>
            </CardComponent>
          </div>
        </section>

        <section>
          <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>🎨 Token 使用清单</h2>
          <div
            style={{
              padding: SPACING["4"],
              borderRadius: RADIUS["2xl"],
              border: `1px solid ${tokens.borderColor.level2}`,
              backgroundColor: tokens.bgColor.glass,
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${tokens.borderColor.level1}` }}>
                    {["部位", "组件级 Token", "公开语义 Token", "用途说明"].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: "10px 14px", color: tokens.textColor.secondary, fontWeight: 600 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {([
                    { part: "列表背景", compToken: "tokens.list.bg", pubToken: "bgColor.elevated", desc: "列表容器背景色", color: tokens.list.bg },
                    { part: "主标题文字", compToken: "tokens.list.title", pubToken: "textColor.primary", desc: "列表项主标题颜色", color: tokens.list.title },
                    { part: "描述文字", compToken: "tokens.list.description", pubToken: "textColor.tertiary", desc: "列表项副标题/描述", color: tokens.list.description },
                    { part: "分割线", compToken: "tokens.list.border", pubToken: "borderColor.level1", desc: "列表项之间的分隔线", color: tokens.list.border },
                    { part: "箭头图标", compToken: "tokens.list.arrow", pubToken: "textColor.placeholder", desc: "右侧展开箭头颜色", color: tokens.list.arrow },
                  ] as const).map((row) => (
                    <tr key={row.part} style={{ borderBottom: `1px solid ${tokens.borderColor.level1}` }}>
                      <td style={{ padding: "10px 14px", fontWeight: 500, color: tokens.textColor.primary }}>{row.part}</td>
                      <td style={{ padding: "10px 14px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: row.color, border: `1px solid ${tokens.borderColor.level1}`, flexShrink: 0 }} />
                          <code style={{ fontSize: 12, color: tokens.textColor.link }}>{row.compToken}</code>
                        </div>
                      </td>
                      <td style={{ padding: "10px 14px" }}><code style={{ fontSize: 12, color: tokens.textColor.secondary }}>{row.pubToken}</code></td>
                      <td style={{ padding: "10px 14px", color: tokens.textColor.tertiary }}>{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: SPACING["4"], padding: SPACING["3"], borderRadius: RADIUS.xl, backgroundColor: tokens.bgColor.elevated, border: `1px solid ${tokens.borderColor.level1}` }}>
              <p style={{ fontSize: 13, color: tokens.textColor.secondary, lineHeight: 1.6 }}>
                <strong>排版 Token：</strong>主标题使用 <code>tokens.typography.title.card</code> (32px/500/1.5)，描述使用 <code>tokens.typography.body.primary</code> (28px/400/1.4)。
                <br />
                <strong>布局常量：</strong>圆角 <code>RADIUS["2xl"]</code> (30px)，内边距 <code>SPACING["4"]</code> (24px)，项间距 <code>SPACING["3"]</code> (18px)。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ margin: 0, fontSize: tokens.typography.title.section.fontSize, fontWeight: tokens.typography.title.section.fontWeight, lineHeight: tokens.typography.title.section.lineHeight, color: tokens.textColor.primary, marginBottom: SPACING["4"] }}>颜色规范</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: SPACING["4"] }}>
            <div
              style={{
                padding: SPACING["4"],
                borderRadius: RADIUS["2xl"],
                border: `1px solid ${tokens.borderColor.level2}`,
                backgroundColor: tokens.bgColor.glass,
              }}
            >
              <h3 className="text-lg font-semibold mb-4">列表背景</h3>
              <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
                <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.list.bg, marginBottom: SPACING["2"], border: `1px solid ${tokens.borderColor.level2}` }} />
                <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.list.bg}</div>
                <div><code>bgColor.elevated</code></div>
              </div>
            </div>
            <div
              style={{
                padding: SPACING["4"],
                borderRadius: RADIUS["2xl"],
                border: `1px solid ${tokens.borderColor.level2}`,
                backgroundColor: tokens.bgColor.glass,
              }}
            >
              <h3 className="text-lg font-semibold mb-4">标题文字</h3>
              <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
                <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.list.title, marginBottom: SPACING["2"] }} />
                <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.list.title}</div>
                <div><code>textColor.primary</code></div>
              </div>
            </div>
            <div
              style={{
                padding: SPACING["4"],
                borderRadius: RADIUS["2xl"],
                border: `1px solid ${tokens.borderColor.level2}`,
                backgroundColor: tokens.bgColor.glass,
              }}
            >
              <h3 className="text-lg font-semibold mb-4">描述文字</h3>
              <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
                <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.list.description, marginBottom: SPACING["2"] }} />
                <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.list.description}</div>
                <div><code>textColor.tertiary</code></div>
              </div>
            </div>
            <div
              style={{
                padding: SPACING["4"],
                borderRadius: RADIUS["2xl"],
                border: `1px solid ${tokens.borderColor.level2}`,
                backgroundColor: tokens.bgColor.glass,
              }}
            >
              <h3 className="text-lg font-semibold mb-4">分割线</h3>
              <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
                <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.list.border, marginBottom: SPACING["2"] }} />
                <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.list.border}</div>
                <div><code>borderColor.level1</code></div>
              </div>
            </div>
            <div
              style={{
                padding: SPACING["4"],
                borderRadius: RADIUS["2xl"],
                border: `1px solid ${tokens.borderColor.level2}`,
                backgroundColor: tokens.bgColor.glass,
              }}
            >
              <h3 className="text-lg font-semibold mb-4">箭头图标</h3>
              <div className="text-sm" style={{ color: tokens.textColor.secondary }}>
                <div style={{ width: 48, height: 48, borderRadius: RADIUS.xl, backgroundColor: tokens.list.arrow, marginBottom: SPACING["2"] }} />
                <div className="font-mono" style={{ color: tokens.textColor.primary }}>{tokens.list.arrow}</div>
                <div><code>textColor.placeholder</code></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
