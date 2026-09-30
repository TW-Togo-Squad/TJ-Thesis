// 情境犯罪預防（SCP）15 項技術矩陣與犯罪鐵三角理論架構 (SCP Matrix & Crime Triangle)

const SCPData = {
  crimeTriangle: {
    title: "日常活動理論與三層嵌套犯罪鐵三角模型",
    description: "本研究結合 Felson 日常活動理論、Clarke & Eck 犯罪鐵三角，並引入 Sampson 等人提出之『超級監控者（Super-controllers）』，建構出分析陪侍勞動現場的三層嵌套防護網。",
    layers: [
      {
        layerName: "最內層：犯罪構成三要素",
        elements: [
          { name: "潛在犯罪者 (Offender)", role: "具備侵害動機與優勢地位的酒客", note: "常受酒精催化、男子氣概展演與花錢是大爺心態驅動。" },
          { name: "合適的標的物 (Target)", role: "身處經濟脆弱性與情緒勞動中的酒店公關", note: "因產業污名、缺乏組織後盾與職業規訓而呈現情境脆弱性。" },
          { name: "特定場所 (Place)", role: "厚重隔音門、低照明且無監視器的包廂或店外私人密閉空間", note: "物理特徵大幅降低犯罪阻力與被發現風險。" }
        ]
      },
      {
        layerName: "中間層：第一線在場監控者",
        elements: [
          { name: "監督者 (Handler)", role: "酒店幹部、同桌酒客同儕", failureReason: "業績掛鉤、男性情誼維繫、利益共謀導致選擇性視而不見或反向助攻。" },
          { name: "防衛者 (Guardian)", role: "酒店行政、少爺服務生、經紀、同桌姊妹", failureReason: "以客為尊階級壓迫、無權介入、巡查頻率低、求助通報機制失靈。" },
          { name: "場所管理者 (Place Manager)", role: "店家經營團隊與出資老闆", failureReason: "將公關視為消耗品、透過免責切結卸責、以私下紅包壓制司法報案。" }
        ]
      },
      {
        layerName: "最外層：超級監控者 (Super-controllers)",
        description: "調控中間層監控者誘因與行為的更高位階結構力量，打破利益共謀網路。",
        types: [
          { name: "法規型與法院型", detail: "課予營業場所職場防暴實質義務、重大性侵違規立即撤銷營業執照、強化雇主民事連帶賠償責任。" },
          { name: "市場與組織型", detail: "從業人員職業工會（如臺北市娛樂公關經紀職業工會）、透明化勞動評價平台。" },
          { name: "媒體與文化型", detail: "去污名化自媒體發聲（打破蕩婦刻板印象）、社群同儕互助網（Threads、Dcard 等即時風險揭露）。" }
        ]
      }
    ]
  },

  matrixStrategies: [
    {
      category: "增加犯罪阻力 (Increase the Effort)",
      objective: "讓『越界侵犯』在物理環境與操作程序上變得極為困難與耗時",
      items: [
        {
          id: "scp-1",
          name: "標的物強化 (Target Hardening)",
          fieldApplication: "包廂內設置隱蔽且觸手可及的緊急通報按鈕；評估公關框出時配戴具定位與跌倒偵測功能之智慧手環或手錶，便於失聯時即時掌握位置。",
          literatureRef: "Clarke (1997); 臺南地院 113 侵訴 35 號"
        },
        {
          id: "scp-2",
          name: "通道管制 (Access Control)",
          fieldApplication: "場所管理者落實『泥醉不得框出』之絕對否決權；嚴格審查框出地點，禁止將意識不清公關直接送往汽車旅館、飯店或私人住居。",
          literatureRef: "Cornish & Clarke (2003)"
        },
        {
          id: "scp-3",
          name: "控制犯罪工具 (Control Facilitators)",
          fieldApplication: "嚴禁配合違法『藥桌／音樂桌』，主動通報依托咪酯、愷他命與毒咖啡包；針對高頻率連續點叫烈酒之包廂提高警覺，防範下藥與過量灌酒。",
          literatureRef: "新竹地院 111 侵訴 2 號; 高院 114 侵上訴 280 號"
        }
      ]
    },
    {
      category: "增加犯罪被發現風險 (Increase the Risks)",
      objective: "提高潛在侵害行為在當下被中斷、被發現及事後被逮捕訴追的機率",
      items: [
        {
          id: "scp-4",
          name: "擴大監控 (Extend Guardianship)",
          fieldApplication: "制度化巡包標準：服務生每 15-20 分鐘主動推門進房換冰塊、遞毛巾、整理桌面；打破包廂內私密性，以高頻率的在場感中斷犯罪準備行動。",
          literatureRef: "Hollis-Peel et al. (2011)"
        },
        {
          id: "scp-5",
          name: "強化正式監控 (Strengthen Formal Surveillance)",
          fieldApplication: "公共走廊、出入口與通道佈建完整無死角監視系統；店內建立越界客人『黑單（黑名單）』共享機制，禁止暴力前科客進店。",
          literatureRef: "台中地院 112 侵訴 139 號"
        },
        {
          id: "scp-6",
          name: "利用場所管理者 (Utilize Place Managers)",
          fieldApplication: "透過行政法規課予特種行業負責人維護職場安全之法定義務，若店家縱容性侵、湮滅證據或私了壓案，依法重罰乃至勒令停業撤照。",
          literatureRef: "Sampson, Eck & Dunham (2010)"
        }
      ]
    },
    {
      category: "減少犯罪誘因與酬賞 (Reduce the Rewards)",
      objective: "剝奪加害者試圖透過性暴力或越界碰觸所獲得的支配快感與男性特權",
      items: [
        {
          id: "scp-7",
          name: "否定利益 (Deny Benefits)",
          fieldApplication: "幹部在客人出現踰矩初期即堅定表態，當眾表明『這是失格行為』，切斷酒客試圖在同儕面前以支配女性展演男子氣概的成就感。",
          literatureRef: "黃淑玲 (2003); Connell (1995)"
        },
        {
          id: "scp-8",
          name: "隱匿標的 (Conceal Targets)",
          fieldApplication: "嚴禁幹部與經紀私自將公關之真實姓名、私人社群與下班住處洩漏給客人；落實員工出口分流，防止酒客於下班時尾隨跟蹤。",
          literatureRef: "Cornish & Clarke (2003)"
        }
      ]
    },
    {
      category: "減少犯罪刺激 (Reduce Provocations)",
      objective: "消弭現場環境中可能誘發挫折、衝突或失控性衝動的情境線索",
      items: [
        {
          id: "scp-9",
          name: "避免爭執 (Reduce Frustration & Stress)",
          fieldApplication: "框出前由幹部與店家向客人雙重確認行程僅限餐敘陪伴，消除『花錢買框就包含性交易』之消費認知落差，防範預期落差演變為暴力。",
          literatureRef: "高院 111 侵上訴 302 號"
        },
        {
          id: "scp-10",
          name: "減少情緒挑逗與自卡保障 (Avoid Disputes)",
          fieldApplication: "賦予公關受制度保障的『無條件自卡權利』，當客人情緒失控或出現攻擊性時可立即退出，店家不得施以罰款或冰檯懲罰。",
          literatureRef: "田野訪談 A1, A2, A3"
        }
      ]
    },
    {
      category: "移除犯罪藉口 (Remove Excuses)",
      objective: "徹底粉碎『做酒店本來就可以摸』、『沒說不行就是同意』等侵害合理化迷思",
      items: [
        {
          id: "scp-11",
          name: "敬告守則 (Post Instructions / Set Rules)",
          fieldApplication: "包廂內部與菜單明顯處載明消費規範：『本場所嚴禁任何未經合意之性侵與肢體騷擾行為』，劃定合法消費與刑事犯罪之分界線。",
          literatureRef: "Clarke (1997)"
        },
        {
          id: "scp-12",
          name: "訂立明確規範 (Clarify Rules)",
          fieldApplication: "落實司法實務『積極同意模式（Only Yes Means Yes）』：陪伴與情緒勞動不等於性同意，檯費僅包含社交陪伴，身體自主權不容侵犯。",
          literatureRef: "最高法院 110 台上 1781 號; 113 台上 2154 號"
        }
      ]
    },
    {
      category: "引入超級監控者推力 (Mobilize Super-controllers)",
      objective: "透過外部制度力量迫使場所管理者與防衛者切實履行保護責任",
      items: [
        {
          id: "scp-13",
          name: "資訊透明化 (Information Transparency)",
          fieldApplication: "透過從業者自媒體與匿名社群揭露未提供安全保障、壓制公關報案的店家，將場所安全性與業界商譽綁定，促使優質店家改善防護。",
          literatureRef: "田野訪談 B2, A4"
        },
        {
          id: "scp-14",
          name: "外部法律與心理介入 (External Legal & NGO Support)",
          fieldApplication: "導入獨立 NGO（如性產業勞動權益推動協會、婦女基金會）與工會介入，打破私下紅包了事結構，協助受害工作者依法主張權利。",
          literatureRef: "Molnar & Aebi (2023)"
        },
        {
          id: "scp-15",
          name: "工作者培力與反身支持 (Worker Empowerment)",
          fieldApplication: "提供入行職前法律教育、身體界線協商手腕課程及轉業輔導，實質提升第一線工作者拒絕剝削與爭取安全勞動環境的主體能動性。",
          literatureRef: "論文第六章第二節"
        }
      ]
    }
  ],

  fourActionPillars: [
    {
      title: "泥醉把關",
      focus: "嚴禁將意識不清的公關框出至私人空間",
      measures: [
        "控檯行政與帶檯在小姐離店前進行清醒評估，對重醉者強制擋框留店照護。",
        "跨業聯防：計程車司機與飯店櫃檯加強對疑似撿屍同行者的查驗警覺。",
        "建立被下藥異常快速醉倒時的即時回報與定位鎖定機制。"
      ]
    },
    {
      title: "包廂掌控",
      focus: "打破包廂物理孤立，建立無障礙求助與巡查標準",
      measures: [
        "少爺每 15-20 分鐘例行巡桌清潔，破除加害者的封閉犯罪空間想像。",
        "包廂內部與廁所加裝緊急通報鈴，洗手間門鎖嚴禁自內部反鎖。",
        "嚴格禁止公關單獨一人面對多名男客（One By），適時配置夥伴同桌照應。"
      ]
    },
    {
      title: "框出追蹤",
      focus: "建立制度化定時定位回報，動態延伸監護防線",
      measures: [
        "制度化定點回報：每小時或轉移地點強制通報，並由經紀主動確認回覆。",
        "安全保障不懲罰：嚴禁因客人要求變更地點而對誠實回報的公關施加罰單。",
        "緊急失聯應變SOP：超過約定時限未回報立即啟動通訊定位與協尋通報。"
      ]
    },
    {
      title: "去除藉口",
      focus: "徹底粉碎父權消費文化中的性暴力合理化言說",
      measures: [
        "進店與開桌前明確告知消費界線：檯費是陪伴與桌服，不包含性自主讓渡。",
        "落實 Only Yes Means Yes，笑臉推託不是同意，安撫敬酒不是默許。",
        "根除『紅包封口文化』，店家遇性侵必須保存現場監視畫面並主動協助送醫採證。"
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCPData;
}
