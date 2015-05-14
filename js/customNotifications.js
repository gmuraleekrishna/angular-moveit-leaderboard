document.addEventListener("deviceready", function(){
  var notificationStatus = localStorage.getItem("notification") || "false";
  
  if(notificationStatus === "false"){
    cordova.plugins.notification.local.schedule([getMorningNotification(), getEveningNotification()]);
    localStorage.setItem("notification", "true");
  }
});


function getMorningNotification(){
  var morningTime = new Date();
  morningTime.setHours(06, 00, 00, 00);
  var morning = {
    id: 1,
    title: "Time for work out!",
    text: "Let's get energized with a 30 min work out. Shall we?",
    at: morningTime,
    every: "day",
    led: "FFFF00",
    sound: null,
    icon: "file://img/ic-notification-96-xhdpi.png"
  };
  return morning;
};

function getEveningNotification(){
  var eveningTime = new Date();
  eveningTime.setHours(18, 00, 00, 00);
  var evening = {
    id: 2,
    title: "Worked out in the morning?",
    text: "No problem. We can still make time for a 10 min work out. You'll feel so good afterwards. I promise!",
    at: eveningTime,
    every: "day",
    led: "FFFF00",
    sound: null,
    icon: "file://img/ic-notification-96-xhdpi.png"
  };
  return evening;
};
