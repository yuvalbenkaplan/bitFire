/**
 * Level state.
 */
function Level() {
	Phaser.State.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
const scrollSpeed = -200;
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
	   this.scene.fPlat.setAll("body.immovable", true);
	   this.scene.fPlat.setAll("body.allowGravity", false);
	   this.scene.fPlat.setAll("body.velocity.x", scrollSpeed);
	   
	   this.scene.fHazards.setAll("body.immovable", true);
	   this.scene.fHazards.setAll("body.allowGravity", false);
	   this.scene.fHazards.setAll("body.velocity.x", scrollSpeed);
	   
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
    this.physics.arcade.gravity.y = 800;
};

//collision handlers
Level.prototype.spikeColl = function(player, hazard) {
    // when the player overlaps with a hazard
    player.kill();
};

Level.prototype.romanColl = function(player, roman) {
    // when the player overlaps with a hazard
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
    if (this.scene.fPlayer.body.position.x <= this.scene.fRoman.body.position.x){
		this.scene.fRoman.body.velocity.x = romanSpeed;
		this.scene.fRoman.scale.setTo(-1.0,1.0); // Checks every frame.
    }else{
    	this.scene.fRoman.body.velocity.x = -romanSpeed;
    	this.scene.fRoman.scale.setTo(1.0,1.0);  // Checks every frame.
    }
    
 //player movement
    if (this.cursors.left.isDown) {
        // move to the left
        this.scene.fPlayer.body.velocity.x = -100;
    } else if (this.cursors.right.isDown) {
        // move to the right
        this.scene.fPlayer.body.velocity.x = 300;
    } else {
        // dont move in the horizontal
        this.scene.fPlayer.body.velocity.x = 0;
    }
   //player attack
    if (this.cursors.ctrl.isDown){
    	this.scene.fPlayer.play("attack");
    }
 
    // a flag to know if the player is (down) touching the platforms
    var touching = this.scene.fPlayer.body.touching.down;
 
    if (touching && this.cursors.up.isDown) {
        // jump if the player is on top of a platform and the up key is pressed
        this.scene.fPlayer.body.velocity.y = -600;
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
    } else if (this.cursors.right.isDown) {
       // face right
       this.scene.fPlayer.scale.x = 1;
    }
    
    //colission with hazard tiles
    this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fSpike1, this.spikeColl, null, this);
  //colission with roman
    this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fRoman, this.romanColl, null, this);
    
    };