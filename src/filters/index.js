import Vue from "vue"
import moment from "moment"

Vue.filter("formatDate", v => {
  return moment(v).format("YYYY-MM-DD HH:mm")
})

