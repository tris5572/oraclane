import { atom } from "jotai";
import type { PointDataType } from "../types/types";

/**
 * 選択されている地点情報の atom
 *
 * 合流地点と分岐地点
 */
export const selectedPointDataAtom = atom<PointDataType | undefined>(undefined);
