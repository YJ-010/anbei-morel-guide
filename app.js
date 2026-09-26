const climateData = {
  "2020-21": [
    { month: 10, mean: 16.5, meanMin: 11.2, meanMax: 22.8, low: 2.8, high: 28.8, freeze: 0 },
    { month: 11, mean: 11.2, meanMin: 6.2, meanMax: 17.6, low: -0.8, high: 27.4, freeze: 2 },
    { month: 12, mean: 3.1, meanMin: -2.8, meanMax: 9.4, low: -10.9, high: 15.4, freeze: 24 },
    { month: 1, mean: 3.4, meanMin: -3.0, meanMax: 10.0, low: -11.5, high: 18.5, freeze: 23 },
    { month: 2, mean: 9.0, meanMin: 2.8, meanMax: 16.9, low: -2.8, high: 27.3, freeze: 6 },
    { month: 3, mean: 11.1, meanMin: 5.0, meanMax: 17.3, low: -0.4, high: 25.6, freeze: 2 }
  ],
  "2021-22": [
    { month: 10, mean: 17.6, meanMin: 12.3, meanMax: 24.0, low: 5.6, high: 36.7, freeze: 0 },
    { month: 11, mean: 11.0, meanMin: 4.6, meanMax: 18.8, low: -3.6, high: 25.0, freeze: 3 },
    { month: 12, mean: 5.3, meanMin: -2.1, meanMax: 13.2, low: -9.8, high: 17.9, freeze: 19 },
    { month: 1, mean: 3.4, meanMin: -1.6, meanMax: 8.8, low: -5.9, high: 13.5, freeze: 24 },
    { month: 2, mean: 4.2, meanMin: -1.0, meanMax: 9.2, low: -6.5, high: 21.2, freeze: 18 },
    { month: 3, mean: 12.6, meanMin: 6.3, meanMax: 19.6, low: 0.5, high: 29.2, freeze: 0 }
  ],
  "2022-23": [
    { month: 10, mean: 16.3, meanMin: 11.0, meanMax: 22.8, low: 3.8, high: 38.6, freeze: 0 },
    { month: 11, mean: 12.6, meanMin: 8.1, meanMax: 18.3, low: -2.3, high: 23.7, freeze: 1 },
    { month: 12, mean: 2.6, meanMin: -3.5, meanMax: 8.7, low: -9.2, high: 12.3, freeze: 27 },
    { month: 1, mean: 3.3, meanMin: -3.2, meanMax: 11.1, low: -10.9, high: 20.9, freeze: 26 },
    { month: 2, mean: 5.1, meanMin: 0.9, meanMax: 10.2, low: -3.0, high: 17.6, freeze: 13 },
    { month: 3, mean: 12.5, meanMin: 6.3, meanMax: 18.9, low: 0.0, high: 28.0, freeze: 0 }
  ],
  "2023-24": [
    { month: 10, mean: 18.7, meanMin: 13.5, meanMax: 24.7, low: 5.0, high: 29.9, freeze: 0 },
    { month: 11, mean: 11.2, meanMin: 5.7, meanMax: 17.7, low: -1.5, high: 30.9, freeze: 3 },
    { month: 12, mean: 3.3, meanMin: -1.3, meanMax: 8.6, low: -11.2, high: 24.8, freeze: 18 },
    { month: 1, mean: 2.7, meanMin: -2.0, meanMax: 8.8, low: -9.4, high: 18.9, freeze: 21 },
    { month: 2, mean: 3.7, meanMin: -1.0, meanMax: 7.9, low: -6.5, high: 24.0, freeze: 18 },
    { month: 3, mean: 11.6, meanMin: 6.0, meanMax: 17.1, low: -1.5, high: 26.7, freeze: 3 }
  ],
  "2024-25": [
    { month: 10, mean: 17.1, meanMin: 12.1, meanMax: 23.0, low: 6.8, high: 30.1, freeze: 0 },
    { month: 11, mean: 12.1, meanMin: 7.8, meanMax: 16.7, low: 0.5, high: 23.8, freeze: 0 },
    { month: 12, mean: 3.9, meanMin: -1.7, meanMax: 9.3, low: -8.4, high: 18.5, freeze: 21 },
    { month: 1, mean: 4.3, meanMin: -0.6, meanMax: 8.6, low: -6.8, high: 14.7, freeze: 17 },
    { month: 2, mean: 5.5, meanMin: 1.1, meanMax: 9.7, low: -9.0, high: 19.8, freeze: 9 },
    { month: 3, mean: 11.8, meanMin: 7.2, meanMax: 16.2, low: 0.7, high: 32.0, freeze: 0 }
  ]
};

