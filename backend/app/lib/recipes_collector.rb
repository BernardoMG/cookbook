require 'rest-client'
require 'json'

class RecipesCollector
  MAIN_COOKBOOK_URL = 'https://gist.githubusercontent.com/telmogoncalves/52a97a7feaf1356ad6b43058e977d5af/raw/99060ae8d15ca34fe25184eaa7e85b76aaf346f0/recipes.json'.freeze

  def self.fetch
    response = RestClient.get(MAIN_COOKBOOK_URL)
    recipes = JSON.parse(response.body)

    { message: recipes, code: 200 }
  rescue RestClient::NotFound => e
    { message: { 'error': 'Resource Not Found.' }, code: e.response.code }
  rescue RestClient::BadRequest => e
    { message: { 'error': 'Bad Request.' }, code: e.response.code }
  rescue StandardError
    { message: { 'error': 'Something went wrong. Please try again or contact support team.' }, code: 500 }
  end
end
