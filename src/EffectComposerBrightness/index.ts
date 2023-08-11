import * as Cesium from "cesium";
import { brightnessTable } from "./_db";
import { setGui } from "./_gui";
import { setParams } from "./_params";

export interface BrightnessParamsInterface {
  enabled: boolean;
  uniformsBrightness: number;
}

class Brightness {
  viewer: Cesium.Viewer;
  brightness: Cesium.PostProcessStage;
  brightnessInitParams!: BrightnessParamsInterface;

  constructor(
    viewer: Cesium.Viewer,
    gui: dat.GUI,
    brightnessParams?: BrightnessParamsInterface,
    hideGui?: boolean
  ) {
    this.viewer = viewer;
    let brightnessPostProcessStage =
      Cesium.PostProcessStageLibrary.createBrightnessStage();
    this.brightness = this.viewer.scene.postProcessStages.add(
      brightnessPostProcessStage
    ) as Cesium.PostProcessStage;

    setParams(this.brightness, brightnessTable).then(
      (storeBrightnessParams: BrightnessParamsInterface) => {
        this.brightnessInitParams = brightnessParams || storeBrightnessParams;
        let brightnessGui = setGui(
          gui,
          this.brightnessInitParams,
          this.brightness,
          (brightnessParams: BrightnessParamsInterface) => {
            brightnessTable.add(brightnessParams);
          }
        );
        if (hideGui) {
          brightnessGui.close();
          brightnessGui.hide();
        }
      }
    );
  }
}

export default Brightness;
