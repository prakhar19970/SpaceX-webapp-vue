<template>
  <div class="page-wrapper">
    <div class="page-title q-my-lg">Create a Launch Form</div>
    <q-form class="form-wrapper q-py-lg q-mx-lg" @submit.prevent="submitForm">
      <q-input
        color="grey-5"
        class="input-field"
        v-model="form.mission_name"
        label="Mission Name"
        :error="vuelidate?.form?.mission_name?.$error || vuelidate?.form?.mission_name?.minLength?.$invalid"
        :error-message="
        vuelidate?.form?.mission_name?.minLength?.$invalid ? 'Mission Name must have atleast 3 letters' :
        (vuelidate?.form?.mission_name?.required &&
        vuelidate?.form?.mission_name?.$error) ? 'Mission Name is required' : ''"
      />

      <q-input
        class="input-field"
         color="grey-5"
        v-model="form.rocket.rocket_name"
        label="Rocket Name"
        :error="vuelidate?.form?.rocket?.rocket_name?.$error || vuelidate.form?.rocket?.rocket_name?.minLength?.$invalid"
        :error-message="
        vuelidate.form?.rocket?.rocket_name?.minLength.$invalid ? 'Rocket Name must have atleast 3 letters' :
        (vuelidate?.form?.rocket?.rocket_name?.required &&
        vuelidate?.form?.rocket?.rocket_name?.$error) ? 'Rocket Name is required' : ''"
      />

      <q-input
        class="input-field"
         color="grey-5"
        v-model="form.launch_year"
        label="Launch Year"
        mask="####"
        :error="vuelidate?.form?.launch_year?.$error || vuelidate?.form?.launch_year?.maxYear?.$invalid"
        :error-message="vuelidate?.form?.launch_year?.maxYear?.$invalid ? vuelidate?.form?.launch_year?.maxYear?.$message : vuelidate?.form?.launch_year?.required ? 'Launch Year is required' : '' "
      />
      <q-input
        class="input-field"
        color="grey-5"
        v-model="form.details"
        type="textarea"
        label="Mission Details"
        :error="vuelidate?.form?.details?.$error || vuelidate.form?.details?.minLength.$invalid"
        :error-message="vuelidate.form?.details?.minLength.$invalid ? 'Mission Details should have at least 10 letters' : vuelidate?.form?.details?.required ? 'Mission Details are required' : ''"
      />
      <div class="flex width-70 justify-end">
      <q-btn color="indigo-6" type="submit" icon="rocket_launch" label="Submit" />
      </div>
    </q-form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useVuelidate from '@vuelidate/core'
import { minLength, required, helpers } from '@vuelidate/validators'
import { LaunchFormModel } from '@models/launchFormModel' // Adjust the import as necessary
import mixins from '@mixins/mixins'
import { mapActions, mapGetters } from 'vuex'
import { useQuasar } from 'quasar'
export default defineComponent({
  name: 'LaunchForm',
  setup () {
    const vuelidate = useVuelidate()
    const q$ = useQuasar()
    return { vuelidate, q$ }
  },
  validations () {
    return {
      form: {
        mission_name: {
          required,
          minLength: minLength(3)
        },
        details: {
          required,
          minLength: minLength(10)
        },
        rocket: {
          rocket_name: {
            required,
            minLength: minLength(3)
          }
        },
        launch_year: {
          required,
          maxYear: helpers.withMessage(`The year ${this.getCurrentYear()} must be  or earlier`, (val : number) => val <= this.getCurrentYear())
        }
      }
    }
  },
  mixins: [mixins],
  data () {
    const form: LaunchFormModel = {
      mission_name: '',
      rocket: {
        rocket_name: ''
      },
      launch_year: null,
      details: ''
    }
    return { form }
  },
  computed: {
    ...mapGetters('missions', ['allLaunchMissionsData'])
  },
  mounted () {
    this.getAllMissionsLaunchList()
  },
  methods: {
    ...mapActions('missions', ['getAllMissionsLaunchList']),
    ...mapActions('forms', ['createLaunchFormData']),
    submitForm () {
      this.vuelidate?.$touch() // Touch all fields to show validation messages
      if (this.vuelidate?.$invalid || this.vuelidate?.$error) {
        return false// Stop submission if invalid
      } else {
        const newAllMissionsData = this.allLaunchMissionsData
        this.createLaunchFormData([...newAllMissionsData, this.form])
        this.q$.notify({
          color: 'positive',
          icon: 'check_circle',
          position: 'top',
          message: 'Data Added SuccessFully'
        })
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.page-wrapper{
  padding-top: 70px;
}
.page-title{
  color: #ffffff;
  font-size: 48px;
  padding-left: 24px;
}
.input-field{
  background: #2d2d2d;
  color:white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 70%;
  padding:0px 0px;
}
.form-wrapper{
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}
:deep(){
  .q-field__native{
    // background: #2d2d2d;
    border-radius: 12px;
  }
  .q-field__native, .q-field__label{
    color:white;
    padding-left: 8px;
  }
  .q-field__bottom{
    background: #121212;
  }
  .q-field__control:before{
    border-bottom: 1px solid #42439f
  }
  .q-field__label{
    padding-left: 8px;
  }
}
</style>
