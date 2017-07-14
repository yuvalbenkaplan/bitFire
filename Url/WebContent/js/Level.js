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
const scrollSpeed = -300;
const romanSpeed = -150; //modified to 150
Level.prototype = proto;
Level.prototype.constructor = Level;

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
	   
	   this.scene.fH004.setAll("body.immovable", true);
	   this.scene.fH004.setAll("body.allowGravity", false);
	   this.scene.fH004.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fH005.setAll("body.immovable", true);
	   this.scene.fH005.setAll("body.allowGravity", false);
	   this.scene.fH005.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fH006.setAll("body.immovable", true);
	   this.scene.fH006.setAll("body.allowGravity", false);
	   this.scene.fH006.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fH007.setAll("body.immovable", true);
	   this.scene.fH007.setAll("body.allowGravity", false);
	   this.scene.fH007.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fH008.setAll("body.immovable", true);
	   this.scene.fH008.setAll("body.allowGravity", false);
	   this.scene.fH008.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fH009.setAll("body.immovable", true);
	   this.scene.fH009.setAll("body.allowGravity", false);
	   this.scene.fH009.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fH00A.setAll("body.immovable", true);
	   this.scene.fH00A.setAll("body.allowGravity", false);
	   this.scene.fH00A.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fH00B.setAll("body.immovable", true);
	   this.scene.fH00B.setAll("body.allowGravity", false);
	   this.scene.fH00B.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fFIREWALL.setAll("body.immovable", true);
	   this.scene.fFIREWALL.setAll("body.allowGravity", false);
	   this.scene.fFIREWALL.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fPlat.setAll("body.immovable", true);
	   this.scene.fPlat.setAll("body.allowGravity", false);
	   this.scene.fPlat.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fGR000.setAll("body.immovable", true);
	   this.scene.fGR000.setAll("body.allowGravity", false);
	   this.scene.fGR000.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fGR001.setAll("body.immovable", true);
	   this.scene.fGR001.setAll("body.allowGravity", false);
	   this.scene.fGR001.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fGR002.setAll("body.immovable", true);
	   this.scene.fGR002.setAll("body.allowGravity", false);
	   this.scene.fGR002.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fGR003.setAll("body.immovable", true);
	   this.scene.fGR003.setAll("body.allowGravity", false);
	   this.scene.fGR003.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fGR004.setAll("body.immovable", true);
	   this.scene.fGR004.setAll("body.allowGravity", false);
	   this.scene.fGR004.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fGR005.setAll("body.immovable", true);
	   this.scene.fGR005.setAll("body.allowGravity", false);
	   this.scene.fGR005.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fGR006.setAll("body.immovable", true);
	   this.scene.fGR006.setAll("body.allowGravity", false);
	   this.scene.fGR006.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fGR007.setAll("body.immovable", true);
	   this.scene.fGR007.setAll("body.allowGravity", false);
	   this.scene.fGR007.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fGR008.setAll("body.immovable", true);
	   this.scene.fGR008.setAll("body.allowGravity", false);
	   this.scene.fGR008.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fGR009.setAll("body.immovable", true);
	   this.scene.fGR009.setAll("body.allowGravity", false);
	   this.scene.fGR009.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fOB000.setAll("body.immovable", true);
	   this.scene.fOB000.setAll("body.allowGravity", false);
	   this.scene.fOB000.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fOB001.setAll("body.immovable", true);
	   this.scene.fOB001.setAll("body.allowGravity", false);
	   this.scene.fOB001.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fOB002.setAll("body.immovable", true);
	   this.scene.fOB002.setAll("body.allowGravity", false);
	   this.scene.fOB002.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fOB003.setAll("body.immovable", true);
	   this.scene.fOB003.setAll("body.allowGravity", false);
	   this.scene.fOB003.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fOB004.setAll("body.immovable", true);
	   this.scene.fOB004.setAll("body.allowGravity", false);
	   this.scene.fOB004.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fOB005.setAll("body.immovable", true);
	   this.scene.fOB005.setAll("body.allowGravity", false);
	   this.scene.fOB005.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fOB006.setAll("body.immovable", true);
	   this.scene.fOB006.setAll("body.allowGravity", false);
	   this.scene.fOB006.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fOB007.setAll("body.immovable", true);
	   this.scene.fOB007.setAll("body.allowGravity", false);
	   this.scene.fOB007.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fOB008.setAll("body.immovable", true);
	   this.scene.fOB008.setAll("body.allowGravity", false);
	   this.scene.fOB008.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fOB009.setAll("body.immovable", true);
	   this.scene.fOB009.setAll("body.allowGravity", false);
	   this.scene.fOB009.setAll("body.velocity.x", scrollSpeed);

	   //OB00A is just an empty group for now
	   this.scene.fOB00A.setAll("body.immovable", true);
	   this.scene.fOB00A.setAll("body.allowGravity", false);
	   this.scene.fOB00A.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL000.setAll("body.immovable", true);
	   this.scene.fPL000.setAll("body.allowGravity", false);
	   this.scene.fPL000.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL001.setAll("body.immovable", true);
	   this.scene.fPL001.setAll("body.allowGravity", false);
	   this.scene.fPL001.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL002.setAll("body.immovable", true);
	   this.scene.fPL002.setAll("body.allowGravity", false);
	   this.scene.fPL002.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL003.setAll("body.immovable", true);
	   this.scene.fPL003.setAll("body.allowGravity", false);
	   this.scene.fPL003.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL004.setAll("body.immovable", true);
	   this.scene.fPL004.setAll("body.allowGravity", false);
	   this.scene.fPL004.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL005.setAll("body.immovable", true);
	   this.scene.fPL005.setAll("body.allowGravity", false);
	   this.scene.fPL005.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fPL006.setAll("body.immovable", true);
	   this.scene.fPL006.setAll("body.allowGravity", false);
	   this.scene.fPL006.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL007.setAll("body.immovable", true);
	   this.scene.fPL007.setAll("body.allowGravity", false);
	   this.scene.fPL007.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fPL008.setAll("body.immovable", true);
	   this.scene.fPL008.setAll("body.allowGravity", false);
	   this.scene.fPL008.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fPL009.setAll("body.immovable", true);
	   this.scene.fPL009.setAll("body.allowGravity", false);
	   this.scene.fPL009.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL00A.setAll("body.immovable", true);
	   this.scene.fPL00A.setAll("body.allowGravity", false);
	   this.scene.fPL00A.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL00B.setAll("body.immovable", true);
	   this.scene.fPL00B.setAll("body.allowGravity", false);
	   this.scene.fPL00B.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fPL00C.setAll("body.immovable", true);
	   this.scene.fPL00C.setAll("body.allowGravity", false);
	   this.scene.fPL00C.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fPL00D.setAll("body.immovable", true);
	   this.scene.fPL00D.setAll("body.allowGravity", false);
	   this.scene.fPL00D.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL00E.setAll("body.immovable", true);
	   this.scene.fPL00E.setAll("body.allowGravity", false);
	   this.scene.fPL00E.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fPL00F.setAll("body.immovable", true);
	   this.scene.fPL00F.setAll("body.allowGravity", false);
	   this.scene.fPL00F.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fPL010.setAll("body.immovable", true);
	   this.scene.fPL010.setAll("body.allowGravity", false);
	   this.scene.fPL010.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fPL011.setAll("body.immovable", true);
	   this.scene.fPL011.setAll("body.allowGravity", false);
	   this.scene.fPL011.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fPL012.setAll("body.immovable", true);
	   this.scene.fPL012.setAll("body.allowGravity", false);
	   this.scene.fPL012.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fPL013.setAll("body.immovable", true);
	   this.scene.fPL013.setAll("body.allowGravity", false);
	   this.scene.fPL013.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fPL014.setAll("body.immovable", true);
	   this.scene.fPL014.setAll("body.allowGravity", false);
	   this.scene.fPL014.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fST000.setAll("body.immovable", true);
	   this.scene.fST000.setAll("body.allowGravity", false);
	   this.scene.fST000.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fST001.setAll("body.immovable", true);
	   this.scene.fST001.setAll("body.allowGravity", false);
	   this.scene.fST001.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fST002.setAll("body.immovable", true);
	   this.scene.fST002.setAll("body.allowGravity", false);
	   this.scene.fST002.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fWater.setAll("body.immovable", true);
	   this.scene.fWater.setAll("body.allowGravity", false);
	   this.scene.fWater.setAll("body.velocity.x", scrollSpeed);
	   
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

	   this.scene.fW005.setAll("body.immovable", true);
	   this.scene.fW005.setAll("body.allowGravity", false);
	   this.scene.fW005.setAll("body.velocity.x", scrollSpeed);

	   this.scene.fW006.setAll("body.immovable", true);
	   this.scene.fW006.setAll("body.allowGravity", false);
	   this.scene.fW006.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fGroundBase.setAll("body.immovable", true);
	   this.scene.fGroundBase.setAll("body.allowGravity", false);
	   this.scene.fGroundBase.setAll("body.velocity.x", scrollSpeed);
	   
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
};

