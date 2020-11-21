# frozen_string_literal: true

require_relative './config/environment'
require 'sinatra/base'
require 'sinatra/reloader'

configure :development do
  register Sinatra::Reloader
end

run RecipesController
