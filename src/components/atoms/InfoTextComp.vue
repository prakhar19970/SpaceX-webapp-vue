<template>
    <div class="info-text-wrapper">
        <q-icon v-if="iconName" :name="iconName" :size="iconSize"/>
        <div v-if="infoText">{{ infoText }}</div>
        <slot/>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'InfoTextComp',
  props: {
    iconName: {
      type: String as PropType<string>,
      default: ''
    },
    infoText: {
      type: String as PropType<string>,
      default: ''
    },
    iconSize: {
      type: String as PropType<string>,
      default: 'sm'
    }
  }
})
</script>
<style lang="scss" scoped>
.info-text-wrapper{
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>
