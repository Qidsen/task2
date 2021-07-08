<template>
  <div class="webpage__exchanger-rates">
    <div
      @click="$emit(EVENTS.select)"
      class="webpage__exchanger-rates--card" >
      <div class="webpage__exchanger-rates--crypto">
        <img :src='require(`@/assets/img/png/${imgPath}.png`)' :alt='`${imgPath}`'>
        <span> {{ crypto }} </span>
      </div>
      <table class="webpage__exchanger-table">
        <tbody>
          <template v-for="(valueItem, index) in getRatesValue">
            <tr :key="index" class="webpage__exchanger-rates--current">
              <td class="webpage__exchanger-rates--current_crypto">
                {{ `${index}:` }}
              </td>
              <td class="webpage__exchanger-rates--current_rate">
                {{ (valueItem / getRatesCrypto[crypto]).toFixed(2) }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
const EVENTS = {
  select: 'select',
};

export default {
  name: 'RateCards',
  props: {
    imgPath: {
      type: String,
      required: true,
    },
    crypto: {
      type: String,
      default: '',
    },
    rates: {
      type: Object,
      default: () => ({
        UAH: 0,
        USD: 0,
        RUB: 0,
      }), 
    },
  },
  data: () => ({
    EVENTS,
  }),
  computed: {
    ...mapGetters('rates', ['getRatesCrypto', 'getRatesValue']),
  },
};
</script>

<style lang="scss">
  .webpage__exchanger-rates {
    width: 100%;
    max-width: 510px;
    display: flex;
    margin: 100px 0;

    .webpage__exchanger-rates--card {
      width: 100%;
      max-width: 450px;
      height: 200px;
      padding: 30px 30px;
      background-color: #0d2f52;
      display: flex;
      cursor: pointer;

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
          padding: 10px 25px;
          font-family: 'Trebuchet MS', sans-serif;
          font-size: 32px;
          font-weight: bold;
          color: #78a6eb;
          letter-spacing: 3px;
        }
        .webpage__exchanger-rates--current_rate {
          padding: 0;
          font-weight: normal;
        }
      }
    }
  }
</style>
