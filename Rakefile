require 'html_proofer'

desc "Checks html files looking for dead links"
task :check_links do
  options = {
    :checks_to_ignore => ["ScriptCheck"],
    :allow_hash_href  => true,
    :enforce_https    => false,
    :log_level        => :debug,
  }

  puts 'Checking userguide links...'

  HTMLProofer.check_directory("./_site", options).run
end
