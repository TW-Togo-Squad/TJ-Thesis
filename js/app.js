// ==========================================================================
// APP.JS - 主應用程式控制邏輯 (全面升級版)
// 包含三大理論支柱、14年田野紀實、607筆判決大數據、六大章節深入導讀
// 嚴格遵循：零 Emoji 政策、無純黑純白、正體中文台灣標準
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderHeroMetadata();
  renderTheorySection();
  renderEthnographySection();
  renderStatisticsSection();
  renderCrimeTriangle();
  renderChaptersSection();
  renderGlossarySection();
  renderSCPSection();
  renderResourcesSection();
  renderCitationModule();
  initGlobalSearch();
});

// 1. 導航與手機版選單
function initNavbar() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (toggleBtn && navMenu) {
    toggleBtn.innerHTML = Icons.layers;
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 滾動時高亮當前區塊
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem?.classList.add('active');
      } else {
        navItem?.classList.remove('active');
      }
    });
  });
}

// 2. 首頁 Hero 論文基本資料填充
function renderHeroMetadata() {
  const chipsContainer = document.getElementById('heroMetaChips');
  if (chipsContainer) {
    const heroTags = [
      "國立臺北大學犯罪學研究所",
      "碩士論文",
      "2026 年 7 月（July 2026）",
      "臺灣",
      "情慾產業",
      "犯罪學",
      "情境犯罪預防（SCP）"
    ];
    chipsContainer.innerHTML = heroTags.map(tag => `
      <span class="badge badge-stone">${tag}</span>
    `).join('');
  }

  const quoteBox = document.getElementById('heroQuoteBox');
  if (quoteBox) {
    quoteBox.innerHTML = `
      <div class="quote-highlight">${ThesisMeta.coreQuote}</div>
      <span class="quote-signature">— 研究生：${ThesisMeta.author} ｜ 指導教授：${ThesisMeta.advisor}</span>
    `;
  }
}

