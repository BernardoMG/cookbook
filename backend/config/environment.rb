# frozen_string_literal: true

require 'bundler/setup'
Bundler.require(:default, ENV['SINATRA_ENV'])

Dir.glob(('./app/**/*.rb')).sort.each do |filename|
  require filename
end
