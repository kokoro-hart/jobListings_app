// RESAS_APIキー
import { config } from './apikey';

/**
 * RESAS_APIからデータを取得する関数
 */
export async function fetchResasApi(url: string) {
  const response: Response = await fetch(url, {
    method: 'GET',
    headers: { 'X-API-KEY': config.apiKey },
  });

  if (!response.ok) {
    const message = `データを取得できませんでした。: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}
