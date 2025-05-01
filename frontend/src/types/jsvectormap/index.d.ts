declare module "jsvectormap" {
  export interface JsVectorMapConfig {
    selector?: string;
    map?: string;
    backgroundColor?: string;
    draggable?: boolean;
    zoomButtons?: boolean;
    zoomOnScroll?: boolean;
    zoomOnScrollSpeed?: number;
    zoomMax?: number;
    zoomMin?: number;
    zoomAnimate?: boolean;
    showTooltip?: boolean;
    zoomStep?: number;
    bindTouchEvents?: boolean;

    // Line options
    lineStyle?: object;

    // Marker options
    markers?: object;
    markersSelectable?: boolean;
    markersSelectableOne?: boolean;
    markerStyle?: object;
    markerLabelStyle?: object;

    // Region options
    regionsSelectable?: boolean;
    regionsSelectableOne?: boolean;
    regionStyle?: object;
    regionLabelStyle?: object;
  }

  export default class jsVectorMap {
    constructor(JsVectorMapConfig: JsVectorMapConfig);
  }
}
