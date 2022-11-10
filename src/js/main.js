/**
 *  エントリポイントファイル
 */

// tsモジュールの読み込み
import { resizeViewport } from './common/resizeViewport'
import { addPrefectureList } from './jobListings/addPrefecture'
import { displayJobSeeker } from './jobListings/displayJobSeeker'
import { prefecturalSelectionEvents } from './jobListings/prefecturalSelectionEvents'
import { prefectures, jobOpenings } from './jobListings/globalVariable'
// scssを読み込み
import '../scss/style.scss';
resizeViewport();

if (prefectures && jobOpenings) {
  addPrefectureList();
  displayJobSeeker();
  prefecturalSelectionEvents();
}