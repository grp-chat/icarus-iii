class Player {
    constructor(config) {
        this.x = config.x;
        this.y = config.y;
        this.lable = config.lable;
        this.id = config.id || "GS";
        this.startingSteps = 0;
        //this.maxSteps = config.maxSteps || 500;
        this.steps = config.steps || this.startingSteps;
        this.area = config.area || "area1";
        this.color = config.color || "grey";

        this.invisibleColor = "rgba(0,0,0,0.2)";
        this.invisibilitySteps = 0;
        this.invisibilityStepsDefault = 15;

        this.originColor = this.color;
        this.originX = config.x;
        this.originY = config.y;
        this.originArea = config.area;
        this.inventory = "";
        this.maxInventory = 10;
        
        this.team = 0;

        this.canUsePower = true;
        this.invisible = typeof config.invisible === "undefined" ? false : config.invisible;

        //this.obtainedPowers = [{id: 1, power: this.invisibility}];
        //this.obtainedPowers = [{id: 1, powerName: "invisibility", duration: 10000, offPowerName: "invisibilityOff"}];
        this.obtainedPowers = [];

        
    
    }

    // callPower(num) {
    //     if(this.obtainedPowers[num] === undefined) return;
    //     this.power = this.obtainedPowers[num].power;
    //     this.obtainedPowers.splice(num, 1);
    //     //console.log(this.obtainedPowers)
        
    //     this.power();
    // }
    
    invisibility() {
        
        this.canUsePower = false;
        this.invisible = true;
        this.invisibilitySteps = this.invisibilityStepsDefault;
        
    }
    invisibilityOff(num) {
        setTimeout(() => {
            this.invisible = false;
            this.canUsePower = true;
        }, this.obtainedPowers[num].duration);

        
        this.obtainedPowers.splice(num, 1); 
        
    }
    invisibilityStepCheck() {
        if (this.invisibilitySteps === 0) return;
        if (this.invisible === false) return;
        this.invisibilitySteps--;
        if (this.invisibilitySteps === 0) {
            this.invisible = false;
            this.canUsePower = true;
        }
        
    }

}

module.exports = {
    Player,
}