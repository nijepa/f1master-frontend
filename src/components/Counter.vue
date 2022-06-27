<template>
  <div class="counter-wrapper">
    <div v-for="(time, i) in times" :key="i" class="card">
      <h4 class="card-title">{{ time.time }}</h4>
      <div class="card-footer">
        {{ $t(time.text) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    end: {
      type: String,
      required: true,
      default:
        "Mon Jul 25 2022 02:00:00 GMT+0200 (Central European Summer Time)",
    },
  },

  data() {
    return {
      startTime: new Date(),
      endTime: this.end,
      times: [
        { id: 0, text: "Days", time: 1 },
        { id: 1, text: "Hours", time: 1 },
        { id: 2, text: "Minutes", time: 1 },
        { id: 3, text: "Seconds", time: 1 },
      ],
      progress: 100,
      // isActive: false,
      timeinterval: undefined,
    };
  },

  methods: {
    updateTimer() {
      if (
        this.times[3].time > 0 ||
        this.times[2].time > 0 ||
        this.times[1].time > 0 ||
        this.times[0].time > 0
      ) {
        this.getTimeRemaining();
        this.updateProgressBar();
      } else {
        clearTimeout(this.timeinterval);
        // this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
        this.progress = 0;
      }
    },
    getTimeRemaining() {
      let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
      if (t >= 0) {
        this.times[3].time = Math.floor((t / 1000) % 60); //seconds
        this.times[2].time = Math.floor((t / 1000 / 60) % 60); //minutes
        this.times[1].time = Math.floor((t / (1000 * 60 * 60)) % 24); //hours
        this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)); //days
      } else {
        this.times[3].time =
          this.times[2].time =
          this.times[1].time =
          this.times[0].time =
            0;
        this.progress = 0;
      }
    },
    updateProgressBar() {
      let startTime = Date.parse(new Date(this.startTime));
      let currentTime = Date.parse(new Date());
      let endTime = Date.parse(new Date(this.endTime));
      let interval = parseFloat(
        ((currentTime - startTime) / (endTime - startTime)) * 100
      ).toFixed(2);
      this.progress = 100 - interval;
    },
  },

  created() {
    this.updateTimer();
    this.timeinterval = setInterval(this.updateTimer, 1000);
  },
};
</script>

<style scoped lang="scss">
.counter-wrapper {
  display: flex;
  justify-content: center;
  column-gap: 1em;

  .card {
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    color: #fdd800;
    font-family: Play, cursive;

    .card-title {
      padding: 0.5em;
      font-size: 2em;
      color: #ff2800;
    }
  }
}
</style>
