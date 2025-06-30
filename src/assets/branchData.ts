import type { BranchPoint } from "../types/types";

// ←↖↑↗→

const 北海道 = [
  {
    label: "国道40号 下り 稚内",
    longitude: 141.6762811,
    latitude: 45.4168739,
    angle: 0,
    lanes: ["←", "↑→"],
    comments: [""],
  },
  {
    label: "国道238号 潮見",
    longitude: 141.7072016,
    latitude: 45.394964,
    angle: 270,
    lanes: ["←", "↑→"],
    comments: [""],
  },
  {
    label: "国道38号 上り 幣舞橋",
    longitude: 144.3852291,
    latitude: 42.9817924,
    angle: 350,
    lanes: ["←↑", "↑", "↗"],
    comments: [""],
  },
  {
    label: "国道38号 下り 幣舞ロータリー",
    longitude: 144.3857896,
    latitude: 42.9804968,
    angle: 165,
    lanes: ["←↑", "↑", "↗"],
    comments: [
      "幣舞（ぬさない）橋の南にある巨大ロータリー。通行には要注意。",
      "道道113号は左2車線。",
      "右車線は右折とUターン。",
    ],
  },
  {
    label: "国道38号 釧路西IC",
    longitude: 144.3256572,
    latitude: 43.0364943,
    angle: 90,
    lanes: ["↑", "→"],
    comments: ["直進は道東道。"],
  },
  {
    label: "道道148号 釧路西IC",
    longitude: 144.3265718,
    latitude: 43.0359452,
    angle: 290,
    lanes: ["←↑", "→"],
    comments: [""],
  },
  {
    label: "新富士通り 西方面 市場",
    longitude: 144.3406159,
    latitude: 43.0045808,
    angle: 290,
    lanes: ["↑", "→"],
    comments: ["この手前の交差点もクランク状で、右車線を走るのはキツい。"],
  },
  {
    label: "沼の端",
    longitude: 141.6983745,
    latitude: 42.6696968,
    angle: 65,
    lanes: ["←", "↑", "↑", "→"],
    comments: ["4車線が実質2車線になる。"],
  },
  {
    label: "苫小牧・元中野4",
    longitude: 141.6190803,
    latitude: 42.6432949,
    angle: 230,
    lanes: ["↑", "↑", "↑", "→"],
    comments: ["4車線の一番右の車線が右折専用。"],
  },
  {
    label: "国道36号 下り 元中野4",
    longitude: 141.6172618,
    latitude: 42.6424324,
    angle: 50,
    lanes: ["↖", "↖↑", "↑", "↑"],
    comments: ["国道36号は左寄り。"],
  },
  {
    label: "国道36号 上り 苫小牧駅前",
    longitude: 141.6013965,
    latitude: 42.6328123,
    angle: 230,
    lanes: ["←", "↑", "↑→"],
    comments: [""],
  },
  {
    label: "国道36号 上り 室蘭中央",
    longitude: 140.9762675,
    latitude: 42.3165745,
    angle: 260,
    lanes: ["←↑", "→", "→"],
    comments: ["右折後すぐ、2車線から右への絞り込みで1車線になる。"],
  },
  {
    label: "国道278号 漁火通り 上り 大森稲荷神社",
    longitude: 140.7374892,
    latitude: 41.7691616,
    angle: 250,
    lanes: ["←↑", "→"],
    comments: ["右車線は右折2車線になり、函館山・函館駅方面。"],
  },
  {
    label: "国道227号 上り 万代跨線橋",
    longitude: 140.7312611,
    latitude: 41.7895873,
    angle: 100,
    lanes: ["←↑", "→"],
    comments: ["跨線橋を下った先が右折専用レーン。ずっと手前から案内があり、車線変更禁止区間。"],
  },
  {
    label: "国道227号 上り 七重浜",
    longitude: 140.7078052,
    latitude: 41.8221542,
    angle: 140,
    lanes: ["←", "↑→"],
    comments: [""],
  },
] satisfies BranchPoint[];

