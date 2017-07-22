# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: "Guest", password: "guest123")

University.destroy_all
response = HTTParty.get('https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=AGyC1nUMi9K1Dp0PEWOddfUSVxERBNq4dEk6T3fP&2014.admissions.sat_scores.average.overall__range=1200..&_fields=school.name,school.city,school.state,school.zip,school.school_url,school.price_calculator_url,location.lat,location.lon,school.minority_serving.historically_black,2014.admissions.sat_scores.average.overall,2014.admissions.admission_rate.overall,2014.student.enrollment.all,2014.cost.attendance.academic_year,2014.cost.tuition.in_state,2014.cost.tuition.out_of_state,2014.aid.median_debt.completers.overall&_sort=2014.admissions.sat_scores.average.overall:desc&_per_page=100')

data_array = response["results"]
parsed_array = []
data_array.map! do |university|
  key_mapper = {}
  university.map do |field, value|
    key_mapper[field] = field.gsub(/2014\./, '').gsub(/\./, '_')
  end
  university.map {|field, value| [key_mapper[field], value] }.to_h
end

data_array.each do |university|
  u = University.create!(university.keys[0] => university.values[0],
                      university.keys[1] => university.values[1],
                      university.keys[2] => university.values[2],
                      university.keys[3] => university.values[3],
                      university.keys[4] => university.values[4],
                      university.keys[5] => university.values[5],
                      university.keys[6] => university.values[6],
                      university.keys[7] => university.values[7],
                      university.keys[8] => university.values[8],
                      university.keys[9] => university.values[9],
                      university.keys[10] => university.values[10],
                      university.keys[11] => university.values[11],
                      university.keys[12] => university.values[12],
                      university.keys[13] => university.values[13],
                      university.keys[14] => university.values[14],
                      university.keys[15] => university.values[15]
                      )
end
