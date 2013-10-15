SAAS_Starter
============

## Overview

You can use this project as a starting point for your Software-As-A-Service with this ready to use opinionated stack using the latest PostgreSQL, RSpec, Devise, Simple Form, Twitter Bootstrap, Angular JS, And more on the way

This App builds the basics so: 

* Ruby is set using rbenv
* The latest gems (see the gemfile to see what is implemented at the moment) are all working nicely together.
* All the environment variables are stored in a simple and efficient manner overriding the Shell environment variables.
* Gitignore is updated accordingly.

Coming soon ...

* Users can sign up, receive an email and sign in once they are confirmed users.
* They can access their admin where they can refer friends and get credits for it.
* The admin is using Angular for communicating with the backend.

I assume you are using rbenv installed with ruby2.0.0 and the bundler gem at the very least.

## Installation

```console
  git clone https://github.com/giushansen/SAAS_Starter.git MyApp
```

Once you have downloaded the repo, you can set your local environment variables. For example start by putting your Postgres credentials in application.yml

```console
  cd MyApp
  bundle install
  mv cp config/application.example.yml config/application.yml
```

Create your database and launch the Puma webserver

```console
  rake db:create:all
  rails s
```
