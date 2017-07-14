/**
 * Level state.
 */
function Level() {
	Phaser.State.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
var flippedRight, flippedLeft = false; //used to fix player flipping
var responseCounter = 0;
var romanResponseTime = 100; //used to fix enemy flickering / flipping
var arrowCounter = 0;
var arrowResponseTime = 200; //used to reset arrow
var scrollSpeed = 0;
const romanSpeed = -150; //modified to 150
const ROMANRADIUS = 300;
Level.prototype = proto;
Level.prototype.constructor = Level;
var holdSword = true;
var shooting = false;
var gameStarted = false;

Level.prototype.preload = function() {
	// TODO: generated method.
	this.load.pack("level", "assets/assets-pack.json");
};

Level.prototype.create = function() {
	// TODO: generated method.
	
	this.scene = new Scene1(this.game);
	
	// set the physics properties of the collision sprites
	   this.scene.fCollisionLayer.setAll("body.immovable", true);
	   this.scene.fCollisionLayer.setAll("body.allowGravity", false);
	   // hide all objects of the collision layer
	   this.scene.fCollisionLayer.setAll("renderable", false);
	   //adding base scroll speed to platforms
	   this.scene.fCollisionLayer.setAll("body.velocity.x", scrollSpeed);
	   
	   //initializing arrow porperties
	   this.scene.fArrows.setAll("renderable", false);
	   this.scene.fArrows.setAll("body.immovable", true);
	   this.scene.fArrows.setAll("body.allowGravity", false);
	   
	   this.scene.fPlat.setAll("body.immovable", true);
	   this.scene.fPlat.setAll("body.allowGravity", false);
	   this.scene.fPlat.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL000.setAll("body.immovable", true);
	   this.scene.fPL000.setAll("body.allowGravity", false);
	   this.scene.fPL000.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL001.setAll("body.immovable", true);
	   this.scene.fPL001.setAll("body.allowGravity", false);
	   this.scene.fPL001.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fGR000.setAll("body.immovable", true);
	   this.scene.fGR000.setAll("body.allowGravity", false);
	   this.scene.fGR000.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fGR001.setAll("body.immovable", true);
	   this.scene.fGR001.setAll("body.allowGravity", false);
	   this.scene.fGR001.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fOB000.setAll("body.immovable", true);
	   this.scene.fOB000.setAll("body.allowGravity", false);
	   this.scene.fOB000.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fGR002.setAll("body.immovable", true);
	   this.scene.fGR002.setAll("body.allowGravity", false);
	   this.scene.fGR002.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fOB001.setAll("body.immovable", true);
	   this.scene.fOB001.setAll("body.allowGravity", false);
	   this.scene.fOB001.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fHazards.setAll("body.immovable", true);
	   this.scene.fHazards.setAll("body.allowGravity", false);
	   this.scene.fHazards.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fH000.setAll("body.immovable", true);
	   this.scene.fH000.setAll("body.allowGravity", false);
	   this.scene.fH000.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fH001.setAll("body.immovable", true);
	   this.scene.fH001.setAll("body.allowGravity", false);
	   this.scene.fH001.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fH002.setAll("body.immovable", true);
	   this.scene.fH002.setAll("body.allowGravity", false);
	   this.scene.fH002.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fH003.setAll("body.immovable", true);
	   this.scene.fH003.setAll("body.allowGravity", false);
	   this.scene.fH003.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fW001.setAll("body.immovable", true);
	   this.scene.fW001.setAll("body.allowGravity", false);
	   this.scene.fW001.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fW002.setAll("body.immovable", true);
	   this.scene.fW002.setAll("body.allowGravity", false);
	   this.scene.fW002.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fW003.setAll("body.immovable", true);
	   this.scene.fW003.setAll("body.allowGravity", false);
	   this.scene.fW003.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fW004.setAll("body.immovable", true);
	   this.scene.fW004.setAll("body.allowGravity", false);
	   this.scene.fW004.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL002.setAll("body.immovable", true);
	   this.scene.fPL002.setAll("body.allowGravity", false);
	   this.scene.fPL002.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL003.setAll("body.immovable", true);
	   this.scene.fPL003.setAll("body.allowGravity", false);
	   this.scene.fPL003.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fGR003.setAll("body.immovable", true);
	   this.scene.fGR003.setAll("body.allowGravity", false);
	   this.scene.fGR003.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fGR004.setAll("body.immovable", true);
	   this.scene.fGR004.setAll("body.allowGravity", false);
	   this.scene.fGR004.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fST000.setAll("body.immovable", true);
	   this.scene.fST000.setAll("body.allowGravity", false);
	   this.scene.fST000.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fGroundBase.setAll("body.immovable", true);
	   this.scene.fGroundBase.setAll("body.allowGravity", false);
	   this.scene.fGroundBase.setAll("body.velocity.x", scrollSpeed);
	   
	   //death screen
	   this.scene.fEndScreen.setAll("renderable", false);
	   
	   //Commented the next two lines out, since they'll be updated below
	   //this.scene.fRoman.body.velocity.x = romanSpeed;
	   //this.scene.fRoman.scale.x = -1;
	   
	   this.cursors = this.input.keyboard.createCursorKeys();
};

Level.prototype.init = function () {
	 
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 1500;
};

//collision handlers
Level.prototype.spikeColl = function(player, hazard) {
    // when the player overlaps with a hazard
    player.kill();
    this.scene.fEndScreen.setAll("renderable", true);
};

Level.prototype.romanColl = function(player, roman) {
    // when the player overlaps with a roman
	if (this.cursors.ctrl.isDown && holdSword == true){
		roman.kill();
	}
	else {
		player.kill();
		this.scene.fEndScreen.setAll("renderable", true);
	}
};

Level.prototype.arrowColl = function(arrow, roman) {
	//when arrow overlaps with roman
	roman.kill();
		this.scene.fArrows.setAll("renderable", false);
	   this.scene.fArrows.setAll("body.immovable", true);
	   this.scene.fArrows.setAll("body.allowGravity", false);
	shooting = false;
};

Level.prototype.arrowCollWorld = function(arrow) {
	//when arrow overlaps with roman
	
		this.scene.fArrows.setAll("renderable", false);
	   this.scene.fArrows.setAll("body.immovable", true);
	   this.scene.fArrows.setAll("body.allowGravity", false);
	shooting = false;
};

Level.prototype.arrowCollGround = function(arrow, plat) {
	//when arrow hits the ground
		this.scene.fArrows.setAll("renderable", false);
	   this.scene.fArrow.body.immovable = true;
	   this.scene.fArrow.body.allowGravity = false;
	   this.scene.fArrow.body.velocity.x = scrollSpeed;
	shooting = false;
};

Level.prototype.shootArrow = function()
{
		shooting = true;
		this.scene.fArrow.body.position.x = this.scene.fPlayer.body.position.x;
		this.scene.fArrow.body.position.y = this.scene.fPlayer.body.position.y;
		this.scene.fArrows.setAll("renderable", true);
	   this.scene.fArrows.setAll("body.immovable", false);
	   this.scene.fArrows.setAll("body.allowGravity", true);
	   //shoot in the right direction
	   if (this.scene.fPlayer.scale.x == 1)
		   {
		   this.scene.fArrow.scale.x == 1;
	   this.scene.fArrow.body.velocity.x = 700;
		   }
	   else
		   {
		   this.scene.fArrow.scale.x == -1;
		   this.scene.fArrow.body.velocity.x = -700;
		   }
	  this.scene.fArrow.body.velocity.y = -500;	
	};
	
	Level.prototype.scrollUpdate = function(speed)
	{
		this.scene.fCollisionLayer.setAll("body.velocity.x", speed);
		this.scene.fPlat.setAll("body.velocity.x", speed);
		this.scene.fPL000.setAll("body.velocity.x",speed);
		 this.scene.fPL001.setAll("body.velocity.x",speed);
		 this.scene.fGR000.setAll("body.velocity.x", speed);
		 this.scene.fGR001.setAll("body.velocity.x", speed);
		 this.scene.fOB000.setAll("body.velocity.x", speed);
		 this.scene.fHazards.setAll("body.velocity.x", speed);
		 this.scene.fH000.setAll("body.velocity.x", speed);
		 this.scene.fH001.setAll("body.velocity.x", speed);
		 this.scene.fH002.setAll("body.velocity.x", speed);
		 this.scene.fH003.setAll("body.velocity.x", speed);
		 this.scene.fW001.setAll("body.velocity.x", speed);
		 this.scene.fW002.setAll("body.velocity.x", speed);
		 this.scene.fW003.setAll("body.velocity.x", speed);
		 this.scene.fW004.setAll("body.velocity.x", speed);
		 this.scene.fPL002.setAll("body.velocity.x", speed);
		 this.scene.fPL003.setAll("body.velocity.x", speed);
		 this.scene.fGR003.setAll("body.velocity.x", speed);
		 this.scene.fGR004.setAll("body.velocity.x", speed);
		 this.scene.fST000.setAll("body.velocity.x", speed);
		 this.scene.fGroundBase.setAll("body.velocity.x", speed);
	};

Level.prototype.update = function() {
	// TODO: generated method.
	
	//start screen
	if (this.cursors.enter.isDown)
		{
		this.scene.fStartScreen.setAll("renderable", false);
		this.scrollUpdate(-300);
		gameStarted = true;
		}
	
		
		
	
	// collide the player with the platforms
    this.physics.arcade.collide(this.scene.fPlayer, this.scene.fCollisionLayer);
   //collide the roman with the platforms
    this.physics.arcade.collide(this.scene.fRoman, this.scene.fCollisionLayer);
  //collide the arrow with the platforms
    //this.physics.arcade.collide(this.scene.fArrow, this.scene.fCollisionLayer);
    
    //this.scene.fPlayer.body.position.x - this.scene.fRoman.body.position.x <= ROMANRADIUS && this.scene.fPlayer.body.position.x - this.scene.fRoman.body.position.x <= -ROMANRADIUS
    // Direction Roman is facing and chasing Url:
    if (gameStarted)
    	{
    if (responseCounter == romanResponseTime)
	{
	responseCounter = 0;
    if ((this.scene.fPlayer.body.position.x -100) <= this.scene.fRoman.body.position.x){
		this.scene.fRoman.body.velocity.x = romanSpeed;
		this.scene.fRoman.scale.setTo(-1.0,1.0); // Checks every frame.
    }else{
    	this.scene.fRoman.body.velocity.x = -romanSpeed;
    	this.scene.fRoman.scale.setTo(1.0,1.0);  // Checks every frame.
    }
	}
    else
    	{
    	responseCounter++;
    	}
    	}
    
 //player movement
    if (this.cursors.left.isDown) {
        // move to the left
        this.scene.fPlayer.body.velocity.x = -100;
        
    } else if (this.cursors.right.isDown) {
        // move to the right
        this.scene.fPlayer.body.velocity.x = 350;
    } else {
        // dont move in the horizontal
        this.scene.fPlayer.body.velocity.x = 0;
    }
    //toggle weapon
    if (this.cursors.shift.isDown)
    	{
    		if (holdSword)
    			{
    			holdSword = false;
    			}
    		else
    			{
    			holdSword = true;
    			}
    	}
   //player attack
    if (this.cursors.ctrl.isDown && holdSword == true){
    	this.scene.fPlayer.play("attack");
    }
    	else if (this.cursors.ctrl.isDown && holdSword == false)
    		{
    	if (shooting == false)
    		{
    			this.shootArrow();
    		}
    	}
    	
    
 
    // a flag to know if the player is (down) touching the platforms
    var touching = this.scene.fPlayer.body.touching.down;
 
    if (touching && this.cursors.alt.isDown) {
        // jump if the player is on top of a platform and the alt key is pressed
        this.scene.fPlayer.body.velocity.y = -800;
    }
    
    //animations
    if (touching && !this.cursors.ctrl.isDown) {
        if (this.scene.fPlayer.body.velocity.x == 0) {
            // if it is not moving horizontally play the idle
            this.scene.fPlayer.play("idle");
        } else {
            // if it is moving play the walk
            this.scene.fPlayer.play("walk");
        }
        
    }
 //update the facing of the player
    if (this.cursors.left.isDown) {
        // face left
        this.scene.fPlayer.scale.x = -1;
        if (flippedLeft == false)
        	{
        this.scene.fPlayer.position.x +=100;
        flippedLeft = true;
        flippedRight = false;
        	}
        	
    } else if (this.cursors.right.isDown) {
       // face right
       this.scene.fPlayer.scale.x = 1;
       if (flippedRight == false)
    	   {
       this.scene.fPlayer.position.x -=100;
       flippedLeft = false;
       flippedRight = true;
    	   }
    }
    
    //reset arrow if no collision
    if (arrowCounter == arrowResponseTime && shooting == true)
    	{
    		arrowCounter = 0;
    		this.scene.fArrows.setAll("renderable", false);
    		   this.scene.fArrows.setAll("body.immovable", true);
    		   this.scene.fArrows.setAll("body.allowGravity", false);
    		shooting = false;
    		this.scene.fArrow.body.position.x = this.scene.fPlayer.body.position.x;
    		this.scene.fArrow.body.position.y = this.scene.fPlayer.body.position.y;
    	}
    else if (shooting)
    	{
    	arrowCounter++;
    	}
    
    //colission with hazard tiles
    this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fH000, this.spikeColl, null, this);
    this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fH001, this.spikeColl, null, this);
    this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fH002, this.spikeColl, null, this);
    this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fH003, this.spikeColl, null, this);
  //colission with roman
    this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fRoman, this.romanColl, null, this);
    //arrow collision with enemy
    this.physics.arcade.overlap(this.scene.fArrow, this.scene.fRoman, this.arrowColl, null, this);
  //arrow collision with ground
    this.physics.arcade.overlap(this.scene.fArrow, this.scene.fCollisionLayer, this.arrowCollGround, null, this);
    //arrow collision with world bounds
    this.physics.arcade.overlap(this.scene.fArrow, this.scene.WorldBounds, this.arrowCollWorld, null, this);
    
    };