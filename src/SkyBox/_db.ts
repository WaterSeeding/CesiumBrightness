import Dexie, { Table } from "dexie";
import { SkyBoxParamsInterface } from "./index";

export const db = new Dexie("CesiumSkyBoxDB");

db.version(1).stores({
  skyBox: "++id, show",
});

export type skyBoxTableInterface = Table<SkyBoxParamsInterface>;

export const skyBoxTable: skyBoxTableInterface = db.table("skyBox");
