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
