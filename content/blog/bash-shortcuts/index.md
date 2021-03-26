---
title: Enhance your command line skills!
date: "2021-03-15T22:12:03.284Z"
description: "My private tips and tricks on how to make your life easier with aliases, functions, shortcuts and zsh!"
---

## Aliases and autosuggestions

#### Creating simple aliases
Add those line to your *.zshrc* or *.bashrc* file! 
```sh
alias d=docker
alias ap=ansible-playbook
```
After that you will be able to use for example:
- `d ps` to list running containers. 
- `ap playbook.yaml` to execute your playbook. 

#### Enable autosuggestions with zsh

Imagine you can create a shortcut that will accept suggestions in your shell.
You only have to install [zsh](https://ohmyz.sh/) and plugin [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions). After that, add this line tou your *.zshrc* file and you are ready to go.
```bash
bindkey '^ ' forward-word
```
Now use this shortcut `ctrl + space` to accept suggestions  


#### Using alias expansion  
After some time and more and more aliases you might get confused what you are actually executing. To refresh your memery each time you run commands you can add alias expansion fucntionality! You will be still typing only the shortcut but after pressing *space* you will get the whole alias *expanded* to the full command.

###### For example:
- `gss` after pressing space will expand to `git status -s`
- `gcmsg` after pressing space will expand to `git commit -m`

To set it up paste this code at the end of your *.zshrc* file. 

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

#### Most handy ones:  
- `ctrl + a` and `ctrl + e` - jump to the beggining/end  
- `alt + b` and `alt + f` - jump word backward/forward  
- `ctrl + w` - remove last word  
- `ctrl + l` - clear the terminal


## Special variables

#### Most recent parameter: `$_`
The underscore variable is set at shell startup and contains the absolute file name of the shell or script being executed as passed in the argument list. Subsequently, it expands to the last argument to the previous command, after expansion. 
```bash
# move file from dir to another.  
mv one/my_file.txt two/my_file.txt

# To open it use `$_`. 
vim $_
```

#### Last used command: `!!`

Exclamation sign is the default history expansion character in bash. You could use for example *!n* to run any command from the history, for example *!4* etc. But it's not so useful and it's not worth to know. But you can use *!!* to run the last command and this is very useful, for example when you want to retry the last command with sudo.

```bash
ubuntu@web:~$ systemctl restart nginx 
Authentication required ...
...

ubuntu@web:~$ sudo !!
sudo systemctl restart nginx 
```

#### Previous location: `-`

cd - will bring you to the previously used directory (if there is one) or it will generate an error. If a previously used directory exists it will change there updating the value of the current working directory and of the previous one, returning a successful exit status (0). Otherwise it will print an error message and it will return an exit status (1).

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