const 青森 = [
  {
    label: "国道4号 上り 合浦",
    longitude: 140.7800075,
    latitude: 40.8273403,
    angle: 75,
    lanes: ["↖", "↑", "↑"],
    comments: [""],
  },
  {
    label: "県道44号 宮田",
    longitude: 140.836122,
    latitude: 40.8458416,
    angle: 310,
    lanes: ["←", "↑", "→"],
    comments: [""],
  },
] satisfies BranchPoint[];

const 岩手 = [] satisfies BranchPoint[];

const 宮城 = [] satisfies BranchPoint[];

const 秋田 = [] satisfies BranchPoint[];

const 山形 = [] satisfies BranchPoint[];

const 福島 = [] satisfies BranchPoint[];

const 茨城 = [] satisfies BranchPoint[];

const 栃木 = [] satisfies BranchPoint[];

const 群馬 = [] satisfies BranchPoint[];

const 埼玉 = [
  {
    label: "国道17号 上り 吉野町",
    longitude: 139.608247,
    latitude: 35.9531345,
    angle: 180,
    lanes: ["↖", "↑"],
    comments: ["新大宮バイパス方面と国道16号内回りは右車線。", "左車線は国道17号旧道。"],
  },
  {
    label: "国道16号 西大宮バイパス 外回り 宮前IC",
    longitude: 139.5898873,
    latitude: 35.9264769,
    angle: 50,
    lanes: ["↖", "↑"],
    comments: [
      "国道16号の直進は右車線。左分岐が新大宮バイパス・上尾道路。",
      "分岐後もわずかに左車線が続いたあと、右1車線になる。",
    ],
  },
  {
    label: "国道16号 東大宮バイパス 外回り 栗橋分岐",
    longitude: 139.6222106,
    latitude: 35.9580235,
    angle: 70,
    lanes: ["↖", "↑", "↑"],
    comments: [
      "国道16号は右2車線でアンダーパスをくぐる。",
      "左車線は県道3号の白岡・久喜・栗橋方面。",
    ],
  },
  {
    label: "国道16号 外回り 吉野町の手前",
    longitude: 139.6082363,
    latitude: 35.948447,
    angle: 0,
    lanes: ["↖", "↖", "↑"],
    comments: ["国道16号は左2車線で地上へ降りたあとに右折2車線。", "右車線は国道17号の群馬方面。"],
  },
  {
    label: "国道16号 内回り 宮前IC",
    longitude: 139.5944658,
    latitude: 35.9307787,
    angle: 215,
    lanes: ["↖", "↖", "↑"],
    comments: [
      "国道16号直進は右車線。",
      "左2車線は国道17号新大宮バイパスで東京方面",
      "上尾道路で桶川北本IC方面へ向かうときは中央車線。",
    ],
  },
  {
    label: "国道17号 新大宮バイパス 下り 宮前IC",
    longitude: 139.5926285,
    latitude: 35.9235602,
    angle: 0,
    lanes: ["↖↑", "↗", "↗"],
    comments: [
      "国道16号と国道17号が交差する巨大インターチェンジ。",
      "国道17号を群馬方面へ下るときは右2車線。",
      "左車線は左分岐で国道16号 西大宮バイパスで川越・八王子方面と、直進で上尾道路の桶川北本IC方面（すぐ2車線に増える）。",
    ],
  },
  {
    label: "国道17号 下り 川岸三丁目",
    longitude: 139.6835446,
    latitude: 35.8053343,
    angle: 350,
    lanes: ["↑", "→"],
    comments: ["戸田橋で荒川を渡ってすぐ、右車線が右折専用レーンになる。"],
  },
  {
    label: "国道17号 下り 深谷バイパス・上武道路分岐",
    longitude: 139.3349111,
    latitude: 36.1996419,
    angle: 310,
    lanes: ["↑", "↗"],
    comments: [
      "前橋・新潟方面は右車線から上武道路に入る。",
      "左車線の深谷バイパスは旧道で、高崎・軽井沢方面。",
    ],
  },
  {
    label: "国道463号 所沢入間バイパス 下り 国道16号手前",
    longitude: 139.3835905,
    latitude: 35.8222924,
    angle: 270,
    lanes: ["↖", "↑"],
    comments: [
      "右車線が国道463号直進でアンダーパスをくぐって飯能・秩父方面。",
      "左車線が側道から小谷田交差点で国道16号と交差。",
    ],
  },
] satisfies BranchPoint[];

