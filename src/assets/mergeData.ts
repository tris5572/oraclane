import type { MergePoint } from "../types/types";

const 北海道 = [] satisfies MergePoint[];

const 青森 = [] satisfies MergePoint[];

const 岩手 = [] satisfies MergePoint[];

const 宮城 = [] satisfies MergePoint[];

const 秋田 = [] satisfies MergePoint[];

const 山形 = [] satisfies MergePoint[];

const 福島 = [] satisfies MergePoint[];

const 茨城 = [] satisfies MergePoint[];

const 栃木 = [] satisfies MergePoint[];

const 群馬 = [
  {
    label: "国道17号 上武道路 上り 尾島パーキング",
    longitude: 139.3122545,
    latitude: 36.2443941,
    angle: 195,
    merge: "left",
    comments: ["右カーブで高架に上がった先で左に絞り込まれる。"],
  },
  {
    label: "国道17号 上武道路 下り 上武小神明",
    longitude: 139.0934747,
    latitude: 36.4215687,
    angle: 290,
    merge: "left",
    comments: ["付近は4車線化工事が進行中。"],
  },
] satisfies MergePoint[];

const 埼玉 = [
  {
    label: "国道17号 上尾道路 下り 桶川北本IC",
    longitude: 139.5216197,
    latitude: 35.9977268,
    angle: 330,
    merge: "left",
    comments: ["圏央道入口の右分岐を過ぎたところで1車線になる。"],
  },
  {
    label: "国道17号 上尾道路 上り 道の駅べに花の郷おけがわ",
    longitude: 139.5271853,
    latitude: 35.9917906,
    angle: 140,
    merge: "left",
    comments: ["道の駅を過ぎたところで1車線になる。"],
  },
  {
    label: "国道17号 上尾道路 下り 小敷谷",
    longitude: 139.5602167,
    latitude: 35.9614516,
    angle: 300,
    merge: "left",
  },
  {
    label: "国道16号 東大宮バイパス 内回り 県道3号合流手前",
    longitude: 139.6270815,
    latitude: 35.9603213,
    angle: 230,
    merge: "left",
    comments: ["アンダーパスを上る途中で左車線へ絞り込み。"],
  },
  {
    label: "県道3号 上り 国道16号合流手前",
    longitude: 139.6266523,
    latitude: 35.9599022,
    angle: 230,
    merge: "left",
    comments: ["原市(中)交差点を過ぎたところで左車線へ絞り込み。"],
  },
  {
    label: "国道17号 上尾道路 上り 宮前IC",
    longitude: 139.5922744,
    latitude: 35.9305006,
    angle: 170,
    merge: "left",
    comments: [
      "本来は少し先へ右車線へ減少するものの、現在は工事の関係で左車線へ絞り込み。直後、国道16号内回りからの合流の手前で右車線へ移動することになる。",
    ],
  },
  {
    label: "国道17号 新大宮バイパス 下り 与野",
    longitude: 139.6123052,
    latitude: 35.8902748,
    angle: 330,
    merge: "left",
    multi: true,
    comments: [
      "工事の関係で車線構造が変わることがあるが、とりあえず直進の場合は左2車線に寄っておけば間違いない。",
    ],
  },
  {
    label: "国道17号 熊谷バイパス 上り 上之(南)",
    longitude: 139.4210154,
    latitude: 36.1506076,
    angle: 140,
    merge: "left",
    multi: true,
    comments: ["部分的に3車線だが、国道125号との交差点の先において短区間で2車線に戻る。"],
  },
  {
    label: "国道17号 熊谷バイパス 下り 上川上",
    longitude: 139.4002551,
    latitude: 36.1611859,
    angle: 300,
    merge: "left",
    multi: true,
    comments: ["部分的に3車線だが短区間で2車線に戻る。"],
  },
  {
    label: "国道17号 上武道路 上り 堀米",
    longitude: 139.3294099,
    latitude: 36.2136402,
    angle: 160,
    merge: "left",
    comments: ["1kmほどの短区間のみ2車線で、すぐ1車線に戻る。"],
  },
  {
    label: "国道17号 上武道路 下り 蓮沼",
    longitude: 139.3229699,
    latitude: 36.2193807,
    angle: 310,
    merge: "left",
    comments: ["1kmほどの短区間のみ2車線で、すぐ1車線に戻る。"],
  },
  {
    label: "東埼玉道路 下り 八条白鳥",
    longitude: 139.8294112,
    latitude: 35.8515217,
    angle: 345,
    merge: "left",
    comments: ["八条白鳥交差点で国道298号から入ったところ、最初は2車線だがすぐ1車線になる。"],
  },
  {
    label: "国道463号 浦和所沢バイパス 下り 牛沼",
    longitude: 139.4914126,
    latitude: 35.7985254,
    angle: 260,
    merge: "left",
  },
] satisfies MergePoint[];

const 千葉 = [] satisfies MergePoint[];

