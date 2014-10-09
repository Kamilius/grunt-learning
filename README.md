Grunt JS taskrunner learning on Paralax effect example
==============

Learning JavaSript task runner.

As an example - simple Parallax effect built based on this article http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641.
My implementation differs a bit from tutorial's, as only those elements which are in a viewport are affected. Also offset formula a bit revorked, so now code can work with images of any vertical size.

Files are compiled from 'src/' directory into 'build' upon any changes, thanks to Grunt's watch command.

In order to see Parallax itself, simply open "build/index.html"
