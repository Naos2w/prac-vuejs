<template>
  <div>

    <h2>Cart ({{ cartTotalQty }})</h2>
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item v-for="item in cart" :key="item.id">
          <v-list-item-content class="d-flex align-center">
            <v-list-item-title>{{ `${item.name} x ${item.qty}` }}</v-list-item-title>
            <v-spacer />
            <v-btn small elevation="2" @click="removeFromCart(item.id)">
              Remove
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotalQty'])
  },
  methods: {
    ...mapMutations(['removeFromCart'])
  }
}
</script>
