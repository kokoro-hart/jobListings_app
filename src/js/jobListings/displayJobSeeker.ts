import { fetchResasApi } from './fetchResasApi';
import { jobOpenings } from './globalVariable';

type JobData = {
  broadCode: number;
  broadName: string;
  middleCode: string;
  middleName: string;
  value: number;
};

/**
 * RESAS_APIから職業分類名と求人・求職者数を取得し表示させる関数
 */
export function displayJobSeeker(index: number): void {
  jobOpenings ? (jobOpenings.innerHTML += `<div class="p-loader">Loading...</div>`) : undefined;
  if (index > 0) {
    fetchResasApi(
      `https://opendata.resas-portal.go.jp/api/v1/regionalEmploy/analysis/portfolio?prefCode=${index}&year=2012&matter=1&class=1`
    ).then(data => {
      const response: [JobData] = data.result.data;
      jobOpenings ? (jobOpenings.innerHTML = '') : undefined;
      for (let i = 0; i < response.length; i++) {
        jobOpenings
          ? (jobOpenings.innerHTML += `
        <dt class="p-job-openings__dt">${response[i].broadName}</dt>
        <dd class="p-job-openings__dd">${response[i].value.toLocaleString()}人</dd>`)
          : undefined;
      }
    });
  } else {
    jobOpenings ? (jobOpenings.innerHTML = '') : undefined;
  }
}
