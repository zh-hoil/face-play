let canvas;
let video;
let video_select;
let canvas_context;

// 视频流配置
let constraints = {
  video: {
    width: 600,
    height: 400
  },
  audio: false
};

export function getVideoStream() {
  // canvas元素
  canvas = document.getElementById("canvas-video");
  // 2d画布
  canvas_context = canvas.getContext("2d");
  // 视频video元素
  video = document.getElementById("video");
  // 视频源选择元素
  video_select = document.getElementById("video-select");

  // 视频源切换时事件处理函数
  video_select.onchange = getStream;

  //   获取媒体对象 兼容各浏览器
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  navigator.mediaDevices
    .enumerateDevices()
    .then(gotDevices)
    .then(getStream)
    .catch(handleError);
}

// 获取设备信息
function gotDevices(deviceInfos) {
  for (var i = 0; i < deviceInfos.length; ++i) {
    var deviceInfo = deviceInfos[i];
    var option = document.createElement("option");
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === "videoinput") {
      option.text = deviceInfo.label || "camera " + (video_select.length + 1);
      video_select.appendChild(option);
    } else {
      console.log(`找到另外一台设备 ${deviceInfo}`);
    }
  }
}

// 获取视频流
function getStream() {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(stream => {
      video.srcObject = stream;
    })
    .cacth(handleError);
}

// 出错处理函数
function handleError(error) {
  console.error(`获取视频流失败 ${error}`);
}
