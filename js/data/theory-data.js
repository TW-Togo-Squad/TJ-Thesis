// 論文三大理論支柱深度解析庫 (Theoretical Foundations Database)

const TheoryData = {
  title: "論文三大理論支柱與學術對話",
  description: "本研究跳脫單一學門視角，交織環境犯罪學、批判女性主義法學與親密勞動社會學，構建全方位的分析架構。",
  pillars: [
    {
      id: "pillar-criminology",
      name: "環境犯罪學與情境預防 (Environmental Criminology & SCP)",
      badge: "核心實務框架",
      theories: [
        {
          name: "日常活動理論 (Routine Activity Theory, L-RAT)",
          scholars: "Cohen & Felson (1979); Hindelang et al. (1978)",
          coreConcept: "犯罪並非隨機發生，而是「有動機的犯罪者」、「合適的標的物」與「缺乏有能力的監控者」在特定時空中的碰撞。Felson (1994) 更以「犯罪化學反應」比喻，缺少任何一項元素反應便不會發生。",
          fieldLink: "酒店包廂中，酒客（加害人）在酒精催化下與處於經濟脆弱性中的公關（標的）處於封閉密閉空間，而現場管理人員（監控者）因利益共謀而缺席或消極不作為，直接促成了侵害機會。"
        },
        {
          name: "新機會理論 10 大原理 (New Opportunity Theories)",
          scholars: "Felson & Clarke (1998)",
          coreConcept: "強調「機會是犯罪的根本原因（Root Cause）」，且犯罪機會具有高度「特定性」。不同犯罪型態的機會結構截然不同，預防措施必須針對特定情境量身設計；更重要的是，減少犯罪機會通常不會造成犯罪轉移，反而會產生「利益擴散（Diffusion of Benefits）」。",
          fieldLink: "台式酒店的性暴力不能用一般的街頭防暴邏輯看待，必須針對包廂的昏暗照明、厚重隔音門、廁所門鎖盲區及泥醉框出流程進行精準的物理與制度干預。"
        },
        {
          name: "犯罪鐵三角雙環模型 (Problem Analysis Triangle)",
          scholars: "Clarke & Eck (2003, 2005)",
          coreConcept: "內環為加害人、標的物與場所；外環分別對應有能力約束加害人的「監督者（Handler）」、保護被害人的「防衛者（Guardian）」以及監管空間的「場所管理者（Manager）」。提出狼型（重複加害）、鴨型（重複受害）與賊窩型（重複發生地點）三類結構。",
          fieldLink: "指認台式酒店是典型的「賊窩型問題」——由於場所管理者管理不善、制度縱容與免責切結，促使侵害事件在此一微觀環境中重複發生。"
        },
        {
          name: "人為監護三階段動態過程 (Dynamic Guardianship)",
          scholars: "Hollis-Peel, Reynald, van Bavel, Elffers & Welsh (2011)",
          coreConcept: "有效的監護並非單純「有人在場」，而是涵蓋「可用性（Availability）」、「監控（Monitoring）」與「必要時介入（Intervention）」三階段連續動態。任一階段斷裂即導致防衛失敗。",
          fieldLink: "酒店少爺雖具備物理在場（可用性），但受限於服務業階級地位無權干涉（無介入權限）；行政人員忙於外場調度，無法即時監控包廂；導致監護鏈在關鍵時刻全面癱瘓。"
        },
        {
          name: "超級監控者體系 (Super-controllers)",
          scholars: "Sampson, Eck & Dunham (2010); Molnar & Aebi (2023)",
          coreConcept: "調控中間層監控者誘因與行為的更高階結構力量。分為三大類十種機制：正式型（組織、契約、財務、法規、法院）、擴散型（政治、市場、媒體）與個人型（同儕、家庭）。透過增加阻力、增加風險、提高報酬、移除藉口與減少挑釁五大機制改變決策成本。",
          fieldLink: "店家管理者最不願意主動投入防護成本。必須導入主管機關撤照處分（法規型）、工會集體力量（組織型）與自媒體商譽監督（媒體型），迫使店家將保護公關的成本內化。"
        }
      ]
    },
    {
      id: "pillar-law",
      name: "批判女性主義法學與同意理論 (Feminist Jurisprudence & Consent)",
      badge: "法理批判與轉向",
      theories: [
        {
          name: "刑法妨害性自主保護法益之典範轉移",
          scholars: "黃榮堅 (1999); 蔡聖偉 (2016b); 司法院釋字第 791 號",
          coreConcept: "1999 年刑法大幅修法，將涉及性的犯罪自「妨害風化罪章」獨立移至「妨害性自主罪章」，確立以保護「個人性自主決定權與身體控制權」為核心，構成要件從「致使不能抗拒」放寬為「其他違反其意願之方法」。司法院釋字第 791 號更明示性自主權受憲法第 22 條人格權之保障。",
          fieldLink: "揭示法律保護重點已非維護社會抽象性道德或女性貞操，而是實質保護個人對性的承諾權、選擇權與拒絕權。"
        },
        {
          name: "積極同意模式 (Only Yes Means Yes) 與司法實務反思",
          scholars: "最高法院 110 台上 1781 號、2496 號判決; 李佳玟 (2017); 蔡聖偉 (2021)",
          coreConcept: "最高法院判決確立「性同意權」意涵：沉默或猶豫皆非同意，性主動方有責任確認對方在「完全清醒」下自願同意，嚴禁以被害人穿著暴露或身處特殊行業作為推斷同意之藉口。然而，刑法學界指出，現行法仍要求「強制方法」，若無強暴脅迫情狀，單純未得同意直接入罪恐牴觸罪刑法定原則。",
          fieldLink: "突顯出事後司法審判的極限：在包廂曖昧互動下，公關因職業規訓未展現劇烈反抗，事後司法極難定罪。這反向證實了本研究主張「事前情境預防」之不可替代性。"
        },
        {
          name: "麥金儂宰制論女性主義 (Dominance Feminism)",
          scholars: "Catharine A. MacKinnon (1989, 2016)",
          coreConcept: "性別不平等的本質並非單純差異，而是赤裸裸的「宰制與從屬（Dominance and Subordination）」。在父權社會中，男性的權力正是透過對女性『性』的控制、佔有與客體化來實現。形式上的「自由同意」往往抹煞了背後的結構性壓迫。",
          fieldLink: "酒店包廂構成局部的絕對男性統治區。女性公關的身體被物化為消費標的，其微笑與屈從並非真實意志，而是在金錢與權力宰制下的無奈妥協。"
        },
        {
          name: "傅柯規訓權力與「柔順的身體」 (Docile Bodies)",
          scholars: "Michel Foucault (1977)",
          coreConcept: "現代權力透過空間配置、時間控制、檢驗規範與全景敞視（Panopticism），深入滲透至肉體，鍛造出有用且服從的「柔順身體」。",
          fieldLink: "包廂門上的貓眼與走廊巡查，本質是店家確保服務品質與檯費抽成的規訓眼光；嚴苛的遲到、態度與穿著罰單制度，訓練公關維持順從儀態，徹底剝奪了公關當場奮力反抗的能動性。"
        }
      ]
    },
    {
      id: "pillar-sociology",
      name: "親密勞動與情感社會學 (Intimate Labor & Sociology of Stigma)",
      badge: "勞動現場本質",
      theories: [
        {
          name: "肉體化的情緒勞動 (Embodied Emotional Labor)",
          scholars: "Arlie Hochschild (1983); 陳美華 (2006)",
          coreConcept: "情緒勞動指勞動者透過情感管理誘發顧客特定的心理體驗（如尊榮與被愛慕）。在陪侍現場，公關從事的是「肉體化的情緒勞動」，必須壓抑恐懼與厭惡，透過表層扮演以撒嬌或玩笑化解騷擾，長久耗損常導致身心異化與遇險時的僵直反應。",
          fieldLink: "公關的微笑與安撫是專業勞動的展演，卻被男客與法官惡意曲解為「對性行為的默許同意」。"
        },
        {
          name: "有界限的真實 (Bounded Authenticity)",
          scholars: "Elizabeth Bernstein (2007)",
          coreConcept: "當代消費者購買的不僅是物理性服務，更是在尋求一種「宛如真實戀愛的親密體驗（Girlfriend Experience）」。然而，這種親密感嚴格受限於特定時空與對價界線。",
          fieldLink: "犯罪發生的關鍵，正在於男客為了滿足個人支配幻想，刻意無視並打破這條「商業邊界」，將短暫的情緒陪伴強制延伸為私人的身體侵犯。"
        },
        {
          name: "男子氣概展演與符號暴力 (Symbolic Violence)",
          scholars: "黃淑玲 (2003); Pierre Bourdieu (2001); R.W. Connell (1995)",
          coreConcept: "男性在風月場所的聚會消費，本質是向同儕展示支配女性身體能力的「男子氣概建構儀式」。金錢資本被無限制轉化為對女性施加符號暴力的特權。",
          fieldLink: "在同儕起鬨與酒精催化下，酒客將侵害行為合理化為「花錢是大爺」的消費特權，並透過集體共謀鬆動公關的身體防線。"
        },
        {
          name: "污名理論與被害人弱化 (Stigma & Victim Blaming)",
          scholars: "Erving Goffman (1963); 甯應斌 (2004)",
          coreConcept: "社會透過「良婦／娼婦」二元道德標籤，將性產業從業者歸類為「受損身分（Spoiled Identity）」，認為其既將親密商品化，便喪失主張性自主的正當性。",
          fieldLink: "污名使得公關成為加害人眼中的「容易下手的目標」，同時在案發後迫使被害人因害怕身分曝光或司法二度傷害而選擇隱忍，形成龐大的犯罪黑數。"
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TheoryData;
}
