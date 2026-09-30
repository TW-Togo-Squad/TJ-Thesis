// 607 份妨害性自主判決實證統計與重大指標案例數據 (Judgments Data & Case Studies)

const StatisticsData = {
  sampleSummary: {
    totalJudgments: 607,
    period: "2007 年 1 月 1 日 至 2026 年 6 月 30 日",
    scope: "台北地區台式酒店陪侍工作者勞動場域（包含店內與框出店外）妨害性自主刑事判決",
    districtCourt: 428,
    highCourt: 179,
    intervieweesCount: 10,
    fieldObservationYears: "2012 - 2026（長達 14 年深度參與觀察）"
  },
  
  courtVerdictRates: {
    title: "地方法院與高等法院判決結果分佈",
    district: [
      { label: "有罪", count: 366, percentage: 85.5 },
      { label: "無罪", count: 62, percentage: 14.5 }
    ],
    high: [
      { label: "有罪", count: 131, percentage: 73.2 },
      { label: "無罪", count: 44, percentage: 24.6 },
      { label: "部分有罪／部分無罪", count: 4, percentage: 2.2 }
    ],
    insight: "高院無罪率（24.6%）顯著高於地院（14.5%）。在二審審理中，被告律師常利用被害人身處八大行業、當下未激烈呼救、事後收受紅包或曖昧訊息，成功主張『合意』或『認知落差』推翻原判。"
  },

  crimeLocations: {
    title: "犯罪發生地點分佈（高等法院 179 筆深度分析）",
    totalAnalyzed: 179,
    privateLocationTotal: 136,
    privateLocationPercentage: 75.98,
    outsideClubTotal: 137,
    outsideClubPercentage: 76.54,
    categories: [
      { label: "汽車旅館、旅館及飯店", count: 81, percentage: 45.3, type: "private" },
      { label: "店內包廂及附設廁所", count: 46, percentage: 25.7, type: "club" },
      { label: "被告住居所", count: 39, percentage: 21.8, type: "private" },
      { label: "車輛上", count: 8, percentage: 4.5, type: "private" },
      { label: "其他人之住居所", count: 6, percentage: 3.4, type: "private" },
      { label: "被害人住居所", count: 3, percentage: 1.7, type: "private" },
      { label: "其他（辦公室、路邊）", count: 2, percentage: 1.1, type: "other" }
    ],
    clubBreakdown: [
      { label: "店內包廂沙發區", count: 34, percentage: 19.0 },
      { label: "店內附設洗手間", count: 16, percentage: 8.9 }
    ],
    insight: "高達 75.98% 的侵害案件發生於『私人密閉空間』。當公關被『框出』店外後，實質脫離了店家人員的物理保護網路，動態監護線在此處發生致命斷裂。"
  },

  victimStatus: {
    title: "案發時被害人狀態分析",
    categories: [
      { label: "有飲酒（整體）", count: 156, percentage: 87.15 },
      { label: "酒醉／泥醉／斷片／意識不清", count: 85, percentage: 47.49 },
      { label: "處於清醒狀態", count: 32, percentage: 17.88 },
      { label: "泥醉且體內驗出藥物成分", count: 17, percentage: 9.50 },
      { label: "未提及", count: 16, percentage: 8.94 },
      { label: "全程無飲酒", count: 5, percentage: 2.79 },
      { label: "純因毒品／非酒精物質意識不清", count: 2, percentage: 1.12 }
    ],
    crossAnalysis: {
      drinkAndPrivate: { count: 114, percentage: 63.7, desc: "在酒精影響下且發生於店外私人場所之案件" },
      frameOutPrivateDrunk: { count: 40, percentage: 22.3, desc: "約定框出至私人場所且受害者處於酒醉狀態" }
    },
    insight: "近九成（87.15%）案件伴隨酒精作用，近半數（47.49%）處於泥醉或斷片狀態。酒精不僅弱化了工作者的自我防衛與求助能力，更成為酒客施加暴力的關鍵催化劑。"
  },

  defendantDefense: {
    title: "被告是否以「性交易／有償服務對價」抗辯",
    categories: [
      { label: "以性交易或服務內含為由抗辯", count: 82, percentage: 45.8 },
      { label: "未以此為抗辯", count: 97, percentage: 54.2 }
    ],
    insight: "將近半數（45.8%）被告在法庭上主張『對方做八大就是有做S』或『檯費已包含親密接觸』，將商業上的情緒勞動展演惡意滑坡為性同意。"
  },

  physicalInjuries: {
    title: "被害人身體傷勢與驗傷狀況",
    categories: [
      { label: "未提及驗傷診斷證明", count: 95, percentage: 53.1 },
      { label: "伴隨傷害及具體驗傷診斷", count: 84, percentage: 46.9 }
    ],
    insight: "超過半數被害人無即時驗傷診斷。原因在於事發後常遭店家與幹部以紅包私了、勸說息事寧人，或因害怕職業曝光而隱忍，導致司法定罪最關鍵的物理跡證流失。"
  },

  relationshipTypes: {
    title: "加害人與被害人關係類型",
    categories: [
      { label: "初次認識之酒客", count: 52, percentage: 29.1 },
      { label: "指名坐檯之常客", count: 21, percentage: 11.7 },
      { label: "未特別提及或屬於其他關係", count: 106, percentage: 59.2 }
    ],
    frameOutStatus: [
      { label: "框出／帶出場／買鐘點狀態", count: 98, percentage: 54.7 },
      { label: "否或未提及", count: 81, percentage: 45.3 }
    ]
  },

  majorCases: [
    {
      id: "hualien-2025",
      title: "2025 年花蓮酒店公關遇害案",
      legalRef: "臺灣高等法院 113 年度國審侵上重訴字第 1 號刑事裁定；花蓮地方法院審理中",
      summary: "公關遭呂姓熟客框出三天包車至花蓮遊玩，在海灘遭呂男持漂流木重擊頭部昏厥後推入海中溺斃。呂男先前多次前往酒店捧場，疑追求不成心生怨恨痛下殺手。",
      vulnerabilities: [
        { role: "防衛者失能", desc: "店家行政與經紀未建立外縣市多日框出的定點回報與身心狀態確認機制。" },
        { role: "監督者失能", desc: "幹部僅著眼於多日外全的高額檯費抽成，未評估該名酒客先前的情感偏執與危險徵兆。" },
        { role: "移動空間盲區", desc: "公關在離開台北物理場域後，完全暴露於孤立無援的支配情境。" }
      ]
    },
    {
      id: "taipei-club-2023",
      title: "2023 年台北酒店包廂遇害案",
      legalRef: "臺灣臺北地方法院 112 年度國審侵重訴字第 1 號刑事判決",
      summary: "陳姓常客自備水果刀前往酒店，指名服務。被害人此前曾多次向店家反映該男酒品差、會灌酒且逼迫性服務，幹部仍因客人堅持而排檯。爭執後陳男尾隨被害人進入包廂洗手間砍殺七刀致死並猥褻。",
      vulnerabilities: [
        { role: "場所管理者失能", desc: "包廂廁所未設置緊急求救鈴，且廁所喇叭鎖可自內部鎖死，造成物理逃生盲區。" },
        { role: "防衛者延遲介入", desc: "服務生聽聞第一聲尖叫後，因害怕打擾客人而未直接開門，反而退出聯繫幹部，錯失黃金救援時機。" },
        { role: "制度漠視危險", desc: "公關已明確向店家表示『拒絕坐該客人的檯』，店家仍以『客人說最後一次』為由施壓上檯。" }
      ]
    }
  ],

  interviewees: [
    { code: "A1", role: "酒店公關", age: 32, startYear: 2018, exp: "便服店、禮服店、制服店，另有飯局經驗", tag: "資深第一線" },
    { code: "A2", role: "酒店公關", age: 25, startYear: 2023, exp: "便服店，另有飯局經驗", tag: "青年公關" },
    { code: "A3", role: "酒店公關", age: 23, startYear: 2023, exp: "禮服店，另有 Talking Bar 經驗", tag: "酒吧與禮服" },
    { code: "A4", role: "酒店公關", age: 21, startYear: 2024, exp: "便服店、禮服店、日式酒吧、鋼琴酒吧、舞廳", tag: "多元店種" },
    { code: "B1", role: "酒店幹部", age: 54, startYear: 1996, exp: "幹部資歷 16 年，曾任服務生與公關", tag: "資深管理" },
    { code: "B2", role: "經紀公司負責人", age: 32, startYear: 2015, exp: "配合台式酒店，有經營傳播業務", tag: "經紀網路" },
    { code: "C1", role: "酒客", age: 50, startYear: 2001, exp: "科技業高階主管，消費經驗涵蓋便服、禮服、制服及海外", tag: "商務客" },
    { code: "C2", role: "酒客", age: 45, startYear: 2004, exp: "製造業主管，主要於禮服店及便服店消費", tag: "定期消費" },
    { code: "C3", role: "酒客", age: 51, startYear: 2006, exp: "製造業，近年消費集中於便服店，有跨國消費經驗", tag: "熟客經驗" },
    { code: "C4", role: "酒客", age: 48, startYear: 2006, exp: "文化產業，有禮服、便服、制服及東南亞消費經驗", tag: "觀察敏銳" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = StatisticsData;
}
