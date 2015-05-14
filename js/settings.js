var settings = {
  test:{
    baseUrl: "https://pink-server.herokuapp.com/",
    apiUrl: "http://pink-server.herokuapp.com/api/",
    userApiUrl: "http://pink-server.herokuapp.com/api/user/"
  },
  production:{
    baseUrl: "https://mov3it.herokuapp.com/",
    apiUrl: "http://mov3it.herokuapp.com/api/",
    userApiUrl: "http://mov3it.herokuapp.com/api/user/"
  },

  getSetting: function(setting){
    var settings = JSON.parse(localStorage.getItem("settings")) || {};
    var mode = settings.mode || "production";
    return this[mode][setting];
  }
};
