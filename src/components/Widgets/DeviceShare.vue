<!-- Device Share Widget -->
<template>
  <div class="device-share-wrap">
    <div class="mb-2 pos-relative">
      <doughnut-chart-v2
          :height="240"
          :data="devicesShare"
      >
      </doughnut-chart-v2>
      <div class="overlay-content d-custom-flex justify-center align-items-center">
        <span class="grey--text font-x fw-semi-bold">Total: {{this.devices.total}}</span>
      </div>
    </div>
    <div class="hidden-xs-only">
      <div class="d-custom-flex widget-footer">
        <div class="fs-12 fw-normal grey--text">
          <span class="v-badge primary px-2 py-1"></span>
          <span class="d-block">{{ Math.round((this.devices.web / this.devices.total) * 100) }} %</span>
          <span class="d-block">Website</span>
        </div>
        <div class="fs-12 fw-normal grey--text">
          <span class="v-badge success px-2 py-1"></span>
          <span class="d-block">{{ Math.round((this.devices.ios / this.devices.total) * 100) }} %</span>
          <span class="d-block">iOS Devices</span>
        </div>
        <div class="fs-12 fw-normal grey--text">
          <span class="v-badge warning px-2 py-1"></span>
          <span class="d-block">{{ Math.round((this.devices.android / this.devices.total) * 100) }} %</span>
          <span class="d-block">Android Devices</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChartV2 from "../Charts/DoughnutChartV2";

// constants
import {ChartConfig} from "Constants/chart-config";

//data
// import { devicesShare } from "../../views/dashboard/data";

export default {
  components: {
    DoughnutChartV2
  },
  data() {
    return {
      ChartConfig,
    };
  },

  computed: {
    devices() {
      return this.$store.getters['dashboard/stats'].devices;
    },
    devicesShare() {
      return {
        labels: ['Web', 'iOS', 'Android'],
        data: [this.devices.web, this.devices.ios, this.devices.android],
        backgroundColor: [
          ChartConfig.color.primary,
          ChartConfig.color.success,
          ChartConfig.color.warning
        ]
      }
    }
  }
};
</script>