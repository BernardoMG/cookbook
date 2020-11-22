require_relative '../lib/recipes_collector'

# Main controller - Fetch data about recipes
# and responds depending on the result of the HTTP request
# Returns:
#  - 200 OK - Recipes data
#  - 404    - Resource not found
#  - 400    - Bad request
#  - 500    - Internal server error
class RecipesController < Sinatra::Base

  # GET /
  get '/' do
    # Deal with cross origin
    # This should be changed for production environment
    headers 'Access-Control-Allow-Origin' => 'http://localhost:3000'
    content_type :json

    result = RecipesCollector.fetch

    status result[:code]
    result[:message].to_json
  end
end
