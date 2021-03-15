---
title: Enhance your command line skills!
date: "2021-03-15T22:12:03.284Z"
description: "My private tips and tricks on how to make your life easier with aliases, functions, shortcuts and zsh!"
---

<img src="bash-shortcuts.gif" width="100%" />

## Aliases and shortcuts

If you don't want to waste your time one re-typing commands, moving along the line with the arrow keys then please take a look at this examples. If you don't know them already then make sure to give it a try!

*zsh with autosuggestions*  
    - `ctrl + space to accept suggestions`  

*moving along the line*  
    - `ctrl + a` to jump to the beggining  
    - `ctrl + e` to jump to the end  
    - `ctrl + w` to remove last word  

*creating simple aliases*  
    - `alias d=docker`  
    - `alias ap=ansible-playbook`  

*using alias expansion*  
    - `gss` after pressing space will expand to `git status -s`

*using internal variables*  
    - To open the file after such cmd `mkdir -p few/nested/dirs/my_file.txt`   
    use `cat $_`. Without it you will have to specify all the directories once more!
    

## How to set it up?

For zsh and autosuggestions use this links: [zsh](https://ohmyz.sh/), [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

If you only want to partial accept the suggestions like it's shown at the gif above, then add this line to your .zshrc file, because by default it will accept the whole suggestion.

`bindkey '^ ' forward-word`

The next thing is alias expansion functionality. I find it very usefull, especially when I want to change something in the alias after expanding it. To achieve that paste this code at the end of your `.zshrc` file. 

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

### Hope you will find this useful. Thanks!