const 千葉 = [] satisfies BranchPoint[];

const 東京 = [
  {
    label: "国道4号 上り 千住大橋",
    longitude: 139.7981152,
    latitude: 35.7405453,
    angle: 200,
    lanes: ["↖", "↖", "↑", "↑"],
    comments: ["右側2車線が国道4号 上野方面。左側2車線は南千住・浅草方面。"],
  },
  {
    label: "内堀通り 外回り 祝田橋",
    longitude: 139.7564203,
    latitude: 35.6774515,
    angle: 200,
    lanes: ["←↑", "→", "→"],
    comments: [
      "中央と右の右折車線がそれぞれ2つに分岐する、5車線の交差点。",
      "最も左のレーンのみが直進・左折で、それ以外の4レーンは右折。",
    ],
  },
  {
    label: "都道316号 昭和通り 地下道出口・江戸橋北",
    longitude: 139.7768641,
    latitude: 35.6835578,
    angle: 20,
    lanes: ["↑", "→"],
    comments: [
      "地下道を出た先、江戸橋北交差点では右車線が右折専用なので、直進して国道4号へ行くためには左車線に寄る必要がある。手前から詰まっていることが多いので、早めの移動が良い。",
    ],
  },
  {
    label: "都道316号 海岸通り 上り 蓬莱橋",
    longitude: 139.7626698,
    latitude: 35.6660581,
    angle: 330,
    lanes: ["←", "←", "↑", "→", "→"],
    comments: ["右折後に地下道に入って信号をパスするなら、最も右の車線がおすすめ。"],
  },
  {
    label: "都道316号 海岸通り 上り 汐先橋",
    longitude: 139.7624016,
    latitude: 35.6631195,
    angle: 35,
    lanes: ["↑", "↑", "→"],
    comments: ["右車線が首都高出口のところで2車線に分岐して、交差点は右折2車線。"],
  },
  {
    label: "都道316号 海岸通り 上り 五色橋北詰",
    longitude: 139.751595,
    latitude: 35.635911,
    angle: 20,
    lanes: ["↑", "↑", "→"],
    comments: ["この交差点だけ右車線が右折専用。すぐ3車線に戻る。"],
  },
  {
    label: "新東海橋",
    longitude: 139.7467884,
    latitude: 35.6206282,
    angle: 250,
    lanes: ["←↑", "↑", "→"],
    comments: [],
  },
  {
    label: "第一京浜 下り 八ツ山橋",
    longitude: 139.7383073,
    latitude: 35.6252621,
    angle: 160,
    lanes: ["←", "↖", "↑", "↑"],
    comments: [
      "第一京浜の直進は右2レーンで、斜め左は五反田・中原街道方面、左折は八ツ山橋を渡って東品川方面。",
      "さらに右車線にはUターンレーンもある。",
    ],
  },
  {
    label: "是政交番前",
    longitude: 139.4876441,
    latitude: 35.6563731,
    angle: 0,
    lanes: ["↖", "→"],
    comments: [],
  },
  {
    label: "川崎街道 下り 一ノ宮",
    longitude: 139.438718,
    latitude: 35.6514491,
    angle: 280,
    lanes: ["←", "↑→"],
    comments: [],
  },
  {
    label: "青梅街道 東青梅三丁目",
    longitude: 139.2786196,
    latitude: 35.7886131,
    angle: 265,
    lanes: ["↖", "↗→"],
    comments: ["メインの通りは左車線で、アンダーパスに入る。"],
  },
  {
    label: "あきる野IC",
    longitude: 139.2848477,
    latitude: 35.7176583,
    angle: 20,
    lanes: ["↑", "→"],
    comments: ["左車線が圏央道の入口。"],
  },
  {
    label: "甲州街道 上り 矢川三丁目",
    longitude: 139.4287106,
    latitude: 35.6825183,
    angle: 100,
    lanes: ["↑", "→"],
    comments: ["右車線が右折専用レーン。"],
  },
  {
    label: "甲州街道 下り 高尾駅前",
    longitude: 139.2819348,
    latitude: 35.6430954,
    angle: 225,
    lanes: ["←", "↑→"],
    comments: ["左車線が左折専用レーン。"],
  },
  {
    label: "町田街道 都道47号 館町",
    longitude: 139.287495,
    latitude: 35.6343385,
    angle: 25,
    lanes: ["↑", "→"],
    comments: [
      "手前の交差点で左折して国道20号に入る車が多いため、右車線→左車線と移動するのがスムーズ。",
    ],
  },
  {
    label: "八王子南バイパス 下り 高尾山IC入口",
    longitude: 139.2633873,
    latitude: 35.6237606,
    angle: 185,
    lanes: ["↑", "→"],
    comments: ["トンネルを抜けてすぐの交差点。", "右車線が2車線に分かれ、圏央道高尾山ICへ入る。"],
  },
] satisfies BranchPoint[];

