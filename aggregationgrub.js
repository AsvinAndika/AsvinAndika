{
  _id: "$account_id",
  total_transactions: {
    $sum: "$transaction_count"
  },
  unique_transaction_codes: {
    $addToSet: "$transactions.transaction_code"
  },
  total_amount: {
    $sum: "$transactions.amount"
  },
  start_date: {
    $min: "$bucket_start_date"
  },
  end_date: {
    $max: "$bucket_end_date"
  }
}