const modes = {
  cold: {
    tag: "冷棚模式",
    heading: "播种窗口和催菇窗口决定全年节奏",
    description: "没有保温被、夜间保温能力有限。发菌期要顺着降温趋势推进，催菇前同时核对营养袋吸收、菌霜褪去、原基状态和未来天气。",
    advice: "皖北不能照搬外地固定日期：以5厘米地温、未来7—10天天气和棚内实测共同决策。",
    invest: "较低",
    control: "一般",
    manage: "看天气、勤巡棚",
    risk: "寒潮、高温、大风雪",
    checks: ["地块排水是否顺畅，连续阴雨后是否积水", "顶风口、侧风口和遮阳材料能否快速调整", "寒潮、大风和降雪前是否有加固保温方案"],
    quickSuit: "投入控制优先、能紧跟天气巡棚的主体",
    quickCost: "相对较低",
    quickFocus: "播期与天气窗口",
    quickNote: "重点防范寒潮、高温、积水及春季升温过快。"
  },
  warm: {
    tag: "棉被棚 / 暖棚",
    heading: "用棉被、光照和风口主动控制生育进程",
    description: "可通过升降保温被调温调光，并用顶风口、侧风口协调湿度与换气。管理目标是见光不超温、通风不骤降湿。",
    advice: "营养袋发满后就要进入主动见光管理；原基和幼菇阶段尤其避免低位直吹的扫地风。",
    invest: "较高",
    control: "较强",
    manage: "温光气湿协同",
    risk: "高温高湿、缺光、缺氧",
    checks: ["保温被材质、密封和升降是否可靠", "顶风口与高位侧风口能否分级开合", "棚内是否布设温湿度、地温和CO₂记录点"],
    quickSuit: "有设施基础、能执行精细巡棚与记录的主体",
    quickCost: "相对较高",
    quickFocus: "温光气湿协同",
    quickNote: "重点避免长期闷棚，以及把保温误解为持续升温。"
  }
};

const calendarData = {
  oct: {
    month: "10月", heading: "完成地块与棚体准备",
    desc: "核对前茬、排水、土壤和水源，确定D152与1201的分棚方案，并建立温湿度、地温记录点。",
    tasks: ["清理地块并疏通棚内外排水沟", "检测土壤pH、EC并记录前茬", "检查棚膜、棉被、顶风口和侧风口"],
    watch: ["雨后24小时积水位置", "5厘米地温早晚变化", "未来7—10天降温趋势"],
    risk: "未完成地块风险评估就定菌种，后期很难靠管理补救。",
    image: "https://wanbei-morel-guide.cheery-bread-3483.chatgpt.site/assets/manuals/cultivation-01-site-soil.webp",
    imageAlt: "10月棚体与基地准备图解",
    caption: "10月 · 基地与棚体准备",
    d152: "优先安排新茬或轮作地，提前核对排水能力，为后续控水留余地。",
    m1201: "有重茬历史时仍要先评估病原基数，不能把品种适应性当作唯一保障。"
  },
  nov: {
    month: "11月", heading: "看地温播种，按萌发状态放袋",
    desc: "5厘米地温稳定降至约16℃或以下后，结合未来天气安排播种；每棚记录菌种型号、批次、播量和日期。",
    tasks: ["旋耕、播种、覆土并完成分棚标识", "播后观察萌发与污染点", "通常1—2周放置营养袋并检查贴土"],
    watch: ["地温是否回升", "床面含水是否均匀", "D152与1201各棚萌发差异"],
    risk: "只按日期播种，或放袋后再大水补墒，都会增加污染与失控风险。",
    image: "https://wanbei-morel-guide.cheery-bread-3483.chatgpt.site/assets/manuals/cultivation-03-sowing.webp",
    imageAlt: "11月播种与覆土操作图解",
    caption: "11月 · 播种、覆土与放袋",
    d152: "播种后重点保持均匀墒情，避免因追求早熟而提前补大水。",
    m1201: "按棚型记录地温与萌发速度，分别建立冷棚、棉被棚批次档案。"
  },
  winter: {
    month: "12月—1月", heading: "促进吃料，等待充分生理成熟",
    desc: "皖北低温最集中。棉被棚可用光照适度提温，冷棚以环境稳定为先；正常温度下一周不吃料应及时排查。",
    tasks: ["连续记录营养袋重量和吃料进度", "寒潮前加固棚体并准备保温", "观察菌霜、原基和污染区域变化"],
    watch: ["发菌温度是否处于8—16℃", "夜间极端低温", "棚膜冷凝水与低洼积水"],
    risk: "近五季极端最低温低至−11.5°C；但长期闷棚同样会带来高湿和缺氧。",
    image: "https://wanbei-morel-guide.cheery-bread-3483.chatgpt.site/assets/manuals/cultivation-04-nutrition-bag.webp",
    imageAlt: "12月至1月营养袋吸收与床面管理图解",
    caption: "12月—1月 · 吃料与生理成熟",
    d152: "保持环境稳定，关注营养袋吸收和床面水分，严防低洼积水。",
    m1201: "观察不同棚型下的吃料与成熟速度，重茬棚持续巡查污染点。"
  },
  feb: {
    month: "2月", heading: "按成熟度与天气共同决定催菇",
    desc: "营养袋变轻、菌霜褪去、原基稳定并有报信菇后，再等待相对稳定天气，抓冷尾暖头操作。",
    tasks: ["对照记录确认营养袋吸收完成", "查看未来一周天气并备齐用水设备", "按土质分次试水并检查20厘米土层"],
    watch: ["原基是否稳定拔尖", "倒春寒与连续阴天", "浇水后的下渗与表面明水"],
    risk: "D152不耐大水；过早、过量或排水不畅，都会放大病害和不整齐出菇风险。",
    image: "https://wanbei-morel-guide.cheery-bread-3483.chatgpt.site/assets/manuals/cultivation-05-induction-water.webp",
    imageAlt: "2月催菇水与床面水分管理图解",
    caption: "2月 · 成熟度核对与催菇试水",
    d152: "催菇水从小区试水开始，黏土少量多次，尤其避免一次性大水。",
    m1201: "同样以成熟度和天气为前提，不因适应面较宽而提前催菇。"
  },
  mar: {
    month: "3月", heading: "分阶段降湿增氧，及时采收",
    desc: "从原基、拔尖到幼菇和成菇，湿度逐步下降、通风逐步增加；棉被棚坚持见光不超温。",
    tasks: ["晴天提前通风并记录峰值棚温", "随菇体长大逐步增加高位换气", "分批采收并记录D152与1201商品性"],
    watch: ["中午棚温骤升", "长腿帽小等缺氧信号", "高湿区域白霉与幼菇软弱"],
    risk: "历史3月日最高气温可达32.0°C，外界不热时棚内也可能已经过热。",
    image: "./assets/ppt/harvest-detail.webp",
    imageAlt: "3月羊肚菌成熟度与采收状态",
    caption: "3月 · 出菇管理与分批采收",
    d152: "出菇靠前时及时分批采收，晴天优先防棚温快速升高。",
    m1201: "按菇体成熟度安排采收，持续比较不同棚型下温、光、气、湿反应。"
  }
};

