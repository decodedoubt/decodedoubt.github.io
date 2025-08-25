# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll", "~> 4.3.3"
gem "webrick", "~> 1.8"   # local server के लिए जरूरी
gem "jekyll-remote-theme" # remote theme enable करने के लिए

group :test do
  gem "html-proofer", "~> 5.0"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", platforms: [:mingw, :x64_mingw, :mswin]
