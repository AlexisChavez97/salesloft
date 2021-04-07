# frozen_string_literal: true

require "test_helper"

class API::V1::PeopleControllerTest < ActionDispatch::IntegrationTest
  def setup
    @headers = {
      "Authorization" => "Bearer #{ENV["API_KEY"]}"
    }

    stub_request(:get, "https://api.salesloft.com/v2/people.json").
      to_return(body: %Q(
        {
          "data": [
            {
              "id": 249340741,
              "created_at": "2020-01-10T15:44:04.134541-05:00",
              "updated_at": "2020-01-20T04:46:19.961197-05:00",
              "first_name": "Steven",
              "last_name": "Pease",
              "display_name": "Steven Pease",
              "email_address": "sakatius@gmail.com",
              "phone": "7702354590",
              "title": "Software Engineer"
            }
          ]
        }
      ))
  end

  def test_index_responds_success
    get api_v1_people_path, headers: @headers
    assert_response :success
  end
end
