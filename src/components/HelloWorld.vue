<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div  v-if="ress.length > 0">
      <p>
        ID : {{ress[0].id}}
      </p>
      <p>
        Name: {{ress[0].name}}
      </p>
    </div>
  </div>
</template>

<script>
// import { RessourceType } from '../utils/operations'
import api from '@molgenis/molgenis-api-client'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      ressource_function_object: '',
      ress: [] // '=' static binding' ; ':' dynamic binding
    }
  },
  methods: {
    ressource_function: async function () {
      const url = '/api/v2/eu_bbmri_eric_biobanks'
      const { items } = await api.get(url)

      console.log('Hallo')
      const items_ = items.map((obj) => this.ress.push(obj))
      console.log(items_)
      this.ressource_function_object = items[0]
      return 'OK'
    }
  },
  watch: {
    ressource_func: {
      immediate: true,
      handler: 'ressource_function'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
