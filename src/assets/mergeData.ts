import type { MergePoint } from "../types/types";

const 北海道 = [
  {
    label: "国道244号 下り 藻琴",
    longitude: 144.3236589,
    latitude: 43.9666754,
    angle: 120,
    merge: "left",
    comments: [""],
  },
  {
    label: "国道238号 稚内空港",
    longitude: 141.7981446,
    latitude: 45.4060117,
    angle: 70,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道232号 稚内市リサイクルセンター",
    longitude: 141.7144731,
    latitude: 45.3746961,
    angle: 120,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道238号 上り 網走",
    longitude: 144.2159575,
    latitude: 44.0108542,
    angle: 200,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道44号 下り 釧路の東",
    longitude: 144.437044,
    latitude: 42.9964338,
    angle: 100,
    merge: "right",
    comments: [""],
  },
  {
    label: "釧路第四埠頭",
    longitude: 144.3138313,
    latitude: 43.0052491,
    angle: 280,
    merge: "left",
    comments: [""],
  },
  {
    label: "国道38号 上り 釧路新野",
    longitude: 144.2358676,
    latitude: 43.0000964,
    angle: 260,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道235号 下り 豊川",
    longitude: 142.0079416,
    latitude: 42.5326023,
    angle: 140,
    merge: "right",
    comments: ["短区間だけ2車線。"],
  },
  {
    label: "国道235号 上り 豊川",
    longitude: 141.9903919,
    latitude: 42.5442852,
    angle: 320,
    merge: "right",
    comments: ["短区間だけ2車線。"],
  },
  {
    label: "国道36号 上り 石山",
    longitude: 141.3192576,
    latitude: 42.5266319,
    angle: 220,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道36号 下り 竹浦",
    longitude: 141.2438044,
    latitude: 42.4796568,
    angle: 45,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道36号 上り 登別",
    longitude: 141.1701295,
    latitude: 42.4452496,
    angle: 240,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道36号 下り 室蘭中央",
    longitude: 140.9738454,
    latitude: 42.3172292,
    angle: 330,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道36号 上り 幌萌",
    longitude: 140.9586748,
    latitude: 42.3613872,
    angle: 70,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道36号 上り 陣屋町",
    longitude: 140.9459585,
    latitude: 42.3685257,
    angle: 270,
    merge: "right",
    comments: ["白鳥大橋からの合流後、すぐ1車線になる。"],
  },
  {
    label: "国道5号 八雲バイパス 下り 八雲",
    longitude: 140.2720991,
    latitude: 42.2760114,
    angle: 0,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道5号 八雲バイパス 上り 八雲",
    longitude: 140.2885866,
    latitude: 42.2472362,
    angle: 150,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道5号 上り 赤井川",
    longitude: 140.6300962,
    latitude: 42.0093571,
    angle: 330,
    merge: "right",
    comments: ["短距離だけ2車線。"],
  },
  {
    label: "国道5号 下り 赤井川",
    longitude: 140.6339961,
    latitude: 42.0021311,
    angle: 160,
    merge: "right",
    comments: ["短距離だけ2車線。ラッキーピエロのところで車線減少。"],
  },
  {
    label: "国道278号 漁火通り 下り 函館空港南",
    longitude: 140.7993355,
    latitude: 41.7726195,
    angle: 110,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道228号 松前道 上り 富川",
    longitude: 140.6213093,
    latitude: 41.8044977,
    angle: 180,
    merge: "left",
    comments: [""],
  },
] satisfies MergePoint[];

const 青森 = [
  {
    label: "国道4号 青森東バイパス 上り 宮田",
    longitude: 140.8358297,
    latitude: 40.8466251,
    angle: 40,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道7号 青森西バイパス 上り 戸門",
    longitude: 140.6437889,
    latitude: 40.8141905,
    angle: 250,
    merge: "left",
    comments: [""],
  },
  {
    label: "国道7号 青森環状道路 上り 安田西",
    longitude: 140.7025427,
    latitude: 40.7991149,
    angle: 300,
    merge: "right",
    comments: [""],
  },
  {
    label: "県道19号 下り おいらせ町松原",
    longitude: 141.4562675,
    latitude: 40.6120589,
    angle: 340,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道45号 上り 八戸北IC",
    longitude: 141.4346355,
    latitude: 40.5603802,
    angle: 0,
    merge: "right",
    comments: [""],
  },
  {
    label: "国道454号 上り 八戸尻内",
    longitude: 141.4248186,
    latitude: 40.5173268,
    angle: 270,
    merge: "right",
    comments: [""],
  },
] satisfies MergePoint[];

const 岩手 = [] satisfies MergePoint[];

const 宮城 = [] satisfies MergePoint[];

const 秋田 = [] satisfies MergePoint[];

const 山形 = [] satisfies MergePoint[];

const 福島 = [] satisfies MergePoint[];

const 茨城 = [
  {
    label: "国道4号 下り 利根川橋の北",
    longitude: 139.7121692,
    latitude: 36.1478119,
    angle: 40,
    merge: "right",
    comments: ["利根川を渡って地平に降りる途中で1車線になる。"],
  },
  {
    label: "県道56号 中田町",
    longitude: 139.71255,
    latitude: 36.147047,
    angle: 80,
    merge: "right",
    comments: ["一瞬だけ2車線だが、すぐ右に合流して1車線になる。"],
  },
] satisfies MergePoint[];

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
  {
    label: "県道78号 太田市新井町",
    longitude: 139.3722877,
    latitude: 36.2892426,
    angle: 90,
    merge: "left",
    comments: [
      "国道との交差点の少し手前で1車線になる。流れが悪いことが多く、割り込みが多発するので注意。",
      "この車線レイアウトを考えた人はどうかしている。",
    ],
  },
  {
    label: "県道332号 山之神",
    longitude: 139.3191183,
    latitude: 36.3451058,
    angle: 340,
    merge: "left",
    comments: ["北関東道をくぐる手前で1車線になる。"],
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

const 千葉 = [
  {
    label: "国道464号 北千葉道路 上り 吉高",
    longitude: 140.2209681,
    latitude: 35.7840247,
    angle: 100,
    merge: "left",
    comments: ["ここから1車線。"],
  },
  {
    label: "国道464号 北千葉道路 上り 千葉ニュータウン",
    longitude: 140.1046836,
    latitude: 35.795788,
    angle: 230,
    merge: "left",
    comments: ["線路脇の道から土手の上に上がる手前で1車線になる。"],
  },
  {
    label: "国道464号 北千葉道路 上り 鎌ケ谷消防署前",
    longitude: 140.0074938,
    latitude: 35.783892,
    angle: 270,
    merge: "left",
    comments: ["現在の終点近くで1車線になる。"],
  },
  {
    label: "国道357号 下り 蘇我",
    longitude: 140.1208279,
    latitude: 35.5934316,
    angle: 160,
    merge: "left",
    multi: true,
    comments: ["ハーバーシティ方面の右折2車線の先、京葉線をくぐる手前で左側2車線に減少する。"],
  },
] satisfies MergePoint[];

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

export const MERGE_DATA = [
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
