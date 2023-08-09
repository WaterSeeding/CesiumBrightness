# Brightness

## 作用

`Brightness`提供了一种通过 GUI 界面控件操作的形式，用于在 Cesium 场景中控制、记录当前`Cesium.PostProcessStageLibrary.createBrightnessStage()`信息。

它允许你传入初始化参数设置`Cesium.PostProcessStageLibrary.createBrightnessStage()`信息，若是没有，也能通过之前操作记录在浏览器 IndexDB 的参数来初始化设置相机信息。

## 示例

以下展示`Brightness`组件用法，使用者可以通过 GUI 界面控制操作的形式，修改参数信息，来达到场景`Cesium.PostProcessStageLibrary.createBrightnessStage()`的变化。

```jsx
import "./app.css";
import * as Cesium from "cesium";
import * as dat from "dat.gui";
import { viewer } from "./main";
import Model from "./Model/index";
import SkyBoxOnGround from "./SkyBoxOnGround/index";
import Camera from "./Camera/index";
import Brightness from "./EffectComposerBrightness/index"
import DirectionalLight from "./DirectionalLight/index";

const gui = new dat.GUI({
  name: "Cesium GUI",
  width: 450,
  autoPlace: true,
  closed: false,
});
gui.domElement.id = "gui";
gui.show();

viewer.scene.skyAtmosphere.show = false;

const camera = new Camera(
  viewer,
  gui,
  {
    position: {
      height: 277,
      longitude: 114.0411639,
      latitude: 22.495305,
    },
    headingPitchRoll: {
      heading: 19.306803,
      pitch: -4.981456,
      roll: 0.003,
    },
  },
  true,
);

const model = new Model(
  viewer,
  gui,
  '/static/CesiumBalloon.glb',
  Cesium.Cartesian3.fromDegrees(114.05104099176157, 22.509032825095247, 50),
  {
    show: true,
    scale: 7.0,
    maximumScale: 256,
    minimumPixelSize: 0.0,
    incrementallyLoadTextures: false,
    runAnimations: true,
    clampAnimations: true,
    shadows: Cesium.ShadowMode.ENABLED,
    silhouetteSize: 0.0,
    silhouetteColor: '#0000ff',
    color: '#ffffff',
    colorBlendMode: Cesium.ColorBlendMode.HIGHLIGHT,
    colorBlendAmount: 0.5,
  },
  true,
);

const directionalLight = new DirectionalLight(
  viewer,
  gui,
  {
    direction: {
      longitude: -67,
      latitude: -8.4,
    },
    color: [255, 223, 223, 1],
    intensity: 6.2,
  },
  true,
);

const skyBox = new SkyBoxOnGround(
  viewer,
  gui,
  {
    show: true,
    sourcesType: 'day1',
    sourcesList: [
      {
        name: 'day1',
        sources: {
          positiveX: '/static/skybox/skys/Right.jpg',
          negativeX: '/static/skybox/skys/Left.jpg',
          positiveY: '/static/skybox/skys/Front.jpg',
          negativeY: '/static/skybox/skys/Back.jpg',
          positiveZ: '/static/skybox/skys/Up.jpg',
          negativeZ: '/static/skybox/skys/Down.jpg',
        },
      },
    ],
  },
  true,
);

let brightness = new Brightness(
  viewer,
  gui,
  {
    enabled: true,
    uniformsBrightness: 1.13,
  },
  false,
);
```

## API

### `new Bloom(viewer: Cesium.Viewer, gui: dat.GUI, brightnessParams?: BrightnessParamsInterface, hideGui?: boolean)`

创建一个`Bloom`对象。

| 参数             | 类型                      | 描述                                            |
| ---------------- | ------------------------- | ----------------------------------------------- |
| viewer           | Cesium.Viewer             | Cesium.Viewer 对象                              |
| gui              | dat.GUI                   | dat.GUI 对象                                    |
| brightnessParams | BrightnessParamsInterface | （可选）Brightness 参数接口                     |
| hideGui          | boolean                   | （可选）控制 Brightness 的 GUI 界面控件显示隐藏 |

## 类型

### `BrightnessParamsInterface`

Bloom 参数接口。

| 参数               | 类型    | 描述 |
| ------------------ | ------- | ---- |
| enabled            | boolean | 启用 |
| uniformsBrightness | number  | 强度 |

## 相关资料

- [Cesium](https://cesium.com/)
- [Cesium Documentation](https://cesium.com/docs/)
