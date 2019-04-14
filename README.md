# charlotte-ruby.github.com

Charlotte Ruby User Group Website

## Getting Started

    git clone git@github.com:charlotte-ruby/charlotte-ruby.github.com.git
    cd charlotte-ruby.github.com
    git checkout -b source origin/source
    bundle exec rake preview

At this point you should be able to see preview the site at 
[http://localhost:4000](http://localhost:4000)

## Adding a New Page or Post

    git checkout source
    bundle exec rake new_post["Sample Title: something something"]

 You'll want to work on the source for your blog in the source branch 
 and commit the generated content to the master branch. To commit

## Deploying changes

    git checkout source
    bundle exec rake gen_deploy

This will put the generated content from \_deploy onto master and 
push it github. You'll still need to add the modified files to the source 
branch so they get saved to git (i.e. blog posts, static files, etc).
