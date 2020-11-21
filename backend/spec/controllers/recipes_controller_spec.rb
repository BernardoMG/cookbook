require 'spec_helper'
require 'ostruct'
require 'sinatra/base'
require 'rack/test'

require_relative '../../app/controllers/recipes_controller'
require_relative '../helpers/recipes'

RSpec.describe RecipesController do
  include Rack::Test::Methods

  def app
    RecipesController.new
  end

  context 'Fetch recipes without errors' do
    it 'returns the recipes' do
      response = OpenStruct.new(
        body: Helpers::Recipes.recipes_response.to_json
      )
      allow(RestClient).to receive(:get) { response }

      get '/'

      result = JSON.parse(last_response.body)

      expect(last_response.status).to eq(200)
      expect(result['recipes'].length).to eq(2)
    end
  end

  context 'Fetch recipes returns an error' do
    it 'returns not found error' do
      error = OpenStruct.new(
        code: 404
      )

      allow(RestClient)
        .to receive(:get)
        .and_raise(RestClient::NotFound.new(error))

      get '/'

      result = JSON.parse(last_response.body)

      expect(last_response.status).to eq(404)
      expect(result['error']).to eq('Resource Not Found.')
    end

    it 'returns bad request error' do
      error = OpenStruct.new(
        code: 400
      )

      allow(RestClient)
        .to receive(:get)
        .and_raise(RestClient::BadRequest.new(error))

      get '/'

      result = JSON.parse(last_response.body)

      expect(last_response.status).to eq(400)
      expect(result['error']).to eq('Bad Request.')
    end

    it 'returns internal server error' do
      error = OpenStruct.new(
        code: 500
      )

      allow(RestClient)
        .to receive(:get)
        .and_raise(RestClient::Exception.new(error))

      get '/'

      result = JSON.parse(last_response.body)

      expect(last_response.status).to eq(500)
      expect(result['error']).to eq('Something went wrong. Please try again or contact support team.')
    end
  end
end
