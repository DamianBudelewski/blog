---
title: Enhance your command line skills!
date: "2021-03-15T22:12:03.284Z"
description: "My private tips and tricks on how to make your life easier with aliases, functions, shortcuts and zsh!"
---

<img src="bash-shortcuts.gif" width="100%" />

## Aliases and autosuggestions

#### Creating simple aliases
Add those line to your `.zshrc` or `.bashrc` file! They are located in your home directory.
```bash
alias d=docker
alias ap=ansible-playbook
```

#### Enable autosuggestions with zsh
`ctrl + space` to accept suggestions  

For zsh and autosuggestions use this links: [zsh](https://ohmyz.sh/), [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

If you only want to partial accept the suggestions like it's shown at the gif above, then add this line to your .zshrc file, because by default it will accept the whole suggestion.

`bindkey '^ ' forward-word`

#### Using alias expansion  
`gss` after pressing space will expand to `git status -s`

To set it up paste this code at the end of your `.zshrc` file. 

```bash
expand-alias-space() {
  zle _expand_alias
  zle self-insert
  if [[ "$insertBlank" = "0" ]]; then
    zle backward-delete-char
  fi
}
zle -N expand-alias-space
bindkey " " expand-alias-space
bindkey -M isearch " " magic-space
```
<sub>Source: https://blog.sebastian-daschner.com/entries/zsh-aliases<sub>



## Moving and erasing


<img src="moving_cli.png" width="90%" />

#### Most used by me:  
`ctrl + a` and `ctrl + e` - jump to the beggining/end  
`alt + b` and `alt + f` - jump word backward/forward  
`ctrl + w` - remove last word  
`ctrl + l` - clear the terminal


## Special variables

#### Most recent parameter with `$_`
```bash
# Let's assume you moved file from one nested dir to another.  
mv old/nested/dir/my_file.txt new/nested/dir/my_file.txt

# To easily open it in next command use `$_`. 
vim $_
```

#### Last used command with `!!`

```bash
ubuntu@web-server:~$ systemctl restart nginx 
Authentication is required to restart 'nginx.service'.
...

ubuntu@web-server:~$ sudo !!
sudo systemctl restart nginx 
```

#### Get back to the previous location with `cd -`

```bash
$ pwd
/Users/damian

$ cd /var/log  
$ pwd
/var/log

$ cd -        
$ pwd
/Users/damian

```


## Creating and using variables

#### Get variable from json file
```bash
$ ip=$(jq -r '.vm.ip' file.json)
$ echo $ip
10.0.0.4

```

    

#### Use variable to remove all stopped containers:
```bash
docker rm $(docker ps -aq)
```

#### If you found that interesting then checkout these articles too!

[Bash cheatsheet](https://devhints.io/bash)  
[Bash shortcuts](https://gist.github.com/tuxfight3r/60051ac67c5f0445efee)   
[Learn VIM with interactive tutorial](https://www.openvim.com/)   


### Thanks! 
Got any questions? Please don't hesitate to ask! You can find me here:

linkedin.com/in/damianbudelewski/  
damian.budelewski@gmail.com
