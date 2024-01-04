<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mo-yu/cesium](./cesium.md) &gt; [getPosiOnMap](./cesium.getposionmap.md)

## getPosiOnMap() function

获取点在当前地图上上的位置 先尝试获取在几何体上的位置，获取失败再尝试获取在地形上的位置 都失败则返回原位置

**Signature:**

```typescript
export declare function getPosiOnMap(position: Cartesian3): Promise<Cartesian3>
```

## Parameters

| Parameter | Type       | Description |
| --------- | ---------- | ----------- |
| position  | Cartesian3 | 世界坐标    |

**Returns:**

Promise&lt;Cartesian3&gt;