require 'spec_helper'
require 'ostruct'

require_relative '../../app/lib/recipes_collector'
require_relative '../helpers/recipes'

RSpec.describe RecipesCollector do
  context 'Fetch recipes without errors' do
    it 'returns the recipes' do
      response = OpenStruct.new(
        body: Helpers::Recipes.recipes_response.to_json
      )
      allow(RestClient).to receive(:get) { response }

      result = RecipesCollector.fetch

      expect(result[:code]).to eq(200)
      expect(result[:message]['recipes'].length).to eq(2)
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

      result = RecipesCollector.fetch

      expect(result[:code]).to eq(404)
      expect(result[:message][:error]).to eq('Resource Not Found.')
    end

    it 'returns bad request error' do
      error = OpenStruct.new(
        code: 400
      )

      allow(RestClient)
        .to receive(:get)
        .and_raise(RestClient::BadRequest.new(error))

      result = RecipesCollector.fetch

      expect(result[:code]).to eq(400)
      expect(result[:message][:error]).to eq('Bad Request.')
    end

    it 'returns internal server error' do
      error = OpenStruct.new(
        code: 500
      )

      allow(RestClient)
        .to receive(:get)
        .and_raise(RestClient::Exception.new(error))

      result = RecipesCollector.fetch

      expect(result[:code]).to eq(500)
      expect(result[:message][:error]).to eq('Something went wrong. Please try again or contact support team.')
    end
  end
end
