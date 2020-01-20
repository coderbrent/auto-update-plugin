# auto-update-plugin

Motivation -

I should probably start by saying a few things about this first:

1. There's a good chance that this already exists (I didn't look because I wanted to challenge myself a little!).

2. There's a good chance that if this DOESN'T exist, there's a good reason it doesn't! :)

So what is it? I got tired of constantly having to manually add plugins into my Gatsby projects. You do install them pretty frequently, so I decided I would try to make an 'auto updater' for my gatsby-config.json file!

How am I attempting this?

My mental model for how this SHOULD work could be totally off base, but I'm thinking along the lines of using the Node fs module to `watch` the package.json file for changes -> If the file changes, `read` the file and see what was added. -> if a gatsby plugin was added, use `write` file to inject the plugin into the gatsby-config.json plugins array.

I'm also messing with this nifty js text diff implementation <a href="https://yarnpkg.com/en/package/diff">(see here)</a> to try using a diff algorithm to detect differences in the files and use the returned value to write to the gatsby-config.json file. 

