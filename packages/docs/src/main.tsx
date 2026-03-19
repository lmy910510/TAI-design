import React, { ComponentType, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SPACING, ThemeProvider, useTheme } from '@tai-design/components';
import { DesignSystemLayout } from './design-system/DesignSystemLayout';
import { ProductWorkspacePage } from './home/ProductWorkspacePage';
import { WelcomePage } from './home/WelcomePage';
import './styles/fonts.css';
import './styles/main.css';

type LazyModule = Record<string, ComponentType<any>>;

const lazyPage = <T extends LazyModule>(
  loader: () => Promise<T>,
  exportName: keyof T,
) =>
  lazy(async () => {
    const module = await loader();
    return { default: module[exportName] };
  });

const Colors = lazyPage(() => import('./design-system/pages/Colors'), 'Colors');
const Typography = lazyPage(() => import('./design-system/pages/Typography'), 'Typography');
const BorderRadius = lazyPage(() => import('./design-system/pages/BorderRadius'), 'BorderRadius');
const Shadow = lazyPage(() => import('./design-system/pages/Shadow'), 'Shadow');
const Spacing = lazyPage(() => import('./design-system/pages/Spacing'), 'Spacing');
const Icons = lazyPage(() => import('./design-system/pages/Icons'), 'Icons');
const RowPage = lazyPage(() => import('./design-system/pages/RowPage'), 'RowPage');
const ColumnPage = lazyPage(() => import('./design-system/pages/ColumnPage'), 'ColumnPage');
const ListPage = lazyPage(() => import('./design-system/pages/ListPage'), 'ListPage');
const CardPage = lazyPage(() => import('./design-system/pages/CardPage'), 'CardPage');
const TabsPage = lazyPage(() => import('./design-system/pages/TabsPage'), 'TabsPage');
const Dialog = lazyPage(() => import('./design-system/pages/Dialog'), 'Dialog');
const PageTopNav = lazyPage(() => import('./design-system/pages/PageTopNav'), 'PageTopNav');
const ImagePage = lazyPage(() => import('./design-system/pages/ImagePage'), 'ImagePage');
const VideoPage = lazyPage(() => import('./design-system/pages/VideoPage'), 'VideoPage');
const AudioPlayerPage = lazyPage(() => import('./design-system/pages/AudioPlayerPage'), 'AudioPlayerPage');
const DividerPage = lazyPage(() => import('./design-system/pages/DividerPage'), 'DividerPage');
const Badge = lazyPage(() => import('./design-system/pages/Badge'), 'Badge');
const Comment = lazyPage(() => import('./design-system/pages/Comment'), 'Comment');
const Map = lazyPage(() => import('./design-system/pages/Map'), 'Map');
const Toast = lazyPage(() => import('./design-system/pages/Toast'), 'Toast');
const Tips = lazyPage(() => import('./design-system/pages/Tips'), 'Tips');
const Push = lazyPage(() => import('./design-system/pages/Push'), 'Push');
const Loading = lazyPage(() => import('./design-system/pages/Loading'), 'Loading');
const Button = lazyPage(() => import('./design-system/pages/Button'), 'Button');
const Tag = lazyPage(() => import('./design-system/pages/Tag'), 'Tag');
const LinkPage = lazyPage(() => import('./design-system/pages/LinkPage'), 'LinkPage');
const Input = lazyPage(() => import('./design-system/pages/Input'), 'Input');
const SliderPage = lazyPage(() => import('./design-system/pages/Slider'), 'SliderPage');
const ChoicePickerPage = lazyPage(() => import('./design-system/pages/ChoicePickerPage'), 'ChoicePickerPage');
const Checkbox = lazyPage(() => import('./design-system/pages/Checkbox'), 'Checkbox');
const DateTimeInputPage = lazyPage(() => import('./design-system/pages/DateTimeInputPage'), 'DateTimeInputPage');
const Switch = lazyPage(() => import('./design-system/pages/Switch'), 'Switch');

const legacyDesignSystemPaths = [
  'typography',
  'border-radius',
  'shadow',
  'spacing',
  'icons',
  'row',
  'column',
  'list',
  'card',
  'tabs',
  'dialog',
  'page-top-nav',
  'image',
  'video',
  'audio-player',
  'divider',
  'badge',
  'comment',
  'map',
  'toast',
  'tips',
  'push',
  'loading',
  'button',
  'tag',
  'link',
  'input',
  'slider',
  'choice-picker',
  'checkbox',
  'datetime-input',
  'switch',
] as const;

function PageFallback() {
  const { colors } = useTheme();

  return (
    <div
      style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.text.secondary,
        fontSize: 18,
        padding: SPACING['6'],
      }}
    >
      页面加载中...
    </div>
  );
}

function renderPage(Page: ComponentType) {
  return (
    <Suspense fallback={<PageFallback />}>
      <Page />
    </Suspense>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/design-system" element={<DesignSystemLayout />}>
            <Route index element={renderPage(Colors)} />
            <Route path="typography" element={renderPage(Typography)} />
            <Route path="border-radius" element={renderPage(BorderRadius)} />
            <Route path="shadow" element={renderPage(Shadow)} />
            <Route path="spacing" element={renderPage(Spacing)} />
            <Route path="icons" element={renderPage(Icons)} />
            <Route path="row" element={renderPage(RowPage)} />
            <Route path="column" element={renderPage(ColumnPage)} />
            <Route path="list" element={renderPage(ListPage)} />
            <Route path="card" element={renderPage(CardPage)} />
            <Route path="tabs" element={renderPage(TabsPage)} />
            <Route path="dialog" element={renderPage(Dialog)} />
            <Route path="page-top-nav" element={renderPage(PageTopNav)} />
            <Route path="image" element={renderPage(ImagePage)} />
            <Route path="video" element={renderPage(VideoPage)} />
            <Route path="audio-player" element={renderPage(AudioPlayerPage)} />
            <Route path="divider" element={renderPage(DividerPage)} />
            <Route path="badge" element={renderPage(Badge)} />
            <Route path="comment" element={renderPage(Comment)} />
            <Route path="map" element={renderPage(Map)} />
            <Route path="toast" element={renderPage(Toast)} />
            <Route path="tips" element={renderPage(Tips)} />
            <Route path="push" element={renderPage(Push)} />
            <Route path="loading" element={renderPage(Loading)} />
            <Route path="button" element={renderPage(Button)} />
            <Route path="tag" element={renderPage(Tag)} />
            <Route path="link" element={renderPage(LinkPage)} />
            <Route path="input" element={renderPage(Input)} />
            <Route path="slider" element={renderPage(SliderPage)} />
            <Route path="choice-picker" element={renderPage(ChoicePickerPage)} />
            <Route path="checkbox" element={renderPage(Checkbox)} />
            <Route path="datetime-input" element={renderPage(DateTimeInputPage)} />
            <Route path="switch" element={renderPage(Switch)} />
          </Route>
          <Route path="/discovery" element={<ProductWorkspacePage entryKey="discovery" />} />
          <Route path="/market" element={<ProductWorkspacePage entryKey="market" />} />
          <Route path="/chat" element={<ProductWorkspacePage entryKey="chat" />} />
          <Route path="/connect" element={<ProductWorkspacePage entryKey="connect" />} />
          {legacyDesignSystemPaths.map((path) => (
            <Route
              key={path}
              path={path}
              element={<Navigate to={`/design-system/${path}`} replace />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
