import { fetchResasApi } from './fetchResasApi';
import { jobOpenings } from './globalVariable';

/**
 * REASAS_APIから職業分類名と求人・求職者数を取得し表示させる関数
 */
export function displayJobSeeker(index: number): void {
  jobOpenings.innerHTML += `<div class="p-loader">Loading...</div>`;
  if (index > 0) {
    fetchResasApi(
      `https://opendata.resas-portal.go.jp/api/v1/regionalEmploy/analysis/portfolio?prefCode=${index}&year=2012&matter=1&class=1`
    ).then((data) => {
      jobOpenings.innerHTML = '';
      for (let i = 0; i < data.result.data.length; i++) {
        jobOpenings.innerHTML += `
        <dt class="p-job-openings__dt">${data.result.data[i].broadName}</dt>
        <dd class="p-job-openings__dd">${data.result.data[i].value}人</dd>`;
      }
    });
  } else {
    jobOpenings.innerHTML = '';
  }
}
