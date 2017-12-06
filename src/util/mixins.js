/**
 * Created by zhaikui on 2017/11/22.
 */
import {Indicator} from 'mint-ui'
export const Mixin={
  mounted () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      setTimeout(() =>Indicator.close(),1000)
  }
}
