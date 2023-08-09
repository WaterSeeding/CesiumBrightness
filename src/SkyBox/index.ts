import * as dat from "dat.gui";
import * as Cesium from "cesium";
import { skyBoxTable } from "./_db";
import { setParams } from "./_params";
import { setGui } from "./_gui";

type SourcesType = {
  name: string;
  sources: {
    [key: string]: string;
  };
};

export interface SkyBoxParamsInterface {
  show: boolean;
  sourcesType: string;
  sourcesList?: SourcesType[];
}

export default class SkyBox {
  viewer: Cesium.Viewer;
  skyBox: Cesium.SkyBox;
  skyBoxParams: SkyBoxParamsInterface | undefined;
  constructor(
    viewer: Cesium.Viewer,
    gui: dat.GUI,
    skyBoxParams?: SkyBoxParamsInterface,
    hideGui?: boolean
  ) {
    this.viewer = viewer;
    this.skyBox = viewer.scene.skyBox;
    this.setInit(gui, skyBoxParams, hideGui);
  }

  setInit(
    gui: dat.GUI,
    skyBoxParams?: SkyBoxParamsInterface,
    hideGui?: boolean
  ) {
    setParams(this.skyBox, skyBoxTable).then(
      (storeCameraParams: SkyBoxParamsInterface) => {
        if (skyBoxParams?.sourcesList) {
          skyBoxParams.sourcesList = [
            ...storeCameraParams.sourcesList,
            ...skyBoxParams.sourcesList,
          ];
          this.skyBoxParams = skyBoxParams;
        } else {
          this.skyBoxParams = storeCameraParams;
        }

        let skyBoxGui = setGui(
          gui,
          this.skyBoxParams,
          this,
          (data: SkyBoxParamsInterface) => {
            skyBoxTable.add(data);
          }
        );
        if (hideGui) {
          skyBoxGui.hide();
        }
      }
    );
  }

  setShow(value: boolean) {
    this.skyBox.show = value;
  }

  setSources(sources: { [key: string]: string }) {
    if (!this.skyBox.isDestroyed()) {
      this.skyBox.destroy();
    }
    let skyBox = new Cesium.SkyBox({
      sources: sources,
    });
    this.viewer.scene.skyBox = skyBox;
    this.skyBox = skyBox;
  }
}
