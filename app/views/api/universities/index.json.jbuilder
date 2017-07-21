@universities.each do |university|
  json.set! university.id do
    json.partial! '/api/universities/university', university: university 
  end
end
