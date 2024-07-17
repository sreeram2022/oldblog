---
author: Sreeram venkata
title: How do I use my zsh
date: 2024-03-08
description: A brief guide to setup ZSH
math: true
tags:
  - "mac"
  - "linux"
---

## my zsh

Let’s talk about mac terminal. So, generally Mac comes with basic and boring
terminal(zsh).

For a long time I didn’t know the power we can leverage using zsh. I looked in
to youtube for terminal setup found few amazing tutorials to make my terminal
flexible as well as aesthetic.

Almost all of the tutorials explained the same thing:

Installing Iterm2 and oh my zsh framework A powerlevel10k theme A nerd font ( I
use jetbrains mono) Configure .zshrc file to my own needs such as auto
completions & few aliases…. Then I made my terminal mildly transparent to make
it look more charming.

So, since I’m addicted to aesthetics of my terminal I wanted learn vim so that I
can stick with it while coding and jotting down ideas.

Initially it seemed worthless effort. But after few weeks of “trying and
leaving”, one fine day I determined to learn vim. The basic idea here is you
should be able to finish your entire time in vim without lifting your fingers on
your keyboard. I wanted to list out the commands that I use, but it’s pretty
useless, you can find better documentation here.

Apart from using :vsp to vertically split screen to compare 2 files at the same
time, I configured (aliased) few plugins that I use often. To access nerdtree
press F1, you can toggle using ctrl+w or you can also use mouse. If you add
#!/usr/bin/env python3 at the beginning of python file you can click F2 to run
it or else you should run with :! command.

I recently need to download my telegram chat history. When I’ve downloaded it
gave me all these html files. But I really don’t wanna store every file. I want
one single html file with all the data. So run a python command to get me the
names as I desired. Then I use cat command on my mac terminal to concatenate all
the files.
