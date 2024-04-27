
export type DefaultCreateBill = {
    qrType: string
    qrDescription: string
    amount: string
}

export const Bill: DefaultCreateBill = {
    qrType: "QRDynamic",
    qrDescription: "QR для оплаты заказа",
    amount: "1110.11"
}