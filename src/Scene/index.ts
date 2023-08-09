import * as dat from "dat.gui";
import * as Cesium from "cesium";

export interface SceneParamsInterface {
  backgroundColor: number[];
}

export default class Scene {
  viewer: Cesium.Viewer;
  scene: Cesium.Scene;
  sceneParams: SceneParamsInterface | undefined;
  constructor(
    viewer: Cesium.Viewer,
    gui: dat.GUI,
    sceneParams?: SceneParamsInterface,
    hideGui?: boolean
  ) {
    this.viewer = viewer;
    this.scene = viewer.scene;
  }
}
