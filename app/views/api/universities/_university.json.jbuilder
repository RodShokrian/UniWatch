json.extract! university, :id, :cost_tuition_out_of_state, :cost_attendance_academic_year,
                    :location_lon, :school_name, :school_minority_serving_historically_black,
                    :school_city, :admissions_sat_scores_average_overall,
                    :cost_tuition_in_state, :aid_median_debt_completers_overall,
                    :school_zip, :admissions_admission_rate_overall,
                    :location_lat, :school_school_url, :school_price_calculator_url,
                    :school_state, :student_enrollment_all

json.following logged_in? && current_user.follows?(university) ? true : false
