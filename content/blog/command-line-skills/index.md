---
title: Enhance your command line skills!
date: "2021-03-27"
description: "My private tips and tricks on how to make your life easier when working with command line by creating aliases, functions, shortcuts and using zsh as your shell!"
---

## Aliases and autosuggestions


##### Creating simple aliases
Add those line to your *.zshrc* or *.bashrc* file! 
```sh
alias d='docker'
alias ap='ansible-playbook'
```

After that you will be able to use for example:
- `d ps` to list running containers. 
- `ap playbook.yaml` to execute your playbook. 

##### Enable autosuggestions with zsh

You can see suggestions based on your previous commands and create a shortcut that will accept suggestions in your shell! You only have to install [zsh](https://ohmyz.sh/) as your new shell and install and enable [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) plugin. Click on the links to find how to do this. After you install those, add this line to your *.zshrc* file to enable `ctrl + space` shortcut to accept suggestions and you are ready to go.

```bash
bindkey '^ ' forward-word
```

##### Using alias expansion  
After some time and more and more aliases you might get confused what you are actually executing. To refresh your memery each time you run commands you can add alias expansion fucntionality! You will be still typing only the shortcut but at the end after pressing `space` you will get the whole alias **expanded** to the full command.

###### Example:
- `gss` expands to `git status -s`

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

##### How it looks like
 
In this example I'm only using the shortcut to accept suggestions and expand aliases I explained earlier in this blog post. 
Just to remind it's: 
- `space` - to expand an alias
- `ctrl + space` - accept suggestion

<p align="center">
  <img src="moving_cli.gif" style="border-radius: 2%;" width="100%" height="100%"/>
</p>


## Moving and erasing


<img src="moving_cli.png" width="90%" />

##### Most handy ones
- `ctrl + a` and `ctrl + e` 
- `alt + b` and `alt + f` 
- `ctrl + w` to remove last word

##### Additional one
- `ctrl + l` - clear the terminal


## Special variables

##### Most recent parameter: `$_`
The underscore variable is set at shell startup and contains the absolute file name of the shell or script being executed as passed in the argument list. Subsequently, it expands to the last argument to the previous command, after expansion. 

```bash
# mv file from one dir to another.  
mv dir1/file.txt dir2/file.txt

# open it with `$_`. 
vim $_
```

##### Last used command: `!!`

Exclamation sign is the default history expansion character in bash. You could use for example *!3* to run third command from your bash history. It might seems tricky and I would no recommend that. But you can use *!!* to run the last command and this is very useful, for example when you want to retry the last one after it fails without sudo.

```bash
web:~$ systemctl restart nginx 
Authentication required ...
...

web:~$ sudo !!
sudo systemctl restart nginx 
```

##### Previous location: `-`


It's actually an alias for $OLDPWD variable. You can check that by using cd $OLDPWD instead, and it will work the same way.
> If a previously used directory exists it will change there updating the value of the current working directory and of the previous one, returning a successful exit status (0). Otherwise it will print an error message and it will return an exit status (1).

This note from documentation is worth to remember if you will want to use this variable inside bash scripts.


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

This is mostly implemented in bash scripts but it's also helpful when you want to test/debug something in your terminal. It might clean up your complex commands and save time.

##### Use variable to stop and remove all running containers:

I leverage the possibility to parse commands as variables to other commands in one line very often. This is a great example.

```bash
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
```

##### Using variables in cloud commands
```bash
ip=$(aws ec2 describe-instances \ 
  --instance-id i-0fa82200000000 \ 
  --region eu-west-1 \ 
  --query 'Reservations[*].Instances[*].PublicIpAddress' \ 
  --output text)

sec_grp_id=$(aws cloudformation describe-stacks \ 
  --region eu-west-1 --stack-name my-cluster \ 
  --query "Stacks[*].Outputs[?OutputKey=='app-sg'].OutputValue")

ec2 authorize-security-group-ingress \ 
  --protocol tcp --port 3306 \ 
  --cidr $ip/32 --group-id $sec_grp_id
```

It's all for this post. I hope you found that interesting. If you want to learn more then checkout these articles too!

[Bash cheatsheet](https://devhints.io/bash)  
[Bash shortcuts](https://gist.github.com/tuxfight3r/60051ac67c5f0445efee)   
[Learn VIM with interactive tutorial](https://www.openvim.com/)   


### Thanks! 
Got any questions? 

You can find me on [![LinkedIn][1.2]][1] or send me an email: damian.budelewski@gmail.com

[1.2]: https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/linkedin-3-16.png (LinkedIn)
[1]: https://www.linkedin.com/in/damianbudelewski/