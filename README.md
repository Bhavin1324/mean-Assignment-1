# Assignment-1 of Node and Express

## Using 'pnpm' instead of 'npm'. Introduction. 

Every byte saved on disk can be used for something else than libraries code, i.e. I have a 512GB SSD on my MacBook Pro I bought in 2010 but some brand new computers in 2019 ship with a 128GB SSD (something went wrong with Moore’s Law when it comes to hard disk space).

In particular, one way would be to centralize the libraries code storage into a central place, and share it with all the projects you work on.

This is the main value proposition of pnpm, a very cool project you can check out at https://pnpm.io

It is basically a drop-in replacement for npm, which means that once you install it, you can invoke pnpm install to download a project dependencies, and all will work transparently for you.

If you have 10 projects that use React, at the same version, pnpm will install it once, and then reference that first install across all your other projects.

This also means that the project initialization part takes much less time than if it had to download resources using the standard npm procedure. It’s faster even if npm cached the package, because pnpm makes a hard link to the central local repository, while npm makes a copy of the package from the cache.

You install pnpm using npm, of course 😁<br>
`npm install -g pnpm`

For install all the dependancies of this project using pnpm write : <br>
`pnpm install` or `pnpm i` <br>

For ad any packages to your dependancies:<br>
`pnpm add <package_name>`<br>
`pnpm add express`<br><br>
For remove any packages from your dependancies:<br>
`pnpm remove <package_name>`<br>
`pnpm remove express`

and so on ... 
Visit pnpm offical docs for more information : https://pnpm.io

## Question - 3
Deployed chat bot module as `health-assist-custom-chatbot`

install chatbot using `npm i health-assist-custom-chatbot`
