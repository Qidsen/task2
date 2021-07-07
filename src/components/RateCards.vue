<template>
  <div class="webpage__exchanger-rates">
    <div v-for="(cryptoItem, index) in rateCrypto" :key="index"
      @click="activePage(index)"
      :class="{ 'active': index == 'ETH' }" 
      class="webpage__exchanger-rates--card" >

      <div class="webpage__exchanger-rates--crypto">
        <img :src='require(`@/assets/img/png/${index}.png`)' :alt='`${index}`'>
        <span> {{ index }} </span>
      </div>
      <table class="webpage__exchanger-table">
        <tbody>
          <template v-for="(valueItem, index) in rateValue">
            <tr :key="index" class="webpage__exchanger-rates--current">
              <td class="webpage__exchanger-rates--current_crypto">
                {{ `${index}:` }}
              </td>
              <td class="webpage__exchanger-rates--current_rate">
                {{ (valueItem / cryptoItem).toFixed(2) }}
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

export default {
  name: 'RateCards',
  data: () => ({
    isActive: false,
  }), 
  methods: {
    activePage() {
      this.isActive = true;
    },
  },
  computed: {
    ...mapState('rates', ['rateCrypto', 'rateValue']),
  },
};
</script>

<style lang="scss">
  .webpage__exchanger-rates {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .webpage__exchanger-rates--card {
      width: 100%;
      max-width: 450px;
      height: 240px;
      padding: 30px 30px;
      margin: 120px 10px;
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
    .active {
      background-color: #185088;
      transition: all 0.3s;
      .webpage__exchanger-rates--current {
        .webpage__exchanger-rates--current_crypto, .webpage__exchanger-rates--current_rate {
          color: #a6c5e4;
        }
      }
    }
  }
</style>
