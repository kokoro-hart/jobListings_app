/**
 *  エントリポイントファイル
 */

// tsモジュールの読み込み
import { resizeViewport } from './common/resizeViewport'
import { addPrefectureList } from './jobListings/addPrefecture'
import { displayJobSeeker } from './jobListings/displayJobSeeker'
// scssを読み込み
import '../scss/style.scss';
resizeViewport();
addPrefectureList();
displayJobSeeker();