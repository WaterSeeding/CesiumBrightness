# 1.1 SkyBoxOnGround

> - [查看地址](https://cesium-sky-box-on-ground.vercel.app/)
> - [仓库地址](https://github.com/WaterSeeding/CesiumSkyBoxOnGround)

## 作用

`SkyBoxOnGround`提供了一种通过 GUI 界面控件操作的形式，用于更新设置场景`SkyBoxOnGround`的天空盒图片。

它允许你传入初始化参数设置 SkyBoxOnGround 显示和图片类型。

## 示例

以下展示`SkyBoxOnGround`组件用法，使用者可以通过 GUI 界面控制操作的形式，修改参数信息，来达到场景镜头的变化。

```jsx
import "./app.css";
import * as dat from "dat.gui";
import { viewer } from "./main";
import Scene from "./Scene/index";
import SkyBoxOnGround from "./SkyBoxOnGround/index";
import Camera from "./Camera/index";

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
      longitude: 114.056178,
      latitude: 22.463280,
      height: 500,
    },
    headingPitchRoll: {
      heading: 0.0,
      pitch: -3,
      roll: 0.0,
    },
  },
  true
);

const scene = new Scene(viewer, gui);
const skyBox = new SkyBoxOnGround(
  viewer,
  gui,
  {
    show: true,
    sourcesType: "default",
    sourcesList: [
      {
        name: "star1",
        sources: {
          positiveX: "./static/skybox/stars/00h+00.jpg",
          negativeX: "./static/skybox/stars/12h+00.jpg",
          positiveY: "./static/skybox/stars/06h+00.jpg",
          negativeY: "./static/skybox/stars/18h+00.jpg",
          positiveZ: "./static/skybox/stars/06h+90.jpg",
          negativeZ: "./static/skybox/stars/06h-90.jpg",
        },
      },
      {
        name: "star2",
        sources: {
          positiveX: "./static/skybox/stars/Version2_dark_px.jpg",
          negativeX: "./static/skybox/stars/Version2_dark_mx.jpg",
          positiveY: "./static/skybox/stars/Version2_dark_py.jpg",
          negativeY: "./static/skybox/stars/Version2_dark_my.jpg",
          positiveZ: "./static/skybox/stars/Version2_dark_pz.jpg",
          negativeZ: "./static/skybox/stars/Version2_dark_mz.jpg",
        },
      },
      {
        name: "star3",
        sources: {
          positiveX: "./static/skybox/stars/tycho2t3_80_pxs.jpg",
          negativeX: "./static/skybox/stars/tycho2t3_80_mxs.jpg",
          positiveY: "./static/skybox/stars/tycho2t3_80_pys.jpg",
          negativeY: "./static/skybox/stars/tycho2t3_80_mys.jpg",
          positiveZ: "./static/skybox/stars/tycho2t3_80_pzs.jpg",
          negativeZ: "./static/skybox/stars/tycho2t3_80_mzs.jpg",
        },
      },
      {
        name: "day1",
        sources: {
          positiveX: "./static/skybox/skys/rightav9.jpg",
          negativeX: "./static/skybox/skys/leftav9.jpg",
          positiveY: "./static/skybox/skys/frontav9.jpg",
          negativeY: "./static/skybox/skys/backav9.jpg",
          positiveZ: "./static/skybox/skys/topav9.jpg",
          negativeZ: "./static/skybox/skys/bottomav9.jpg",
        },
      },
      {
        name: "day2",
        sources: {
          positiveX: "./static/skybox/skys/SunSetRight.png",
          negativeX: "./static/skybox/skys/SunSetLeft.png",
          positiveY: "./static/skybox/skys/SunSetFront.png",
          negativeY: "./static/skybox/skys/SunSetBack.png",
          positiveZ: "./static/skybox/skys/SunSetUp.png",
          negativeZ: "./static/skybox/skys/SunSetDown.png",
        },
      },
      {
        name: "day3",
        sources: {
          positiveX: "./static/skybox/skys/Right.jpg",
          negativeX: "./static/skybox/skys/Left.jpg",
          positiveY: "./static/skybox/skys/Front.jpg",
          negativeY: "./static/skybox/skys/Back.jpg",
          positiveZ: "./static/skybox/skys/Up.jpg",
          negativeZ: "./static/skybox/skys/Down.jpg",
        },
      },
    ],
  },
  false
);

```

## API

### `new SkyBoxOnGround(viewer: Cesium.Viewer, gui: dat.GUI, skyBoxParams?: SkyBoxParamsInterface, hideGui?: boolean)`

创建一个`SkyBoxOnGround`对象。

| 参数         | 类型                  | 描述                                    |
| ------------ | --------------------- | --------------------------------------- |
| viewer       | Cesium.Viewer         | Cesium.Viewer 对象                      |
| gui          | dat.GUI               | dat.GUI 对象                            |
| skyBoxParams | SkyBoxParamsInterface | （可选）相机镜头参数接口                |
| hideGui      | boolean               | （可选）控制相机的 GUI 界面控件显示隐藏 |

### `setShow(value: boolean)`

控制`SkyBoxOnGround`天空盒显示和隐藏。

### `setSources(sources: { [key: string]: string })`

更新`SkyBoxOnGround`天空盒图片内容。

## 类型

### `SkyBoxParamsInterface`

场景`SkyBoxOnGround`天空盒信息。

| 参数        | 类型          | 描述                 |
| ----------- | ------------- | -------------------- |
| show        | boolean       | 控制天空盒显示和隐藏 |
| sourcesType | string        | 设置天空盒类型       |
| sourcesList | SourcesType[] | 天空盒数据           |

### `SourcesType`

场景`SkyBoxOnGround`天空盒图片。

| 参数    | 类型   | 描述       |
| ------- | ------ | ---------- |
| name    | string | 天空盒名称 |
| sources | any    | 天空盒图片 |

## 相关资料

- [Cesium](https://cesium.com/)
- [Cesium Documentation](https://cesium.com/docs/)