const 東京 = [
  {
    label: "山手通り 大崎駅付近",
    longitude: 139.7349706,
    latitude: 35.617459,
    angle: 160,
    merge: "left",
    comments: [
      "線路をくぐる手前で左車線へ合流する。",
      "急カーブ + 信号 + 車線変更禁止の直後で合流区間も短いため、要注意。",
      "手前のゲートシティ大崎付近は路駐が多いため、早めに左車線に寄るのもおすすめできない。",
    ],
  },
  {
    label: "環七通り 外回り",
    longitude: 139.6685377,
    latitude: 35.6325723,
    angle: 310,
    merge: "right",
    multi: true,
    comments: ["3車線→2車線"],
  },
  {
    label: "環七通り 内回り 宮前橋",
    longitude: 139.6601531,
    latitude: 35.6544427,
    angle: 175,
    merge: "left",
    multi: true,
    comments: [
      "3車線→2.5車線→3車線",
      "実際に車線が減るわけではないが、交差点の通過直後に一時的に右車線と中央車線の間の線が消えるので譲り合う必要がある。",
    ],
  },
  {
    label: "環七通り 外回り 新代田",
    longitude: 139.6601021,
    latitude: 35.6611868,
    angle: 5,
    merge: "right",
    multi: true,
    comments: [
      "右2車線が渋滞しており、そこに左車線から強引に割り込んでくるクルマが多いため注意。",
      "手前のアンダーパス区間はイエローラインで車線変更禁止。大抵警察官が張っているので、空いている左車線に車線変更して捕まっているクルマが多い。",
    ],
  },
  {
    label: "井ノ頭通り 吉祥寺南",
    longitude: 139.5884925,
    latitude: 35.6988985,
    angle: 292,
    merge: "right",
  },
  {
    label: "国道20号 日野バイパス 国立府中IC",
    longitude: 139.4385999,
    latitude: 35.6757568,
    angle: 270,
    merge: "left",
    multi: true,
    comments: ["2車線→左に1車線追加で3車線→右車線が減って2車線、という謎の構造。"],
  },
] satisfies MergePoint[];

const 神奈川 = [
  {
    label: "国道15号 第一京浜上り 子安",
    longitude: 139.6431667,
    latitude: 35.4827029,
    angle: 50,
    merge: "left",
    multi: true,
    comments: [
      "3車線→左に車線が生えて4車線→右車線が減少して3車線→左車線が減少して2車線",
      "全体としては右1車線が減ることになるので、横浜方面からは左か中央の車線を走るのが良い。",
    ],
  },
  {
    label: "国道15号 第一京浜上り 東神奈川",
    longitude: 139.6369976,
    latitude: 35.4775163,
    angle: 40,
    merge: "left",
    multi: true,
    comments: [
      "3車線→右に首都高が分岐する地点で左に車線が生えて4車線（ただし左車線は路駐だらけ）→右車線が予告もなく減少して3車線",
      "全体としては右1車線が減ることになるので、横浜方面からは左か中央の車線を走っておくのが良い。",
    ],
  },
  {
    label: "国道1号 下り 花水橋",
    longitude: 139.3283987,
    latitude: 35.3226913,
    angle: 230,
    merge: "right",
    comments: ["花水橋を渡ってすぐ1車線になる。"],
  },
  {
    label: "国道134号 腰越海岸",
    longitude: 139.489224,
    latitude: 35.3083511,
    angle: 90,
    merge: "left",
    comments: ["江の島の入口を越えたところで1車線になる。"],
  },
  {
    label: "国道1号 下り 早川口",
    longitude: 139.1488624,
    latitude: 35.2463485,
    angle: 250,
    merge: "left",
    comments: [
      "早川口交差点を過ぎて線路をくぐるところで1車線になる。",
      "手前の交差点では左折車が並んでいることがあるので、動きが難しい。",
    ],
  },
  {
    label: "国道246号 下り 厚木",
    longitude: 139.3538797,
    latitude: 35.4293071,
    angle: 230,
    merge: "left",
    comments: ["国道129号との分岐後、2車線になったと思うとすぐ1車線になる。"],
  },
  {
    label: "国道16号側道 橋本五差路",
    longitude: 139.343749,
    latitude: 35.5869058,
    angle: 335,
    merge: "right",
    comments: ["橋本五差路交差点の時点では2車線だが、すぐ1車線になる。"],
  },
  {
    label: "根小屋",
    longitude: 139.2753553,
    latitude: 35.5743463,
    angle: 245,
    merge: "left",
    comments: [],
  },
] satisfies MergePoint[];

const 新潟 = [] satisfies MergePoint[];

const 富山 = [] satisfies MergePoint[];

const 石川 = [] satisfies MergePoint[];

const 福井 = [] satisfies MergePoint[];

const 山梨 = [] satisfies MergePoint[];

const 長野 = [] satisfies MergePoint[];

const 岐阜 = [] satisfies MergePoint[];

const 静岡 = [
  {
    label: "国道246号 上り 菅沼",
    longitude: 138.9505371,
    latitude: 35.3485457,
    angle: 30,
    merge: "left",
    comments: ["道の駅ふじおやまを過ぎ、菅沼交差点の先で1車線になる。"],
  },
] satisfies MergePoint[];

const 愛知 = [] satisfies MergePoint[];

const 三重 = [] satisfies MergePoint[];

const 滋賀 = [] satisfies MergePoint[];

const 京都 = [] satisfies MergePoint[];

const 大阪 = [] satisfies MergePoint[];

const 兵庫 = [] satisfies MergePoint[];

const 奈良 = [] satisfies MergePoint[];

const 和歌山 = [] satisfies MergePoint[];

const 鳥取 = [] satisfies MergePoint[];

const 島根 = [] satisfies MergePoint[];

const 岡山 = [] satisfies MergePoint[];

const 広島 = [] satisfies MergePoint[];

const 山口 = [] satisfies MergePoint[];

const 徳島 = [] satisfies MergePoint[];

const 香川 = [] satisfies MergePoint[];

const 愛媛 = [] satisfies MergePoint[];

const 高知 = [] satisfies MergePoint[];

const 福岡 = [] satisfies MergePoint[];

const 佐賀 = [] satisfies MergePoint[];

const 長崎 = [] satisfies MergePoint[];

const 熊本 = [] satisfies MergePoint[];

const 大分 = [] satisfies MergePoint[];

const 宮崎 = [] satisfies MergePoint[];

const 鹿児島 = [] satisfies MergePoint[];

const 沖縄 = [] satisfies MergePoint[];

export const DECREASE_DATA = [
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
] satisfies MergePoint[];
