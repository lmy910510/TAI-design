import { useState } from "react";
import { UserCircleIcon, SoundIcon, LocationIcon, SecuredIcon } from "tdesign-icons-react";
import { Button, List, ListItem, RADIUS, SPACING, Switch, useTheme } from "@tai-design/components";
import { CardComponent } from "..";

export function ListPage() {
  const { colors, isDark } = useTheme();
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
        backgroundColor: colors.bg.placeholder,
        color: colors.icon.secondary,
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
    backgroundColor: colors.bg.glass,
    border: `1px solid ${colors.border.strong}`,
  };

  return (
    <div className="max-w-5xl pb-24">
      <div className="mb-8">
        <div
          className="mb-4 inline-block rounded-full border px-3 py-1 text-sm"
          style={{
            backgroundColor: colors.bg.code,
            borderColor: colors.border.default,
            color: colors.text.primary,
          }}
        >
          A. 布局类 (Layout)
        </div>
        <h1 className="mb-4 text-4xl font-bold">List 列表</h1>
        <p className="text-lg" style={{ color: colors.text.tertiary }}>
          用于展示多条结构化的信息，垂直排列。车机端列表规范：主标题字号 32px，副标题字号 28px；基于 6px 基准栅格，单行最小高度 96px，双行 120px，水平内边距 24px。
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <div className="mb-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold">1. 基础单行列表 (Single-line List)</h2>
            <p className="mt-2" style={{ color: colors.text.tertiary }}>
              <strong style={{ color: colors.text.link }}>使用场景：</strong>
              仅包含主标题，高度最小为
              <code
                className="mx-1 rounded px-1 py-0.5 text-sm"
                style={{ backgroundColor: colors.bg.code, color: colors.text.primary }}
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
                  suffixContent={<span style={{ color: colors.text.error }}>有新版本</span>}
                  onClick={() => console.log("clicked")}
                />
              </List>
            </CardComponent>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold">
              2. 双行图文列表 (Two-line List with Icons)
            </h2>
            <p className="mt-2" style={{ color: colors.text.tertiary }}>
              <strong style={{ color: colors.text.link }}>使用场景：</strong>
              包含主副标题与前缀图标，高度最小为
              <code
                className="mx-1 rounded px-1 py-0.5 text-sm"
                style={{ backgroundColor: colors.bg.code, color: colors.text.primary }}
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
            <h2 className="flex items-center gap-2 text-2xl font-bold">3. 交互控制列表 (Control List)</h2>
            <p className="mt-2" style={{ color: colors.text.tertiary }}>
              <strong style={{ color: colors.text.link }}>使用场景：</strong>
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
                  prefixIcon={<SoundIcon style={{ fontSize: 48, color: colors.text.tertiary }} />}
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
      </div>
    </div>
  );
}
