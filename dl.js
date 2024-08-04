// Download utilities for js

export function json(obj, name='file') {
  const encoded = encodeURIComponent(JSON.stringify(storageObj))
  const a = document.createElement('a')
  a.href = 'data:text/json;charset=utf-8,' + encoded

  if (!name.endsWith('.json'))
      name += '.json';
  a.download = name
  a.click()
}
