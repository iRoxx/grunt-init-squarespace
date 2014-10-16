grunt-init-gruntnautilus
========================

[grunt]: http://github.com/gruntjs/grunt
[grunt-nautilus]: http://github.com/kitajchuk/grunt-nautilus
[grunt-init]: http://gruntjs.com/project-scaffolding
[caribou]: http://let-caribou.in/
[spring]: http://spring.io/
[middleman]: http://middlemanapp.com/
[squarespace]: http://developers.squarespace.com/

> Creates a [grunt-nautilus][] Gruntfile with [grunt-init][].



## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, clone the grunt-init-squarespace template into your `~/.grunt-init/` directory:

```shell
git clone https://github.com/kitajchuk/grunt-init-squarespace.git ~/.grunt-init/squarespace
```

If you already have grunt-init-squarespace installed and need to update it, you can do the following:

```shell
cd ~/.grunt-init/squarespace

git pull origin master
```



## Usage

This init template is installing with the latest release of [grunt-nautilus][]. Run the following command from your project's root:

```shell
grunt-init squarespace --project "Firefly"
```


This creates the following files in the cwd:

- .gitignore
- Gruntfile.js
- package.json
- sqs_template

Now you can install the necessary packages:

```shell
# Node modules
npm install
```

This will install grunt, grunt-nautilus and its peer packages as well as jquery and hammerjs.



## Grunt Nautilus Plugin

Checkout the [grunt-nautilus][] plugin to continue.