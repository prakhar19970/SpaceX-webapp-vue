<template>
    <div class="sort-wrapper">
    <q-btn-dropdown
      flat
      color="white"
      no-caps
    >
      <template v-slot:label>
        <div class="row items-center no-wrap">
          <q-icon left name="sort" />
          <div class="text-center">
            Sort
            <span v-if="selectedOption && selectedOption.key">
                By: {{ selectedOption.name  }}
                <span>
                    <q-icon :name="selectedOption.type === 'asc' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" />
                </span>
            </span>
          </div>
        </div>
      </template>

      <q-list>
        <q-item v-for="option in optionsList" :key="option.name" clickable v-close-popup @click="selectOption(option)">
          <q-item-section>
            <q-item-label>{{ option.name }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon :name="option.type === 'asc' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <span v-if="selectedOption && selectedOption.key" class="pointer">
        <q-icon color="white" name="cancel" size="sm" @click="reset()"/>
    </span>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import mixins from '@mixins/mixins'
import { mapActions, mapGetters } from 'vuex'
import { SortOptions } from '@models/sortOptions'
export default defineComponent({
  name: 'SortComp',
  data () {
    const selectedOption = {} as SortOptions
    return { selectedOption }
  },
  mixins: [mixins],
  computed: {
    ...mapGetters('missions', ['sortFilter'])
  },
  props: {
    optionsList: {
      type: Array as PropType<SortOptions[]>,
      required: true,
      default: () => []
    }
  },
  mounted () {
    if (this.sortFilter) {
      this.selectedOption = this.sortFilter
    }
  },
  methods: {
    ...mapActions('missions', ['sortLisitng', 'reloadState']),
    selectOption (option: SortOptions) {
      this.selectedOption = option
      this.sortLisitng(option)
    },
    reset () {
      this.selectedOption = {} as SortOptions
      this.reloadState()
    }
  }
})
</script>
<style lang="scss" scoped>
.sort-wrapper {
    display: flex;
    align-items: center;
}
</style>