const 神奈川 = [
  {
    label: "第一京浜 上り 大黒町入口",
    longitude: 139.6681353,
    latitude: 35.4946277,
    angle: 45,
    lanes: ["↑", "→"],
    comments: ["この交差点の地点のみ1車線になる。", "手前にある生麦の首都高が目印になる。"],
  },
  {
    label: "国道1号 上り 平塚",
    longitude: 139.3618888,
    latitude: 35.3316022,
    angle: 85,
    lanes: ["←↖", "↑→"],
    comments: [
      "相模川を渡る馬入橋の手前。",
      "国道1号の直進は右車線で、左車線は工業団地方面と側道。",
    ],
  },
  {
    label: "国道1号 上り 山王橋",
    longitude: 139.1698748,
    latitude: 35.2557802,
    angle: 55,
    lanes: ["←↑", "→"],
    comments: ["右車線は西湘バイパス。"],
  },
  {
    label: "国道1号 上り 小田原市民会館前",
    longitude: 139.1592667,
    latitude: 35.2501814,
    angle: 358,
    lanes: ["↑", "→"],
    comments: ["直角左カーブ（左折）の直後、右車線の右折のみが国道1号。"],
  },
  {
    label: "国道1号 上り 小田原箱根道路",
    longitude: 139.1227162,
    latitude: 35.2398941,
    angle: 30,
    lanes: ["↖", "↑"],
    comments: [
      "一般道へ下りる場合は、トンネル内までに左車線に寄っておく必要がある。右車線だと有料道路で遠くまで連れて行かれてしまう。",
      "小田原厚木道路・西湘バイパスへ行く場合はどちらの車線でも良いが、この先で分岐するので、小田厚は左車線、西湘バイパスは右車線が楽。",
    ],
  },
  {
    label: "尻手黒川道路 東名川崎の入口",
    longitude: 139.5688722,
    latitude: 35.588265,
    angle: 80,
    lanes: ["↑", "→"],
    comments: [
      "この先、右車線は東名川崎ICに入るのみ。",
      "実際に東名に入る東名入口交差点で、左右両方の車線が2つに分岐して4車線になる。",
    ],
  },
  {
    label: "国道246号 下り 厚木",
    longitude: 139.3572056,
    latitude: 35.4346667,
    angle: 185,
    lanes: ["↖", "↑", "↑"],
    comments: [
      "左1車線の側道への斜め左分岐のみが国道246号 伊勢原・御殿場方面。それ以外の直進2車線は国道129号 平塚方面。",
      "斜め左の国道246号は2車線になるが、すぐ左に合流して1車線になる。",
    ],
  },
  {
    label: "国道129号 橋本五差路",
    longitude: 139.3450204,
    latitude: 35.5850947,
    angle: 340,
    lanes: ["←↑", "↗→"],
    comments: [
      "交差点では左車線が2車線に分かれ、左折直進、直進、右折系の3車線になるが、直進後の2車線はすぐ右に合流するため、左車線→中央がスムーズ。ただし混んでいることが多い。",
    ],
  },
  {
    label: "新小倉橋",
    longitude: 139.3006995,
    latitude: 35.5882904,
    angle: 75,
    lanes: ["↖", "↑"],
    comments: ["左車線は側道に入り、町田・コピオ方面。"],
  },
] satisfies BranchPoint[];

