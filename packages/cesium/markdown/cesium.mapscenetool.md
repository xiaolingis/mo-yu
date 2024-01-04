<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mo-yu/cesium](./cesium.md) &gt; [MapSceneTool](./cesium.mapscenetool.md)

## MapSceneTool class

初始化场景

**Signature:**

```typescript
export declare class MapSceneTool extends ToolBase<MapSceneToolOptions, MapSceneToolEvents>
```

**Extends:** ToolBase&lt;MapSceneToolOptions, MapSceneToolEvents&gt;

## Example

```ts
const tool = new MapSceneTool({})

tool.enable()
tool.prepareScene(config, 1)
```

## Constructors

| Constructor                                                      | Modifiers | Description                                                      |
| ---------------------------------------------------------------- | --------- | ---------------------------------------------------------------- |
| [(constructor)(options)](./cesium.mapscenetool._constructor_.md) |           | Constructs a new instance of the <code>MapSceneTool</code> class |

## Properties

| Property                                  | Modifiers             | Type                                                                                                                                   | Description |
| ----------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [camera](./cesium.mapscenetool.camera.md) |                       | [MapCameraTool](./cesium.mapcameratool.md)                                                                                             |             |
| [config](./cesium.mapscenetool.config.md) | <code>readonly</code> | [SceneConfig](./cesium.sceneconfig.md) \| undefined                                                                                    |             |
| [geo](./cesium.mapscenetool.geo.md)       |                       | [MapGeoTool](./cesium.mapgeotool.md)                                                                                                   |             |
| [tile](./cesium.mapscenetool.tile.md)     |                       | [MapTileTool](./cesium.maptiletool.md)<!-- -->&lt;import("../tileTool").[MapTileToolEvents](./cesium.maptiletoolevents.md)<!-- -->&gt; |             |

## Methods

| Method                                                                  | Modifiers | Description |
| ----------------------------------------------------------------------- | --------- | ----------- |
| [destroy()](./cesium.mapscenetool.destroy.md)                           |           | 销毁        |
| [enable()](./cesium.mapscenetool.enable.md)                             |           | 启用        |
| [prepareScene(config, duration)](./cesium.mapscenetool.preparescene.md) |           |             |