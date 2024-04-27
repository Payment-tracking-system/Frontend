export type BillType = {
    qrId: string
    qrStatus: string
    payload: string
    qrUrl: string
}

export type AddQrStatus = {
    qrId: string
    qrStatus: string
}

export type QrStatus = {
    qrStatus: string
}