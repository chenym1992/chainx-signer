import ApiService from './ApiService'

let service

// 就是LowLevelSocketService
export function setService(s) {
  service = s
}

export const handleApiResponse = async (request, id) => {
  // @todo 校验 appkey。校验 nonce
  const payload = request.data.payload

  const resp = await ApiService.handler(request.data.payload)

  return service.emit(payload.origin, id, 'api', {
    id: payload.id,
    ...resp
  })
}

export const handlePairedResponse = async (request, id) => {
  return await service.emit(request.data.origin, id, 'paired', true)
}
