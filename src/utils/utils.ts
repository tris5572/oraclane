import type { BranchPoint, MergePoint } from "../types/types";

/**
 * 渡された2つの地点情報が等しいかどうかを返す
 *
 * 分岐と車線減少の両方の情報を指定可能
 *
 * 備考: データと、保持された atom の値を比較するとき、string[] は同じ参照なので単純な比較のみで判定可能だが、
 *.     一応汎用性を持たせるためにきちんと中身まで見て判定している。
 */
export function isEqualPointData(
  a: BranchPoint | MergePoint,
  b: BranchPoint | MergePoint,
): boolean {
  if (
    a.label === b.label &&
    a.longitude === b.longitude &&
    a.latitude === b.latitude &&
    a.angle === b.angle &&
    a.kind === b.kind &&
    isEqualArray(a.comments, b.comments)
  ) {
    // 車線減少同士の比較
    if ("merge" in a) {
      if ("merge" in b) {
        if (a.merge !== b.merge) {
          return false;
        }
        if (a.multi !== b.multi) {
          return false;
        }
      } else {
        return false; // 型が異なる場合は等しくない
      }
    }

    // 分岐同士の比較
    if ("lanes" in a) {
      if ("lanes" in b) {
        if (!isEqualArray(a.lanes, b.lanes)) {
          return false;
        }
      } else {
        return false; // 型が異なる場合は等しくない
      }
    }

    return true;
  }

  return false;
}

/**
 * 2つの配列が等しいことを判定する
 */
function isEqualArray(a: string[] | undefined, b: string[] | undefined) {
  // 参照が同じまたは両方とも undefined のときは等しい
  if (a === b) {
    return true;
  }
  // コメントのどちらか一方だけが undefined のときは等しくない
  if (a === undefined || b === undefined) {
    return false;
  }
  // 長さが異なる場合は等しくない
  if (a.length !== b.length) {
    return false;
  }
  // 中身の各要素が等しいことを判定
  return a.every((v, i) => v === b[i]);
}
