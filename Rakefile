# frozen_string_literal: true

require "html_proofer"
require "base64"
require "jekyll"

desc "Checks html files looking for dead links"
task :check_links do
  options = {
    :checks_to_ignore => ["ScriptCheck"],
    :allow_hash_href  => true,
    :enforce_https    => false,
    :log_level        => :info,
  }

  Jekyll.logger.info "Checking userguide links..."

  dir = File.expand_path("./_site")

  FileUtils.mkdir_p(dir)
  HTMLProofer.check_directory(dir, options).run
end
