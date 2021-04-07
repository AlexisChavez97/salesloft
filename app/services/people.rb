# frozen_string_literal: true

class People
  HOST = "https://api.salesloft.com"
  TOKEN = "Bearer #{ENV["API_KEY"]}"

  def self.all
    path = "v2/people.json"
    uri = URI("#{HOST}/#{path}")
    request = Net::HTTP::Get.new(uri)
    request["Authorization"] = TOKEN

    Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http|
      http.request(request)
    }
  end
end
