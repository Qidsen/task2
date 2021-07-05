<template>
  <div class="webpage__exchanger">
    <RateCards />
    <SelectedCard />
  </div>
</template>

<script>
import RateCards from '@/components/RateCards';
import SelectedCard from '@/components/SelectedCard'

export default {
  name: "Exchanger",
  components: {
    RateCards,
    SelectedCard,
  },
}
</script>

<style lang="scss">
  .webpage__exchanger {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
