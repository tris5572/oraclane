/**
 * 車線減少地点のデータ型
 */
export type DecreasePoint = {
  /**
   * ラベル
   */
  label?: string;
  /**
   * 経度
   */
  longitude: number;
  /**
   * 緯度
   */
  latitude: number;
  /**
   * アイコンの上が向く角度 [deg]
   *
   * 指定した角度へ、時計回りに回転する
   */
  angle: number;
  /**
   * 合流先の車線
   * - `left`: 左車線に合流（右車線が減少）
   * - `right`: 右車線に合流（左車線が減少）
   */
  merge: "left" | "right";
  /**
   * 道路の種類
   * - `general`: 一般道 (省略時のデフォルト)
   * - `toll`: 有料道路
   */
  kind?: "general" | "toll";
  /**
   * 地点に対するコメント
   */
  comments?: string[];
};
