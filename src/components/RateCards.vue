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
          <template v-for="(valueItem, index) in rateValue">
            <tr :key="index" class="webpage__exchanger-rates--current">
              <td class="webpage__exchanger-rates--current_crypto">
                {{ `${index}:` }}
              </td>
              <td class="webpage__exchanger-rates--current_rate">
                {{ (valueItem / rateCrypto[crypto]).toFixed(2) }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  },
  data: () => ({
    EVENTS,
  }),
  computed: {
    ...mapState('rates', ['rateCrypto', 'rateValue']),
  },
};
</script>

<style lang="scss">
  .webpage__exchanger-rates {
    width: 450px;
    display: flex;
    margin: 100px 0;
    padding: 0 auto;

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
          width: 64px;
          height: 64px;
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
