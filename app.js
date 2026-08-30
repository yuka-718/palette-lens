(() => {
  "use strict";

  const COLORS = [
    { name: "スノーホワイト", rgb: [248, 247, 242], words: "やわらかい、わずかに黄みの白", pairs: [["ネイビー", "#26335f"], ["チャコール", "#44434d"]], tip: "濃い色と合わせると、輪郭がはっきりした装いになります。" },
    { name: "アイボリー", rgb: [239, 228, 201], words: "あたたかみのある、やさしい白", pairs: [["ブラウン", "#6f4c3e"], ["オリーブ", "#687050"]], tip: "ブラウンを足すと、落ち着いたナチュラルな印象になります。" },
    { name: "ライトグレー", rgb: [190, 191, 194], words: "明るく、少し青みのある灰色", pairs: [["ラベンダー", "#a995c7"], ["ネイビー", "#26335f"]], tip: "淡い色を合わせるとやわらかく、濃紺なら端正にまとまります。" },
    { name: "チャコールグレー", rgb: [69, 68, 76], words: "黒に近い、深い灰色", pairs: [["アイボリー", "#efe4c9"], ["サックスブルー", "#8bb8d8"]], tip: "白よりアイボリーを合わせると、コントラストが穏やかになります。" },
    { name: "ブラック", rgb: [24, 24, 28], words: "ほぼ光を感じない、深い黒", pairs: [["ホワイト", "#f8f7f2"], ["サーモンピンク", "#f28c7a"]], tip: "明るい色を一点足すと、その色がきれいに引き立ちます。" },
    { name: "ベージュ", rgb: [202, 181, 145], words: "明るい、砂のような薄茶色", pairs: [["ネイビー", "#26335f"], ["テラコッタ", "#b96045"]], tip: "ネイビーをボトムにすると、上品で落ち着いた印象になります。" },
    { name: "キャメル", rgb: [177, 123, 69], words: "黄みの強い、あたたかな茶色", pairs: [["アイボリー", "#efe4c9"], ["ダークグリーン", "#315348"]], tip: "深い緑を合わせると、秋らしい奥行きが生まれます。" },
    { name: "ブラウン", rgb: [105, 72, 59], words: "赤みを少し含んだ、濃い茶色", pairs: [["ミント", "#a7d9c3"], ["アイボリー", "#efe4c9"]], tip: "淡いミントを足すと、重さを残さずやさしくまとまります。" },
    { name: "テラコッタ", rgb: [184, 86, 63], words: "土のような、くすんだ赤橙色", pairs: [["ベージュ", "#cab591"], ["ブルーグレー", "#6c7c91"]], tip: "青みのあるグレーを合わせると、赤みがほどよく引き締まります。" },
    { name: "ワインレッド", rgb: [112, 38, 56], words: "紫を含んだ、深く暗い赤", pairs: [["ライトグレー", "#bebfc2"], ["ベージュ", "#cab591"]], tip: "明るいグレーを合わせると、重くなりすぎず上品です。" },
    { name: "レッド", rgb: [207, 52, 55], words: "はっきりした、鮮やかな赤", pairs: [["ネイビー", "#26335f"], ["ホワイト", "#f8f7f2"]], tip: "ネイビーを土台にすると、赤が主役の落ち着いた配色になります。" },
    { name: "コーラルレッド", rgb: [235, 99, 82], words: "オレンジを含んだ、明るい赤", pairs: [["エクリュ", "#eee4d2"], ["デニムブルー", "#4f6f91"]], tip: "デニムの青と合わせると、親しみやすく軽快にまとまります。" },
    { name: "サーモンピンク", rgb: [242, 140, 122], words: "明るい、オレンジ寄りのピンク", pairs: [["ネイビー", "#26335f"], ["アイボリー", "#efe4c9"]], tip: "ネイビーをボトムにすると、やわらかさが引き締まります。" },
    { name: "ローズピンク", rgb: [213, 91, 125], words: "赤みの強い、華やかなピンク", pairs: [["チャコール", "#45444c"], ["ライトベージュ", "#ded0b8"]], tip: "チャコールを合わせると、甘さを抑えた大人っぽい印象です。" },
    { name: "ペールピンク", rgb: [236, 190, 198], words: "白を多く含んだ、淡いピンク", pairs: [["ボルドー", "#733247"], ["グレー", "#96979e"]], tip: "少しくすんだグレーを合わせると、やわらかく馴染みます。" },
    { name: "マゼンタ", rgb: [190, 51, 135], words: "紫を含んだ、鮮やかな濃いピンク", pairs: [["ブラック", "#18181c"], ["ライトグレー", "#bebfc2"]], tip: "無彩色と合わせて、マゼンタを一点だけ効かせるのがおすすめです。" },
    { name: "ラベンダー", rgb: [169, 149, 199], words: "白を含んだ、やさしい薄紫", pairs: [["ライトグレー", "#bebfc2"], ["ダークブラウン", "#60463d"]], tip: "濃いブラウンを合わせると、紫の冷たさがやわらぎます。" },
    { name: "パープル", rgb: [117, 73, 146], words: "赤と青が混ざった、深い紫", pairs: [["マスタード", "#c99f35"], ["チャコール", "#45444c"]], tip: "マスタードを小物で足すと、メリハリのある配色になります。" },
    { name: "ネイビー", rgb: [38, 51, 95], words: "黒に近い、深い紺色", pairs: [["サーモンピンク", "#f28c7a"], ["アイボリー", "#efe4c9"]], tip: "明るい暖色を合わせると、きちんと感の中に親しみが出ます。" },
    { name: "ロイヤルブルー", rgb: [54, 82, 168], words: "鮮やかで、少し紫寄りの青", pairs: [["ホワイト", "#f8f7f2"], ["キャメル", "#b17b45"]], tip: "キャメルを合わせると、青の鮮やかさが自然に引き立ちます。" },
    { name: "ブルー", rgb: [50, 113, 190], words: "空より濃い、はっきりした青", pairs: [["ホワイト", "#f8f7f2"], ["オレンジ", "#e68a36"]], tip: "オレンジを小さく差すと、元気で視認しやすい組み合わせです。" },
    { name: "サックスブルー", rgb: [139, 184, 216], words: "少しくすんだ、明るい水色", pairs: [["チャコール", "#45444c"], ["ホワイト", "#f8f7f2"]], tip: "チャコールを合わせると、清潔感を保ったまま引き締まります。" },
    { name: "シアン", rgb: [54, 179, 190], words: "緑を少し含んだ、鮮やかな水色", pairs: [["ネイビー", "#26335f"], ["コーラル", "#eb6352"]], tip: "コーラルを小物に使うと、明るく活動的な配色になります。" },
    { name: "ターコイズ", rgb: [55, 151, 145], words: "青を含んだ、鮮やかな緑", pairs: [["サンドベージュ", "#c8ae83"], ["ネイビー", "#26335f"]], tip: "砂色のベージュと合わせると、海辺のような爽やかさが出ます。" },
    { name: "ミントグリーン", rgb: [167, 217, 195], words: "白を多く含んだ、淡い青緑", pairs: [["ブラウン", "#69483b"], ["ホワイト", "#f8f7f2"]], tip: "ブラウンを合わせると、やさしく自然な印象になります。" },
    { name: "エメラルドグリーン", rgb: [44, 147, 104], words: "青みを含んだ、鮮やかな緑", pairs: [["ネイビー", "#26335f"], ["ライトベージュ", "#ded0b8"]], tip: "明るいベージュを合わせると、緑の鮮やかさが映えます。" },
    { name: "グリーン", rgb: [61, 128, 72], words: "草木のような、落ち着いた緑", pairs: [["アイボリー", "#efe4c9"], ["ブラウン", "#69483b"]], tip: "自然色どうしでまとめると、穏やかで馴染みやすい配色です。" },
    { name: "オリーブ", rgb: [104, 112, 80], words: "黄みを含んだ、くすんだ緑", pairs: [["エクリュ", "#eee4d2"], ["ワインレッド", "#702638"]], tip: "ワインレッドを少量足すと、落ち着きのある秋色コーデになります。" },
    { name: "マスタード", rgb: [201, 159, 53], words: "茶色を含んだ、深い黄色", pairs: [["ネイビー", "#26335f"], ["パープル", "#754992"]], tip: "ネイビーを合わせると、黄色が派手になりすぎず上品です。" },
    { name: "イエロー", rgb: [239, 207, 67], words: "光を感じる、鮮やかな黄色", pairs: [["チャコール", "#45444c"], ["ロイヤルブルー", "#3652a8"]], tip: "濃いグレーを土台にすると、黄色が見つけやすいアクセントになります。" },
    { name: "オレンジ", rgb: [230, 138, 54], words: "赤みを含んだ、明るい橙色", pairs: [["ネイビー", "#26335f"], ["アイボリー", "#efe4c9"]], tip: "ネイビーと合わせると、元気さを残しながら引き締まります。" }
  ];

  const QUICK_COLORS = [
    [242, 140, 122],
    [38, 51, 95],
    [167, 217, 195],
    [201, 159, 53],
    [169, 149, 199]
  ];

  const video = document.querySelector("#camera-video");
  const canvas = document.querySelector("#photo-canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const sampleCanvas = document.createElement("canvas");
  sampleCanvas.width = 15;
  sampleCanvas.height = 15;
  const sampleCtx = sampleCanvas.getContext("2d", { willReadFrequently: true });
  const stage = document.querySelector("#camera-stage");
  const reticle = document.querySelector("#reticle");
  const modeBadge = document.querySelector("#mode-badge");
  const cameraButton = document.querySelector("#camera-button");
  const heroCameraButton = document.querySelector("#hero-camera-button");
  const freezeButton = document.querySelector("#freeze-button");
  const photoInput = document.querySelector("#photo-input");
  const photoLabel = document.querySelector('label[for="photo-input"]');
  const messageBox = document.querySelector("#camera-message");
  const helpButton = document.querySelector("#help-button");
  const help = document.querySelector("#camera-help");
  const resultSwatch = document.querySelector("#result-swatch");
  const colorName = document.querySelector("#color-name");
  const colorReading = document.querySelector("#color-reading");
  const confidence = document.querySelector("#confidence");
  const hexValue = document.querySelector("#hex-value");
  const rgbValue = document.querySelector("#rgb-value");
  const pairChips = document.querySelector("#pair-chips");
  const styleTip = document.querySelector("#style-tip");
  const resultAnnouncement = document.querySelector("#result-announcement");
  const speakButton = document.querySelector("#speak-button");
  const copyButton = document.querySelector("#copy-button");
  const quickGrid = document.querySelector("#quick-grid");

  let stream = null;
  let mode = "demo";
  let frozen = false;
  let samplingTimer = null;
  let messageTimer = null;
  let current = { color: COLORS[12], rgb: [242, 140, 122], hex: "#F28C7A" };
  let selectedQuick = 0;
  let samplePoint = { x: 50, y: 50 };

  function rgbToHex(rgb) {
    return "#" + rgb.map(value => Math.round(value).toString(16).padStart(2, "0")).join("").toUpperCase();
  }

  function rgbToLab([r, g, b]) {
    const channels = [r, g, b].map(value => {
      const n = value / 255;
      return n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
    });
    const x = (channels[0] * 0.4124 + channels[1] * 0.3576 + channels[2] * 0.1805) / 0.95047;
    const y = channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
    const z = (channels[0] * 0.0193 + channels[1] * 0.1192 + channels[2] * 0.9505) / 1.08883;
    const f = value => value > 0.008856 ? Math.cbrt(value) : 7.787 * value + 16 / 116;
    return [116 * f(y) - 16, 500 * (f(x) - f(y)), 200 * (f(y) - f(z))];
  }

  const colorLabs = COLORS.map(color => rgbToLab(color.rgb));

  function nearestColor(rgb) {
    const lab = rgbToLab(rgb);
    let winner = 0;
    let distance = Infinity;
    colorLabs.forEach((candidate, index) => {
      const d = Math.hypot(lab[0] - candidate[0], lab[1] - candidate[1], lab[2] - candidate[2]);
      if (d < distance) {
        distance = d;
        winner = index;
      }
    });
    return { color: COLORS[winner], distance };
  }

  function updateResult(rgb, announce = false) {
    const clean = rgb.map(value => Math.max(0, Math.min(255, Math.round(value))));
    const match = nearestColor(clean);
    const hex = rgbToHex(clean);
    const score = Math.max(0, Math.min(99, Math.round(100 - match.distance * 1.25)));
    current = { color: match.color, rgb: clean, hex };
    resultSwatch.style.background = hex;
    reticle.style.setProperty("--sample-color", hex);
    colorName.textContent = match.color.name;
    colorReading.textContent = match.color.words;
    confidence.textContent = `辞書一致度 ${score}%`;
    hexValue.textContent = hex;
    rgbValue.textContent = clean.join(", ");
    pairChips.replaceChildren(...match.color.pairs.map(([name, value]) => {
      const chip = document.createElement("span");
      chip.className = "pair-chip";
      const swatch = document.createElement("i");
      swatch.style.background = value;
      const label = document.createElement("span");
      label.textContent = name;
      chip.append(swatch, label);
      return chip;
    }));
    styleTip.textContent = match.color.tip;
    if (announce) resultAnnouncement.textContent = `${match.color.name}。${match.color.words}。`;
  }

  function setReticle(xPercent, yPercent) {
    samplePoint = {
      x: Math.max(8, Math.min(92, xPercent)),
      y: Math.max(8, Math.min(92, yPercent))
    };
    reticle.style.left = `${samplePoint.x}%`;
    reticle.style.top = `${samplePoint.y}%`;
    reticle.classList.remove("pulse");
    void reticle.offsetWidth;
    reticle.classList.add("pulse");
  }

  function sizeCanvas() {
    const rect = stage.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(rect.width * ratio));
    const height = Math.max(1, Math.round(rect.height * ratio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      if (mode === "demo") drawDemo();
    }
  }

  function drawDemo() {
    if (!canvas.width || !canvas.height) return;
    const w = canvas.width;
    const h = canvas.height;
    const palette = ["#27315f", "#f28c7a", "#a7d9c3", "#c99f35", "#a995c7", "#efe4c9"];
    ctx.fillStyle = palette[1];
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = palette[0];
    ctx.fillRect(0, 0, w * 0.52, h * 0.48);
    ctx.fillStyle = palette[2];
    ctx.fillRect(w * 0.52, 0, w * 0.48, h * 0.34);
    ctx.fillStyle = palette[4];
    ctx.fillRect(w * 0.52, h * 0.34, w * 0.48, h * 0.29);
    ctx.fillStyle = palette[1];
    ctx.fillRect(0, h * 0.48, w * 0.54, h * 0.52);
    ctx.fillStyle = palette[3];
    ctx.fillRect(w * 0.54, h * 0.63, w * 0.46, h * 0.37);
    ctx.fillStyle = "rgba(255,255,255,.13)";
    for (let i = -h; i < w + h; i += 52) {
      ctx.save();
      ctx.translate(i, 0);
      ctx.rotate(Math.PI / 4);
      ctx.fillRect(0, -h, 13, h * 3);
      ctx.restore();
    }
  }

  function drawCover(source, targetCtx, targetWidth, targetHeight) {
    const sourceWidth = source.videoWidth || source.naturalWidth || source.width;
    const sourceHeight = source.videoHeight || source.naturalHeight || source.height;
    if (!sourceWidth || !sourceHeight) return;
    const scale = Math.max(targetWidth / sourceWidth, targetHeight / sourceHeight);
    const width = sourceWidth * scale;
    const height = sourceHeight * scale;
    const x = (targetWidth - width) / 2;
    const y = (targetHeight - height) / 2;
    targetCtx.clearRect(0, 0, targetWidth, targetHeight);
    targetCtx.drawImage(source, x, y, width, height);
  }

  function averagePixels(data) {
    let red = 0, green = 0, blue = 0, count = 0;
    for (let index = 0; index < data.length; index += 4) {
      if (data[index + 3] < 100) continue;
      red += data[index];
      green += data[index + 1];
      blue += data[index + 2];
      count++;
    }
    return count ? [red / count, green / count, blue / count] : current.rgb;
  }

  function sampleCanvasAt(xPercent, yPercent, announce = false) {
    const x = Math.round((xPercent / 100) * canvas.width);
    const y = Math.round((yPercent / 100) * canvas.height);
    const radius = Math.max(4, Math.round(Math.min(canvas.width, canvas.height) * 0.012));
    const startX = Math.max(0, x - radius);
    const startY = Math.max(0, y - radius);
    const width = Math.max(1, Math.min(canvas.width - startX, radius * 2));
    const height = Math.max(1, Math.min(canvas.height - startY, radius * 2));
    updateResult(averagePixels(ctx.getImageData(startX, startY, width, height).data), announce);
  }

  function sampleVideoAt(xPercent = 50, yPercent = 50, announce = false) {
    if (!video.videoWidth || !video.videoHeight || video.readyState < 2) return;
    const rect = stage.getBoundingClientRect();
    const scale = Math.max(rect.width / video.videoWidth, rect.height / video.videoHeight);
    const shownWidth = video.videoWidth * scale;
    const shownHeight = video.videoHeight * scale;
    const cropX = (shownWidth - rect.width) / 2;
    const cropY = (shownHeight - rect.height) / 2;
    const sourceX = (cropX + (xPercent / 100) * rect.width) / scale;
    const sourceY = (cropY + (yPercent / 100) * rect.height) / scale;
    const sourceRadius = Math.max(3, Math.round(Math.min(video.videoWidth, video.videoHeight) * 0.012));
    sampleCtx.clearRect(0, 0, 15, 15);
    sampleCtx.drawImage(video, sourceX - sourceRadius, sourceY - sourceRadius, sourceRadius * 2, sourceRadius * 2, 0, 0, 15, 15);
    updateResult(averagePixels(sampleCtx.getImageData(0, 0, 15, 15).data), announce);
  }

  function showMessage(text) {
    clearTimeout(messageTimer);
    messageBox.textContent = text;
    messageBox.classList.add("show");
    messageTimer = setTimeout(() => messageBox.classList.remove("show"), 4300);
  }

  function updateModeBadge(label, live = false) {
    modeBadge.classList.toggle("live", live);
    modeBadge.lastChild.textContent = label;
  }

  function stopSampling() {
    clearInterval(samplingTimer);
    samplingTimer = null;
  }

  function startSampling() {
    stopSampling();
    samplingTimer = setInterval(() => {
      if (mode === "camera" && !frozen) sampleVideoAt(samplePoint.x, samplePoint.y, false);
    }, 420);
  }

  function stopCamera(returnToDemo = true) {
    stopSampling();
    if (stream) stream.getTracks().forEach(track => track.stop());
    stream = null;
    video.srcObject = null;
    video.classList.remove("active");
    cameraButton.querySelector("span").textContent = "カメラを起動";
    freezeButton.disabled = true;
    freezeButton.classList.remove("frozen");
    freezeButton.querySelector("span").textContent = "固定";
    frozen = false;
    if (returnToDemo) {
      mode = "demo";
      sizeCanvas();
      drawDemo();
      updateModeBadge("デモモード");
      setReticle(27, 74);
      updateResult(QUICK_COLORS[0]);
    }
  }

  async function startCamera() {
    if (!navigator.mediaDevices?.getUserMedia) {
      showMessage("このブラウザではカメラを使えません。写真から色を選んでお試しください。");
      return;
    }
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 1920 } },
        audio: false
      });
      video.srcObject = stream;
      await video.play();
      video.classList.add("active");
      mode = "camera";
      cameraButton.querySelector("span").textContent = "カメラを停止";
      freezeButton.disabled = false;
      updateModeBadge("リアルタイム", true);
      setReticle(50, 50);
      startSampling();
      sampleVideoAt(samplePoint.x, samplePoint.y, true);
    } catch (error) {
      const denied = error && (error.name === "NotAllowedError" || error.name === "PermissionDeniedError");
      showMessage(denied ? "カメラの使用が許可されていません。ブラウザの設定を確認するか、写真からお試しください。" : "カメラを開始できませんでした。写真から色を選んでお試しください。");
    }
  }

  function renderQuickColors() {
    QUICK_COLORS.forEach((rgb, index) => {
      const match = nearestColor(rgb).color;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `quick-color${index === selectedQuick ? " selected" : ""}`;
      button.style.setProperty("--quick-color", rgbToHex(rgb));
      button.setAttribute("aria-pressed", index === selectedQuick ? "true" : "false");
      button.innerHTML = `<span class="quick-swatch" aria-hidden="true"></span><strong>${match.name}</strong><small>${match.words}</small>`;
      button.addEventListener("click", () => {
        selectedQuick = index;
        [...quickGrid.children].forEach((item, itemIndex) => {
          item.classList.toggle("selected", itemIndex === index);
          item.setAttribute("aria-pressed", itemIndex === index ? "true" : "false");
        });
        updateResult(rgb, true);
      });
      quickGrid.append(button);
    });
  }

  cameraButton.addEventListener("click", () => {
    if (stream) {
      stopCamera();
      showMessage("カメラを停止しました。");
    } else {
      startCamera();
    }
  });

  heroCameraButton.addEventListener("click", () => {
    document.querySelector("#lens").scrollIntoView({ behavior: "smooth", block: "start" });
    if (!stream) startCamera();
  });

  freezeButton.addEventListener("click", () => {
    if (!stream) return;
    frozen = !frozen;
    freezeButton.classList.toggle("frozen", frozen);
    freezeButton.querySelector("span").textContent = frozen ? "再開" : "固定";
    if (frozen) {
      sizeCanvas();
      drawCover(video, ctx, canvas.width, canvas.height);
      video.classList.remove("active");
      mode = "frozen";
      stopSampling();
      updateModeBadge("静止中");
      sampleCanvasAt(samplePoint.x, samplePoint.y, true);
    } else {
      video.classList.add("active");
      mode = "camera";
      updateModeBadge("リアルタイム", true);
      startSampling();
    }
  });

  photoLabel.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      photoInput.click();
    }
  });

  photoInput.addEventListener("change", event => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showMessage("画像ファイルを選んでください。");
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      stopCamera(false);
      sizeCanvas();
      drawCover(image, ctx, canvas.width, canvas.height);
      URL.revokeObjectURL(objectUrl);
      mode = "photo";
      updateModeBadge("写真から判定");
      setReticle(50, 50);
      sampleCanvasAt(50, 50, true);
      showMessage("写真を読み込みました。気になる場所をタップしてください。");
      photoInput.value = "";
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      showMessage("写真を読み込めませんでした。別の画像でお試しください。");
    };
    image.src = objectUrl;
  });

  stage.addEventListener("pointerdown", event => {
    if (event.target.closest("button")) return;
    const rect = stage.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setReticle(x, y);
    if (mode === "camera") sampleVideoAt(samplePoint.x, samplePoint.y, true);
    else sampleCanvasAt(samplePoint.x, samplePoint.y, true);
  });

  stage.addEventListener("keydown", event => {
    const moves = { ArrowLeft: [-4, 0], ArrowRight: [4, 0], ArrowUp: [0, -4], ArrowDown: [0, 4] };
    if (moves[event.key]) {
      event.preventDefault();
      const [x, y] = moves[event.key];
      setReticle(samplePoint.x + x, samplePoint.y + y);
      if (mode === "camera") sampleVideoAt(samplePoint.x, samplePoint.y, true);
      else sampleCanvasAt(samplePoint.x, samplePoint.y, true);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (mode === "camera") sampleVideoAt(samplePoint.x, samplePoint.y, true);
      else sampleCanvasAt(samplePoint.x, samplePoint.y, true);
    }
  });

  helpButton.addEventListener("click", () => {
    const open = help.hidden;
    help.hidden = !open;
    helpButton.setAttribute("aria-expanded", String(open));
  });

  speakButton.addEventListener("click", () => {
    if (!("speechSynthesis" in window)) {
      showMessage("このブラウザは音声読み上げに対応していません。");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${current.color.name}。${current.color.words}。${current.color.tip}`);
    utterance.lang = "ja-JP";
    utterance.rate = 0.9;
    utterance.onstart = () => {
      speakButton.classList.add("speaking");
      speakButton.querySelector("span").textContent = "読み上げ中…";
    };
    utterance.onend = utterance.onerror = () => {
      speakButton.classList.remove("speaking");
      speakButton.querySelector("span").textContent = "色名を読み上げる";
    };
    window.speechSynthesis.speak(utterance);
  });

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(current.hex);
      showMessage(`${current.hex} をコピーしました。`);
    } catch {
      showMessage(`カラーコードは ${current.hex} です。`);
    }
  });

  const resizeObserver = new ResizeObserver(sizeCanvas);
  resizeObserver.observe(stage);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && stream) stopCamera();
  });
  window.addEventListener("pagehide", () => stopCamera(false));

  sizeCanvas();
  drawDemo();
  setReticle(27, 74);
  updateResult(QUICK_COLORS[0]);
  renderQuickColors();
})();