const 新潟 = [] satisfies BranchPoint[];

const 富山 = [] satisfies BranchPoint[];

const 石川 = [] satisfies BranchPoint[];

const 福井 = [] satisfies BranchPoint[];

const 山梨 = [] satisfies BranchPoint[];

const 長野 = [] satisfies BranchPoint[];

const 岐阜 = [] satisfies BranchPoint[];

const 静岡 = [] satisfies BranchPoint[];

const 愛知 = [] satisfies BranchPoint[];

const 三重 = [] satisfies BranchPoint[];

const 滋賀 = [] satisfies BranchPoint[];

const 京都 = [] satisfies BranchPoint[];

const 大阪 = [] satisfies BranchPoint[];

const 兵庫 = [] satisfies BranchPoint[];

const 奈良 = [] satisfies BranchPoint[];

const 和歌山 = [] satisfies BranchPoint[];

const 鳥取 = [] satisfies BranchPoint[];

const 島根 = [] satisfies BranchPoint[];

const 岡山 = [] satisfies BranchPoint[];

const 広島 = [] satisfies BranchPoint[];

const 山口 = [] satisfies BranchPoint[];

const 徳島 = [] satisfies BranchPoint[];

const 香川 = [] satisfies BranchPoint[];

const 愛媛 = [] satisfies BranchPoint[];

const 高知 = [] satisfies BranchPoint[];

const 福岡 = [] satisfies BranchPoint[];

const 佐賀 = [] satisfies BranchPoint[];

const 長崎 = [] satisfies BranchPoint[];

const 熊本 = [] satisfies BranchPoint[];

const 大分 = [] satisfies BranchPoint[];

const 宮崎 = [] satisfies BranchPoint[];

const 鹿児島 = [] satisfies BranchPoint[];

const 沖縄 = [] satisfies BranchPoint[];

/**
 * 分岐箇所のデータ
 */
export const BRANCH_DATA = [
  ...北海道,
  ...青森,
  ...岩手,
  ...宮城,
  ...秋田,
  ...山形,
  ...福島,
  ...茨城,
  ...栃木,
  ...群馬,
  ...埼玉,
  ...千葉,
  ...東京,
  ...神奈川,
  ...新潟,
  ...富山,
  ...石川,
  ...福井,
  ...山梨,
  ...長野,
  ...岐阜,
  ...静岡,
  ...愛知,
  ...三重,
  ...滋賀,
  ...京都,
  ...大阪,
  ...兵庫,
  ...奈良,
  ...和歌山,
  ...鳥取,
  ...島根,
  ...岡山,
  ...広島,
  ...山口,
  ...徳島,
  ...香川,
  ...愛媛,
  ...高知,
  ...福岡,
  ...佐賀,
  ...長崎,
  ...熊本,
  ...大分,
  ...宮崎,
  ...鹿児島,
  ...沖縄,
] satisfies BranchPoint[];
