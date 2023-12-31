"use strict";

const timeouts = [];
const mobileAndTabletCheck = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

$(".top-left").addClass("hide");
console.log("🍌");

$(document).ready(() => {
  const links = [
    {
      name: "Telegram",
      link: "https://t.me/Haggled",
    },
    {
      name: "Haggled",
      link: "https://haggled.gg",
    },
    {
      name: "flipd",
      link: "http://flipd.gg/Haggled",
    },
    {
      name: "kingz",
      link: "https://kingz.net/Haggled",
    },
  ];

  for (let i in links) {
    let link = links[i];

    $("#marquee").append(
      `<a href="${link.link}" target="_BLANK">${link.name}</a>`
    );

    link = $("#marquee").children("a").last();

    if (i != links.length - 1)
      $("#marquee").append(
        ' <img class="emoticon" src="assets/others/mgh_17.png"> '
      );
  }

  if (mobileAndTabletCheck()) {
    var myDiv = document.querySelector('#marquee');
    myDiv.style.width= '200px';
    $(".top-left").addClass("hide");

    $("#background").replaceWith(
      '<div id="background" style="background-image: url(assets/others/lofi.gif);"></div>'
    );

    app.shouldIgnoreVideo = true;
  }

  app.titleChanger([
    " ᠌ ᠌ ᠌ ᠌ ᠌ ᠌ ᠌ ᠌",
    "h",
    "ha",
    "hag",
    "hagg",
    "haggl",
    "haggle",
    "haggled",
    "haggle",
    "haggl",
    "hagg",
    "hag",
    "ha",
    "h",
  ]);
  app.iconChanger([
  ]);
});

if ($.cookie("videoTime")) {
  app.videoElement.currentTime = $.cookie("videoTime");
  app.audioElement.currentTime = $.cookie("videoTime");
}

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

document.body.onkeyup = (event) => {
  if (event.keyCode == 32 && app.skippedIntro) {
    if (app.backgroundToggler) {
      app.videoElement.play();
      app.audioElement.play();
    } else {
      app.videoElement.pause();
      app.audioElement.pause();
    }

    return (app.backgroundToggler = !app.backgroundToggler);
  }
};

$("html").on("contextmenu", (event) => {
  const img = document.createElement("img");

  const trollfaceLight = app.skippedIntro ? "" : "trollface-light";

  img.src = "https://Haggled.gg/favicon.png";
  img.width = 28;
  img.height = 28;
  img.alt = "Haggled.gg";
  img.style = `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px; z-index: 10`;
  img.className = `troll ${trollfaceLight}`;

  document.body.appendChild(img);
});

setInterval(() => {
  $(".troll").remove();
}, 600);

$(".skip").click(() => {
  var audioText = document.getElementById("audioButton");
  audioText.innerHTML = "mute";
  skipIntro();
  
});

$.fn.extend({
  animateCss: function (animationName) {
    const animationEnd =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    this.addClass(`animated ${animationName}`).one(animationEnd, () => {
      $(this).removeClass(`animated ${animationName}`);
    });

    return this;
  },
});

const writeLine = (text, speed, timeout, callback) => {
  timeout = typeof timeout === "number" ? timeout : [0, (callback = timeout)];

  const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);

  setTimeout(() => {
    const typed = new Typed(`#line${lineNumber}`, {
      strings: text,
      typeSpeed: speed,
      onComplete: callback,
    });
  }, timeout);
};
/*    "> Apes together strong<br>> Granting access to <span style='font-size: 14px; color: #2bff00;'>[Haggled.gg/edgy]</span>....",
    `> <span style='font-size: 14px; color: #2bff00;'>Access granted</span><br>> Do you want steam points? hehehe: <a href='http://Haggled.gg' target="_blank"><b style='color: #5865f2'>Haggled.gg</b></a>`, */
writeLine(["> Apes together strong<br>> Granting access to <span style='font-size: 14px; color: #2bff00;'>[Haggled.gg]</span>....",
`> <span style='font-size: 14px; color: #2bff00;'>Access granted</span><br>> Do you want steam points? hehehe: <a href='http://sell.Haggled.gg' target="_blank"><b style='color: #5865f2'><u>sell.Haggled.gg</u></b></a>`,], 45, () => {
  if (app.skippedIntro) return;

  clearCursor();

  const usernames = ["user", "dude"];

  if (app.skippedIntro) return;

  clearCursor();

  writeLine(
    [`> <b><i style='color: pink'>.gg/Haggled</i></b>`],
    120,
    500,
    () => {
      timeouts.push(
        setTimeout(() => {
          if (app.skippedIntro) return;
          clearCursor();

          console.log("noSkip exe");
          setTimeout(() => {
            var audioText = document.getElementById("audioButton");
            audioText.innerHTML = "mute";
            noskipIntro();
            
            
          }, 500);
        }, 1000)
      );
      
    }
  );
  
});

