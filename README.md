#Makers Academy Week 5 Project - Rock Paper Scissors (Written in Javascript)  
   
###New Programs, Languages, Technologies employed.  
    
+ Javascript
+ JQuery
+ CSS
+ [Mustache](http://mustache.github.io/)
+ [Pair Programming](http://www.jayway.com/2014/05/11/ping-pong-pairing-over-git/) (for entire project)
    
###Briefing
   
Write a Rock Paper Scissors App in Javascript. My pair partner was [Nick Dyer](https://github.com/nickbdyer) - an absolute gentleman and a joy to work with. 
   
We had already built a similar app in Ruby as part of a previous Weekend Challenge - now it was time to try the same App in a new language - Javascript. 
   
The brief for this project was quite, well, brief - but it was strongly recommended to pair program and the results of the team efforts were to be presented at the end of the week. Game on!
    
###Execution
   
We first completed the game logic for Rock Paper & Scissors, being our first target for a minimum viable product (MVP). Next, we added game logic for two extra classes of Player choice: Lizard & Spoc. This was all completed TDD using **Jasmine** and using ping pong pair programming (PPPP). 
   
With working game logic, we built a 'Victory Message' that reported a dynamic string based on the results of the Player/Computer game. This part of the project introduced [Mustache](http://mustache.github.io/) as a means of templating JSON data. 
   
Next we built in a **Sintra** framework to publish to the browser, and it was at this point we also added **JQuery** animations and some **CSS** to build a slightly more aesthetic front end. We had some minor bugs and refactoring at this point - including an interesting/bemusing bug where the score-keeper for the Game went up in increments of 7(!). Based on things like that - I could guess that 80% of our progress in 20% of the time we spent overall!  
   
Lastly we published to Heroku after a lot of snags and failed uploads. Heroku can be very frustrating! 
   
The end result:
   
![alt text](images/RPSJS.png
"Rock Paper Scissors Lizard Spock")

####Lessons Learned
    
FizzBuzz was about as much Javascript as I had done *before* this challenge, so this was definately an immersive exercise. 
   
I also felt as though the level of complexity went up a couple of levels during this week, we were left slightly more to our own devices, and the learning process was more independent. 'Learning how to learn'. 
   
I had a very enjoyable pair programming experience. It doesn't have to be difficult or less productive, as has been widely advertised. We caught each others typo's, kept each other on track and discussed problems as they cropped all the way through the project. We wouldn't have made the progress we did if we had worked individually.  
    
    
**END*
