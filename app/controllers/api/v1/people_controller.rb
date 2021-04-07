# frozen_string_literal: true

class API::V1::PeopleController < API::V1::APIController
  def index
    result = People.all

    render json: result.body, status: result.code
  end
end