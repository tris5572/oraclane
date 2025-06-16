import type { BranchPoint } from "../types/types";

// ←↖↑↗→

const 東京 = [
  {
    label: "内堀通り 外回り 祝田橋",
    longitude: 139.7564203,
    latitude: 35.6774515,
    angle: 200,
    lanes: ["←↑", "→", "→", "→", "→"],
    comments: ["5車線の交差点。", "最も左のレーンのみが直進・左折で、それ以外の4レーンは右折。"],
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

/**
 * 分岐箇所のデータ
 */
export const BRANCH_DATA = [...東京, ...神奈川] satisfies BranchPoint[];
