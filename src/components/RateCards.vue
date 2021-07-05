<template>
  <div class="webpage__exchanger-rates">
    <div class="webpage__exchanger-rates--card" v-for="(cryptoItem, index) in crypto" :key="index">
      <div class="webpage__exchanger-rates--crypto">
        <img :src='require(`@/assets/img/png/${cryptoItem}.png`)' :alt='`${cryptoItem}`'>
        <span> {{ cryptoItem }} </span>
      </div>
      <table class="webpage__exchanger-table">
        <tbody>
          <template v-for="(item, index) in rates">
            <tr :key="index" class="webpage__exchanger-rates--current">
              <td class="webpage__exchanger-rates--current_crypto">
                {{ index }}:
              </td>
              <td class="webpage__exchanger-rates--current_rate">
                {{ item }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'RateCards',
  props: {
    crypto: {
      type: Array,
      default: () => [
        'BTC',
        'ETH',
        'XRP',
      ],
    },
    rates: {
      type: Object,
      default: () => ({
        USD: 0,
        UAH: 0,
        RUB: 0,
      }),
    },
  },
  methods: {
    ...mapActions('rates', ['GET_RATES']),
  },
  computed: {
    ...mapState('rates', ['rateCrypto', 'rateValue']),
  },
  async created() {
    await this.GET_RATES(this.rateCrypto, this.rateValue);
    console.log(this.rateCrypto.BTC, this.rateValue);
  },
};
</script>

<style lang="scss">
  .webpage__exchanger-rates {
    width: 100%;
    display: flex;
    justify-content: center;

    .webpage__exchanger-rates--card {
      width: 100%;
      max-width: 450px;
      height: 240px;
      padding: 30px 30px;
      margin: 120px 10px;
      background-color: #0d2f52;
      display: flex;

      .webpage__exchanger-rates--crypto {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 100px;
          height: 100px;
        }

        span {
          padding-top: 10px;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #86c551;
        }
      }

      .webpage__exchanger-rates--current {
        width: 100%;

        .webpage__exchanger-rates--current_crypto, .webpage__exchanger-rates--current_rate {
          padding: 10px 40px;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 32px;
          font-weight: bold;
          color: #78a6eb;
          letter-spacing: 3px;
        }
        .webpage__exchanger-rates--current_rate {
          font-weight: normal;
        }
      }
    }
  }
</style>
