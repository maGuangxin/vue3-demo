<script>
import { h, resolveComponent } from 'vue'
export default {
  setup() {
    // 返回值会暴露给模板和其他的选项式 API 钩子
    return () => h(resolveComponent('router-view'))
  }
}
</script>
