import type { MergePoint } from "../types/types";

const 埼玉 = [
  {
    label: "東埼玉道路 下り. 八条白鳥",
    longitude: 139.8294112,
    latitude: 35.8515217,
    angle: 345,
    merge: "left",
    comments: ["八条白鳥交差点で国道298号から入ったところ、最初は2車線だがすぐ1車線になる。"],
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

export const DECREASE_DATA = [...埼玉, ...東京, ...神奈川] satisfies MergePoint[];
