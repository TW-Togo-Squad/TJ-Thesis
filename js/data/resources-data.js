// 心理諮商、法律扶助資源清單與緊急應變指引 (Resources & Crisis Guidance)
// 完整收錄論文附錄三與實務支持網路

const ResourcesData = {
  crisisPrinciples: {
    title: "遭逢性侵案件處理原則（緊急安全指引）",
    steps: [
      {
        rule: "保留身上衣物",
        detail: "加穿一件外套或大衣，切勿更換、清洗或丟棄案發時所穿著的原衣物，以保全微物跡證。"
      },
      {
        rule: "嚴禁盥洗或沖洗",
        detail: "案發後請勿刷牙、沐浴、更衣或沖洗陰道與身體私密處，以便法醫與醫護採得加害人的毛髮、唾液及精斑體液。"
      },
      {
        rule: "立即就醫診療驗傷",
        detail: "盡速前往醫療院所急診室。依法將列為急診檢傷分類第一級病人優先處理，經當事人同意後進行性侵害採證與開立驗傷診斷書。"
      },
      {
        rule: "社工與護理全程陪同",
        detail: "各責任醫院均設有專責社工與護理人員陪伴整個驗傷與筆錄流程，並可申請心理輔導與法律扶助。"
      }
    ]
  },

  supportOrganizations: [
    {
      category: "性產業／情慾勞動者權益與性別 NGO",
      items: [
        {
          name: "台灣性產業勞動者權益推動協會",
          desc: "倡議性工作去污名、除罰化與合法化，推動創造安全、有保障的勞動環境。",
          facebook: "https://www.facebook.com/TSIWRA",
          instagram: "https://www.instagram.com/tsiwra/",
          email: "sexworkertw@gmail.com"
        },
        {
          name: "臺北市娛樂公關經紀職業工會",
          desc: "由基層酒店公關與情慾服務從業人員自主成立之工會，協助加保勞健保、爭取社會福利並協調勞資爭議。",
          phone: "(02) 2511-6002",
          email: "ewhu.tw@gmail.com",
          facebook: "https://www.facebook.com/EWHUTW109/",
          line: "https://lin.ee/bQfUklF"
        },
        {
          name: "暖暖 Sunshine 協會",
          desc: "倡議打破性暴力倖存者社會污名、推動大眾教育，並建立線上匿名同儕互助社群與陪伴系統。",
          email: "hello@nuannuansunshine.org",
          facebook: "https://www.facebook.com/2022.nuannuan/",
          instagram: "https://www.instagram.com/nuannuan_sunshine/"
        },
        {
          name: "現代婦女基金會",
          desc: "協助家庭暴力、性侵害和性騷擾被害人，致力於婦幼人權倡議、推動修法並提供長期心理與司法陪伴。",
          phone: "(02) 2391-7133",
          hotline: "(02) 2391-1067（性騷擾防治專線）",
          email: "mwf@38.org.tw",
          facebook: "https://www.facebook.com/MWF38"
        },
        {
          name: "勵馨基金會",
          desc: "關心人口販運與性別暴力議題，提供性暴力倖存者身心復原、庇護安置與司法伴行支持。",
          phone: "(02) 8911-8595",
          email: "master@goh.org.tw",
          facebook: "https://www.facebook.com/gohtaiwan"
        },
        {
          name: "台灣展翅協會",
          desc: "長期耕耘兒少服務工作，致力於防制兒少性剝削、守護數位安全並提倡兒少人權。",
          phone: "(02) 2562-1233",
          email: "cpattw@ecpat.org.tw",
          facebook: "https://www.facebook.com/ECPATTaiwan/"
        },
        {
          name: "婦女新知基金會",
          desc: "推動性別平等政策、推動性侵害與性騷擾防治修法及保障弱勢勞動女性實質人權。",
          phone: "(02) 2502-8715",
          email: "awakening1982@awakening.org.tw",
          facebook: "https://www.facebook.com/awakeningfoundation/"
        }
      ]
    },
    {
      category: "官方心理諮商與保護專線",
      items: [
        {
          name: "113 保護專線（衛福部保護服務司）",
          desc: "24 小時免付費專線，手機與市話直撥 113，亦可傳簡訊至 113。受理家暴、性騷擾、性侵害及兒少緊急救援通報。",
          phone: "113",
          webConsult: "https://ecare.mohw.gov.tw/"
        },
        {
          name: "1925 安心專線（衛福部心理健康司）",
          desc: "24 小時免付費心理諮詢專線，手機與市話直撥 1925。提供即時情緒疏導與心理支持服務。",
          phone: "1925"
        },
        {
          name: "各縣市衛生局社區心理衛生中心",
          desc: "各地方政府設有社區心理衛生據點，提供預約制面談心理諮商與心理健康諮詢服務。"
        }
      ]
    },
    {
      category: "法律扶助與被害人保護機構",
      items: [
        {
          name: "財團法人法律扶助基金會",
          desc: "提供弱勢民眾與性侵害被害人律師訴訟代理、法律諮詢服務（性侵害案件符合相關要件免審查資力）。",
          phone: "(02) 412-8518 轉 2 再轉 5"
        },
        {
          name: "財團法人犯罪被害人保護協會",
          desc: "提供『一路相伴』法律協助，協助申請犯罪被害補償金，並提供心理輔導、經濟援助與緊急生活扶助。",
          hotline: "0800-005-850（免付費保護專線）",
          branches: [
            { region: "台北分會", phone: "(02) 2389-8102" },
            { region: "新北分會", phone: "(02) 2274-1851" },
            { region: "基隆分會", phone: "(02) 2466-7662" },
            { region: "桃園分會", phone: "(03) 286-0606" }
          ]
        },
        {
          name: "各縣市家暴暨性侵害防治中心（補助項目）",
          desc: "提供性侵害被害人非健保給付之醫療與採證費用、心理復健費用、法律訴訟費用、緊急生活費用與租金補助。",
          branches: [
            { region: "台北市家防中心", phone: "(02) 2361-5295 分機 226" },
            { region: "新北市家防中心", phone: "(02) 8965-3359 分機 2303" },
            { region: "基隆市家防中心", phone: "(02) 2434-0458" },
            { region: "桃園市家防中心", phone: "(03) 332-2111" }
          ]
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ResourcesData;
}
