export type TransactionStatus = "Confirmed" | "Cancelled";
export type TransactionType = "Sent" | "Received";

export type Transaction = {
  status: TransactionStatus;
  type: TransactionType;
  amount: string;
  date: string;
};
