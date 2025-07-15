export default {
  data() {
    return { timeLeft: 0, timerId: null };
  },
  created() {
    console.log("Mixin created, time left initial:", this.timeLeft);
  },
  mounted() {
    console.log("Mixin mounted, time left initial:", this.timeLeft);
  },

  methods: {
    startTimer(seconds) {
      this.timeLeft = seconds;
      this.timerId = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timerId);
          this.$emit("close");
        }
      }, 1000);
    },
  },
  beforeDestroy() {
    clearInterval(this.timerId);
    console.log("Mixin beforeDestroy, timer cleared");
  },
};