const palette = {
  "2020-21": "#f1d29a",
  "2021-22": "#dd8d64",
  "2022-23": "#8fc7a5",
  "2023-24": "#79a7d3",
  "2024-25": "#d8a4c8"
};

function setMode(modeName) {
  const data = modes[modeName];
  document.querySelectorAll("[data-mode]").forEach((button) => {
    const active = button.dataset.mode === modeName;
    button.classList.toggle("active", active);
    if (button.getAttribute("role") === "tab") button.setAttribute("aria-selected", String(active));
  });
  const updates = {
    "mode-tag": data.tag, "mode-heading": data.heading, "mode-description": data.description,
    "mode-advice": data.advice, "metric-invest": data.invest, "metric-control": data.control,
    "metric-manage": data.manage, "metric-risk": data.risk, "quick-suit": data.quickSuit,
    "quick-cost": data.quickCost, "quick-focus": data.quickFocus, "quick-note": data.quickNote
  };
  Object.entries(updates).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  });
  const checklist = document.getElementById("mode-checklist");
  checklist.innerHTML = data.checks.map((item) => `<li>${item}</li>`).join("");
}

function renderSeasonTable(season) {
  const body = document.getElementById("season-table-body");
  body.innerHTML = climateData[season].map((row) => `
    <tr>
      <th scope="row">${row.month}月</th>
      <td>${row.mean.toFixed(1)}°C</td>
      <td>${row.meanMin.toFixed(1)}°C</td>
      <td>${row.low.toFixed(1)}°C</td>
      <td class="${row.freeze >= 15 ? "freeze-high" : ""}">${row.freeze}天</td>
    </tr>`).join("");
}

