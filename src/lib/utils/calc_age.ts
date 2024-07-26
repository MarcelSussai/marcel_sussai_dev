export const calc_age = (raw_date: string = 'Jun 30, 1986'): number => {
  const date_now            = new Date()
  const date_birth          = new Date(raw_date)
  const age_date_year       = Math.abs(date_now.getFullYear() - date_birth.getFullYear())

  const correction_year     = age_date_year - 1
  const verify_month        = date_now.getMonth() > date_birth.getMonth()
  const verify_equal_month  = date_now.getMonth() == date_birth.getMonth()
  const verify_day          = date_now.getDate() >= date_birth.getDate()
  const verify_is_birth     = verify_month ? true : verify_equal_month && verify_day ? true : false

  if (verify_is_birth) { return age_date_year } else { return correction_year }
}