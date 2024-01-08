/*
 * @Author: zhouyinkui
 * @Date: 2024-01-02 15:31:44
 * @LastEditors: zhouyinkui
 * @LastEditTime: 2024-01-08 10:55:10
 * @Description: Polygon
 */
import {
  Cartesian3,
  Color,
  Entity,
  MaterialProperty,
  PolygonGraphics,
  PolygonHierarchy,
  Property
} from 'cesium'
import { getColorProperty, getMeterialProperty } from '../../../material'
import { EntityOption } from '..'
import { defaultColor } from '../../../defaultVal'

/**
 * PolygonEntity参数，改造了Polygon属性，在原始参数基础上更改了(使用css颜色)颜色类参数:
 * material
 * outlineColor
 */
export type PolygonEntityOption = EntityOption &
  Omit<
    PolygonGraphics.ConstructorOptions,
    'hierarchy' | 'material' | 'outlineColor'
  > & {
    hierarchy?: Property | Cartesian3[]
    material?: MaterialProperty | Color | string
    outlineColor?: Property | Color | string
  }

/**
 * 获取多边形hierarchy
 * @param hierarchy - 位置
 * @returns
 */
function getHierarchy(hierarchy?: Property | Cartesian3[]) {
  return hierarchy === undefined
    ? undefined
    : Array.isArray(hierarchy)
    ? new PolygonHierarchy(hierarchy)
    : hierarchy
}

/**
 * 创建面entity
 * @param options - 面参数
 * @returns
 */
export function createEntityPolygon(options: PolygonEntityOption) {
  const {
    id,
    name,
    availability,
    show,
    description,
    position,
    orientation,
    viewFrom,
    parent,
    properties,
    ...rest
  } = options
  const polygon: PolygonGraphics.ConstructorOptions = {
    ...rest,
    hierarchy: getHierarchy(rest.hierarchy),
    material: getMeterialProperty(rest.material ?? defaultColor),
    outlineColor: getColorProperty(rest.outlineColor ?? defaultColor)
  }
  return new Entity({
    id,
    name,
    availability,
    show,
    description,
    position,
    orientation,
    viewFrom,
    parent,
    properties,
    polygon
  })
}