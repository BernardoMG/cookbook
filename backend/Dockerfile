FROM ruby:2.7.1

RUN mkdir /app
WORKDIR /app

COPY Gemfile ./Gemfile
COPY Gemfile.lock ./Gemfile.lock
RUN gem install bundler
RUN bundle install

COPY . /app

EXPOSE 8080