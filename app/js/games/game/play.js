(function(Phaser) {
'use strict';

    angular
        .module('App')
        .factory('gamePlay', gamePlay);

    gamePlay.$inject = ['$cordovaVibration', '$timeout'];
    function gamePlay($cordovaVibration, $timeout) {




//  o8o               o8o      .                             
//  `"'               `"'    .o8                             
// oooo  ooo. .oo.   oooo  .o888oo                           
// `888  `888P"Y88b  `888    888                             
//  888   888   888   888    888                             
//  888   888   888   888    888 .                           
// o888o o888o o888o o888o   "888"                           
                                                 
//  .o8                           o8o                        
// "888                           `"'                        
//  888oooo.   .oooo.    .oooo.o oooo   .ooooo.              
//  d88' `88b `P  )88b  d88(  "8 `888  d88' `"Y8             
//  888   888  .oP"888  `"Y88b.   888  888                   
//  888   888 d8(  888  o.  )88b  888  888   .o8             
//  `Y8bod8P' `Y888""8o 8""888P' o888o `Y8bod8P'             
                            
//                      .o8                                  
//  .oooo.o  .ooooo.  .o888oo         oooo  oooo  oo.ooooo.  
// d88(  "8 d88' `88b   888           `888  `888   888' `88b 
// `"Y88b.  888ooo888   888   8888888  888   888   888   888 
// o.  )88b 888    .o   888 .          888   888   888   888 
// 8""888P' `Y8bod8P'   "888"          `V88V"V8P'  888bod8P' 
//                                                 888       
//                                                o888o      
                                                          

        var $scope = null;
        
        var game = {


            init: function() {

    // BACKGROUND COLOR     
                this.stage.backgroundColor = "#41C9D6";
    // MAX POINTERS
    // The maximum number of Pointers allowed to be active at any one time. 
    // This excludes the mouse pointer.
    // A value of -1 is only limited by the total number of pointers. 
    // For lots of games it's useful to set this to 1.
                this.input.maxPointers = 1;
    // DISABLE VISIBILITY CHANGE
    // By default if the browser tab loses focus the game will pause. 
    // You can stop that behaviour by setting this property to true.
                this.stage.disableVisibilityChange = true;
    // ScaleMode RESIZE
    // A scale mode that causes the Game size to change
                this.scale.scaleMode = Phaser.ScaleManager.RESIZE; 
    // FullScreenScaleMode EXACT_FIT
    // A scale mode that stretches content to fill all available space
                this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;



    // MAKE GAME RUN IN LANDSCAPE MODE
                // this.game.scale.forceOrientation(true, false);
                // this.game.scale.enterIncorrectOrientation.add(handleIncorrect);
                // this.game.scale.leaveIncorrectOrientation.add(handleCorrect);
        
                // function handleIncorrect(){
                //         document.getElementById("turn").style.display="block";
                // }

                // function handleCorrect(){
                //         document.getElementById("turn").style.display="none";
                // }



    // When enabled the Display canvas will be horizontally-aligned in the Parent container (or window).
    // To align horizontally across the page the Display canvas should be added directly to page; or the parent container should itself be horizontally aligned.
    // Horizontal alignment is not applicable with the RESIZE scaling mode.
                this.scale.pageAlignHorizontally = true;
    // http://phaser.io/docs/2.4.4/Phaser.ScaleManager.html#pageAlignHorizontally
                this.scale.pageAlignVertically = true;
                this.scale.updateLayout();

    // It will ensure that when sprites are rendered they are done so using integer positions. 
    // Without this sprites can often render at sub-pixel positions, causing them to 'blur' as Canvas tries to anti-alias them between the two pixels.
                this.game.renderer.renderSession.roundPixels = true;
                this.game.time.desiredFps = 60;

			},



//                               oooo                            .o8    .o      o.   
//                               `888                           "888   .8'      `8.  
// oo.ooooo.  oooo d8b  .ooooo.   888   .ooooo.   .oooo.    .oooo888  .8'        `8. 
//  888' `88b `888""8P d88' `88b  888  d88' `88b `P  )88b  d88' `888  88          88 
//  888   888  888     888ooo888  888  888   888  .oP"888  888   888  88          88 
//  888   888  888     888    .o  888  888   888 d8(  888  888   888  `8.        .8' 
//  888bod8P' d888b    `Y8bod8P' o888o `Y8bod8P' `Y888""8o `Y8bod88P"  `8.      .8'  
//  888                                                                 `"      "'   
// o888o                                                                             
                                                                                  
                     
                                                                   
            preload: function(){

    // LOAD ALL IMAGES AND SOUNDS

                this.game.load.image('jelly-blue', 'assets/jelly-blue.png');
                this.game.load.image('jelly-yellow', 'assets/jelly-yellow.png');
                this.game.load.image('jelly-green', 'assets/jelly-green.png');
                this.game.load.image('jelly-red', 'assets/jelly-red.png');
                this.game.load.image('jelly-pink', 'assets/jelly-pink.png');
                this.game.load.image('jelly-grey', 'assets/jelly-grey.png');

                this.game.load.image('tube', 'assets/tube.png');
                this.game.load.image('ground', 'assets/ground.png');
                // this.game.load.spritesheet('bird', 'assets/bird.png', 75, 55);

                this.game.load.audio('hit', ['audio/hit.ogg']);
                this.game.load.audio('die', ['audio/die.ogg']);
                this.game.load.audio('point', ['audio/point.ogg']);
                this.game.load.audio('wing', ['audio/wing.ogg', 'audio/wing.mp3']);             

            },


//                                            .             
//                                          .o8             
//  .ooooo.  oooo d8b  .ooooo.   .oooo.   .o888oo  .ooooo.  
// d88' `"Y8 `888""8P d88' `88b `P  )88b    888   d88' `88b 
// 888        888     888ooo888  .oP"888    888   888ooo888 
// 888   .o8  888     888    .o d8(  888    888 . 888    .o 
// `Y8bod8P' d888b    `Y8bod8P' `Y888""8o   "888" `Y8bod8P' 
                                                         

            create: function(){




//                                 o8o             .o8       oooo                     
//                                 `"'            "888       `888                     
// oooo    ooo  .oooo.   oooo d8b oooo   .oooo.    888oooo.   888   .ooooo.   .oooo.o 
//  `88.  .8'  `P  )88b  `888""8P `888  `P  )88b   d88' `88b  888  d88' `88b d88(  "8 
//   `88..8'    .oP"888   888      888   .oP"888   888   888  888  888ooo888 `"Y88b.  
//    `888'    d8(  888   888      888  d8(  888   888   888  888  888    .o o.  )88b 
//     `8'     `Y888""8o d888b    o888o `Y888""8o  `Y8bod8P' o888o `Y8bod8P' 8""888P' 
                                                                                   
                                                                                                                                                                  

    // SET INITIAL VARIABLES
                this.isDebugging = $scope.isDebugging;
                this.totalScore = 0;
                this.started = false;
                this.dead = false;
                this.canJump = true;
                this.canRestart = false;



//                                     oooo        .o8              
//                                     `888       "888              
// oooo oooo    ooo  .ooooo.  oooo d8b  888   .oooo888              
//  `88. `88.  .8'  d88' `88b `888""8P  888  d88' `888              
//   `88..]88..8'   888   888  888      888  888   888              
//    `888'`888'    888   888  888      888  888   888              
//     `8'  `8'     `Y8bod8P' d888b    o888o `Y8bod88P"             
                                                                                                                 
//  .o8                                               .o8           
// "888                                              "888           
//  888oooo.   .ooooo.  oooo  oooo  ooo. .oo.    .oooo888   .oooo.o 
//  d88' `88b d88' `88b `888  `888  `888P"Y88b  d88' `888  d88(  "8 
//  888   888 888   888  888   888   888   888  888   888  `"Y88b.  
//  888   888 888   888  888   888   888   888  888   888  o.  )88b 
//  `Y8bod8P' `Y8bod8P'  `V88V"V8P' o888o o888o `Y8bod88P" 8""888P' 
                                                                 
     

    // GAME WORLD BOUNDS
    // By default we set the Bounds to be from 0,0 to Game.width,Game.height. 
    // I.e. it will match the size given to the game constructor with 0,0 representing the top-left of the display. 
    // However 0,0 is actually the center of the world, and if you rotate or scale the world all of that will happen from 0,0.
    // http://phaser.io/docs/2.4.4/Phaser.World.html#bounds
        this.game.world.setBounds(0, 0, this.game.width, this.game.height);

    //  The bounds of our physics simulation
        var bounds = new Phaser.Rectangle(0, 0, this.game.width, this.game.height);
    //  Just to display the bounds
        var graphics = this.game.add.graphics(bounds.x, bounds.y);
        graphics.lineStyle(2, 0xff0000, 1);
        graphics.drawRect(0, 0, bounds.width, bounds.height);
    
    // ADD ARCADE PHYSICS TO GAME
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // ADD P2 PHYSICS TO GAME
        // game.physics.startSystem(Phaser.Physics.P2JS);
        // game.physics.p2.restitution = 0.9;

    // CHECK COllISION
    // Set the checkCollision properties to control which directions collision is processed for this Body. 
    // For example checkCollision.up = false means it won't collide when the collision happened while moving up. 
    // An object containing allowed collision.
    // http://phaser.io/docs/2.4.4/Phaser.Physics.Arcade.Body.html
        this.game.physics.arcade.checkCollision.up = false;


//                               o8o      .             
//                               `"'    .o8             
//  .oooo.o oo.ooooo.  oooo d8b oooo  .o888oo  .ooooo.  
// d88(  "8  888' `88b `888""8P `888    888   d88' `88b 
// `"Y88b.   888   888  888      888    888   888ooo888 
// o.  )88b  888   888  888      888    888 . 888    .o 
// 8""888P'  888bod8P' d888b    o888o   "888" `Y8bod8P' 
//           888                                        
//          o888o                                       
                                                     
// MAIN CHARACTER

    // ADD SPRITE AND POSITION
        this.sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'jelly-blue');
        this.sprite.anchor.set(0.6);
        this.sprite.scale.set(0.2);

        // this.sprite2 = this.game.add.sprite(this.game.world.centerX/2, this.game.world.centerY, 'jelly-yellow');
        // this.sprite2.anchor.set(0.5);
        // this.sprite2.scale.set(0.2);

        // this.sprite3 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY/2, 'jelly-green');
        // this.sprite3.anchor.set(0.5);
        // this.sprite3.scale.set(0.2);

        // this.sprite4 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + this.game.world.centerY/2, 'jelly-red');
        // this.sprite4.anchor.set(0.5);
        // this.sprite4.scale.set(0.2);

        // this.sprite5 = this.game.add.sprite(this.game.world.centerX + (this.game.world.centerX/2), this.game.world.centerY, 'jelly-pink');
        // this.sprite5.anchor.set(0.5);
        // this.sprite5.scale.set(0.2);

        // this.sprite6 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY/4, 'jelly-grey');
        // this.sprite6.anchor.set(0.5);
        // this.sprite6.scale.set(0.2);

    // SPRITE ANIMATION WHEN STILL
        // this.sprite.animations.add('fly', null, 15, true);
        // this.sprite.animations.play('fly');
        // this.tweenFly = this.game.add.tween(this.sprite);
        // this.tweenFly.to({ y: this.sprite.y + 20}, 400, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

        // this.sprite2.animations.add('fly', null, 15, true);
        // this.sprite2.animations.play('fly');
        // this.tweenFly = this.game.add.tween(this.sprite2);
        // this.tweenFly.to({ y: this.sprite2.y + 20}, 400, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

        // this.sprite3.animations.add('fly', null, 15, true);
        // this.sprite3.animations.play('fly');
        // this.tweenFly = this.game.add.tween(this.sprite3);
        // this.tweenFly.to({ y: this.sprite3.y + 20}, 400, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

        // this.sprite4.animations.add('fly', null, 15, true);
        // this.sprite4.animations.play('fly');
        // this.tweenFly = this.game.add.tween(this.sprite4);
        // this.tweenFly.to({ y: this.sprite4.y + 20}, 400, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

        // this.sprite5.animations.add('fly', null, 15, true);
        // this.sprite5.animations.play('fly');
        // this.tweenFly = this.game.add.tween(this.sprite5);
        // this.tweenFly.to({ y: this.sprite5.y + 20}, 400, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

        // this.sprite6.animations.add('fly', null, 15, true);
        // this.sprite6.animations.play('fly');
        // this.tweenFly = this.game.add.tween(this.sprite6);
        // this.tweenFly.to({ y: this.sprite6.y + 20}, 400, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);


                                                     
                                                     
//  .oooooooo oooo d8b  .ooooo.  oooo  oooo  oo.ooooo.  
// 888' `88b  `888""8P d88' `88b `888  `888   888' `88b 
// 888   888   888     888   888  888   888   888   888 
// `88bod8P'   888     888   888  888   888   888   888 
// `8oooooo.  d888b    `Y8bod8P'  `V88V"V8P'  888bod8P' 
// d"     YD                                  888       
// "Y88888P'                                 o888o      
                                                     



//     .                .o8                          
//   .o8               "888                          
// .o888oo oooo  oooo   888oooo.   .ooooo.   .oooo.o 
//   888   `888  `888   d88' `88b d88' `88b d88(  "8 
//   888    888   888   888   888 888ooo888 `"Y88b.  
//   888 .  888   888   888   888 888    .o o.  )88b 
//   "888"  `V88V"V8P'  `Y8bod8P' `Y8bod8P' 8""888P' 
                                                  
                                                  
                                                  
    // ADD GROUP EXAMPLE
                this.game.load.image('tube', 'assets/tube.png');

                this.tubes = this.game.add.group();
                this.tubes.enableBody = true;
                this.tubes.createMultiple(12, 'tube');
                this.newtubes = this.game.time.events.loop(1500, this.newTube, this);
                this.newtubes.timer.stop(false);

    // ADD SENSORS EXAMPLE
                this.sensors = this.game.add.group();
                this.sensors.enableBody = true;




//                                                             .o8  
//                                                            "888  
//  .oooooooo oooo d8b  .ooooo.  oooo  oooo  ooo. .oo.    .oooo888  
// 888' `88b  `888""8P d88' `88b `888  `888  `888P"Y88b  d88' `888  
// 888   888   888     888   888  888   888   888   888  888   888  
// `88bod8P'   888     888   888  888   888   888   888  888   888  
// `8oooooo.  d888b    `Y8bod8P'  `V88V"V8P' o888o o888o `Y8bod88P" 
// d"     YD                                                        
// "Y88888P'                                                        
                                                                 

    // SCROLLING GROUND        
                var groundCache = this.game.cache.getFrame('ground');

                this.ground = this.game.add.tileSprite(-10, this.game.height, this.game.width + 20, groundCache.height, 'ground');

                this.ground.anchor.y = 1;
                this.game.physics.arcade.enable(this.ground);
                this.ground.body.immovable = true;
                this.ground.body.moves = false;
                this.ground.autoScroll(-50, 0);

    // BIRD WORLD BOUNDS ATTRIBUTES
                this.sprite.checkWorldBounds = true;
                this.sprite.pivot.x = -this.sprite.width/2;
                this.sprite.events.onOutOfBounds.add(function(){
                    this.canJump = false;
                }, this);
                this.sprite.events.onEnterBounds.add(function(){
                    this.canJump = true;
                }, this);
    
    // SCOREBOARD
                this.game.input.onDown.add(this.jump, this);
                this.scoreText = this.game.add.text(this.game.world.centerX, this.game.world.centerY/3, "0", { font: "60px Arial", fill: "#ffffff" }); 
                this.scoreText.anchor.set(0.5);
                
    // ATTACH AUDIO TO HITS
                this.hitAudio = this.add.audio('hit');
                this.dieAudio = this.add.audio('die');
                this.pointAudio = this.add.audio('point');
                this.wingAudio = this.add.audio('wing');


                                                                   
                                                                   
//  .ooooo.   .oooo.   ooo. .oo.  .oo.    .ooooo.  oooo d8b  .oooo.   
// d88' `"Y8 `P  )88b  `888P"Y88bP"Y88b  d88' `88b `888""8P `P  )88b  
// 888        .oP"888   888   888   888  888ooo888  888      .oP"888  
// 888   .o8 d8(  888   888   888   888  888    .o  888     d8(  888  
// `Y8bod8P' `Y888""8o o888o o888o o888o `Y8bod8P' d888b    `Y888""8o 
                                                                   
                                                                                                                          

// CAMERA
// ====================================================
// CAMERA FOLLOWS SPRITE
    // game.camera.follow(sprite);
// DEADZONE
    // game.camera.deadzone = new Phaser.Rectangle(200, 150, 500, 400);
    // game.camera.deadzone = new Phaser.Rectangle(135, 110, 650, 500);



// SCOREBOARD
// ====================================================
    // var t = game.add.text(0, 0, "Kills: ", { font: "14px Serif", fill: "#ffffff", align: "center" });
    // t.fixedToCamera = true;
    // t.cameraOffset.setTo(750, 32);


// SPEED
// ====================================================

//  jelly-blue SPEED 
    // sprite.body.maxVelocity.set(150);

//  DRAG TO SLOW DOWN FROM MAX SPEED (jelly-blue WEIGHT)
    // sprite.body.drag.set(800);


// RANDOM CHARACTERS
// ====================================================
    // for (var i = 0; i < 10; i++)
    //     {game.add.sprite(game.world.randomX, game.world.randomY, 'sonic');}


// WEAPONS
// ====================================================

//  BULLETS SETUP
    // bullets = game.add.group();
    // bullets.enableBody = true;
    // bullets.physicsBodyType = Phaser.Physics.ARCADE;

//  NUMBER OF BULLETS BEFORE RELOAD
    // bullets.createMultiple(180, 'bullet');
    // bullets.setAll('anchor.x', 0.5);
    // bullets.setAll('anchor.y', 0.5);





// KEYBOARD
// ====================================================

//  KEYBOARD
    // cursors = game.input.keyboard.createCursorKeys();
    // game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);



            },


//              .                          .     .o      o.   
//            .o8                        .o8    .8'      `8.  
//  .oooo.o .o888oo  .oooo.   oooo d8b .o888oo .8'        `8. 
// d88(  "8   888   `P  )88b  `888""8P   888   88          88 
// `"Y88b.    888    .oP"888   888       888   88          88 
// o.  )88b   888 . d8(  888   888       888 . `8.        .8' 
// 8""888P'   "888" `Y888""8o d888b      "888"  `8.      .8'  
//                                               `"      "'   
                                                           
                                                                                                           

// START GAME
            start: function(){



//            oooo                              o8o                     
//            `888                              `"'                     
// oo.ooooo.   888 .oo.   oooo    ooo  .oooo.o oooo   .ooooo.   .oooo.o 
//  888' `88b  888P"Y88b   `88.  .8'  d88(  "8 `888  d88' `"Y8 d88(  "8 
//  888   888  888   888    `88..8'   `"Y88b.   888  888       `"Y88b.  
//  888   888  888   888     `888'    o.  )88b  888  888   .o8 o.  )88b 
//  888bod8P' o888o o888o     .8'     8""888P' o888o `Y8bod8P' 8""888P' 
//  888                   .o..P'                                        
// o888o                  `Y8P'                                         
                                                                     

// ADD P2 PHYSICS TO jelly-blue 
    // this.game.physics.p2.enable(this.sprite);

    // SET ARCADE PHYSICS TO SPRITE
                this.game.physics.arcade.enable(this.sprite);

    // BIRD SET SPRITE SIZE
                this.sprite.body.setSize(this.sprite.width - 10, this.sprite.height - 10, 0, 0);

    // BIRD SET GRAVITY
                this.sprite.body.gravity.y = 2000;

    // CREATE NEW TUBES
                this.newtubes.timer.start();
    // ???
                this.started = true;    

//  This boolean controls if the player should collide with the world bounds or not
// ERROR - Uncaught TypeError: Cannot set property 'collideWorldBounds' of null
    // this.sprite.body.collideWorldBounds = true;
    // this.sprite2.body.collideWorldBounds = true;
    // this.sprite3.body.collideWorldBounds = true;
    // this.sprite4.body.collideWorldBounds = true;
    // this.sprite5.body.collideWorldBounds = true;
    // this.sprite6.body.collideWorldBounds = true;

            },


                                                      
                                                      
//  .oooooooo  .oooo.   ooo. .oo.  .oo.    .ooooo.       
// 888' `88b  `P  )88b  `888P"Y88bP"Y88b  d88' `88b      
// 888   888   .oP"888   888   888   888  888ooo888      
// `88bod8P'  d8(  888   888   888   888  888    .o      
// `8oooooo.  `Y888""8o o888o o888o o888o `Y8bod8P'      
// d"     YD                                             
// "Y88888P'                                                                                               
//                                            .o      o.   
//                                           .8'      `8.  
//  .ooooo.  oooo    ooo  .ooooo.  oooo d8b .8'        `8. 
// d88' `88b  `88.  .8'  d88' `88b `888""8P 88          88 
// 888   888   `88..8'   888ooo888  888     88          88 
// 888   888    `888'    888    .o  888     `8.        .8' 
// `Y8bod8P'     `8'     `Y8bod8P' d888b     `8.      .8'  
//                                            `"      "'   
                                                        
                                                                   
                                                      
                                                                                                         
    // GAME OVER
            gameOver: function(){
                var self = this;
    // STOP TUBES TIMER
                this.newtubes.timer.stop(false);
                
    // CAMERA FUNCTION???
                this.game.add.tween(this.game.camera).to({ x: -10 }, 40, Phaser.Easing.Sinusoidal.InOut, true, 0, 5, true);

    // STOP BIRD ANIMATION
                this.sprite.animations.stop();

    // ADD GAME FLASH GRAPHICS???
                this.flash = this.game.add.graphics(-10, 0);
                this.flash.beginFill(0xffffff, 1);
                this.flash.drawRect(0, 0, this.game.width + 20, this.game.height);
                this.flash.endFill();
                this.flash.alpha = 0.5;
                this.game.add.tween(this.flash).to({ alpha: 0 }, 50, Phaser.Easing.Cubic.In, true);

    // SET DEAD TO TRUE
                this.dead = true;
                
    // TIMER TO RESTART???
                var self = this;
                setTimeout(function(){
                    self.canRestart = true;
                }, Phaser.Timer.SECOND * 0.5);
                
                this.tubes.forEachAlive(function(tube){
                    tube.body.velocity.x = 0;
                }, this);

                this.sensors.forEachAlive(function(sensor){
                    sensor.body.velocity.x = 0;
                }, this);
    

//              o8o   .o8                              .             
//              `"'  "888                            .o8             
// oooo    ooo oooo   888oooo.  oooo d8b  .oooo.   .o888oo  .ooooo.  
//  `88.  .8'  `888   d88' `88b `888""8P `P  )88b    888   d88' `88b 
//   `88..8'    888   888   888  888      .oP"888    888   888ooo888 
//    `888'     888   888   888  888     d8(  888    888 . 888    .o 
//     `8'     o888o  `Y8bod8P' d888b    `Y888""8o   "888" `Y8bod8P' 
                                                                  
                                                                  
                try {
                    $cordovaVibration.vibrate(300);
                } catch (error) {
                    console.log(error);
                }
                
                this.hitAudio.play();
                $timeout(function () {
                    self.dieAudio.play();
                }, 300);

            },


//     o8o                                            .o      o.   
//     `"'                                           .8'      `8.  
//    oooo oooo  oooo  ooo. .oo.  .oo.   oo.ooooo.  .8'        `8. 
//    `888 `888  `888  `888P"Y88bP"Y88b   888' `88b 88          88 
//     888  888   888   888   888   888   888   888 88          88 
//     888  888   888   888   888   888   888   888 `8.        .8' 
//     888  `V88V"V8P' o888o o888o o888o  888bod8P'  `8.      .8'  
//     888                                888         `"      "'   
// .o. 88P                               o888o                     
// `Y888P             

//              .                          .     .o      o.   
//            .o8                        .o8    .8'      `8.  
//  .oooo.o .o888oo  .oooo.   oooo d8b .o888oo .8'        `8. 
// d88(  "8   888   `P  )88b  `888""8P   888   88          88 
// `"Y88b.    888    .oP"888   888       888   88          88 
// o.  )88b   888 . d8(  888   888       888 . `8.        .8' 
// 8""888P'   "888" `Y888""8o d888b      "888"  `8.      .8'  
//                                               `"      "'   
                                                           
                                                           
    // JUMP
            jump: function(){

    // IF BIRD !DEAD
                if(!this.dead) {
    // RUN START FUNCTION
                    this.start();
                }
    // IF BIRD !DEAD AND CANJUMP
                if(!this.dead && this.canJump) {

    // PLAY BIRD ANIMATION FLY
                    this.sprite.animations.play('fly');
                    this.spriteInJump = true;

    // BIRD VELOCITY
                    this.sprite.body.velocity.y = -550;

    // PLAY WING AUDIO
                    this.wingAudio.play();
                }

    // IF DEAD, RESTART
                if(this.dead && this.canRestart) {
                    this.game.state.start(this.game.state.current);
                }
   


            },
            update: function(){

                this.game.physics.arcade.collide(this.sprite, this.ground);
                
                if(!this.started) return;
                
                this.updateAngle();
                
                if(this.dead) return;
                
                this.game.physics.arcade.overlap(this.sprite, this.tubes, this.gameOver, null, this); 
                this.game.physics.arcade.overlap(this.sprite, this.sensors, this.incrementScore, null, this);               
                this.ground.tilePosition.x -= 2;
                
                if(this.sprite.body.touching.down){
                    this.gameOver();
                }

            },




            updateAngle: function(){

                if(this.sprite.body.touching.down) return;
                
                if(this.spriteInJump){
                    if(this.sprite.angle > -30){
                        this.sprite.angle -= 10;
                    }else{
                        this.spriteInJump = false;
                    }
                }else if(this.sprite.angle < 0){
                    this.sprite.angle += 1;
                }else if(this.sprite.angle < 45){
                    this.sprite.animations.stop();
                    this.sprite.angle += 2;
                }else if(this.sprite.angle < 90){
                    this.sprite.angle += 4;
                }   
            
            },



    // RESIZE - WHEN???
            resize: function(){

                if(this.sprite){
                    this.sprite.x = this.game.world.centerX/2;
                }


                if(this.scoreText){
                    this.scoreText.y = this.game.world.centerY/3;
                    this.scoreText.x = this.game.world.centerX;
                }


                if (this.ground) {
                    this.ground.width = this.game.width + 20;
                }                
 
            },




            render: function(){

                if(!this.isDebugging) return;
                
                this.game.debug.text('Debugging', 10, 30, 'white', '20px "Sigmar One"');
                this.game.debug.body(this.sprite);
                this.game.debug.body(this.ground, 'rgba(255, 255, 0, 0.5)');
                this.game.debug.geom(new Phaser.Point(this.sprite.x, this.sprite.y), '#FFFF00');
                this.tubes && this.tubes.forEachAlive(function(tube){
                    this.game.debug.body(tube, 'rgba(0, 0, 255, 0.5)');
                }, this); 
                this.sensors && this.sensors.forEachAlive(function(sensor){
                    this.game.debug.body(sensor, 'rgba(0, 255, 0, 0.5)');
                }, this);
 
            },




            newTube: function(){

                var randomPosition = this.game.rnd.integerInRange(120, this.game.height - this.ground.height - 100);
                
                var tube = this.game.cache.getFrame('tube');
                
                var tube1 = this.tubes.getFirstDead();
                tube1.reset(this.game.width + tube.width/2, randomPosition - 100);
                tube1.anchor.setTo(0.5, 1);
                tube1.scale.set(1.4);
                tube1.body.velocity.x = -180;
                tube1.body.immovable = true;
                tube1.checkWorldBounds = true;
                tube1.outOfBoundsKill = true;
                
                var tube2 = this.tubes.getFirstDead();
                tube2.reset(this.game.width + tube.width/2, randomPosition + 100 + tube.height/2);
                tube2.anchor.setTo(0.5, 0.5);
                tube2.scale.setTo(-1.4, -1.4);
                tube2.body.velocity.x = -180;
                tube2.body.immovable = true;
                tube2.checkWorldBounds = true;
                tube2.outOfBoundsKill = true;
                
                var sensor = this.sensors.create(this.game.width + tube.width, 0);
                sensor.body.setSize(40, this.game.height);
                sensor.body.velocity.x = -180;
                sensor.body.immovable = true;
                sensor.alpha = 0;

            },

    // INCREMENT SCORE
            incrementScore: function(bird, sensor){
                sensor.kill();
                this.totalScore++;
                this.scoreText.setText(this.totalScore);
                this.pointAudio.play();
            },

    // TOGGLE PAUSE - USE TOGGLE DEBUG AS AN EXAMPLE
            togglePause: function (isPaused) {
                // this.game.pause.reset();
                // this.isPaused = isPaused;
            },

            toggleDebug: function (isDebugging) {
                this.game.debug.reset();
                this.isDebugging = isDebugging;
            }
        };
        
        return {
            getState: function (scope) {
                $scope = scope;
                return game;
            }
        };
    }
})(Phaser);