import type { MergePoint } from "../types/types";

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
] satisfies MergePoint[];

const 神奈川 = [
  {
    label: "国道15号 第一京浜上り 子安",
    longitude: 139.6431667,
    latitude: 35.4827029,
    angle: 50,
    merge: "left",
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
    comments: [
      "3車線→右に首都高が分岐する地点で左に車線が生えて4車線（ただし左車線は路駐だらけ）→右車線が予告もなく減少して3車線",
      "全体としては右1車線が減ることになるので、横浜方面からは左か中央の車線を走っておくのが良い。",
    ],
  },
] satisfies MergePoint[];

export const DECREASE_DATA = [...東京, ...神奈川] satisfies MergePoint[];
