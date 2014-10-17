grunt-init-squarespace
======================

[grunt]: http://github.com/gruntjs/grunt
[grunt-nautilus]: http://github.com/kitajchuk/grunt-nautilus
[grunt-init]: http://gruntjs.com/project-scaffolding
[squarespace]: http://developers.squarespace.com/
[node-squarespace-server]: https://github.com/kitajchuk/node-squarespace-server/

> Creates a [grunt-nautilus][] Gruntfile with [grunt-init][] to compile into a [squarespace][] template.



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
This init template is installing with the latest release of [grunt-nautilus][]. Run the following command from your project's root, replacing "Firefly" with your project name:

```shell
grunt-init squarespace --project "Firefly" --remote "https://firefly.squarespace.com/template.git"
```


This creates the following files in the current working directory:

- .gitignore
- Gruntfile.js
- package.json

Now you can install the necessary packages:

```shell
# Node modules
npm install
```

This will install grunt, grunt-nautilus and its peer packages as well as jquery and hammerjs.



## Squarespace
Now clone your [squarespace][] template into a directory called `sqs_template` directory and manage your site pushes from there.

```shell
git clone https://firefly.squarespace.com/template.git sqs_template
```

You can also check out [node-squarespace-server][] if you are interested in a local server for your project workflow.