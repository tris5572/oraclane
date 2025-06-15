/**
 * 車線減少地点のデータ型
 */
export type MergePoint = {
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
   * 合流後が複数車線かどうかのフラグ
   *
   * 省略時は `false` とみなす
   */
  multi?: true;
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

/**
 * 分岐地点のデータ型
 */
export type BranchPoint = {
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
   * 車線の情報
   *
   * 各車線の配列であり、1つの車線に対して `←↖↑↗→` により分岐方向を指定する。
   */
  lanes: string[];
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