Level.prototype.romanColl = function(player, roman) {
    // when the player overlaps with a roman
	if (this.cursors.ctrl.isDown){
		roman.kill();
	}
	else {
		player.kill();
	}
};

Level.prototype.update = function() {
	// TODO: generated method.
	
	
	// collide the player with the platforms
    this.physics.arcade.collide(this.scene.fPlayer, this.scene.fCollisionLayer);
   //collide the roman with the platforms
    this.physics.arcade.collide(this.scene.fRoman, this.scene.fCollisionLayer);
  //collide the player with the roman
  //this.physics.arcade.collide(this.scene.fPlayer, this.scene.fRoman);
    
    
    // Direction Roman is facing and chasing Url:
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
    
    // a flag to know if the player is (down) touching the platforms
    var touching = this.scene.fPlayer.body.touching.down;
    
 //player movement
    if (this.cursors.left.isDown) {
        // move to the left
        this.scene.fPlayer.body.velocity.x = -100;
        
    } else if (touching && this.cursors.right.isDown) {
        // move to the right
        this.scene.fPlayer.body.velocity.x = 350;
    } else if (!touching && this.cursors.right.isDown) {
        // move to the right
        this.scene.fPlayer.body.velocity.x = 350 + scrollSpeed;
    } else {
        // dont move in the horizontal
        this.scene.fPlayer.body.velocity.x = 0;
    }
   //player attack
    if (this.cursors.ctrl.isDown){
    	this.scene.fPlayer.play("attack");
    }
 
    if (touching && this.cursors.up.isDown) {
        // jump if the player is on top of a platform and the up key is pressed
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
    
    //colission with hazard tiles
    this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fSpike1, this.spikeColl, null, this);
  //colission with roman
    this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fRoman, this.romanColl, null, this);
    
    };