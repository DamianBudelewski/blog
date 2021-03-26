---
title: Enhance your command line skills!
date: "2021-03-15T22:12:03.284Z"
description: "My private tips and tricks on how to make your life easier with aliases, functions, shortcuts and zsh!"
---

## Aliases and autosuggestions

#### Creating simple aliases
Add those line to your `.zshrc` or `.bashrc` file! They are located in your home directory.
```sh
alias d=docker
alias ap=ansible-playbook
```


#### Enable autosuggestions with zsh
`ctrl + space` to accept suggestions  

For zsh and autosuggestions use this links: [zsh](https://ohmyz.sh/), [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

If you only want to partial accept the suggestions like it's shown at the gif above, then add this line to your .zshrc file, because by default it will accept the whole suggestion.

```bash
bindkey '^ ' forward-word
```

#### Using alias expansion  
`gss` after pressing space will expand to `git status -s`

To set it up paste this code at the end of your `.zshrc` file. 

```bash {numberLines :55}
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
- `ctrl + a` and `ctrl + e` - jump to the beggining/end  
- `alt + b` and `alt + f` - jump word backward/forward  
- `ctrl + w` - remove last word  
- `ctrl + l` - clear the terminal


## Special variables

#### Most recent parameter: `$_`
```bash
# move file from dir to another.  
mv one/my_file.txt two/my_file.txt

# To open it use `$_`. 
vim $_
```

#### Last used command: `!!`

```bash
ubuntu@web:~$ systemctl restart nginx 
Authentication required ...
...

ubuntu@web:~$ sudo !!
sudo systemctl restart nginx 
```

#### Previous location: `-`

```bash
ubuntu@web:~$ pwd
/etc/nginx

ubuntu@web:~$ cd /var/log  
ubuntu@web:~$ pwd
/var/log

ubuntu@web:~$ cd -        
ubuntu@web:~$ pwd
/etc/nginx
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
Got any questions? 

You can find me on [![LinkedIn][1.2]][1] or send me an email: damian.budelewski@gmail.com

[1.2]: https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/linkedin-3-16.png (LinkedIn)
[1]: https://www.linkedin.com/in/damianbudelewski/