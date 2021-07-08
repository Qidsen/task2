<template>
  <div class="webpage__main">
    <div v-if="loading" class="webpage__loading">
      <Loader />
    </div>
    <div v-else class="webpage__exchange">
      <SelectedCard />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SelectedCard from '@/components/SelectedCard';
import Loader from '@/components/Loader';

export default {
  name: "Exchanger",
  data: () => ({
    loading: true,
  }),
  methods: {
    ...mapActions('rates', ['GET_RATES']),
  },
  computed: {
    ...mapState('rates', ['rateCrypto', 'rateValue']),
  },
  async created() {
    await this.GET_RATES(this.rateCrypto, this.rateValue);
    this.loading = false;
  },
  components: {
    Loader,
    SelectedCard,
  },
}
</script>

<style lang="scss">
  .webpage__main {
    width: 100%;
    display: flex;
    flex-direction: column;

    .webpage__loading {
      display: flex;
      justify-content: center;
    }
  }
</style>
