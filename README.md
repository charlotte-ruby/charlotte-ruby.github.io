# charlotte-ruby.github.io

Charlotte Ruby User Group Website

[![Ruby](https://github.com/charlotte-ruby/charlotte-ruby.github.io/actions/workflows/test.yml/badge.svg)](https://github.com/charlotte-ruby/charlotte-ruby.github.io/actions/workflows/test.yml)

## Getting Started

```sh
git clone git@github.com:charlotte-ruby/charlotte-ruby.github.io.git
cd charlotte-ruby.github.io
git checkout master
bundle
bundle exec jekyll s -l
```

At this point you should be able to see preview the site at
[http://localhost:4000](http://localhost:4000)

## Adding a New Page or Post

```sh
touch _posts/$(date +"%Y-%m-%d")_name_of_my_post.md
git add _posts/*
git commit -m "added new post"
bundle exec jekyll s
```

## Contributing

```sh
git checkout -b my-new-branch
git add new-stuff
git commit -m "I added new stuff"
git push -u origin my-new-branch
gh pr
```

## Deploying changes

Deployments happen automatically via Github Actions on the master branch
