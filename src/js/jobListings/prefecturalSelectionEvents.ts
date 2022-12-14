import { displayJobSeeker } from './displayJobSeeker';
import { prefectures, jobOpenings } from './globalVariable';

/**
 * - 都道府県一覧セレクトボックスの選択時イベント -
 * displayJobSeeker()を用いて職業分類名と求人・求職者数を取得し表示させる
 */
export function prefecturalSelectionEvents(): void {
  prefectures
    ? (prefectures.onchange = () => {
        jobOpenings ? (jobOpenings.innerHTML = '') : undefined;
        displayJobSeeker(prefectures ? prefectures.selectedIndex : 0);
      })
    : undefined;
}
