/*
 * @Author: zhouyinkui
 * @Date: 2024-01-02 10:48:22
 * @LastEditors: zhouyinkui
 * @LastEditTime: 2024-01-04 16:30:49
 * @Description: PointPrimitive
 */
import {
  Cartesian3,
  Color,
  DistanceDisplayCondition,
  HeightReference,
  NearFarScalar
} from 'cesium'
import { getPosiOnMap } from '../../../utils/getPosi'

/**
 * PointPrimitive属性
 */
export interface PointOption {
  position?: Cartesian3
  show?: boolean
  pixelSize?: number
  heightReference?: HeightReference
  color?: Color
  outlineColor?: Color
  outlineWidth?: number
  scaleByDistance?: NearFarScalar
  translucencyByDistance?: NearFarScalar
  distanceDisplayCondition?: DistanceDisplayCondition
  disableDepthTestDistance?: number
  id?: any
}

/**
 * 创建PointPrimitive参数对象，此方法会在heightReference为CLAMP_TO_GROUND时尝试获取点的高度
 * @param options - 原始参数
 * @returns
 */
export async function createPoint(options: PointOption): Promise<PointOption> {
  const defaultColor = Color.BLUE
  let position = options.position
  if (
    options.position &&
    options?.heightReference === HeightReference.CLAMP_TO_GROUND
  ) {
    const newPosi = await getPosiOnMap(options.position)
    if (newPosi) {
      position = newPosi
    }
  }
  return {
    ...options,
    position,
    show: options.show === undefined ? true : options.show,
    pixelSize: options.pixelSize ?? 10,
    color: options.color ?? defaultColor
  }
}
