@follows.each do |follow|
  json.set! follow.id do
    json.partial! '/api/followed_universities/follow', follow: follow 
  end
end
