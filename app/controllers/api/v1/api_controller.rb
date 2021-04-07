
# frozen_string_literal: true

class API::V1::APIController < ActionController::Base
  skip_before_action :verify_authenticity_token
end