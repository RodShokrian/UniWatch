// fields: school name, city, state, zip code, url, price calculator url, latitude, longitude, HBCU flag sat average (2013), admission rate, # student enrollment, cost of attendance (academic year programs), in-state tuition, out-of-state tuition, mediant debt of graduates

export const collegeScoreFetcher = () => (
  $.ajax({
    method: 'GET',
    url: 'https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=AGyC1nUMi9K1Dp0PEWOddfUSVxERBNq4dEk6T3fP&2014.admissions.sat_scores.average.overall__range=1200..&_fields=school.name,school.city,school.state,school.zip,school.school_url,school.price_calculator_url,location.lat,location.lon,school.minority_serving.historically_black,2014.admissions.sat_scores.average.overall,2014.admissions.admission_rate.overall,2014.student.enrollment.all,2014.cost.attendance.academic_year,2014.cost.tuition.in_state,2014.cost.tuition.out_of_state,2014.aid.median_debt.completers.overall&_sort=2014.admissions.sat_scores.average.overall:desc&_per_page=100'
  })
);

//Not sure if we'll use this one

export const within_distance = (distance) => (
  $.ajax({
    method: 'GET',
    url:
    `https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=AGyC1nUMi9K1Dp0PEWOddfUSVxERBNq4dEk6T3fP&_zip=92677&_distance=${distance}mi&_fields=id,school.name`
  })
);

// API Key: AGyC1nUMi9K1Dp0PEWOddfUSVxERBNq4dEk6T3fP
//Documentation for the API: https://github.com/RTICWDT/open-data-maker/blob/master/API.md
// https://collegescorecard.ed.gov/data/documentation/
//