const skipIntro = () => {
  if (app.skippedIntro) return;

  app.skippedIntro = true;

  timeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });

  $(".top-right").remove();
  $("#apeman").removeClass("hide");
  $("#forcePlay").addClass("hide");
  $(".top-left").removeClass("hide");

  $("#main").fadeOut(100, () => {
    $("#main").remove();

    $("#marquee").marquee({
      duration: 15000,
      gap: 420,
      delayBeforeStart: 1000,
      direction: "left",
      duplicated: true,
    });

    setTimeout(() => {
      $(".brand-header").animateCss(
        app.effects[Math.floor(Math.random() * app.effects.length)]
      );
    }, 200);

    setTimeout(() => {
      const typed = new Typed("#brand", {
        strings: app.brandDescription,
        typeSpeed: 100,

        onComplete: () => {
          clearCursor();
        },
      });
    }, 1350);

    setTimeout(() => {
      if (!app.shouldIgnoreVideo) {
        app.videoElement.play();
        app.audioElement.play();
        console.log("play Video and audio trigger");
      }

      app.videoElement.addEventListener(
        "timeupdate",
        () => {
          $.cookie("videoTime", app.videoElement.currentTime, { expires: 1 });
        },
        false
      );

      $(".marquee-container").css("visibility", "visible").hide().fadeIn(100);

      $(".marquee-container").animateCss("zoomIn");

      $(".container").fadeIn();

      $(".background").fadeIn(200, () => {
        if (!app.shouldIgnoreVideo)
          $("#audio").animate({ volume: app.musicVolume }, app.musicFadeIn);
      });
    }, 200);
  });
  console.log("skipIntro");

  if (mobileAndTabletCheck()) {
    $(".top-left").remove();
  }
};

const noskipIntro = () => {
  if (app.skippedIntro) return;

  app.skippedIntro = true;

  timeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });

  $(".top-right").remove();
  $("#apeman").removeClass("hide");
  $(".top-left").removeClass("hide");
  $(".playerButton").addClass("hide");

  $("#main").fadeOut(100, () => {
    $("#main").remove();

    $("#marquee").marquee({
      duration: 15000,
      gap: 420,
      delayBeforeStart: 1000,
      direction: "left",
      duplicated: true,
    });

    setTimeout(() => {
      $(".brand-header").animateCss(
        app.effects[Math.floor(Math.random() * app.effects.length)]
      );
    }, 200);

    setTimeout(() => {
      const typed = new Typed("#brand", {
        strings: app.brandDescription,
        typeSpeed: 200,

        onComplete: () => {
          clearCursor();
        },
      });
    }, 1350);

    setTimeout(() => {
      if (!app.shouldIgnoreVideo) {
        app.videoElement.pause();
        app.audioElement.pause();
        console.log("pause trigger audio & video");
      }

      app.videoElement.addEventListener(
        "timeupdate",
        () => {
          $.cookie("videoTime", app.videoElement.currentTime, { expires: 1 });
        },
        false
      );

      $(".marquee-container").css("visibility", "visible").hide().fadeIn(100);

      $(".marquee-container").animateCss("zoomIn");

      $(".container").fadeIn();

      $(".background").fadeIn(200, () => {
        if (!app.shouldIgnoreVideo)
          $("#audio").animate({ volume: app.musicVolume }, app.musicFadeIn);
      });
    }, 200);
  });
  console.log("noskipIntro function");
  if (mobileAndTabletCheck()) {
    $(".top-left").remove();
  }
  
};


const clearCursor = () => {
  return $("span").siblings(".typed-cursor").css("opacity", "0");
};

function videoPlay() {
  var videoText = document.getElementById("videoButton");
  var video = document.getElementById("background");
  var audio = document.getElementById("audio");

  if (video.paused) {
    video.play();
    audio.play();
    videoText.innerHTML = "pause";
  } else {
    video.pause();
    audio.pause();
    videoText.innerHTML = "resume";
  }
}

function audioPlay() {
  var audioText = document.getElementById("audioButton");
  var audio = document.getElementById("audio");

  if (audio.muted === true) {
    audio.muted = false;
    audioText.innerHTML = "mute";
    console.log("unmuted DONE");
  } else {
    audio.muted = true;
    audioText.innerHTML = "unmute";
    console.log("muted DONE");
  }
}

function forcePlay() {
  $(".playerButton").removeClass("hide");
  app.videoElement.play();
  app.audioElement.play();
  $("#forcePlay").remove();
}
