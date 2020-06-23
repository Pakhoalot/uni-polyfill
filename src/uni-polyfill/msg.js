export function voidImplementation(protocol) {
  return `uni.${protocol} 在h5上未实现, 本实现只是空实现, 避免报错.`;
}
export function typeUnchecked(name, should, instead) {
  return `${name} should be ${should} instead of ${instead}.`;
}
