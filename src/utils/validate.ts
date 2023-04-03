export function isExternals(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
