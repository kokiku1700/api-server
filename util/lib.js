const moment = require('moment');

const lib = {


    resData: (status, message, resDate, data)=>{
      return {status, message, resDate, data}
    },


    isEmpty(value) {
      if (
        value == "" ||
        value == null ||
        value == undefined ||
        (value != null && typeof value == "object" && !Object.keys(value).length)
      ) {
        return true; // 값 없음
      } else {
        return false; // 값 있음
      }
    },

  };

  module.exports = lib;