<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutDefault from './AppLayoutDefault'
import { computed, markRaw } from 'vue'
import { useRoute } from 'vue-router'
/* eslint-disable */
export default {
  name: 'AppLayout',
  components:{
    AppLayoutDefault
  },
  setup() {
    var layout = markRaw(AppLayoutDefault)
    const route = useRoute()
    console.log('route meta : ', route.meta);
    computed(async ()=>{
      try {
          const component = await import(`@/layouts/${meta.layout}.vue`)
          layout.value = component?.default || AppLayoutDefault
        } catch (e) {
          layout.value = AppLayoutDefault
        }
        return layout;
    })
    return { layout }
  }
}
</script>