const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyEl:document.body};t.startBtn.disabled=!1;const e={intervalId:null,start(){t.startBtn.disabled=!0,this.intervalId=setInterval((()=>{!function(){let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.bodyEl.style.backgroundColor=e}()}),1e3,1e3)},stop(){t.startBtn.disabled=!1,clearInterval(this.intervalId)}};t.startBtn.addEventListener("click",(()=>{e.start()})),t.stopBtn.addEventListener("click",(()=>{e.stop()}));
//# sourceMappingURL=01-color-switcher.cfa48841.js.map
