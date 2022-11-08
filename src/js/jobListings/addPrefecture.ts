import { fetchResasApi } from './fetchResasApi';
import { prefectures } from './globalVariable';

/**
 * REASAS_APIから都道府県一覧データを取得しselectのoptionに加える関数
 */
export function addPrefectureList(): void {
  fetchResasApi('https://opendata.resas-portal.go.jp/api/v1/prefectures').then((data) => {
    for (let i = 0; i < data.result.length; i++) {
      let option = document.createElement('option') as HTMLOptionElement;
      option.text = data.result[i].prefName;
      option.value = data.result[i].prefCode;
      prefectures.appendChild(option);
    }
  });
}