function renderChart() {
  const container = document.getElementById("temperature-chart");
  const legend = document.getElementById("chart-legend");
  const seasons = Object.keys(climateData);
  const months = ["10月", "11月", "12月", "1月", "2月", "3月"];
  const width = 960, height = 360;
  const pad = { left: 58, right: 28, top: 25, bottom: 48 };
  const minY = 0, maxY = 20;
  const x = (index) => pad.left + index * ((width - pad.left - pad.right) / (months.length - 1));
  const y = (value) => pad.top + (maxY - value) * ((height - pad.top - pad.bottom) / (maxY - minY));
  const lines = [0, 5, 10, 15, 20];

  let svg = `<svg class="temperature-svg" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">`;
  lines.forEach((value) => {
    svg += `<line class="chart-grid" x1="${pad.left}" y1="${y(value)}" x2="${width - pad.right}" y2="${y(value)}" />`;
    svg += `<text class="chart-axis-label" x="${pad.left - 13}" y="${y(value) + 4}" text-anchor="end">${value}°</text>`;
  });
  months.forEach((month, index) => {
    svg += `<text class="chart-month-label" x="${x(index)}" y="${height - 16}" text-anchor="middle">${month}</text>`;
  });
  seasons.forEach((season) => {
    const points = climateData[season].map((row, index) => `${x(index)},${y(row.mean)}`).join(" ");
    svg += `<g class="chart-group" data-chart-season="${season}"><polyline class="chart-line" points="${points}" stroke="${palette[season]}" />`;
    climateData[season].forEach((row, index) => {
      svg += `<circle class="chart-point" cx="${x(index)}" cy="${y(row.mean)}" r="6" fill="${palette[season]}" data-season="${season}" data-month="${months[index]}" data-value="${row.mean.toFixed(1)}" tabindex="0" />`;
    });
    svg += `</g>`;
  });
  svg += `</svg>`;
  container.innerHTML = svg;

  legend.innerHTML = seasons.map((season) => `<button class="legend-button" type="button" style="--legend-color:${palette[season]}" data-toggle-season="${season}" aria-pressed="true">${season.replace("-", "/")}</button>`).join("");
  legend.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const season = button.dataset.toggleSeason;
      const group = container.querySelector(`[data-chart-season="${season}"]`);
      const hidden = group.classList.toggle("hidden");
      button.classList.toggle("off", hidden);
      button.setAttribute("aria-pressed", String(!hidden));
    });
  });

  const tooltip = document.createElement("div");
  tooltip.className = "chart-tooltip";
  document.body.appendChild(tooltip);
  container.querySelectorAll(".chart-point").forEach((point) => {
    const show = (event) => {
      const rect = point.getBoundingClientRect();
      tooltip.textContent = `${point.dataset.season.replace("-", "/")} · ${point.dataset.month}：${point.dataset.value}°C`;
      const clientX = event.clientX || rect.left + rect.width / 2;
      const clientY = event.clientY || rect.top;
      tooltip.style.left = `${Math.min(Math.max(clientX, 76), window.innerWidth - 76)}px`;
      tooltip.style.top = `${Math.max(clientY, 62)}px`;
      tooltip.style.opacity = "1";
    };
    point.addEventListener("mouseenter", show);
    point.addEventListener("mousemove", show);
    point.addEventListener("pointerdown", show);
    point.addEventListener("focus", show);
    point.addEventListener("mouseleave", () => { tooltip.style.opacity = "0"; });
    point.addEventListener("blur", () => { tooltip.style.opacity = "0"; });
  });
}

function setCalendar(key) {
  const data = calendarData[key];
  document.querySelectorAll(".calendar-tab").forEach((button) => {
    const active = button.dataset.month === key;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.getElementById("calendar-month").textContent = data.month;
  document.getElementById("calendar-heading").textContent = data.heading;
  document.getElementById("calendar-desc").textContent = data.desc;
  document.getElementById("calendar-tasks").innerHTML = data.tasks.map((item) => `<li>${item}</li>`).join("");
  document.getElementById("calendar-watch").innerHTML = data.watch.map((item) => `<li>${item}</li>`).join("");
  document.getElementById("calendar-risk").textContent = data.risk;
  const image = document.getElementById("calendar-image");
  image.src = data.image;
  image.alt = data.imageAlt;
  document.getElementById("calendar-image-link").href = data.image;
  document.getElementById("calendar-image-caption").textContent = data.caption;
  document.getElementById("calendar-d152").textContent = data.d152;
  document.getElementById("calendar-1201").textContent = data.m1201;
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const toggleLabel = toggle.querySelector(".sr-only");
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggleLabel.textContent = open ? "关闭导航" : "打开导航";
    nav.classList.toggle("open", open);
    document.body.classList.toggle("nav-open", open);
  };
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    setOpen(false);
  }));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) setOpen(false);
  });
}

function setupReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

document.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
document.querySelectorAll(".calendar-tab").forEach((button) => button.addEventListener("click", () => setCalendar(button.dataset.month)));
document.getElementById("season-select").addEventListener("change", (event) => renderSeasonTable(event.target.value));
setMode("cold");
setCalendar("oct");
renderSeasonTable("2024-25");
renderChart();
setupNavigation();
setupReveal();
