export const blockScroll = (isBlock: boolean) => {
  if (typeof document !== 'undefined') {
    const body = document.getElementsByTagName('body')[0];
    if (isBlock) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }
}