/*
 * @Author: zhouyinkui
 * @Date: 2024-01-02 15:31:44
 * @LastEditors: zhouyinkui
 * @LastEditTime: 2024-01-04 17:27:03
 * @Description: 面Primitive
 */
import {
  ArcType,
  Cartesian3,
  ClassificationType,
  Color,
  GeometryInstance,
  GroundPrimitive,
  HeightReference,
  Material,
  MaterialAppearance,
  PolygonGeometry,
  PolygonHierarchy,
  Primitive,
  ShadowMode
} from 'cesium'
import { getMeterial } from '../../material'

/**
 * 面Primitive参数
 */
export interface PolygonOption {
  positions?: Cartesian3[]
  id?: string
  heightReference?: HeightReference
  height?: number
  stRotation?: number
  granularity?: number
  perPositionHeight?: boolean
  closeTop?: boolean | boolean
  closeBottom?: boolean | boolean
  arcType?: ArcType
  textureCoordinates?: PolygonHierarchy

  show?: boolean
  classificationType?: ClassificationType
  material?: Material | Color
  depthFailMaterial?: Material | Color
  shadows?: ShadowMode
}

/**
 * 创建面Primitive对象，此方法会根据heightReference创建不同的对象
 * @param options - 面参数
 * @returns
 */
export function createPolygon(options: PolygonOption) {
  const defaultColor = Color.BLUE
  const geometryInstances = new GeometryInstance({
    id: options.id,
    geometry: new PolygonGeometry({
      polygonHierarchy: new PolygonHierarchy(options.positions),
      height: options.height,
      stRotation: options.stRotation,
      granularity: options.granularity,
      perPositionHeight:
        options.perPositionHeight === undefined
          ? true
          : options.perPositionHeight,
      closeTop: options.closeTop,
      closeBottom: options.closeBottom,
      arcType: options.arcType,
      textureCoordinates: options.textureCoordinates
    })
  })
  const appearance = new MaterialAppearance({
    material: getMeterial(options.material ?? defaultColor)
  })
  if (options.heightReference === HeightReference.CLAMP_TO_GROUND) {
    return new GroundPrimitive({
      show: options.show === undefined ? true : options.show,
      geometryInstances,
      classificationType: options.classificationType ?? ClassificationType.BOTH,
      appearance
    })
  } else {
    return new Primitive({
      show: options.show === undefined ? true : options.show,
      geometryInstances,
      appearance,
      depthFailAppearance: new MaterialAppearance({
        material: getMeterial(options.depthFailMaterial ?? defaultColor)
      }),
      shadows: options.shadows
    })
  }
}