/*
 * @Author: zhouyinkui
 * @Date: 2023-01-05 18:10:46
 * @LastEditors: zhouyinkui
 * @LastEditTime: 2024-04-03 14:18:29
 * @Description: 拖拽弹框
 */
import './popup.scss'
import {
  defineComponent,
  h,
  Teleport,
  PropType,
  StyleValue,
  watch,
  onMounted,
  onUnmounted,
  nextTick
} from 'vue'
import { DragTool, OriginPosition, guid } from '@mo-yu/core'
import { useRem } from '../../../hooks/useRem'

/**
 * 可拖拽弹框组件，相对于整个可视窗口拖动
 * 在项目入口先调用initPopupContainer()方法渲染popup父节点
 */
export default defineComponent({
  name: 'MPopup',
  props: {
    visiable: {
      type: Boolean,
      required: true
    },
    style: {
      type: Object as PropType<StyleValue>,
      required: false
    },
    class: {
      type: String,
      required: false
    },
    position: {
      type: String as PropType<OriginPosition>,
      required: false
    },
    mask: {
      type: Boolean,
      required: false
    }
  },
  setup(props) {
    const { zoom } = useRem()
    const popupWinId = `popupWin${guid()}`
    const popupHeadId = `popupHead${guid()}`
    const drag = new DragTool({
      handleId: popupHeadId,
      targetId: popupWinId,
      zoom: zoom.value
    })

    watch(
      zoom,
      next => {
        drag?.resetZoom(next)
      },
      { immediate: true }
    )

    watch(
      () => props.visiable,
      next => {
        if (next) {
          dragEnable()
          locate(props.position)
        } else {
          drag.destroy()
        }
      },
      { immediate: true }
    )

    onMounted(() => {
      dragEnable()
    })

    onUnmounted(() => {
      drag.destroy()
    })

    function dragEnable() {
      nextTick()
        .then(() => {
          drag.enable()
        })
        .catch(err => {
          console.error(`popup启用失败！${err}`)
        })
    }

    function locate(posi?: OriginPosition) {
      nextTick()
        .then(() => {
          drag.locate(posi)
        })
        .catch(err => {
          console.error(`popup定位失败！${err}`)
        })
    }

    return { popupWinId, popupHeadId }
  },
  render() {
    return this.visiable ? (
      <Teleport to="body">
        {this.mask ? <div class="m-popup-mask"></div> : ''}
        <div
          id={this.popupWinId}
          class={`m-popup ${this.class ?? ''}`}
          style={this.style}>
          <div id={this.popupHeadId} class="m-popup-header">
            {this.$slots.head?.()}
          </div>
          <div class="m-popup-body">{this.$slots.default?.()}</div>
        </div>
      </Teleport>
    ) : (
      ''
    )
  }
})
