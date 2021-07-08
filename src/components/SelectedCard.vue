<template>
  <div class="webpage__exchanger-select">
    <div class="webpage__exchanger-cards">
      <template v-for="(cryptoItem, index) in getRatesCrypto">
        <rate-cards
          :class="{ 'active': selected == index }"
          :key="index"
          :crypto="index"
          :imgPath="`${index}`"
          @select="selected = index"
        />
      </template>
    </div>
    <div class="webpage__exchanger-select--current">
      <span>Selected coin: {{ selected }}</span>
    </div>
    <div class="webpage__exchanger-select--input">
      <span>Volume: </span>
      <input type="number" min="0" step="0.1" v-model="exchangeVolume" placeholder="Enter amount" />
    </div>
    <div class="webpage__exchanger-select--radio">
      <template v-for="(item, index) in VALUE_CURRENCIES">
        <input v-model="exchangeCurrency" type="radio" :key="index + 'input'" :id="item" name="crypto" :value="item">
          <label :for="item" :key="index + 'label'">{{ item }}</label>
      </template>
    </div>
    <div class="webpage__exchanger-select--total">
      <span>
        <b>
          {{ `${exchangeVolume}${selected}` }}
        </b>
        will be
        <b>
          {{ (exchangeVolume * (getRatesValue[exchangeCurrency] / getRatesCrypto[selected])).toFixed(2) }}
        </b>
        in
        <b>
          {{ exchangeCurrency }}
        </b>
      </span>
    </div>
  </div>
</template>

<script>
import RateCards from '@/components/RateCards'
import { VALUE_CURRENCIES } from '@/constants/VALUE_CURRENCIES';
import { mapGetters } from 'vuex';

export default {
  name: 'SelectedCard',
  data: () => ({
    VALUE_CURRENCIES,
    exchangeVolume: 0,
    selected: 'BTC',
    exchangeCurrency: 'UAH',
  }),
  watch: {
    exchangeVolume: {
      handler(val, oldVal) {
        if (isNaN(+val) || +val > Number.MAX_SAFE_INTEGER)
          this.exchangeVolume = oldVal
        else this.exchangeVolume = +val
      },
    },
  },
  computed: {
    ...mapGetters('rates', ['getRatesCrypto' ,'getRatesValue', 'getNameValue']),
  },
  components: {
    RateCards,
  },
}
</script>

<style lang="scss">
  .webpage__exchanger-select {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .webpage__exchanger-cards {
      width: 100%;
      max-width: 1600px;
      margin: 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    
    .active {
      .webpage__exchanger-rates--card {
        background-color: #185088;
        transition: all 0.3s;
        
        .webpage__exchanger-rates--current {
          .webpage__exchanger-rates--current_crypto, .webpage__exchanger-rates--current_rate {
            color: #a6c5e4;
          }
        }
      }
    }

    .webpage__exchanger-select--current {
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 40px;
      color: #78a6eb;
      letter-spacing: 3px;
    }
    .webpage__exchanger-select--input {
      width: 100%;
      max-width: 1000px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 50px;
      span {
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 36px;
        letter-spacing: 3px;
        color: #86c551;
      }
      input {
        padding: 15px 15px;
        width: 768px;
        height: 30px;
        border: 3px solid #0d2f52;
        background-color: transparent;
        color: #78a6eb;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 24px;
      }
    }
    .webpage__exchanger-select--radio {
      width: 100%;
      max-width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 50px;

      label {
        height: 30px;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 25px;
        letter-spacing: 3px;
        cursor: pointer;
        color: #86c551;
        font-weight: 600;
        display: inline-block;
        padding: 15px;
        background-color: #0d2f52;
        transition: all 0.3s;
      }

      input[type="radio"] {
        display: none;
      }

      input[type="radio"]:checked + label {
        background-color: #86c551;
        color: #0d2f52;
      }
    }
    .webpage__exchanger-select--total {
      margin-top: 100px;
      font-family: 'Trebuchet MS', sans-serif;
      color: #86c551;
      font-size: 36px;
      letter-spacing: 3px;
    }
  }
</style>