// 3. 論文三大理論支柱渲染
function renderTheorySection() {
  const container = document.getElementById('theoryPillarsContainer');
  if (!container) return;

  container.innerHTML = TheoryData.pillars.map(pillar => `
    <div class="scp-category-card" style="margin-bottom: var(--spacing-4);">
      <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px; border-bottom:1px solid var(--color-stone-light); padding-bottom:8px;">
        <h3 style="margin-bottom:0;">${pillar.name}</h3>
        <span class="badge badge-moss">${pillar.badge}</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${pillar.theories.map(th => `
          <div style="background:var(--color-paper-card); border:1px solid var(--color-stone-light); border-radius:var(--radius-button); padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:6px; flex-wrap:wrap; gap:6px;">
              <h4 style="font-size:1.05rem; font-weight:500; color:var(--color-ink); margin-bottom:0;">${th.name}</h4>
              <span style="font-size:0.85rem; color:var(--color-ink-muted); font-family:var(--font-mono);">${th.scholars}</span>
            </div>
            <p style="font-size:0.95rem; line-height:1.75; color:var(--color-ink); margin-bottom:10px;">${th.coreConcept}</p>
            <div style="background:var(--color-paper-tint); padding:10px 12px; border-radius:6px; font-size:0.875rem; color:var(--color-moss); border-left:3px solid var(--color-moss);">
              <strong>田野實務對照：</strong>${th.fieldLink}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// 4. 14 年田野紀實與產業還原渲染
function renderEthnographySection() {
  const timelineContainer = document.getElementById('ethnographyTimeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = EthnographyData.stages.map(st => `
      <div class="card" style="margin-bottom: var(--spacing-3);">
        <div style="display:flex; align-items:baseline; gap:10px; margin-bottom:8px;">
          <span style="font-family:var(--font-serif); font-size:1.4rem; color:var(--color-stone); font-weight:500;">${st.step}</span>
          <h3 style="margin-bottom:0; font-size:1.15rem;">${st.title}</h3>
        </div>
        <div style="font-size:0.875rem; color:var(--color-moss); margin-bottom:10px; font-weight:500;">${st.subtitle}</div>
        <p style="font-size:0.95rem; line-height:1.75; color:var(--color-ink); margin-bottom:0;">${st.content}</p>
      </div>
    `).join('');
  }

  const tableWrapper = document.getElementById('clubComparisonTable');
  if (tableWrapper) {
    tableWrapper.innerHTML = `
      <table class="scp-table">
        <thead>
          <tr>
            <th style="width: 18%;">店家型態</th>
            <th style="width: 20%;">主力客群</th>
            <th style="width: 18%;">規定服儀尺度</th>
            <th style="width: 24%;">實務服務內容</th>
            <th style="width: 20%;">田野觀察特徵與風險</th>
          </tr>
        </thead>
        <tbody>
          ${EthnographyData.clubComparison.map(c => `
            <tr>
              <td><strong>${c.type}</strong></td>
              <td style="font-size:0.875rem;">${c.consumer}</td>
              <td style="font-size:0.875rem;">${c.dress}</td>
              <td style="font-size:0.875rem;">${c.scale}</td>
              <td style="font-size:0.875rem; color:var(--color-ink-muted);">${c.feature}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
}

// 5. 判決統計數據圖表渲染
function renderStatisticsSection() {
  const statBar = document.getElementById('statSummaryMetrics');
  if (statBar) {
    const s = StatisticsData.sampleSummary;
    statBar.innerHTML = `
      <div class="stat-metric-card">
        <div class="stat-metric-number">${s.totalJudgments}</div>
        <div class="stat-metric-label">歷年分析刑事判決總數</div>
      </div>
      <div class="stat-metric-card">
        <div class="stat-metric-number">${s.districtCourt}</div>
        <div class="stat-metric-label">地方法院判決</div>
      </div>
      <div class="stat-metric-card">
        <div class="stat-metric-number">${s.highCourt}</div>
        <div class="stat-metric-label">高等法院深度分析判決</div>
      </div>
      <div class="stat-metric-card">
        <div class="stat-metric-number">14 年</div>
        <div class="stat-metric-label">第一線深度參與觀察 (2012-2026)</div>
      </div>
    `;
  }

  // 犯罪發生地點圖表
  const locationChart = document.getElementById('locationChartBox');
  if (locationChart) {
    const loc = StatisticsData.crimeLocations;
    let itemsHtml = loc.categories.map(c => `
      <div class="stat-bar-item">
        <div class="stat-bar-header">
          <span class="item-label">${c.label}</span>
          <span class="item-val">${c.count} 筆 (${c.percentage}%)</span>
        </div>
        <div class="stat-bar-track">
          <div class="stat-bar-fill ${c.type === 'private' ? 'fill-rust' : ''}" style="width: ${c.percentage}%"></div>
        </div>
      </div>
    `).join('');

    locationChart.innerHTML = `
      <div class="chart-title-row">
        <h3>${loc.title}</h3>
        <span class="badge badge-rust">${Icons.alertCircle} 私人空間佔比達 ${loc.privateLocationPercentage}%</span>
      </div>
      ${itemsHtml}
      <div class="chart-insight-box">
        <strong>實證發現：</strong>${loc.insight}
      </div>
    `;
  }

  // 被害人酒醉狀態圖表
  const victimChart = document.getElementById('victimChartBox');
  if (victimChart) {
    const v = StatisticsData.victimStatus;
    let itemsHtml = v.categories.map(c => `
      <div class="stat-bar-item">
        <div class="stat-bar-header">
          <span class="item-label">${c.label}</span>
          <span class="item-val">${c.count} 筆 (${c.percentage}%)</span>
        </div>
        <div class="stat-bar-track">
          <div class="stat-bar-fill" style="width: ${c.percentage}%"></div>
        </div>
      </div>
    `).join('');

    victimChart.innerHTML = `
      <div class="chart-title-row">
        <h3>${v.title}</h3>
        <span class="badge badge-moss">${Icons.chart} 飲酒相關佔比 ${v.categories[0].percentage}%</span>
      </div>
      ${itemsHtml}
      <div class="chart-insight-box">
        <strong>實證發現：</strong>${v.insight}
      </div>
    `;
  }

  // 重大個案事後檢討與情境剖析卡片
  const casesContainer = document.getElementById('majorCasesContainer');
  if (casesContainer) {
    casesContainer.innerHTML = StatisticsData.majorCases.map(cs => `
      <div class="card" style="margin-bottom: var(--spacing-3);">
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: 8px;">
          <h3>${cs.title}</h3>
          <span class="badge badge-stone">${Icons.scale} 司法卷宗剖析</span>
        </div>
        <p style="color:var(--color-ink-muted); font-size:0.9rem; margin-bottom:12px;"><strong>案號：</strong>${cs.legalRef}</p>
        <p style="margin-bottom:16px;">${cs.summary}</p>
        <div style="border-top:1px solid var(--color-stone-light); padding-top:12px;">
          <h4 style="font-size:0.95rem; margin-bottom:8px; color:var(--color-rust);">防護體系失能節點剖析：</h4>
          <ul class="bullet-list">
            ${cs.vulnerabilities.map(vl => `<li><strong>${vl.role}：</strong>${vl.desc}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }
}

// 6. 犯罪鐵三角理論互動模型
function renderCrimeTriangle() {
  const detailBox = document.getElementById('triangleDetailCard');
  const t = SCPData.crimeTriangle;

  window.selectTriangleNode = function(layerIndex, nodeIndex) {
    document.querySelectorAll('.triangle-interactive-node').forEach(el => el.classList.remove('active'));
    const activeEl = document.getElementById(`tri-node-${layerIndex}-${nodeIndex}`);
    if (activeEl) activeEl.classList.add('active');

    const layer = t.layers[layerIndex];
    if (layerIndex === 2) { // 超級監控者
      detailBox.innerHTML = `
        <span class="badge badge-moss detail-layer-pill">${layer.layerName}</span>
        <h3 style="margin-bottom:12px;">超越場域的結構性力量：超級監控者</h3>
        <p style="color:var(--color-ink-muted); margin-bottom:16px;">${layer.description}</p>
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${layer.types.map(tp => `
            <div style="background:var(--color-paper-tint); padding:12px; border-radius:var(--radius-button); border-left:3px solid var(--color-moss);">
              <strong style="color:var(--color-ink); display:block; margin-bottom:4px;">${tp.name}</strong>
              <div style="font-size:0.9rem; color:var(--color-ink-muted);">${tp.detail}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      const item = layer.elements[nodeIndex];
      const isInner = layerIndex === 0;
      detailBox.innerHTML = `
        <span class="badge ${isInner ? 'badge-stone' : 'badge-rust'} detail-layer-pill">${layer.layerName}</span>
        <h3 style="margin-bottom:12px;">${item.name}</h3>
        <p style="margin-bottom:12px;"><strong>在場角色：</strong>${item.role}</p>
        ${isInner ? `
          <div style="background:var(--color-paper-tint); padding:12px; border-radius:var(--radius-button); font-size:0.9rem;">
            <strong>情境脆弱性特徵：</strong>${item.note}
          </div>
        ` : `
          <div style="background:var(--color-rust-light); border:1px solid var(--color-rust-border); padding:12px; border-radius:var(--radius-button); font-size:0.9rem; color:var(--color-ink);">
            <strong style="color:var(--color-rust);">系統性失能原因：</strong>${item.failureReason}
          </div>
        `}
      `;
    }
  };

  // 預設展示中間層管理者失能
  selectTriangleNode(1, 2);
}

// 7. 論文六大章節深入導讀閱讀器
function renderChaptersSection() {
  const tabsContainer = document.getElementById('chapterTabsContainer');
  const displayCard = document.getElementById('chapterDisplayCard');
  if (!tabsContainer || !displayCard) return;

  tabsContainer.innerHTML = ChaptersData.map((ch, idx) => `
    <button class="chapter-tab-btn ${idx === 0 ? 'active' : ''}" onclick="switchChapter(${idx})">
      第 ${ch.chapterNumber} 章
    </button>
  `).join('');

  window.switchChapter = function(index) {
    document.querySelectorAll('.chapter-tab-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
    });

    const ch = ChaptersData[index];
    displayCard.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;">
        <div>
          <span class="section-tag">CHAPTER 0${ch.chapterNumber} ｜ 頁碼：${ch.pages}</span>
          <h2>${ch.title}</h2>
          <div style="font-size:0.95rem; color:var(--color-ink-subtle); margin-bottom:8px;">${ch.englishTitle}</div>
        </div>
      </div>
      <p style="font-size:1.05rem; line-height:1.8; color:var(--color-ink); margin-bottom:24px;">${ch.summary}</p>
      
      <div style="margin-bottom:24px;">
        <h4 style="font-size:1.05rem; margin-bottom:12px; border-bottom:1px solid var(--color-stone-light); padding-bottom:8px;">
          分節論述精華
        </h4>
        ${ch.sections.map(sec => `
          <div class="section-item-card">
            <h5 style="font-size:1rem; font-weight:500; color:var(--color-moss); margin-bottom:8px;">
              ${sec.sectionNumber} ${sec.title}
            </h5>
            <ul class="bullet-list">
              ${sec.keyPoints.map(kp => `<li>${kp}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div>
        <h4 style="font-size:1.05rem; margin-bottom:12px; border-bottom:1px solid var(--color-stone-light); padding-bottom:8px;">
          本章經典引言與判決紀錄
        </h4>
        ${ch.quotes.map(q => `
          <div class="quote-box">
            <p>「${q.text}」</p>
            <span class="quote-author">— ${q.speaker}（${q.ref}）</span>
          </div>
        `).join('')}
      </div>
    `;
  };

  switchChapter(0);
}

// 8. 陪侍產業實務術語庫
function renderGlossarySection() {
  const grid = document.getElementById('glossaryGrid');
  const searchInput = document.getElementById('glossarySearchInput');
  const pillsContainer = document.getElementById('glossaryCategoryPills');
  if (!grid) return;

  const categories = ["全部類別", ...new Set(GlossaryData.map(g => g.category))];
  let activeCat = "全部類別";
  let searchKeyword = "";

  if (pillsContainer) {
    pillsContainer.innerHTML = categories.map(cat => `
      <button class="cat-pill ${cat === activeCat ? 'active' : ''}" onclick="filterGlossaryCategory('${cat}')">
        ${cat}
      </button>
    `).join('');
  }

  function filterAndRender() {
    const filtered = GlossaryData.filter(item => {
      const matchCat = (activeCat === "全部類別") || (item.category === activeCat);
      const matchSearch = !searchKeyword || 
        item.term.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.english.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.fieldNote.toLowerCase().includes(searchKeyword.toLowerCase());
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding:var(--spacing-6); color:var(--color-ink-muted);">
          未找到相符的術語或概念，請嘗試其他關鍵字。
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => `
      <div class="term-card">
        <div class="term-header">
          <span class="term-name">${item.term}</span>
          <span class="badge badge-stone" style="font-size:0.75rem;">${item.category}</span>
        </div>
        <div class="term-english">${item.english}</div>
        <p class="term-definition">${item.definition}</p>
        <div class="term-field-note">
          <strong>田野脈絡：</strong>${item.fieldNote}
        </div>
      </div>
    `).join('');
  }

  window.filterGlossaryCategory = function(cat) {
    activeCat = cat;
    document.querySelectorAll('.cat-pill').forEach(btn => {
      btn.classList.toggle('active', btn.innerText.trim() === cat);
    });
    filterAndRender();
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value.trim();
      filterAndRender();
    });
  }

  filterAndRender();
}

// 9. SCP 預防策略矩陣與四大方針
function renderSCPSection() {
  const container = document.getElementById('scpMatrixContainer');
  if (container) {
    container.innerHTML = SCPData.matrixStrategies.map(cat => `
      <div class="scp-category-card">
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px;">
          <h3>${cat.category}</h3>
          <span class="badge badge-moss">${Icons.shield} 核心方針</span>
        </div>
        <p style="color:var(--color-ink-muted); font-size:0.95rem; margin-bottom:12px;"><strong>防治目標：</strong>${cat.objective}</p>
        <div class="scp-table-wrapper">
          <table class="scp-table">
            <thead>
              <tr>
                <th style="width: 25%;">預防技術</th>
                <th style="width: 55%;">勞動現場具體操作方案</th>
                <th style="width: 20%;">理論與判決佐證</th>
              </tr>
            </thead>
            <tbody>
              ${cat.items.map(it => `
                <tr>
                  <td><strong>${it.name}</strong></td>
                  <td>${it.fieldApplication}</td>
                  <td style="color:var(--color-ink-muted); font-size:0.85rem;">${it.literatureRef}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `).join('');
  }

  const pillarsContainer = document.getElementById('actionPillarsContainer');
  if (pillarsContainer) {
    pillarsContainer.innerHTML = SCPData.fourActionPillars.map(p => `
      <div class="pillar-card">
        <div class="pillar-header">
          <h3 style="margin-bottom:0;">${p.title}</h3>
          <span class="badge badge-moss">${Icons.target} 實務操作</span>
        </div>
        <p style="color:var(--color-ink-muted); margin-bottom:12px;">${p.focus}</p>
        <ul class="bullet-list">
          ${p.measures.map(m => `<li>${m}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }
}

// 10. 資源與緊急指引
function renderResourcesSection() {
  const emergencySteps = document.getElementById('emergencyStepsList');
  if (emergencySteps) {
    emergencySteps.innerHTML = ResourcesData.crisisPrinciples.steps.map((st, idx) => `
      <div class="emergency-step-item">
        <h4>0${idx + 1}. ${st.rule}</h4>
        <p style="font-size:0.9rem; margin-bottom:0; color:var(--color-ink-muted);">${st.detail}</p>
      </div>
    `).join('');
  }

  const orgsContainer = document.getElementById('resourceOrgsContainer');
  if (orgsContainer) {
    orgsContainer.innerHTML = ResourcesData.supportOrganizations.map(group => `
      <div style="margin-bottom:var(--spacing-4);">
        <h3 style="margin-bottom:var(--spacing-2); font-size:1.15rem; color:var(--color-ink);">${group.category}</h3>
        <div class="grid-2">
          ${group.items.map(item => `
            <div class="resource-org-card">
              <h4 style="margin-bottom:6px;">${item.name}</h4>
              <p style="font-size:0.9rem; color:var(--color-ink-muted); margin-bottom:10px;">${item.desc}</p>
              <div style="font-size:0.85rem; display:flex; flex-direction:column; gap:4px;">
                ${item.phone ? `<div><strong>電話：</strong><a href="tel:${item.phone.replace(/[^0-9]/g, '')}">${item.phone}</a></div>` : ''}
                ${item.hotline ? `<div><strong>專線：</strong>${item.hotline}</div>` : ''}
                ${item.email ? `<div><strong>信箱：</strong><a href="mailto:${item.email}">${item.email}</a></div>` : ''}
                ${item.facebook ? `<div><strong>Facebook：</strong><a href="${item.facebook}" target="_blank" rel="noopener">${item.facebook}</a></div>` : ''}
                ${item.branches ? `
                  <div style="margin-top:6px; padding-top:6px; border-top:1px solid var(--color-stone-light);">
                    ${item.branches.map(b => `<div>${b.region}：<a href="tel:${b.phone.replace(/[^0-9]/g, '')}">${b.phone}</a></div>`).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }
}

// 11. 論文標準引用產生器（完整支援 APA, Chicago, MLA, BibTeX）
function renderCitationModule() {
  const container = document.getElementById('citationContainer');
  if (!container) return;

  let activeFormat = 'apa';

  function getCitationText(format) {
    if (format === 'apa') return ThesisMeta.citationAPA;
    if (format === 'chicago') return ThesisMeta.citationChicago;
    if (format === 'mla') return ThesisMeta.citationMLA;
    if (format === 'bibtex') return ThesisMeta.citationBibTeX;
    return ThesisMeta.citationAPA;
  }

  function updateView() {
    container.innerHTML = `
      <div class="citation-box">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="btn btn-outline btn-sm ${activeFormat === 'apa' ? 'active-format' : ''}" onclick="switchCitation('apa')">APA 格式</button>
            <button class="btn btn-outline btn-sm ${activeFormat === 'chicago' ? 'active-format' : ''}" onclick="switchCitation('chicago')">Chicago 格式</button>
            <button class="btn btn-outline btn-sm ${activeFormat === 'mla' ? 'active-format' : ''}" onclick="switchCitation('mla')">MLA 格式</button>
            <button class="btn btn-outline btn-sm ${activeFormat === 'bibtex' ? 'active-format' : ''}" onclick="switchCitation('bibtex')">BibTeX</button>
          </div>
          <button class="btn btn-primary" onclick="copyCitation()">
            ${Icons.copy} 複製引用文字
          </button>
        </div>
        <div class="citation-text" id="citationOutputText">${getCitationText(activeFormat)}</div>
        <div id="copyNotification" style="display:none; font-size:var(--text-small); color:var(--color-moss); margin-top:8px;">
          ${Icons.check} 已成功複製論文引用格式至剪貼簿！
        </div>
      </div>
    `;
  }

  window.switchCitation = function(fmt) {
    activeFormat = fmt;
    updateView();
  };

  window.copyCitation = function() {
    const text = getCitationText(activeFormat);
    navigator.clipboard.writeText(text).then(() => {
      const notif = document.getElementById('copyNotification');
      if (notif) {
        notif.style.display = 'block';
        setTimeout(() => { notif.style.display = 'none'; }, 3500);
      }
    });
  };

  updateView();
}

// 12. 全站即時檢索 (Global Modal Search)
function initGlobalSearch() {
  const modal = document.getElementById('searchModal');
  const openBtn = document.getElementById('openSearchBtn');
  const closeBtn = document.getElementById('closeSearchBtn');
  const input = document.getElementById('modalSearchInput');
  const resultsBox = document.getElementById('modalSearchResults');

  if (!modal || !openBtn || !input) return;

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    input.value = '';
    input.focus();
    renderSearchResults('');
  });

  closeBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  input.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim());
  });

  function renderSearchResults(q) {
    if (!q) {
      resultsBox.innerHTML = `
        <div style="text-align:center; padding:var(--spacing-4); color:var(--color-ink-muted);">
          輸入論文關鍵字（如：自卡、情境犯罪預防、泥醉、洗S、框出、判決、超級監控者、麥金儂、情緒勞動）
        </div>
      `;
      return;
    }

    const matches = [];

    // 搜尋理論
    TheoryData.pillars.forEach(p => {
      p.theories.forEach(th => {
        if (th.name.includes(q) || th.coreConcept.includes(q) || th.fieldLink.includes(q) || th.scholars.includes(q)) {
          matches.push({ type: "理論體系", title: th.name, desc: th.coreConcept, link: "#theory" });
        }
      });
    });

    // 搜尋田野歷程
    EthnographyData.stages.forEach(st => {
      if (st.title.includes(q) || st.subtitle.includes(q) || st.content.includes(q)) {
        matches.push({ type: "田野紀實", title: st.title, desc: st.content, link: "#ethnography" });
      }
    });

    // 搜尋術語
    GlossaryData.forEach(item => {
      if (item.term.includes(q) || item.definition.includes(q) || item.fieldNote.includes(q)) {
        matches.push({ type: "產業名詞", title: item.term, desc: item.definition, link: "#glossary" });
      }
    });

    // 搜尋章節
    ChaptersData.forEach(ch => {
      if (ch.title.includes(q) || ch.summary.includes(q)) {
        matches.push({ type: `第 ${ch.chapterNumber} 章`, title: ch.title, desc: ch.summary, link: "#chapters" });
      }
      ch.sections.forEach(sec => {
        if (sec.title.includes(q) || sec.keyPoints.some(kp => kp.includes(q))) {
          matches.push({ type: "章節分節", title: `${sec.sectionNumber} ${sec.title}`, desc: sec.keyPoints.join(' '), link: "#chapters" });
        }
      });
    });

    // 搜尋預防策略
    SCPData.matrixStrategies.forEach(cat => {
      cat.items.forEach(it => {
        if (it.name.includes(q) || it.fieldApplication.includes(q)) {
          matches.push({ type: "SCP 策略", title: it.name, desc: it.fieldApplication, link: "#prevention" });
        }
      });
    });

    if (matches.length === 0) {
      resultsBox.innerHTML = `
        <div style="text-align:center; padding:var(--spacing-4); color:var(--color-ink-muted);">
          查無與「${q}」相符的內容，請嘗試縮短關鍵詞。
        </div>
      `;
      return;
    }

    resultsBox.innerHTML = matches.slice(0, 10).map(m => `
      <div style="padding:12px; border-bottom:1px solid var(--color-stone-light); cursor:pointer;" onclick="navigateToResult('${m.link}')">
        <span class="badge badge-stone" style="font-size:0.75rem; margin-bottom:4px;">${m.type}</span>
        <h4 style="font-size:1rem; margin-bottom:4px; color:var(--color-moss);">${m.title}</h4>
        <p style="font-size:0.875rem; color:var(--color-ink-muted); margin-bottom:0; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${m.desc}</p>
      </div>
    `).join('');
  }

  window.navigateToResult = function(link) {
    modal.style.display = 'none';
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
}

// 謝誌彈窗檢視
window.openAcknowledgementsModal = function() {
  const modal = document.getElementById('ackModal');
  if (modal) {
    modal.style.display = 'flex';
  }
};

window.closeAcknowledgementsModal = function() {
  const modal = document.getElementById('ackModal');
  if (modal) {
    modal.style.display = 'none';
  }
};
