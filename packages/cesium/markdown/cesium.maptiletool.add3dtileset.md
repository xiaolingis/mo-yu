<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mo-yu/cesium](./cesium.md) &gt; [MapTileTool](./cesium.maptiletool.md) &gt; [add3DTileset](./cesium.maptiletool.add3dtileset.md)

## MapTileTool.add3DTileset() method

添加 3DTiles 模型

**Signature:**

```typescript
add3DTileset(option: TilesetOption, params?: TilesTransform, locate?: boolean, id?: string): Promise<any>;
```

## Parameters

| Parameter | Type                                         | Description                  |
| --------- | -------------------------------------------- | ---------------------------- |
| option    | [TilesetOption](./cesium.tilesetoption.md)   | Cesium3DTileset 构造函数入参 |
| params    | [TilesTransform](./cesium.tilestransform.md) | _(Optional)_ 偏移旋转缩放    |
| locate    | boolean                                      | _(Optional)_ 是否定位        |
| id        | string                                       | _(Optional)_ 3DTiles Id      |

**Returns:**

Promise&lt;any&gt;