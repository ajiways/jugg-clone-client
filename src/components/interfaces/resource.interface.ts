import { Location } from "./location.interface";

export interface Resource {
   id: number;
   title: string;
   description: string;
   masteryMin: number;
   masteryMax: number;
   previewSrc: string;
   location: Location;
   fatigueReq: number;
   chanceToGather: number;
   timeToGather: number;
}
