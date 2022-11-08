/**
 * ビューポート幅360px以下をリサイズして表示する関数
 */
export function resizeViewport(): void {
  const viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
  function switchViewport() {
    const value = window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
}
